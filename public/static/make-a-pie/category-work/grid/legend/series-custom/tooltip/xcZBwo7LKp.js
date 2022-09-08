const offsetX=10,offsetY=5,CubeLeft=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(t,e){const o=e.xAxisPoint,l=[e.x,e.y],c=[e.x-10,e.y-5],r=[o[0]-10,o[1]-5],n=[o[0],o[1]];t.moveTo(l[0],l[1]).lineTo(c[0],c[1]).lineTo(r[0],r[1]).lineTo(n[0],n[1]).closePath()}}),CubeRight=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(t,e){const o=e.xAxisPoint,l=[e.x,e.y],c=[o[0],o[1]],r=[o[0]+10,o[1]-5],n=[e.x+10,e.y-5];t.moveTo(l[0],l[1]).lineTo(c[0],c[1]).lineTo(r[0],r[1]).lineTo(n[0],n[1]).closePath()}}),CubeTop=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(t,e){const o=[e.x,e.y],l=[e.x+10,e.y-5],c=[e.x,e.y-10],r=[e.x-10,e.y-5];t.moveTo(o[0],o[1]).lineTo(l[0],l[1]).lineTo(c[0],c[1]).lineTo(r[0],r[1]).closePath()}});echarts.graphic.registerShape("CubeLeft",CubeLeft),echarts.graphic.registerShape("CubeRight",CubeRight),echarts.graphic.registerShape("CubeTop",CubeTop);const MAX=[10,80,60,40],VALUE=[5,60,40,20],legendData=[{name:"通讯故障",textStyle:{color:"#ccc"},itemStyle:{color:"#63EAEB"}},{name:"屏体故障",textStyle:{color:"#ccc"},itemStyle:{color:"#2087FE"}}];option={backgroundColor:"#010d3a",legend:{selectedMode:!1,left:"40%",bottom:"10%",textStyle:{color:"#cccccc",fontSize:14},data:legendData},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},borderColor:"rgba(255,255,255,.3)",backgroundColor:"rgba(13,5,30,.6)",textStyle:{color:"white"},borderWidth:1,padding:5,formatter:function(t){var e=t[0].name+"</br>"+t[0].marker+t[0].seriesName+"："+t[1].value+"</br>"+t[1].marker+t[1].seriesName+"："+(t[0].value-t[1].value)+"</br>";return e}},grid:{left:20,right:40,bottom:"19%",top:107,containLabel:!0},xAxis:{type:"category",axisLine:{show:!0,lineStyle:{width:2,color:"#2B7BD6"}},axisTick:{show:!1},axisLabel:{fontSize:14},data:["全彩屏","双基色屏","简易屏","条形屏"]},yAxis:{type:"value",axisLine:{show:!0,lineStyle:{width:2,color:"#2B7BD6"}},splitLine:{show:!0,lineStyle:{color:"#153D7D"}},axisTick:{show:!1},axisLabel:{fontSize:14}},series:[{type:"custom",name:"屏体故障",renderItem:function(t,e){const o=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#51DDE1"},{offset:1,color:"#1DBE98"}])}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#51DDE1"},{offset:1,color:"#1DBE98"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#63EAEB"},{offset:1,color:"#63EAEB"}])}}]}},data:MAX},{type:"custom",name:"通讯故障",renderItem:(t,e)=>{const o=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#3479EB"},{offset:1,color:"#5C33EB"}])}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#2668DC"},{offset:1,color:"#481AB7"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#2B7DFB"},{offset:1,color:"#2B7DFB"}])}}]}},data:VALUE}]};
