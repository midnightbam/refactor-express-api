import express from "express";
import cors from "cors";
import { client } from "./utils/db.js";
import productRoute from "./routes/productRoute.js";

const init = async () => {
  // เริ่มเชื่อมต่อ MongoDB ก่อน
  await client.connect();

  const app = express();
  const port = 4001;

  // `cors` เป็น Middleware ที่ทำให้ Client ใดๆ ตามที่กำหนด
  // สามารถสร้าง Request มาหา Server เราได้
  // ในโค้ดบรรทัดล่างนี้คือให้ Client ไหนก็ได้สามารถสร้าง Request มาหา Server ได้
  app.use(cors());

  // ใช้ Middleware ของ Express ในการ parse body (JSON และ URL-encoded)
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Products routes (แยกไปอยู่ใน routes/productRoute.js)
  app.use("/products", productRoute);

  // route สำหรับทดสอบ server
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // เริ่มต้น server ที่ port 4001
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
};

// Run init function เพื่อเชื่อมต่อ DB แล้วเริ่ม Server
init();
