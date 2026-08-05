import { Before, After, BeforeAll } from "@cucumber/cucumber";
import { chromium } from "@playwright/test"
import { MyWorld } from "./Myworld";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

Before(async function (this: MyWorld) {
   this.browser = await chromium.launch()
   this.context = await this.browser.newContext({
      recordVideo: {
         dir: "./reports/videos/",   // folder where videos are saved
         size: { width: 1280, height: 720 }
      }
   })
   this.page = await this.context.newPage()
   this.loginPage = new LoginPage(this.page)
   this.productPage = new ProductsPage(this.page)
})

After(async function (this: MyWorld, { pickle }) {
   let img = await this.page.screenshot({ path: `./images/${pickle.name}-${Date.now()}.png` })
   await this.attach(img, 'image/png')
   const video = this.page.video();
   await this.context.close();
   if (video) {
      const path = await video.path();
      const fs = require("fs");
      const videoBuffer = fs.readFileSync(path);
      await this.attach(videoBuffer, "video/webm");
   }

   await this.browser.close()
})


///Before, After hooks will automatically execute before and after every scenario