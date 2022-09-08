const CubeLeft=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(c,e){const t=e.xAxisPoint,o=[e.x,e.y],l=[e.x-6,e.y-6],n=[t[0]-6,t[1]-6],r=[t[0],t[1]];c.moveTo(o[0],o[1]).lineTo(l[0],l[1]).lineTo(n[0],n[1]).lineTo(r[0],r[1]).closePath()}}),CubeRight=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(c,e){const t=e.xAxisPoint,o=[e.x,e.y],l=[t[0],t[1]],n=[t[0]+12,t[1]-6],r=[e.x+12,e.y-6];c.moveTo(o[0],o[1]).lineTo(l[0],l[1]).lineTo(n[0],n[1]).lineTo(r[0],r[1]).closePath()}}),CubeTop=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(c,e){const t=[e.x,e.y],o=[e.x+12,e.y-6],l=[e.x+6,e.y-12],n=[e.x-6,e.y-6];c.moveTo(t[0],t[1]).lineTo(o[0],o[1]).lineTo(l[0],l[1]).lineTo(n[0],n[1]).closePath()}});echarts.graphic.registerShape("CubeLeft",CubeLeft),echarts.graphic.registerShape("CubeRight",CubeRight),echarts.graphic.registerShape("CubeTop",CubeTop);const MAX=[60,60,20,40,30,20],VALUE=[20,23,20,37,23,16];option={title:{text:"",top:32,left:18,textStyle:{fontSize:24}},grid:{left:20,right:20,bottom:20,top:40,containLabel:!0},xAxis:{type:"category",data:["12月","1月","2月","3月","4月","6月"],axisLine:{show:!0,lineStyle:{color:"#A5ACB5"}},offset:5,axisTick:{show:!1,length:9,alignWithLabel:!0,lineStyle:{color:"#3188FF"}},axisLabel:{fontSize:10}},yAxis:{type:"value",axisLine:{show:!0,lineStyle:{color:"#A5ACB5"}},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{fontSize:12},boundaryGap:["20%","20%"]},series:[{type:"custom",renderItem:function(c,e){const t=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(47,102,192,.27)"}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(59,128,226,.27)"}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(72,156,221,.27)"}}]}},data:MAX},{type:"custom",renderItem:(c,e)=>{const t=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#3B80E2"},{offset:1,color:"#49BEE5"}])}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#3B80E2"},{offset:1,color:"#49BEE5"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#3B80E2"},{offset:1,color:"#49BEE5"}])}}]}},data:VALUE},{type:"bar",label:{normal:{show:!0,position:"top",fontSize:12,color:"#A0C5FA",offset:[4,-16]}},itemStyle:{color:"transparent"},data:MAX},{type:"bar",barGap:"-100%",label:{normal:{show:!0,position:"top",fontSize:12,color:"#599EFF",offset:[4,-8]}},itemStyle:{color:"transparent"},data:VALUE}]};