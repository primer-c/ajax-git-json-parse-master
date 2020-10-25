// 5. 设置访问路由
const url = "http://localhost:3000/article"

// 6. 获取元素
const h2 = document.querySelector('h2')
const image = document.querySelector('img')
const content = document.querySelector('.content')
const btn = document.querySelector('button')

// 7. 事件监听
btn.addEventListener("click",function(){

  // 1. 创建代理对象
  let xhr;
  if(window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  }else{
    xhr = new ActiveXObject('Mircrosoft.XMLHTTP')
  }
  // 2. 设置请求方式
  xhr.open("GET",url,true)

  // 3. 发送请求
  xhr.send()
  
  // 4. 获取服务端发给客户端的数据
  xhr.onload = function(){
    let article = JSON.parse(xhr.responseText)
    h2.innerHTML = article.title
    image.src = article.image
    content.innerHTML = article.content
  }
})