.idea:软件自动生成
.logs：软件自动生成，疑似日志
out：软件自动生成
src：
   ｜--main
   |--test  
target
testng
webdriver
pom.xml
testNG.xml


目录结构
── README.md.MD
├── allure-results                                                         # 执行测试后的结果目录，在本地执行`allure serve allure-results`可在浏览器上打开报告地址
├── pom.xml                                                                # maven依赖配置文件，必须要有
├── src

├── super4sqa.iml
├── target
│ └── allure-results                                                      # 通过maven命令执行脚本后，生成的本次测试的结果
└── testNG.xml   