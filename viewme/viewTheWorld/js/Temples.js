
function thingdeal_id(topic){
    var data = getValueById(topic.name);  
    var showContent = getFontSizeBefore()+'生而为人，必然于世界之上，完成必要的事业和成就，在此处开启你的事业之路,<--'+data+'-->将带给你新的力量'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'一，你想要完成<  '+data+'  >这件事，你必须清楚，欲成一事，必须苦其心智，练起体肤，请填写你将如何面对各项挑战？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'二，请回答关于<  '+data+'  >这件事，关于这件事，事件相关的SWOT属性分别是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'三，请回答关于<  '+data+'  >这件事，关于这件事，事件相关的5W2H1E属性分别是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'四，请回答关于<  '+data+'  >这件事，关于这件事，天时地利人和分别是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'五，请回答关于<  '+data+'  >这件事，关于这件事，历史上，人们是怎么做的？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'六，请回答关于<  '+data+'  >这件事，关于这件事，你目前还需要准备什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'七，请回答关于<  '+data+'  >这件事，关于这件事，你是否询问了智者了，智者怎么说？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'八，请回答关于<  '+data+'  >这件事，关于这件事，你目前做到了什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'八，请回答关于<  '+data+'  >这件事，是否可以通过钱解决？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'八，请回答关于<  '+data+'  >这件事，世界是一个机缘巧合的大机器，在这个大机器之中'+getFontSizeAfter()+getNextLine()
    return showContent  
}
function judgething_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'如何审视<--'+data+'-->这件事'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'一，<  '+data+'  >影响力有多大？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'二，于<  '+data+'  >对于以后会产生什么样的影响？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'三，于<  '+data+'  >得与失之间是如何的？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'四，于<  '+data+'  >会对什么人产生什么影响？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'五，于<  '+data+'  >博弈的是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'六，于<  '+data+'  >这件事主导的关键是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'七，于<  '+data+'  >是否会更优？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'于<  '+data+'  >这件事，原理是什么？'+getFontSizeAfter()+getNextLine()
    return showContent
}

function gtd_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'关于<--'+data+'-->的GTD审视'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >是什么样的事（人生意义/目标/愿景/各方面的责任）'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >现在可以行动？垃圾，就扔掉;酝酿，可能今后去做，指明特定日期;'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >下一步如何行动？如果2分钟内能够完成，立马去做'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >检查预先定义的工作：项目相关材料/我在特定日期要做的事/我需要尽快去做的事/保持联系，并且需要别人，委托给别人的事'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >场合：我能做什么？挑选出当前环境下我能够做的事'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >时间：我在有限的时间内能做什么？挑选出在我时间块内能够做的事情？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >资源：我在有限的时间精力下能做什么？选出我当前精力和注意力能够完成的事'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >未计划的工作：未计划的工作随时出现，也许需要立刻行动，也许并不需要，必须与所有要做的事，以及当前关注范围中的事情一起权衡'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >预定义的工作：所有未完成的行动与项目，随着进度的推移及时间的临近，综合思考，把控协商，履行承诺的能力会越来越强，用可行的方式记录可以将大脑从记忆与提醒的工作中解脱出来'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >确定中的工作：处理已有事务或新的输入，回顾当前排出的任务列表，将"事务"转变为行动或者项目，脑力工作者的重要思考和决策'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >关注里范围：能否完整全面的记录下可供选择的任务，以及能否关注好关注范围中的事务，决定了自己能否确信正在做的事就是最佳的选择，列表中的事只要一离开大脑就必须按其特有的周期去回顾'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >回顾：日历，当我需要知道今天“必须做”哪些事时；行动列表：当我有空闲，需要看看还能做什么时；项目：当我要回顾自己短期承诺时；各方面的责任：当我需要保持平衡时；目标：当我需要确保自己能得到自己预期的结果时；愿景：当我需要动力与长期的方向时；人生意义/原则：当我要做非常重要的决策时'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >希望自己是正确的：糟糕的实践：我被各种最新的或是最突出的事情所左右，我不知道自己在干什么。我意识不到手头之外还有什么事，我记录的行动列表不完整，或是已经过时，我很麻木'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >确信自己是正确的：最佳实践：我相信自己的判断，因为我记录下的待办列表是完整的，及时更新的，我专注范围内的事都被关注着，并采取有效行动。我的直觉敏锐，视野清晰，决策明确，精神放松'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >以上，还会带来更多的：活力，清晰，官渡，深度，表现'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >做一个很好的管理者'+getFontSizeAfter()+getNextLine()
    return showContent
}
function dangerousthing_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'对于紧急事情<--'+data+'-->应对策略'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'一，<  '+data+'  >为什么会显得如此的紧急?'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'二，于<  '+data+'  >这件事会对我产生什么‘真’的危害，如何制定补救措施？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'三，于<  '+data+'  >是否影响了我的情绪，干扰了我的决策，我该如何冷静下来应对？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'四，于<  '+data+'  >这件危急的事情，我应该找谁来帮助我处理这个危机，谁有这样的职责，能力？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'五，于<  '+data+'  >这件事情，专业的人会怎么处理？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'六，于<  '+data+'  >这件事情，如何让伤害保留在自己承受范围内，如果不是，我的下一步的准备措施是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'七，于<  '+data+'  >这件事情，其中是否蕴藏了什么机会？'+getFontSizeAfter()+getNextLine()
    return showContent

}
function person_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'如何与<--'+data+'-->开展社交'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'一，<  '+data+'  >与我的交集是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'二，于<  '+data+'  >如何共事？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'三，于<  '+data+'  >是什么性格的人，应该注意些什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'四，于<  '+data+'  >什么才是有意义有价值的进行曲？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'于<  '+data+'  >共话？'+getFontSizeAfter()+getNextLine()
    return showContent
}

