var value=100,_x=$("#chart-panel").find("div")[0].clientWidth,_y=$("#chart-panel").find("div")[0].clientHeight,rR=50,r1=60,r1D=r1+"%",r2=55,r2D=r2+"%",cx=_x*.5,cy=_y*.5;$("#chart-panel"),option={grid:{top:0,left:0,bottom:0,right:0},backgroundColor:"000",title:{text:`${value}`,subtext:"前端",left:"center",top:"center",textStyle:{color:"#fff",fontSize:80,fontFamily:"DINAlternate-Bold"},subtextStyle:{color:"#ff",fontSize:35,fontFamily:"PingFangSC-Regular",top:"center"},itemGap:-4},xAxis:{splitLine:{show:!1},axisLabel:{show:!1},axisLine:{show:!1}},yAxis:{splitLine:{show:!1},axisLabel:{show:!1},axisLine:{show:!1}},series:[{type:"pie",clockWise:!0,radius:[r2D,r1D],data:[{value,itemStyle:{normal:{borderWidth:10,borderColor:{colorStops:[{offset:0,color:"#7940FE"},{offset:1,color:"#2A69EC"}]},color:{colorStops:[{offset:0,color:"#7940FE"},{offset:1,color:"#2A69EC"}]},label:{show:!1},labelLine:{show:!1}}}},{name:"gap",value:100-value,itemStyle:{normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}}}]}],graphic:[{type:"circle",shape:{r:rR},position:[cx+(cx*r2/100+rR)*Math.cos(-40*Math.PI/180),cy+(cx*r2/100+rR)*Math.sin(-40*Math.PI/180)],style:{fill:"#AC9D66",stroke:"#AC9D66",lineWidth:3,text:"js",textFill:"#fff",fontSize:22},z:13},{type:"circle",shape:{r:rR/2},position:[cx+(cx*r2/100+rR/2)*Math.cos(-10*Math.PI/180),cy+(cx*r2/100+rR/2)*Math.sin(-10*Math.PI/180)],style:{fill:"#CE5D43",stroke:"#CE5D43",lineWidth:3,text:"2",textFill:"#fff",fontSize:22},z:13},{type:"circle",shape:{r:rR/2},position:[cx+(cx*r2/100+60+rR/2)*Math.cos(-10*Math.PI/180),cy+(cx*r2/100+60+rR/2)*Math.sin(-10*Math.PI/180)],style:{fill:"#000000",stroke:"#000000",lineWidth:3,text:"html",textFill:"#fff",fontSize:22},z:13},,{type:"circle",shape:{r:rR/3},position:[cx+(cx*r2/100+rR/3)*Math.cos(10*Math.PI/180),cy+(cx*r2/100+rR/3)*Math.sin(10*Math.PI/180)],style:{fill:"#FC7708",stroke:"#FC7708",lineWidth:3,text:"3",textFill:"#fff",fontSize:22},z:13},{type:"circle",shape:{r:rR/3},position:[cx+(cx*r1/100+rR/3+30)*Math.cos(10*Math.PI/180),cy+(cx*r1/100+30+rR/3)*Math.sin(10*Math.PI/180)],style:{fill:"#000000",stroke:"#000000",lineWidth:3,text:"css",textFill:"#fff",fontSize:22},z:13}]};