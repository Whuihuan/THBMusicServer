import "./config/env";
import "reflect-metadata";
import "module-alias/register";
import express from 'express';
import bodyParser from 'body-parser';
import { AppDataSource } from './config/dataSource'
import router from './router/router';

//初始化数据库
AppDataSource.initialize().then(() => {
  console.log("数据库初始化完成");
  // 数据库初始化完成后再启动WEB服务
  let port = 3000; // 填写端口号
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/', router);

  app.listen(port, () => {
    console.log(`程序启动，端口：${port}`);
  });
}).catch((error) => {
  console.log(error);
})