const express = require('express')
const app = express()
const port = 80 // 自定义端口号（不要与已存在端口冲突）

// 提供对外的健康监测接口
app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.use(express.static('dist')) // dist 是项目的打包资源路径，一般为根目录下dist
app.listen(port, () => console.log(`服务器 ${port} 开启成功!`))
