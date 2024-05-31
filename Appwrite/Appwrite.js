import env from '../config/development'
import { Client ,Account,ID, Avatars, Databases, Query,Storage} from 'react-native-appwrite';

const Config={
    endpoint :env.ENDPOINT,
    platform:env.PLATFORM,
    projectId:env.PROJECTID,
    databaseId:env.DATABASEID,
    usersCollectionId:env.USERSCOLLECTIONID,
    storageBucketId:env.STORAGEBUCKETID
}

const client = new Client()

client.setEndpoint(Config.endpoint)
      .setPlatform(Config.platform)
      .setProject(Config.projectId)

const account = new Account(client)
const database = new Databases(client)
const avatar = new Avatars(client)
const storage = new Storage(Client)

export const RegisterUser=async(fullname,email,password,phone)=>{
     try {
  
         const newAccount = await account.create(ID.unique(),email,password,fullname)

         if(!newAccount) throw Error

         const avatarUrl = avatar.getInitials(fullname)

         const newUser = await database.createDocument(
            Config.databaseId,
            Config.usersCollectionId,
            ID.unique(),
            {
                accountID:newAccount.$id,
                email,
                fullname,
                phone,
                avatar:avatarUrl
            }
         )
         
         return newUser
    } catch (error) {
        console.log(error);
        throw new Error (error)
    }

}

export const LoginUser=async(email,password)=>{
     try {
        const session = await account.createEmailPasswordSession(email,password)

        return session
     } catch (error) {
        console.log(error)

        throw new Error(error)
     }
}

export const GetCurrentUser=async()=>{
    try {
        const currentAccount = await account.get()
         
        if(!currentAccount) throw new Error("No Account")

        const currentUser =await database.listDocuments(
            Config.databaseId,
            Config.usersCollectionId,
            [Query.equal('accountID',currentAccount.$id)]
        )

        if(!currentUser) throw new Error("No user found")

        return currentUser.documents[0]
    } catch (error) {
        console.log(error)

        throw new Error(error)
    }
}


export const Logout=async()=>{
     try {
        const session = await account.deleteSession('current')

        return session
     } catch (error) {
        console.log(error)

        throw new Error(error)
     }
}