#!/usr/bin/env python
# --coding:utf-8--

from http.server import BaseHTTPRequestHandler, HTTPServer
from os import path
import json
from urllib import request, parse
import cgi
import requests
import os
# APP_ID = "cli_a163caabc278d01b"
# APP_SECRET = "VFmozphTstd9gO9A6uHqJiGDAhJ34eIR"
# APP_VERIFICATION_TOKEN = "sHxDsDj8lUft8RvtJynA1ZuTQZEWUU2N"
APP_ID = "cli_a15bebebc5b8d00b"
APP_SECRET = "pMJXu20Pn2L2fmFIvwSrZcPmZbRnmotd"
APP_VERIFICATION_TOKEN = "hxaTTQZc9re73RE4bsKaEcCvLxLr1NIY"
ret_card = {
    "version": "1.0",
    "body": [{
        "tag": "text",
        "text": "Select"
    }]
}
paths = [
"onehour",
"spltalk",
"autotestpanel_01",
"autotestpanel_02",
"autotestpanel_03",
"autotestpanel_04",
"autotestpanel_05",
"autotestpanel_06",
"developanel_01",
"developanel_02",
"developanel_03",
"developanel_04",
"developanel_05",
"developanel_06",
"developanel_07",
"developanel_08",
"developanel_09",
"developanel_10",
"developanel_11",
"developanel_12",
"developanel_13",
"developanel_14",
"ClassProcess_01",
"ClassProcess_02",
"ClassProcess_03",
"ClassProcess_04",
"ClassProcess_05",
"ClassProcess_06",
"NeedProcess_01",
"NeedProcess_02",
"NeedProcess_03",
"NeedProcess_04",
"NeedProcess_05",
"NeedProcess_06",
"BuildCodeFeel_01",
"BuildCodeFeel_02",
"BuildCodeFeel_03",
"BuildCodeFeel_04",
]
global_id = "no initial"
class RequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        # 解析请求 处理github任务
        ctypeu, pdictu = cgi.parse_header(self.headers['user-agent'])
        
        print(ctypeu.split("/")[0])
        if (ctypeu.split("/")[0] == 'GitHub-Hookshot'):
            ctype, pdict = cgi.parse_header(self.headers['x-github-event'])  
            print(ctype.split("/")[0])
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write("ok".encode())
            if ctype.split("/")[0] == 'ping':
                return
            url = 'http://127.0.0.1:5001'
            myobj = {'somekey': 'somevalue'}  
            x = requests.post(url, data = myobj)
            return
        if (dealPost(self)):
          return
        # 解析请求 body
        req_body = self.rfile.read(int(self.headers['content-length']))
        obj = json.loads(req_body.decode("utf-8"))
        print(req_body)

        # 校验 verification token 是否匹配，token 不匹配说明该回调并非来自开发平台
        schema = obj.get("schema", "")
        if schema == "2.0":
            token = obj.get("header").get("token")
        else:
            token = obj.get("token")

        #token = obj.get("token", "")
        if token != APP_VERIFICATION_TOKEN:
            print("verification token not match, token =", token)

            print(global_id)
            print(obj.get("open_id"))
            self.response(json.dumps(ret_card))
            self.send_bot_message(token, obj.get("open_id"), "good done")
            print("refresh new card")
            return

        # 根据 type 处理不同类型事件
        type = obj.get("type", "")
        if "url_verification" == type:  # 验证请求 URL 是否有效
            self.handle_request_url_verify(obj)
        elif "event_callback" == type:  # 事件回调
            # 获取事件内容和类型，并进行相应处理，此处只关注给机器人推送的消息事件
            event = obj.get("event")
            if event.get("type", "") == "message":
                self.handle_message(event)
                return
        else:
            print("return 200okk")
            #self.response("")
            
            #self.response(json.dumps(ret_card))
        return
    def do_GET(self):
        filepath = self.path
        print(filepath)
        if( self.path.endswith(".html")):
       
            print(1)
            f = open(filepath[1:],"r",encoding='utf-8')
            html = f.read()
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.send_header('Set-Cookie', 'monster=1')
            self.end_headers()
            self.wfile.write(html.encode())
            f.close()
        elif self.path.endswith(".css"):
            print("enter css")
            f = open(filepath[1:],"rb")
            self.send_response(200)
            self.send_header('Content-type', 'text/css')
            self.end_headers()
            self.wfile.write(f.read())
            print("css")
            f.close()
        elif ( filepath =="/"):
            print(2)
            f = open("index.html","r",encoding='utf-8')
            html = f.read()
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.send_header('Set-Cookie', 'monster=1')
            self.end_headers()
            self.wfile.write(html.encode())
            f.close()
        elif self.path.endswith(".js"):
            print("enter css")
            f = open(filepath[1:],"rb")
            self.send_response(200)
            self.send_header('Content-type', 'text/javascript')
            self.end_headers()
            self.wfile.write(f.read())
            print("javascript")
            f.close()  
        elif self.path.endswith(".md"):
            print("enter md")
            f = open(filepath[1:],"rb")
            self.send_response(200)
            self.send_header('Content-type', 'text/markdown')
            self.end_headers()
            self.wfile.write(f.read())
            print("javascript")
            f.close()  
        else:
            print(3)
            f = open(filepath[1:],"rb")
            html = f.read()
            self.send_response(200)
            self.send_header('Content-type', 'image/'+filepath.split(".")[1])
            self.send_header('Set-Cookie', 'monster=1')
            self.end_headers()
            self.wfile.write(html)
            f.close()
        #self.wfile.write(html.encode())
        return
        
    def handle_request_url_verify(self, post_obj):
        # 原样返回 challenge 字段内容
        challenge = post_obj.get("challenge", "")
        rsp = {'challenge': challenge}
        self.response(json.dumps(rsp))
        return



    def handle_message(self, event):
        # 此处只处理 text 类型消息，其他类型消息忽略
        msg_type = event.get("msg_type", "")
        if msg_type != "text":
            print("unknown msg_type =", msg_type)
            self.response("")
            return

        # 调用发消息 API 之前，先要获取 API 调用凭证：tenant_access_token
        access_token = self.get_tenant_access_token()
        if access_token == "":
            self.response("")
            return
        global global_id
        global_id = event.get("open_id")

        # 机器人 echo 收到的消息
        self.send_message(access_token, event.get("open_chat_id"), event.get("text"))
        #self.response("")
        
        #self.response(json.dumps(ret_card))
        return

    def response(self, body):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(body.encode())

    def get_tenant_access_token(self):
        url = "https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal/"
        headers = {
            "Content-Type" : "application/json"
        }
        req_body = {
            "app_id": APP_ID,
            "app_secret": APP_SECRET
        }

        data = bytes(json.dumps(req_body), encoding='utf8')
        req = request.Request(url=url, data=data, headers=headers, method='POST')
        try:
            response = request.urlopen(req)
        except Exception as e:
            print(e.read().decode())
            return ""

        rsp_body = response.read().decode('utf-8')
        rsp_dict = json.loads(rsp_body)
        code = rsp_dict.get("code", -1)
        if code != 0:
            print("get tenant_access_token error, code =", code)
            return ""
        return rsp_dict.get("tenant_access_token", "")

    def send_message(self, token, open_id, text):
        url = "https://open.feishu-boe.cn/open-apis/message/v4/send/" 

        headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
        req_body = {
            "chat_id": open_id,
            "msg_type":"interactive",
              "card":{
                "header":{
                  "title":{
                    "tag":"plain_text",
                    "content":text+"        iPad Air 5，消息卡片传递到服务器测试，我来自于小爱机器人"
                  }
                },
                "elements":[
                  {
                    "tag":"img",
                    "img_key":"img_2098a60d-8267-4d4c-91a8-d94b2baf90dg",
                    "alt":{
                      "tag":"plain_text",
                      "content":"iPad Air 3"
                    }
                  },
                  {
                    "tag":"div",
                    "text":{
                      "tag":"lark_md",
                      "content":"活动描述：**Apple 出品**\n开奖时间：**2022-01-03 18:00**"
                    }
                  },
                  {
                    "tag":"action",
                    "actions":[
                      {
                        "tag":"button",
                        "text":{
                          "tag":"plain_text",
                          "content":"参加抽奖"
                        },
                        "type":"danger",
                        "value":{
                            "key":"value" 
                        }
                      }
                    ]
                  }
                ]
              }
        }
        data = bytes(json.dumps(req_body), encoding='utf8')
        req = request.Request(url=url, data=data, headers=headers, method='POST')
        try:
            response = request.urlopen(req)
        except Exception as e:
            print(e.read().decode())
            return

        rsp_body = response.read().decode('utf-8')
        rsp_dict = json.loads(rsp_body)
        code = rsp_dict.get("code", -1)
        if code != 0:
            print("send message error, code = ", code, ", msg =", rsp_dict.get("msg", ""))

    def send_old_message(self, token, open_id, text):
        url = "https://open.feishu.cn/open-apis/message/v4/send/"

        headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
        req_body = {
            "chat_id": open_id,
            "msg_type":"interactive",
              "card":{
                "header":{
                  "title":{
                    "tag":"plain_text",
                    "content":text+"        iPad Air 5，消息卡片传递到服务器测试，我来自于小爱机器人"
                  }
                },
                "elements":[
                  {
                    "tag":"img",
                    "img_key":"img_2098a60d-8267-4d4c-91a8-d94b2baf90dg",
                    "alt":{
                      "tag":"plain_text",
                      "content":"iPad Air 3"
                    }
                  },
                  {
                    "tag":"div",
                    "text":{
                      "tag":"lark_md",
                      "content":"活动描述：**Apple 出品**\n开奖时间：**2022-01-03 18:00**"
                    }
                  },
                  {
                    "tag":"action",
                    "actions":[
                      {
                        "tag":"button",
                        "text":{
                          "tag":"plain_text",
                          "content":"参加抽奖"
                        },
                        "type":"danger",
                        "value":{
                            "key":"value" 
                        }
                      }
                    ]
                  }
                ]
              }
        }
        data = bytes(json.dumps(req_body), encoding='utf8')
        req = request.Request(url=url, data=data, headers=headers, method='POST')
        try:
            response = request.urlopen(req)
        except Exception as e:
            print(e.read().decode())
            return

        rsp_body = response.read().decode('utf-8')
        rsp_dict = json.loads(rsp_body)
        code = rsp_dict.get("code", -1)
        if code != 0:
            print("send message error, code = ", code, ", msg =", rsp_dict.get("msg", ""))

    def send_bot_message(self, token, open_id, text):
        # 调用发消息 API 之前，先要获取 API 调用凭证：tenant_access_token
        access_token = self.get_tenant_access_token()
        if access_token == "":
            self.response("")
            return
        url = "https://open.feishu.cn/open-apis/interactive/v1/card/update/"

        headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + access_token
        }
        req_body = {
            "token":token,
            "msg_type":"interactive",
              "card":{
                "open_ids":[open_id],
                "header":{
                  "title":{
                    "tag":"plain_text",
                    "content":text+"        内容已经更新了"
                  }
                },
                "elements":[
                  {
                    "tag":"action",
                    "actions":[
                      {
                        "tag":"button",
                        "text":{
                          "tag":"plain_text",
                          "content":"已经更新"
                        },
                        "type":"default"
                      }
                    ]
                  }
                ]
              }
        }

        data = bytes(json.dumps(req_body), encoding='utf8')
        req = request.Request(url=url, data=data, headers=headers, method='POST')
        try:
            response = request.urlopen(req)
        except Exception as e:
            print(e.read().decode())
            return

        rsp_body = response.read().decode('utf-8')
        rsp_dict = json.loads(rsp_body)
        code = rsp_dict.get("code", -1)
        if code != 0:
            print("send message error, code = ", code, ", msg =", rsp_dict.get("msg", ""))


