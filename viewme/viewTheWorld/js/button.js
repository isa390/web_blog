var slideIndex = 0;
var arrContainer = [];
var saveResultList = [];
var myMap = new Map();
var caseinput ="";
function GenerateCase() {
    Swal.fire({
    title: '温馨提醒',
    text: "请检查参数之间的耦合关系是否适配该算法所依据的理论!",
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
        makeDataSimple(result);
        console.log(saveResultList);//result就是笛卡尔积
        // console.log(result[0][1]);//result就是笛卡尔积
        // console.log(result[0][2]);//result就是笛卡尔积
        showResult();
        console.log(myMap)
        document.getElementById("geinput").innerHTML=caseinput;

    }
  })
}

function loadInput(){
  console.log("load");
  var loadputs = document.getElementById("loadinput").value.split(";");
  var generateIDS = document.getElementById("generateId");
  var j = 0;
  for (var i = 1;i < generateIDS.childNodes.length;i++){
      if(j < loadputs.length-1){
        var temp = loadputs[j].split(",");
        j++;
      }
      else{
        break;
      }
      simpleLoadCaseDeal(generateIDS.childNodes[i].getElementsByTagName('input'),temp);
      i++;
  }
}
function makeDataSimple(inputdata){
  var dataHeightCnt = inputdata.length;
  var tempData = inputdata;
  
  while(dataHeightCnt > 0){
    dataHeightCnt--;
    var targetSrc = tempData[tempData.length-1];
    tempData.pop();
    if(saveData(targetSrc,tempData)){
      var zhongzhuan = [];
      zhongzhuan.push(targetSrc);
      for(var i=0;i < tempData.length; i++){
        zhongzhuan.push(tempData[i]);
      }
      tempData = zhongzhuan;
    }
    else
    {
    }
  }
  saveResultList=tempData;
}

function saveData(targetSouce,listSources){
  var width = Object.keys(listSources[0]).length;
  for(var startIndex = 0;startIndex < width - 1;startIndex++){
    for(var endIndex = startIndex+1;endIndex < width;endIndex++){
      if(hasData(startIndex,endIndex,targetSouce,listSources)){
      }
      else{
        return true;
      }
    }
  }
  return false;
}
function hasData(beginIndex,endIndex,targetSouce,listSources){
  if(beginIndex >= 0){}
  else{return;}
  if(beginIndex >= endIndex){return;}
  if(endIndex >= targetSouce.length){return;}
  for(var i=0;i < listSources.length;i++){
    if((targetSouce[beginIndex] == listSources[i][beginIndex])&&(targetSouce[endIndex]  == listSources[i][endIndex]))
    {
      return true;
    }
  }
  return false;
}
function dealInput(){
    var generateIDS = document.getElementById("generateId");
    for (var i = 1;i < generateIDS.childNodes.length;i++){
        simpleCaseDeal(generateIDS.childNodes[i].getElementsByTagName('input'));
        i++;
    }
}
function simpleLoadCaseDeal(obj,inputva){
  obj[2].value = inputva[0];
  obj[3].value = inputva[1];
  obj[4].value = inputva[2];
}
function simpleCaseDeal(obj){
    var arr = new Array();　//创建一个数组
    if(obj[0].checked == false){
        return;
    }
    var obj3 = obj[3].value.split('/');
    var obj4 = obj[4].value.split('/');
    for(var i=0;i<obj3.length;i++){
        arr.push(obj[2].value+"设置为"+obj3[i]);
        myMap.set(obj[2].value+"设置为"+obj3[i],obj4[i])
    }
    caseinput+=obj[2].value+",";
    caseinput+=obj[3].value+",";
    caseinput+=obj[4].value+";";
    arrContainer.push(arr);
}
function getReport(caseNumber,elementSrc){
  var report = "case"+caseNumber+":入参：";
  for(var i=0;i < Object.keys(elementSrc).length;i++){
    report += elementSrc[i]+",";
  }
  report+="期望结果：";
  for(var i=0;i < Object.keys(elementSrc).length;i++){
    report += myMap.get(elementSrc[i])+",";
  }
  return report;
}
function getResult(elementSrc){
  var report = "";
  report+="期望结果：";
  for(var i=0;i < Object.keys(elementSrc).length;i++){
    report += myMap.get(elementSrc[i])+",";
  }
  return report;
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
	for(var i=0;i<saveResultList.length;i++){
		tr = document.createElement("tr");
		tBody.appendChild(tr);
		for(var j=0;j<Object.keys(saveResultList[0]).length;j++){
			td = document.createElement("td");
			tr.appendChild(td);
			td.innerHTML="  "+saveResultList[i][j];
		}
    td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML=""+getResult(saveResultList[i]);
	}
	table.appendChild(tBody);
	container.appendChild(table);

  
	table = document.createElement("table");
  table.border = 1;
  table.style = 'font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif';
	tBody = document.createElement("tBody");
	for(var i=0;i<saveResultList.length;i++){
		tr = document.createElement("tr");
		tBody.appendChild(tr);
    td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML=""+getReport(i+1,saveResultList[i]);
	}
	table.appendChild(tBody);
	container.appendChild(table);
}

window.onload = function () {
}

function imgReload(){
  location.reload();
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


function yewucase(){
  Swal.fire({
    title: '业务场景复盘完毕',
  })
}