import { World,setWorldConstructor } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

export class MyWorld extends World
{
   page!:Page
   context!:BrowserContext
   browser!:Browser
   loginPage!:LoginPage
   productPage!:ProductsPage  
}

setWorldConstructor(MyWorld);
