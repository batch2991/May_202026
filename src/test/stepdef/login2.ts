import {When,Then} from "@cucumber/cucumber";
import { MyWorld } from "../commons/Myworld";

When('i will enter {string} and {string} and login', async function (this:MyWorld,uid:string, pwd:string) {
   await this.loginPage.login(uid,pwd) 
});

Then('i should see the error message on the application.', async function (this:MyWorld) {
   await this.loginPage.readErrormessage()
});