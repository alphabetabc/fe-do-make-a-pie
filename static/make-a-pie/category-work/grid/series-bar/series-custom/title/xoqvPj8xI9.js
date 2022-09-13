const CubeLeft=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(o,e){console.log(o,e);const t=e.yAxisPoint,l=[e.x,e.y],c=[e.x+9,e.y-9],n=[t[0]+9,t[1]-9],r=[t[0],t[1]];o.moveTo(l[0],l[1]).lineTo(c[0],c[1]).lineTo(n[0],n[1]).lineTo(r[0],r[1]).closePath()}}),CubeRight=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(o,e){const t=e.yAxisPoint,l=[e.x,e.y],c=[t[0],t[1]],n=[t[0]+9,t[1]+18],r=[e.x+9,e.y+18];o.moveTo(l[0],l[1]).lineTo(c[0],c[1]).lineTo(n[0],n[1]).lineTo(r[0],r[1]).closePath()}}),CubeTop=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(o,e){const t=[e.x,e.y],l=[e.x+9,e.y+18],c=[e.x+18,e.y+9],n=[e.x+9,e.y-9];o.moveTo(t[0],t[1]).lineTo(l[0],l[1]).lineTo(c[0],c[1]).lineTo(n[0],n[1]).closePath()}});echarts.graphic.registerShape("CubeLeft",CubeLeft),echarts.graphic.registerShape("CubeRight",CubeRight),echarts.graphic.registerShape("CubeTop",CubeTop);const MAX=[6e3,6e3,6e3,6e3,6e3],VALUE=[2012,1230,3790,2349,1654],NAMES=["德州","德城区","陵城区","禹城市","乐陵市"];option={backgroundColor:"#010d3a",title:{text:"",top:32,left:18,textStyle:{color:"#00F6FF",fontSize:24}},grid:{left:20,right:40,bottom:"19%",top:107,containLabel:!0},yAxis:{type:"category",data:NAMES,axisLine:{show:!1,lineStyle:{color:"white"}},offset:20,axisTick:{show:!1,length:9,alignWithLabel:!0,lineStyle:{color:"#7DFFFD"}},axisLabel:{fontSize:10}},xAxis:{type:"value",axisLine:{show:!1,lineStyle:{color:"white"}},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,fontSize:16},boundaryGap:["20%","20%"]},series:[{type:"custom",renderItem:function(o,e){const t=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],yAxisPoint:e.coord([0,e.value(1)])},style:{fill:"rgba(7,29,97,.6)"}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],yAxisPoint:e.coord([0,e.value(1)])},style:{fill:"rgba(10,35,108,.7)"}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],yAxisPoint:e.coord([0,e.value(1)])},style:{fill:"rgba(11,42,106,.8)"}}]}},data:MAX},{type:"custom",renderItem:(o,e)=>{const t=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],yAxisPoint:e.coord([0,e.value(1)])},style:{fill:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#3B80E2"},{offset:1,color:"#49BEE5"}])}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],yAxisPoint:e.coord([0,e.value(1)])},style:{fill:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#3B80E2"},{offset:1,color:"#49BEE5"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],yAxisPoint:e.coord([0,e.value(1)])},style:{fill:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#3B80E2"},{offset:1,color:"#49BEE5"}])}}]}},data:VALUE},{type:"bar",label:{normal:{show:!0,position:"right",formatter:o=>{switch(o.name){case"10kV线路":return VALUE[0];case"公用配变":return VALUE[1];case"35kV主变":return VALUE[2];case"水":}},fontSize:16,color:"#fff",offset:[25,4]}},itemStyle:{color:"transparent"},data:MAX}]};
