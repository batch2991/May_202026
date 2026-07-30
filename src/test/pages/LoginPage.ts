import { Base } from "./Base";

export class LoginPage extends Base {
    private readonly txtusername: string = "Username"
    private readonly txtpassword: string = "Password"
    private readonly btnlogin: string = "input#login-button"

    async login(userid: string, passwd: string) {
        await this.page.getByPlaceholder(this.txtusername).fill(userid)
        await this.page.getByPlaceholder(this.txtpassword).fill(passwd)
        await this.page.locator(this.btnlogin).click()
        await this.page.waitForTimeout(5000)
    }
    async readErrormessage()
    {
        console.log("Code to validate the error message for invalid login")
    }
}