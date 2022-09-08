const CubeLeft=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(l,e){const t=e.xAxisPoint,o=[e.x,e.y],n=[e.x-13,e.y-13],c=[t[0]-13,t[1]-13],s=[t[0],t[1]];l.moveTo(o[0],o[1]).lineTo(n[0],n[1]).lineTo(c[0],c[1]).lineTo(s[0],s[1]).closePath()}}),CubeRight=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(l,e){const t=e.xAxisPoint,o=[e.x,e.y],n=[t[0],t[1]],c=[t[0]+18,t[1]-9],s=[e.x+18,e.y-9];l.moveTo(o[0],o[1]).lineTo(n[0],n[1]).lineTo(c[0],c[1]).lineTo(s[0],s[1]).closePath()}}),CubeTop=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(l,e){const t=[e.x,e.y],o=[e.x+18,e.y-9],n=[e.x+5,e.y-22],c=[e.x-13,e.y-13];l.moveTo(t[0],t[1]).lineTo(o[0],o[1]).lineTo(n[0],n[1]).lineTo(c[0],c[1]).closePath()}});echarts.graphic.registerShape("CubeLeft",CubeLeft),echarts.graphic.registerShape("CubeRight",CubeRight),echarts.graphic.registerShape("CubeTop",CubeTop);const MAX=[300,300,300,300,300,300,300,300,300,300,300,300,300,300],VALUE=[21.9,26.8,24.2,54.9,74.5,78.3,119,126.9,190.8,123.2,156.2,169.3,179.5,155.5];option={backgroundColor:"#fff",title:{show:!0,text:"xxx的各题型失分率",left:40+"%"},legend:{data:["已讲评","未讲评"]},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(l,e,t){const o=l[1];return o.name+" : "+o.value}},grid:{left:40,right:40,bottom:100,top:100,containLabel:!0},xAxis:{type:"category",data:["看图写作","中译英","完型选择","英译中","听短对话","阅读选择","书面表达","读后续写"],axisLine:{show:!1,lineStyle:{color:"#999"}},offset:25,axisTick:{show:!1,length:0,alignWithLabel:!0,lineStyle:{color:"#999"}},axisLabel:{show:!0,fontSize:16}},yAxis:{name:"失分率（%）",type:"value",axisLine:{show:!1,lineStyle:{color:"#999"}},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,fontSize:16},boundaryGap:["20%","20%"]},series:[{type:"custom",renderItem:function(l,e){const t=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(47,102,192,.27)"}},{type:"CubeRight",shape:{api:e,x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(59,128,226,.27)"}},{type:"CubeTop",shape:{api:e,x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(72,156,221,.27)"}}]}},data:MAX},{type:"custom",renderItem:(l,e)=>{const t=e.coord([e.value(0),e.value(1)]);var o=e.value(1)>2e3?"red":new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(67,102,243,1)"},{offset:1,color:"RGB(45,188,255,0.5)"}]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:o}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:o}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:o}}]}},data:VALUE},{type:"bar",label:{normal:{show:!0,position:"top",fontSize:16,color:"#000",offset:[2,-25]}},itemStyle:{color:"transparent"},tooltip:{},data:MAX}]};