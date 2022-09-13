chart_pie_school("echart","升学率",75.6,"#b25846",1);function chart_pie_school(M,r,a,e,h){let s=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAMAAACn6Q83AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAM1BMVEX///9KulJKulJKulJK
ulJKulJKulJKulJKulJKulJKulJKulJKulJKulJKulJKulL///8tQVTZAAAAD3RSTlMAZjz5HOkK
y6JxcjAzh2nPVP2mAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UDHxcgIpwKzTsAAAA+SURBVAjXncy5
EQAgDANBgfk/9d8tNlABF22gEaA5h5cX8VchkjGYUqaWk7LwVIDKV0Mf0zBH18UyrvPwww37wgQc
NUTtbQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMy0zMVQxNTozMjozNCswODowMOdTocgAAAAl
dEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDMtMzFUMTU6MzI6MzQrMDg6MDCWDhl0AAAAIHRFWHRzb2Z0
d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6
UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADEzbcWq4AAAABZ0RVh0VGh1
bWI6OkltYWdlOjpXaWR0aAAxMAxjO9cAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/
slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYxNzE3NTk1NDBrtScAAAARdEVYdFRodW1iOjpTaXpl
ADE5MkJC/UFMUAAAAEV0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2FwcC90bXAvaW1hZ2VsYy9pbWd2
aWV3Ml85XzE2MDk5MDM2NjI3OTQyMzA2XzNfWzBd/+8aCAAAAABJRU5ErkJggg==`,g=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANBAMAAABiGeI2AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAMFBMVEX/////20z/20z/20z/
20z/20z/20z/20z/20z/20z/20z/20z/20z/20z/20z////YWt/+AAAADnRSTlMAaTAzh3KiCssc
6Tz5Zikt+0cAAAABYktHRACIBR1IAAAAB3RJTUUH5QMfFx4RYh+3UAAAADhJREFUCNdjYJB795CB
AT+p7PfuiRFD3Lt3754ysAHJBAb2vncvChgYZr1bCVTDfWYDkGS4y8AAAFWmHLHXwVI5AAAAJXRF
WHRkYXRlOmNyZWF0ZQAyMDIxLTAzLTMxVDE1OjMwOjE3KzA4OjAwkGtsFQAAACV0RVh0ZGF0ZTpt
b2RpZnkAMjAyMS0wMy0zMVQxNTozMDoxNyswODowMOE21KkAAAAgdEVYdHNvZnR3YXJlAGh0dHBz
Oi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7
LwAAABd0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMTNtxargAAAAFnRFWHRUaHVtYjo6SW1hZ2U6
OldpZHRoADEwDGM71wAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVY
dFRodW1iOjpNVGltZQAxNjE3MTc1ODE3zMxLrgAAABF0RVh0VGh1bWI6OlNpemUAMTkzQkL8gyZn
AAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTYw
OTkwMzUzMjYxMDY4MDBfOThfWzBdO1mFrwAAAABJRU5ErkJggg==`,c={backgroundColor:"#081c47",title:{text:"{a|"+a+"}{c|%}",x:"center",y:"center",textStyle:{rich:{a:{fontSize:18,color:"#fff"},c:{fontSize:14,color:"#ffffff"}}}},graphic:{elements:[{type:"text",z:4,style:{text:r,fill:"#75adde"},left:"center",top:"35%"},{type:"image",z:3,style:{image:h?s:g,width:10,height:13},left:"center",top:"60%"}]},legend:{show:!1},series:[{name:"外层细线",z:0,type:"custom",coordinateSystem:"none",renderItem:function(o,A){return{type:"arc",shape:{cx:A.getWidth()/2,cy:A.getHeight()/2,r:Math.min(A.getWidth(),A.getHeight())/2*.8,startAngle:0,endAngle:360},style:{stroke:e,fill:"transparent",lineWidth:.5},silent:!0}},data:[0]},{name:"外层圆点下",z:0,type:"custom",coordinateSystem:"none",renderItem:function(o,A){let l=A.getWidth()/2,n=A.getHeight()/2,i=Math.min(A.getWidth(),A.getHeight())/2*.8,t=d(l,n,i,45);return{type:"circle",shape:{cx:t.x,cy:t.y,r:1.2},style:{stroke:e,fill:e},silent:!0}},data:[0]},{name:"外层圆点上",z:0,type:"custom",coordinateSystem:"none",renderItem:function(o,A){let l=A.getWidth()/2,n=A.getHeight()/2,i=Math.min(A.getWidth(),A.getHeight())/2*.8,t=d(l,n,i,225);return{type:"circle",shape:{cx:t.x,cy:t.y,r:1.2},style:{stroke:e,fill:e},silent:!0}},data:[0]},{name:r,type:"pie",radius:["65%","75%"],silent:!0,clockwise:!1,startAngle:90,z:1,zlevel:0,label:{normal:{position:"center"}},data:[{value:a,name:"",itemStyle:{normal:{color:e}}},{value:100-a,name:"",label:{normal:{show:!1}},itemStyle:{normal:{color:"rgba(0,0,0,0)"}}}]},{name:"刻度间隔",z:2,type:"gauge",radius:"75%",center:["50%","50%"],startAngle:0,endAngle:359.9,splitNumber:30,hoverAnimation:!0,axisTick:{show:!0,splitNumber:1,length:"14%",lineStyle:{width:2,color:"#061740"}},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},axisLine:{lineStyle:{opacity:0}},detail:{show:!1},data:[0]},{name:"内层细线",type:"pie",radius:["54%","55%"],hoverAnimation:!1,startAngle:135,color:[e],labelLine:{show:!1},data:[100]},{name:"内层饼图",type:"pie",radius:["53%","56%"],hoverAnimation:!1,startAngle:90,color:[e],labelLine:{show:!1},data:[{value:a,name:"",itemStyle:{color:e}},{value:100-a,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]}]};function d(o,A,l,n){let i=o+l*Math.cos(n*Math.PI/180),t=A+l*Math.sin(n*Math.PI/180);return{x:i,y:t}}myChart.setOption(c)}
