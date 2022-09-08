const CubeLeft=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(n,e){const t=e.xAxisPoint,c=[e.x+7,e.y],r=[e.x-10,e.y],o=[t[0]-10,t[1]],l=[t[0]+7,t[1]];n.moveTo(c[0],c[1]).lineTo(r[0],r[1]).lineTo(o[0],o[1]).lineTo(l[0],l[1]).closePath()}}),CubeRight=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(n,e){const t=e.xAxisPoint,c=[e.x+7,e.y],r=[t[0]+7,t[1]],o=[t[0]+15,t[1]-10],l=[e.x+15,e.y-10];n.moveTo(c[0],c[1]).lineTo(r[0],r[1]).lineTo(o[0],o[1]).lineTo(l[0],l[1]).closePath()}}),CubeTop=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(n,e){const t=[e.x+7,e.y],c=[e.x+15,e.y-10],r=[e.x-2,e.y-10],o=[e.x-10,e.y];n.moveTo(t[0],t[1]).lineTo(c[0],c[1]).lineTo(r[0],r[1]).lineTo(o[0],o[1]).closePath()}});echarts.graphic.registerShape("CubeLeft",CubeLeft),echarts.graphic.registerShape("CubeRight",CubeRight),echarts.graphic.registerShape("CubeTop",CubeTop),option={backgroundColor:"rgb(2,35,75)",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"0",right:"0",top:"8%",bottom:"0",containLabel:!0},legend:{data:["一","二","三"],show:!1},xAxis:{type:"category",data:["测试1","测试2","测试3"],axisLine:{show:!0,lineStyle:{color:"rgb(177,182,189)"}},axisTick:{show:!1,length:9,alignWithLabel:!0,lineStyle:{color:"#7DFFFD"}},axisLabel:{fontSize:12}},yAxis:{type:"value",min:0,axisLine:{show:!1,lineStyle:{color:"rgb(177,182,189)"}},splitLine:{show:!0},axisLabel:{fontSize:12}},series:[{type:"custom",name:"一",renderItem:(n,e)=>{const t=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"#3D83E3"},{offset:0,color:"#47B5E4"}])}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"#3D83E3"},{offset:0,color:"#47B5E4"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"#3D83E3"},{offset:0,color:"#47B5E4"}])}}]}},data:[200,300,350]},{type:"custom",name:"二",renderItem:(n,e)=>{let t=new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FFB60F"},{offset:1,color:"#FFB60F"}]),c=new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FFB60F"},{offset:1,color:"#FFB60F"}]),r={color:"#FFB60F"};var o=e.coord([e.value(0),e.value(1)]);o=[o[0]+60,o[1]];var l=e.coord([e.value(0),0]);return l=[l[0]+60,l[1]],{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:l},style:{fill:t}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:l},style:{fill:c}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:l},style:{fill:r}}]}},data:[200,400,350]}]};