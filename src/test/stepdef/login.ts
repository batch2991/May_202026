import {Given,When,Then, setDefaultTimeout} from "@cucumber/cucumber"
import { MyWorld } from "../commons/Myworld";
import { ENV} from "../utils/config";

setDefaultTimeout(40000)

Given('i am on the login page', async function (this:MyWorld) {
    await this.loginPage.openUrl(ENV.url)
});
When('i will enter valid userid and valid pwd and click login', async function (this:MyWorld) {
   await this.loginPage.login(ENV.uid,ENV.pwd)   
});

Then('i should be navigated to dashboard page', async function (this:MyWorld) {
   await this.productPage.checkHeading()  
});