// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  // return event
  var num = event.num
  return await db.collection("demolist").limit(num).get()  //等待异步请求返回
}