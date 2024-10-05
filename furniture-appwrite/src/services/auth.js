import { Account, Client, ID } from "appwrite";
import { envVARS } from "../envConfig";

class Auth {
    // VARS 
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(envVARS.appwriteURL)
        .setProject(envVARS.appwriteID);

        this.account = new Account(this.client);
    }

    async userEmailSignup(email, password, name){
        try {            
            const user = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            if(user){
              return this.userEmailLogin(email, password)               
            }
        } catch (error) {
            throw error
        }
    }

    async userEmailLogin(email, password){
        try {
            let session = await this.account.createEmailPasswordSession(email, password);
            if(session){
                return session;
            }
        } catch (error) {
            throw error;
        }
    }

    async getUser(){
        try {
            let user = await this.account.get();
            if(user){
                return user;
            }else{
                return {}
            }
        } catch (error) {
            throw error;
        }

    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new Auth();
export default authService;