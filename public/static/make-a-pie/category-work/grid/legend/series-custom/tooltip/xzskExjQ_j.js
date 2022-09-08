const wid=30,w1=Math.sin(Math.PI/6)*30,w2=Math.sin(Math.PI/3)*30,snapHeight=30/4,CubeLeft=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(l,e){const t=e.xAxisPoint,o=[e.x,e.y],r=[e.x-w2,e.y],c=[e.x-w2,t[1]],n=[e.x,t[1]];l.moveTo(o[0],o[1]).lineTo(r[0],r[1]).lineTo(c[0],c[1]).lineTo(n[0],n[1]).closePath()}}),CubeRight=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(l,e){const t=e.xAxisPoint,o=[e.x,e.y],r=[e.x,t[1]],c=[e.x+w1,t[1]-w2+snapHeight],n=[e.x+w1,e.y-w2+snapHeight];l.moveTo(o[0],o[1]).lineTo(r[0],r[1]).lineTo(c[0],c[1]).lineTo(n[0],n[1]).closePath()}}),CubeTop=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(l,e){const t=[e.x,e.y],o=[e.x+w1,e.y-w2+snapHeight],r=[e.x-w2+w1,e.y-w2+snapHeight],c=[e.x-w2,e.y];l.moveTo(t[0],t[1]).lineTo(o[0],o[1]).lineTo(r[0],r[1]).lineTo(c[0],c[1]).closePath()}});echarts.graphic.registerShape("CubeLeft",CubeLeft),echarts.graphic.registerShape("CubeRight",CubeRight),echarts.graphic.registerShape("CubeTop",CubeTop);var option={legend:{data:["a","b","c","d"],selectedMode:!0,textStyle:{color:"white",fontSize:20},top:"8%",itemWidth:30,itemHeight:15,itemGap:30},backgroundColor:"black",tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(l){let e="";return e+=l[0].name+"<br>",$(l).each(function(t,o){e+=o.seriesName+":"+o.value+"<br>"}),e}},grid:{top:"25%",left:"6%",bottom:"10%",right:"5%",containLabel:!0},xAxis:{type:"category",data:["火","风","光"],axisLine:{show:!0,lineStyle:{color:"#3e6f8e",width:2}},axisTick:{show:!1,length:9,alignWithLabel:!0,lineStyle:{color:"#AAA"}},axisLabel:{fontSize:20,margin:30,color:"white"}},yAxis:{name:"单位：万千瓦",type:"value",nameTextStyle:{color:"white",fontSize:20},axisLine:{show:!1,lineStyle:{color:"#0a2961"}},axiosTick:{show:!1},axisLabel:{color:"white",fontSize:20,margin:30},splitLine:{show:!0,lineStyle:{color:"#ffffff",opacity:.2,width:3}},nameTextStyle:{color:"white",fontSize:20},nameGap:40},series:[{name:"a",type:"custom",renderItem:(l,e)=>{const t=e.coord([e.value(0),e.value(1)]);t[0]=t[0]+30*-2;const o=e.coord([e.value(0),0]);return o[0]=o[0]+30*-2,{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:o},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#3bdcff"},{offset:1,color:"#0079e4"}])}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:o},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#2ea0d5"},{offset:1,color:"#2ea0d5"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:o},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1680bd"},{offset:1,color:"#1680bd"}])}}]}},color:"#55B6F8",data:[100,200,300]},{name:"b",type:"custom",renderItem:(l,e)=>{const t=e.coord([e.value(0),e.value(1)]);t[0]=t[0]+30*0;const o=e.coord([e.value(0),0]);return o[0]=o[0]+30*0,{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:o},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#047ad6"},{offset:1,color:"#0243e5"}])}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:o},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1952bb"},{offset:1,color:"#1952bb"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:o},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#01389e"},{offset:1,color:"#01389e"}])}}]}},color:"#FB8C91",data:[120,220,320]},{name:"c",type:"custom",renderItem:(l,e)=>{const t=e.coord([e.value(0),e.value(1)]);t[0]=t[0]+30*2;const o=e.coord([e.value(0),0]);return o[0]=o[0]+30*2,{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:o},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#0dbd54"},{offset:1,color:"#008460"}])}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:o},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#189878"},{offset:1,color:"#189878"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:o},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#047d5f"},{offset:1,color:"#047d5f"}])}}]}},color:"#36D6D7",data:[140,240,340]},{name:"d",type:"custom",renderItem:(l,e)=>{const t=e.coord([e.value(0),e.value(1)]);t[0]=t[0]+30*4;const o=e.coord([e.value(0),0]);return o[0]=o[0]+30*4,{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:o},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#584af3"},{offset:1,color:"#2b1fbf"}])}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:o},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#3f18bd"},{offset:1,color:"#3f18bd"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:o},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#441ba1"},{offset:1,color:"#441ba1"}])}}]}},color:"blue",data:[140,240,340]}]};
