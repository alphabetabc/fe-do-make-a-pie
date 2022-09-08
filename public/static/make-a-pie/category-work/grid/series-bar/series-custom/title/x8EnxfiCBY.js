const CubeLeft=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(o,e){console.log(o,e);const t=e.yAxisPoint,l=[e.x,e.y],n=[e.x+9,e.y-9],c=[t[0]+9,t[1]-9],s=[t[0],t[1]];o.moveTo(l[0],l[1]).lineTo(n[0],n[1]).lineTo(c[0],c[1]).lineTo(s[0],s[1]).closePath()}}),CubeRight=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(o,e){const t=e.yAxisPoint,l=[e.x,e.y],n=[t[0],t[1]],c=[t[0]+9,t[1]+18],s=[e.x+9,e.y+18];o.moveTo(l[0],l[1]).lineTo(n[0],n[1]).lineTo(c[0],c[1]).lineTo(s[0],s[1]).closePath()}}),CubeTop=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(o,e){const t=[e.x,e.y],l=[e.x+9,e.y+18],n=[e.x+18,e.y+9],c=[e.x+9,e.y-9];o.moveTo(t[0],t[1]).lineTo(l[0],l[1]).lineTo(n[0],n[1]).lineTo(c[0],c[1]).closePath()}});echarts.graphic.registerShape("CubeLeft",CubeLeft),echarts.graphic.registerShape("CubeRight",CubeRight),echarts.graphic.registerShape("CubeTop",CubeTop);const MAX=[100,100,100,100,100,100],VALUE=[40,40,15,2,2,1],NAMES=["漏洞攻击：40%","网络扫描：40%","暴力破解：15%","进程外联：2%","钓鱼邮件：2%","启动powershell：1%"];option={backgroundColor:"#010d3a",title:{text:"",top:32,left:18,textStyle:{color:"#00F6FF",fontSize:24}},grid:{left:20,right:40,bottom:"19%",top:107,containLabel:!0},yAxis:{type:"category",data:NAMES,axisLine:{show:!1,lineStyle:{color:"white"}},offset:20,axisTick:{show:!1,length:9,alignWithLabel:!0,lineStyle:{color:"#7DFFFD"}},axisLabel:{fontSize:10}},xAxis:{type:"value",axisLine:{show:!1,lineStyle:{color:"white"}},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,fontSize:16},boundaryGap:["20%","20%"]},series:[{type:"custom",renderItem:function(o,e){const t=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],yAxisPoint:e.coord([0,e.value(1)])},style:{fill:"rgba(7,29,97,.6)"}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],yAxisPoint:e.coord([0,e.value(1)])},style:{fill:"rgba(10,35,108,.7)"}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],yAxisPoint:e.coord([0,e.value(1)])},style:{fill:"rgba(11,42,106,.8)"}}]}},data:MAX},{type:"custom",renderItem:(o,e)=>{const t=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],yAxisPoint:e.coord([0,e.value(1)])},style:{fill:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#3B80E2"},{offset:1,color:"#49BEE5"}])}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],yAxisPoint:e.coord([0,e.value(1)])},style:{fill:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#3B80E2"},{offset:1,color:"#49BEE5"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],yAxisPoint:e.coord([0,e.value(1)])},style:{fill:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#3B80E2"},{offset:1,color:"#49BEE5"}])}}]}},data:VALUE},{type:"bar",label:{normal:{show:!0,position:"right",formatter:o=>{switch(o.name){}},fontSize:16,color:"#fff",offset:[25,4]}},itemStyle:{color:"transparent"},data:MAX}]};
