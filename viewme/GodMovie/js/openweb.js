const sourceProjects = [
    ["Awesome Test Automation", "https://github.com/atinfo/awesome-test-automation"],
    ["AutomationTest", "https://github.com/yanchunhuo/AutomationTest"],
];
function openwebclick(url){
    for(var i=0;i<sourceProjects.length;i++)
    {
        if(url == sourceProjects[i][0]){
            window.open(sourceProjects[i][1]);
            return;  
        }
    }
}