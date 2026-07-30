import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env"),});

export const ENV = {
  url: process.env.URL!,
  uid: process.env.USER_ID!,
  pwd: process.env.PASSWD!,
};