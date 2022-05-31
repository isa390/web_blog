outdata = ''
def create__filea(file_path,msg):
    try:
        f=open(file_path,"r+",encoding='utf-8')
    except  Exception as e:
        print(str(e))
        f=open(file_path,"a+",encoding='utf-8')
    content = f.read()
    f.seek(0,0)
    f.write(msg)
    f.close()
    print("save ok")
def run():
    global outdata
    with open("input.txt", "r") as f:
        datas = f.readlines()
        for data in datas:
            outdata += getFormatOutput(data,getHeadBlank(data))+'\n'


    create__filea("output.txt",outdata)

def getFormatOutput(strContent,n):
    out = ''
    if(n > 9):
        out += 'getNextLine(\'blank'+str(n)+'\')+\''+strContent.replace('\n', '')+'\'+'
    else:
        out += 'getNextLine(\'blank0'+str(n)+'\')+\''+strContent.replace('\n', '')+'\'+'
    return out
def getHeadBlank(strContent):
    blanknumber = 0
    i = 0
    while i < len(strContent):
        oneword = strContent[i]  # 获取每个位置的值
        i += 1
        if oneword.isspace(): # 判断是否为空格
            blanknumber += 1
        else:
            break
    return blanknumber
if __name__ == '__main__':
    run()