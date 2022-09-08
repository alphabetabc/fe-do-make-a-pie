const CubeLeft=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(c,e){const o=e.xAxisPoint,t=[e.x,e.y],l=[e.x-5,e.y-5],r=[o[0]-5,o[1]-5],n=[o[0],o[1]];c.moveTo(t[0],t[1]).lineTo(l[0],l[1]).lineTo(r[0],r[1]).lineTo(n[0],n[1]).closePath()}}),CubeRight=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(c,e){const o=e.xAxisPoint,t=[e.x,e.y],l=[o[0],o[1]],r=[o[0]+5,o[1]-5],n=[e.x+5,e.y-5];c.moveTo(t[0],t[1]).lineTo(l[0],l[1]).lineTo(r[0],r[1]).lineTo(n[0],n[1]).closePath()}}),CubeTop=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(c,e){const o=[e.x,e.y],t=[e.x+5,e.y-5],l=[e.x,e.y-10],r=[e.x-5,e.y-5];c.moveTo(o[0],o[1]).lineTo(t[0],t[1]).lineTo(l[0],l[1]).lineTo(r[0],r[1]).closePath()}});echarts.graphic.registerShape("CubeLeft",CubeLeft),echarts.graphic.registerShape("CubeRight",CubeRight),echarts.graphic.registerShape("CubeTop",CubeTop);const MAX=[6e3],VALUE=[2012];option={backgroundColor:"#fff",title:{text:"",top:32,left:18,textStyle:{color:"#dddddd",fontSize:24}},tooltip:{show:!0},grid:{left:20,right:40,bottom:"19%",top:107,containLabel:!0},xAxis:{type:"category",data:["德州"],axisLine:{show:!0,lineStyle:{color:"#dddddd"}},offset:20,axisTick:{show:!1,alignWithLabel:!0,lineStyle:{color:"#dddddd"}},axisLabel:{fontSize:10}},yAxis:{name:"块",type:"value",axisLine:{show:!0,lineStyle:{color:"#dddddd"}},splitLine:{show:!0,lineStyle:{type:"dotted",color:"#dddddd"}},axisTick:{show:!0},axisLabel:{fontSize:16},boundaryGap:["20%","20%"]},series:[{type:"custom",tooltip:{show:!1},renderItem:function(c,e){const o=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(248, 233, 215,.6)"}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(248, 233, 215,.7)"}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(248, 233, 215,.8)"}}]}},data:MAX},{type:"custom",renderItem:(c,e)=>{const o=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#ff7106"},{offset:1,color:"#fdb177"}])}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#ff7106"},{offset:1,color:"#fdb177"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:o[0],y:o[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#ff7106"},{offset:1,color:"#fdb177"}])}}]}},data:VALUE},{type:"line",smooth:"true",symbol:"none",tooltip:{show:!0},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(10,219,250,.3)"},{offset:1,color:"rgba(10,219,250, 0)"}],!1),shadowColor:"rgba(10,219,250, 0.5)",shadowBlur:20}},data:MAX}]};