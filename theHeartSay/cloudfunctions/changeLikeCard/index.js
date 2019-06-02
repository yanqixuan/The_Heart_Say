// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  const _openid = wxContext.OPENID;
  const _idddddd= event.id;
  const like = event.like;
  const changeDB = await db.collection('starBucksCard').doc(_idddddd);
  // 更新
  const DBupdate = await changeDB.update({
    data:{
      like
    }
  })
  return {
    _openid,
    DBupdate,
    _idddddd,
    like
  }
}