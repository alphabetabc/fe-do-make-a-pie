const CubeLeft=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(l,e){const t=e.xAxisPoint,o=[e.x-30,e.y],r=[e.x+1,e.y+20],c=[t[0]+1,t[1]+20],n=[t[0]-30,t[1]];l.moveTo(o[0],o[1]).lineTo(r[0],r[1]).lineTo(c[0],c[1]).lineTo(n[0],n[1]).closePath()}}),CubeRight=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(l,e){const t=e.xAxisPoint,o=[e.x+30,e.y],r=[t[0]+31,t[1]+5],c=[t[0],t[1]+20],n=[e.x,e.y];l.moveTo(o[0],o[1]).lineTo(r[0],r[1]).lineTo(c[0],c[1]).lineTo(n[0],n[1]).closePath()}}),CubeTop=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(l,e){const t=[e.x-30,e.y],o=[e.x,e.y-15],r=[e.x+30,e.y],c=[e.x,e.y+20];l.moveTo(t[0],t[1]).lineTo(o[0],o[1]).lineTo(r[0],r[1]).lineTo(c[0],c[1]).closePath()}});echarts.graphic.registerShape("CubeLeft",CubeLeft),echarts.graphic.registerShape("CubeRight",CubeRight),echarts.graphic.registerShape("CubeTop",CubeTop);const VALUE=[2016,1230,3790];option={backgroundColor:"rgb(1, 12, 36)",tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(l,e,t){const o=l[1];return o.name+" : "+o.value}},grid:{left:"10%",right:"10%",top:"15%",bottom:"10%",containLabel:!0},xAxis:{type:"category",data:["雄县","安新","容城"],axisLine:{show:!0,lineStyle:{color:"white"}},axisTick:{show:!1,length:9,alignWithLabel:!0,lineStyle:{color:"#7DFFFD"}},axisLabel:{fontSize:20}},yAxis:{type:"value",axisLine:{show:!0,lineStyle:{color:"white"}},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{fontSize:16},boundaryGap:["20%","20%"]},series:[{type:"custom",renderItem:(l,e)=>{const t=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(55, 64, 110,0.2)"},{offset:1,color:"rgba(55, 64, 110,0.2)"}])}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#f40"},{offset:1,color:"#f40"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#f40"},{offset:1,color:"#f40"}])}}]}},data:VALUE},{type:"bar",stack:"统筹区域",itemStyle:{color:"transparent"},tooltip:{},data:VALUE},{type:"custom",renderItem:(l,e)=>{const t=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0, 64, 110,1)"},{offset:1,color:"rgba(0, 64, 110,1)"}]),borderColor:"#fff",borderWidth:1,stroke:"#fff"}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#f40"},{offset:1,color:"#f40"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#f40"},{offset:1,color:"#f40"}])}}]}},data:VALUE},{type:"bar",stack:"统筹区域",itemStyle:{color:"transparent"},tooltip:{},data:VALUE}]};