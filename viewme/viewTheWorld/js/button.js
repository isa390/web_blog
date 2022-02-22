var slideIndex = 0;
var arrContainer = [];
var saveResultList = [];
var myMap = new Map();

function GenerateCase() {
    Swal.fire({
    title: '温馨提醒',
    text: "请检查参数之间的耦合关系是否适配该算法!",
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '已经确认了!'
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("ok")
    }
    else{
        console.log("do");
        dealInput();
        console.log(arrContainer);
        var result = descartes(arrContainer);
        pairwise(result);
        // console.log(result[0][0]);//result就是笛卡尔积
        // console.log(result[0][1]);//result就是笛卡尔积
        // console.log(result[0][2]);//result就是笛卡尔积
        showResult();
        console.log(myMap)
    }
  })
}

function pairwise(inputdata){
    var flag = 0;
    var listdata = inputdata;
    var flagCnt = listdata.length;
    var zero = listdata[0];
    console.log(inputdata[flagCnt-1])
    inputdata.pop()
    console.log(inputdata[flagCnt-2])
    return;
    if(flagCnt < 2){
        return;
    }
    while(flagCnt > 0){
        flagCnt--;
        console.log(listdata[flagCnt-1]);listdata.pop();
        for(var col = 1; col < listdata.length; col ++){
           // for(var nul = )
        }
    }
    return;
    saveResultList.push(listdata[0]);
    var lie = Object.keys(listdata[0]).length;
    for(var i=0; i < listdata.length;i++){
        for(var k=0;k < lie-1;k++){
            for(var j = i+1;j < listdata.length;j++){
                if((listdata[i][k] == listdata[j][k])&&(listdata[i][k+1] == listdata[j][k+1]))
                {
                    if(k==(lie-2)){
                        flag = 1;
                        console.log(flag)
                    }
                    break;
                }
            }
            if(j == listdata.length){
                break;
            }
            if(flag == 1){
                break;
            }
        }
        if(flag == 1){
            flag = 0;
        }else{
            saveResultList.push(listdata[i]);
            console.log("i="+i)
        }
    }
    console.log(listdata.length)
    //resultList.push()
}

function dealInput(){
    var generateIDS = document.getElementById("generateId");
    for (var i = 1;i < generateIDS.childNodes.length;i++){
        simpleCaseDeal(generateIDS.childNodes[i].getElementsByTagName('input'));
        i++;
    }
    //console.log(generateIDS.childNodes[1].getElementsByTagName('input')[0].checked)
}
function simpleCaseDeal(obj){
    var arr = new Array();　//创建一个数组
    if(obj[0].checked == false){
        return;
    }
    var obj3 = obj[3].value.split('/');
    var obj4 = obj[4].value.split('/');
    for(var i=0;i<obj3.length;i++){
        arr.push(obj[2].value+"为"+obj3[i]);
        myMap.set(obj[2].value+"为"+obj3[i],obj4[i])
    }
    arrContainer.push(arr);
}
function showResult(){
    
    var f = document.getElementById("container"); 
    var childs = f.childNodes; 
    for(var i = 0; i < childs.length; i++) { 
        f.removeChild(childs[i]); 
    }
	table = document.createElement("table");
    table.border = 1;
    table.style = 'font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif';
	tBody = document.createElement("tBody");
	for(var i=0;i<arrContainer.length;i++){
		tr = document.createElement("tr");
		tBody.appendChild(tr);
		for(var j=0;j<arrContainer[i].length;j++){
			td = document.createElement("td");
			tr.appendChild(td);
			td.innerHTML="  "+arrContainer[i][j];
            j++;
		}
	}
	table.appendChild(tBody);
	container.appendChild(table);
}

window.onload = function () {
}

function descartes(list) {
    //parent上一级索引;count指针计数
    var point = {};
    var result = [];
    var pIndex = null;
    var tempCount = 0;
    let obj = {};
    //根据参数列生成指针对象
    for (var index in list) {
      if (typeof list[index] === 'object') {
        point[index] = {
          'parent': pIndex,
          'count': 0
        }
        pIndex = index;
      }
    }
    //单维度数据结构直接返回
    if (pIndex === null) {
      return list;
    }
    //动态生成笛卡尔积
    while (true) {
      for (var index in list) {
        tempCount = point[index]['count'];
        obj[index] = list[index][tempCount]   
      }
      //压入结果数组
      result.push(obj);
      obj={};   
      //检查指针最大值问题
      while (true) {
        if (point[index]['count'] + 1 >= list[index].length) {
          point[index]['count'] = 0;
          pIndex = point[index]['parent'];
          if (pIndex === null) {
            return result;
          }
          //赋值parent进行再次检查
          index = pIndex;
        } else {
          point[index]['count']++;
          break;
        }
      }
    }
}
