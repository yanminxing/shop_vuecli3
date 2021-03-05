import Mock from "mockjs";
import data from "./data.json";

//记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。
//商家信息
Mock.mock("/info",{code:0, data:data.info});
//点菜信息
Mock.mock("/foods",{code:0, data:data.foods});
//评价
Mock.mock("/evaluates",{code:0, data:data.evaluates});

