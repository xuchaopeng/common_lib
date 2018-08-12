# common_lib

嵩恒前端-共方法库

---

# 安装&使用

---

##自定义编译

```python
git clone http://codeio.dftoutiao.com/RESEARCH/shfe-lib.git
cd shfe-lib && npm install && npm run build
如果觉得有些方法基本用不到，可以通过修改src/index.js，import需要的 js 即可。
```
##公共方法库

```python
<!-- html中直接引入 -->
<script src="SL.js"></script>
```

```python
// AMD引入
var SL = require('SL');
// ES6 Module引入
import SL from 'SL';
// 使用方法
SL.Url.getUrlNoParams();
```
# 参与开发

---

派生本仓库，提合并请求。

```python
git clone http://codeio.dftoutiao.com/RESEARCH/shfe-lib.git
cd shfe-lib
npm install
```
## 打包

npm run dev # 开发环境
npm run build # 生产环境

## 测试

npm run test

#项目说明

该项目用于封装嵩恒前端公共业务 js 方法、东方头条 APP 方法库等。

