const max=100,CubeLeft=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(l,e){const t=e.xAxisPoint,o=[e.x,e.y],a=[e.x-8,e.y-8],r=[t[0]-8,t[1]-8],n=[t[0],t[1]];l.moveTo(o[0],o[1]).lineTo(a[0],a[1]).lineTo(r[0],r[1]).lineTo(n[0],n[1]).closePath()}}),CubeRight=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(l,e){const t=e.xAxisPoint,o=[e.x,e.y],a=[t[0],t[1]],r=[t[0]+7,t[1]-7],n=[e.x+9,e.y-9];l.moveTo(o[0],o[1]).lineTo(a[0],a[1]).lineTo(r[0],r[1]).lineTo(n[0],n[1]).closePath()}}),CubeTop=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(l,e){const t=[e.x,e.y],o=[e.x+9,e.y-9],a=[e.x-1,e.y-16],r=[e.x-8,e.y-8];l.moveTo(t[0],t[1]).lineTo(o[0],o[1]).lineTo(a[0],a[1]).lineTo(r[0],r[1]).closePath()}});echarts.graphic.registerShape("CubeLeft",CubeLeft),echarts.graphic.registerShape("CubeRight",CubeRight),echarts.graphic.registerShape("CubeTop",CubeTop);let dateArr=["05/22","05/23","05/24","05/25","05/26","05/27","05/28"],maxBarDataArr=new Array(dateArr.length).fill(100),barData=[20,30,20,10,40,90,10];option={backgroundColor:"#313131",tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(l,e,t){const o=l[1];return o.name+" : "+o.value}},grid:{left:5,right:30,bottom:30,top:50,containLabel:!0},xAxis:{type:"category",data:dateArr,axisLine:{show:!0,lineStyle:{color:"#4E4E4E"}},offset:25,axisTick:{show:!1,length:9,alignWithLabel:!0,lineStyle:{color:"#7DFFFD"}},axisLabel:{show:!0,fontSize:12,color:"rgba(189,189,189,0.5)",margin:-10,fontFamily:"customFont"}},yAxis:[{type:"value",axisLine:{show:!1,lineStyle:{color:"white"}},splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.2)",type:"dotted"}},axisTick:{show:!1},axisLabel:{show:!0,fontSize:12,color:"rgba(189,189,189,0.5)",fontFamily:"customFont"}},{type:"value",axisLine:{show:!1,lineStyle:{color:"white"}},splitLine:{show:!1,lineStyle:{color:"rgba(255,255,255,0.2)",type:"dotted"}},axisTick:{show:!1},max:100,axisLabel:{show:!0,fontSize:12,formatter:"{value}",color:"rgba(189,189,189,0.5)"}},{type:"value",axisLine:{show:!1,lineStyle:{color:"white"}},splitLine:{show:!1,lineStyle:{color:"rgba(255,255,255,0.2)",type:"dotted"}},axisTick:{show:!1},axisLabel:{show:!1,fontSize:12,formatter:"{value}",color:"rgba(189,189,189,0.5)",fontFamily:"customFont"}}],series:[{type:"custom",renderItem:function(l,e){const t=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(12,50,32,1)"}},{type:"CubeRight",shape:{api:e,x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(10,41,26,1)"}},{type:"CubeTop",shape:{api:e,x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(8,35,22,1)"}}]}},data:maxBarDataArr},{type:"custom",renderItem:(l,e)=>{const t=e.coord([e.value(0),e.value(1)]);var o="rgb(28,177,108)";return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:o}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:o}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:o}}]}},data:barData},{type:"bar",itemStyle:{color:"transparent"},tooltip:{},data:maxBarDataArr}]};
