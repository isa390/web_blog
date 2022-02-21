1、软件系统为什么要自动生成.idea、.logs、out文件？
2、maven依赖为什么一定要依赖pom.xml配置文件？作用是什么？

    $(function(){
        $.ajax({
            type:"get",
            url:"../../coderead/javaAutoTestKuangJia.md",
            dataType:"html",
            success:function(res){
               show(res)
            }
        })

        function show(data) {
            document.getElementById('content').innerHTML = marked.parse(data);
        }
    })