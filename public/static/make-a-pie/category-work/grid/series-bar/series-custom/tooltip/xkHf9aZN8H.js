let data=[{level:"6等",landArea:120},{level:"7等",landArea:200},{level:"8等",landArea:230},{level:"9等",landArea:280},{level:"10等",landArea:300},{level:"11等",landArea:200},{level:"12等",landArea:130}];const CubeLeft=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(o,e){const t=e.xAxisPoint,l=[e.x,e.y],r=[e.x-20,e.y-4],a=[t[0]-20,t[1]-4],n=[t[0],t[1]];o.moveTo(l[0],l[1]).lineTo(r[0],r[1]).lineTo(a[0],a[1]).lineTo(n[0],n[1]).closePath()}}),CubeRight=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(o,e){const t=e.xAxisPoint,l=[e.x,e.y],r=[t[0],t[1]],a=[t[0]+8,t[1]-4],n=[e.x+8,e.y-4];o.moveTo(l[0],l[1]).lineTo(r[0],r[1]).lineTo(a[0],a[1]).lineTo(n[0],n[1]).closePath()}}),CubeTop=echarts.graphic.extendShape({shape:{x:0,y:0},buildPath:function(o,e){const t=[e.x,e.y],l=[e.x+8,e.y-4],r=[e.x-11,e.y-8],a=[e.x-20,e.y-4];o.moveTo(t[0],t[1]).lineTo(l[0],l[1]).lineTo(r[0],r[1]).lineTo(a[0],a[1]).closePath()}});echarts.graphic.registerShape("CubeLeft",CubeLeft),echarts.graphic.registerShape("CubeRight",CubeRight),echarts.graphic.registerShape("CubeTop",CubeTop);let MAX=[],VALUE=[],LEV=[],chartData=[].concat(data);chartData.forEach(o=>{VALUE.push(o.landArea),LEV.push(o.level)});let maxItem=[].concat(VALUE).sort((o,e)=>e-o)[0],SUM=0;for(let o of VALUE)SUM+=o,MAX.push(maxItem);option={backgroundColor:"rgba(0, 43, 77, 0.9)",tooltip:{trigger:"item",confine:!1,position:"top",textStyle:{fontSize:12},backgroundColor:"transparent",formatter:function(o){let e=(VALUE[o.dataIndex]/SUM*100).toFixed(2);return`<div class="tooltip">${VALUE[o.dataIndex]}万亩 ${e}%</div>`},extraCssText:"box-shadow: 0 0 20px #00C7FF inset;"},grid:{show:!1,left:0,right:10,bottom:150,top:50,containLabel:!0},xAxis:{type:"category",data:LEV,axisLine:{show:!0,lineStyle:{color:new echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#D2A62E"},{offset:1,color:"#C62129"}])}},offset:10,axisTick:{show:!1},axisLabel:{fontSize:12,color:"#00FFFE"}},yAxis:{show:!1,type:"value",axisLine:{show:!0,lineStyle:{color:"white"}},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{fontSize:12},boundaryGap:["20%","20%"]},series:[{type:"custom",renderItem:function(o,e){const t=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(1,17,33,.5)"}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(1,17,33,.5)"}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:"rgba(1,17,33,.5)"}}]}},data:MAX},{type:"custom",renderItem:(o,e)=>{const t=e.coord([e.value(0),e.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1477BD"},{offset:1,color:"#00FFFE"}])}},{type:"CubeRight",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#002E75"},{offset:1,color:"#00B0D0"}])}},{type:"CubeTop",shape:{api:e,xValue:e.value(0),yValue:e.value(1),x:t[0],y:t[1],xAxisPoint:e.coord([e.value(0),0])},style:{fill:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#33F7FB"},{offset:1,color:"#00FFFE"}])}}]}},data:VALUE},{type:"bar",label:{normal:{show:!1,position:"top",formatter:o=>{switch(o.name){case"6等":return VALUE[0];case"7等":return VALUE[1];case"8等":return VALUE[2];case"9等":return VALUE[3];case"10等":return VALUE[4];case"11等":return VALUE[5];case"12等":return VALUE[6]}},fontSize:10,color:"#fff",offset:[0,-5]}},itemStyle:{color:"transparent"},data:MAX}]};