def dealPost(self):
  try:
    ctype, pdict = cgi.parse_header(self.headers['update'])
    
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    for path in paths:
        if(ctype == path):
            self.wfile.write(path.encode())
            print(path)
            req_body = self.rfile.read(int(self.headers['content-length']))
            obj = req_body.decode("utf-8")
            print(obj)
            try:
                #create__filea("E:\AmesomeCloud\Blog2Me"+"\\blog\\buildme.txt",obj)
                create__filea("/tmp/blog/"+path+".txt",obj)
            except Exception as e:
                print(str(e))
            return True 
        elif(ctype == 'get'+path):
            print(ctype)
            #f = open("E:\AmesomeCloud\Blog2Me"+"\\blog\\buildme.txt","rb")
            f = open("/tmp/blog/"+path+".txt","rb")
            self.wfile.write(f.read())
            #self.wfile.write(getNumStr(bytes2str(f),"<br>",40).encode())
            f.close()
            return True
        elif(ctype=='getpullupdate'):
            self.send_response(200)   
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write("getpullupdate".encode())
            url = 'http://127.0.0.1:5001'
            myobj = {'somekey': 'somevalue'}    
            x = requests.post(url, data = myobj)
            return True

    return False
  except :
    return False

def create__filea(file_path,msg):
    try:
        f=open(file_path,"r+",encoding='utf-8')
    except  Exception as e:
        print(str(e))
        f=open(file_path,"a+",encoding='utf-8')
    content = f.read()
    f.seek(0,0)
    f.write('<br>')
    f.write(msg)
    f.write(content)
    f.close()
    print("save ok")
def run():
    port = 5000
    server_address = ('', port)
    httpd = HTTPServer(server_address, RequestHandler)
    print("start.....")
    httpd.serve_forever()

if __name__ == '__main__':
    run()