function schema_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'<--'+data+'-->项目架构设计'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >设计概述'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >功能概述'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >非功能约束'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >系统部署图与整体设计'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >xxxx场景子系统序列图'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >xxx子系统设计'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >子系统组件图'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >场景A组件序列图'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >场景B组件活动图'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >组件I设计'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >组件I类图'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >场景A类序列图'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'<  '+data+'  >场景I状态图'+getFontSizeAfter()+getNextLine()
    return showContent
}



function judgeperson_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'该如何审视<--'+data+'-->'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'一，<  '+data+'  >拥有哪些资源？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'二，于<  '+data+'  >具备什么能力？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'三，于<  '+data+'  >对自己会造成什么威胁？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'四，于<  '+data+'  >彼此共赢的空间是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'五，于<  '+data+'  >这个人之前做过什么事？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'六，于<  '+data+'  >这个人的经济来源是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'>七，于<  '+data+'  >这个人结交的圈子都是些什么人？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'八，于<  '+data+'  >这个人会说什么话，做什么事，如何利用？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'于<  '+data+'  >这个人的价值选择是什么？'+getFontSizeAfter()+getNextLine()
    return showContent
}
function talk_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'<--'+data+'-->此行的目的是为了达成一定的共识'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'一，<  '+data+'  >这场对话利益相关方有哪些，是否都在场了？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'二，于<  '+data+'  >这场对话，事先需要做什么铺垫？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'三，于<  '+data+'  >这场对话，如何开展整个谈判的过程？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'四，于<  '+data+'  >这场对话，如何抢夺对话过程中的引导权？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'五，于<  '+data+'  >这场对话，如何通过谈话的过程表明申明自己的立场以及自己想要传达什么样的意志？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'六，于<  '+data+'  >这场对话，如何营造一个利于自己的氛围？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'七，于<  '+data+'  >这场对话，如何引导谈话者的情绪过程？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'八，于<  '+data+'  >这场对话，如何奠定新的关系？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'于<  '+data+'  >这场对话，原理是什么？'+getFontSizeAfter()+getNextLine()
    return showContent
}
function bookread_id(topic){
    var data = getValueById(topic.name);
    var showContent = getFontSizeBefore()+'藉由<--'+data+'-->以下几点，生成专业的测试用例'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'一，<  '+data+'  >是否寻找到了所有的测试点'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'二，关于<  '+data+'  >人机料环法的考虑有哪些？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'三，<  '+data+'  >列举出所有的业务场景有哪些？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'四，<  '+data+'  >专业书籍上的测试方法有哪些？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'五，关于<  '+data+'  >网友都是怎么样测的？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'六，<  '+data+'  >大家目前在用的最流行的测试工具是什么？'+getFontSizeAfter()+getNextLine()+
    getFontSizeBefore()+'七，<  '+data+'  >之前有哪些经验教训？'+getFontSizeAfter()+getNextLine()+ 
    getFontSizeBefore()+'八，<  '+data+'  >代码实现的业务逻辑是什么？'+getFontSizeAfter()+getNextLine()+ 
    getFontSizeBefore()+'九，<  '+data+'  >最后用曼陀罗思考法补充'+getFontSizeAfter()+getNextLine()
    return showContent
}






function getNextLine(N){
    return ''
}

function getFontSizeAfter(N){
    return '</h3>'
}
function getFontSizeBefore(N){
    return '<h3>'
}

function showif(innerHTMLContent){
    document.querySelector('.info').innerHTML = innerHTMLContent; //显示
}

function getValueById(topic){
    var data = document.getElementById(topic).value;
    document.getElementById(topic).value = '';
    return data;
}

var topicthing = "";
function keydown(topic){
    if(event.keyCode == 13){ 
        topicthing = topic;
        paythings(topic);
     }
}

function paythings(topic){
    var functionname = '';
    functionname+=topic+'('+topic+')';
    showif(eval(functionname))
}


var url =  getUrl();
function uploaddata(id,topicname){
    console.log("ok")
    var data = document.getElementById(id).value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", topicname);
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.responseText);
          document.getElementById(id).value= '';
       }};
    var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");  
    console.log(time2)
    console.log(document.getElementById(id).value)
    var data = time2+":关于"+topicthing+"这件事的想法系列如下：<br>"+data;
    xhr.send(data);    
}
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

var cachebeifen ="123";
function downloaddata(topicname){
    console.log("ok")
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("update", "get"+topicname);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var r = xhr.responseText;      
            if(cachebeifen == r){}
            else{
                cachebeifen = r;
                document.querySelector('.info007').innerHTML = r; //显示
            }
        }
    };
    xhr.send(null);  
}


function nextpage(id){
    var data = document.getElementById(id).value;
    data += "<br>";
    document.getElementById(id).value = data;
    setPosition(id);
}


function setPosition(id) {
    let ctrl = document.getElementById(id);
    if (ctrl.setSelectionRange) {
          //非ie
          ctrl.focus(); // 获取焦点
          ctrl.setSelectionRange(-1,-1); // 设置选定区的开始和结束点
    } else if (ctrl.createTextRange) {
          var range = ctrl.createTextRange(); // 创建选定区
          range.collapse(true); // 设置为折叠,即光标起点和结束点重叠在一起
          range.moveEnd("character", pos); // 移动结束点
          range.moveStart("character", pos); // 移动开始点
          range.select(); // 选定当前区域
    }
}

function copycontent(id){
    let copyelement = document.getElementById(id);
    copyelement.select();
    document.execCommand("Copy");
}
function pastcontentddd(id){
    var content = window.event.clipboardData.getData("Text");
    console.log(content)
}