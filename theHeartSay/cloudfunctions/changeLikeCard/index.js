// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event);
  const wxContext = cloud.getWXContext();
  const _openid = wxContext.OPENID;
  const _idddddd= event.id;
  const like = event.like;
  const btnId = event.btnId -1;
  const select = ["starBucksCard","starBucksCard2","starBucksCard3","starBucksCard4","starBucksCard","starBucksCard","starBucksCard","starBucksCard"]
  const changeDB = await db.collection(select[btnId]).doc(_idddddd);
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