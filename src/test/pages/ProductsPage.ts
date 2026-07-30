import { Base } from "./Base";
import { expect } from "@playwright/test";

export class ProductsPage extends Base 
{
    private readonly heading: string = "//span[.='Products']"


    async checkHeading() {
        let status = await this.page.locator(this.heading).isVisible()
        expect(status).toBeTruthy()
    }
}