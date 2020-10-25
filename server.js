//1. 引入express框架
const express = require('express')
//6. 引入路径处理模块
const path = require('path')
//2. 创建web服务器
const app = express()
//5. 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')))

//6. 配置路易
app.get('/article', async(req,res) => {
  await res.send({
    title: "滕王阁序",
    image: "imgs/photo1.jpg",
    content: "落霞与孤鹜齐飞 秋水工厂天一色 渔舟唱晚 响穷彭蠡之滨 雁阵惊寒 声断衡阳之浦"
  })
})


//3. 设置端口
const PORT = process.env.NODE_ENV || 3000
//4. 监听端口
const server = app.listen(PORT,()=>{
  console.log(`Server running at port: http://localhost:${PORT}...`)
})
