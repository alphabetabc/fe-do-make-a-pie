data=[{value:500,name:"针叶林"},{value:435,name:"阔叶林"},{value:580,name:"针阔混交林"},{value:484,name:"疏林地"},{value:300,name:"特规灌木林"},{value:300,name:"灌木经济林"},{value:435,name:"其他灌木林"},{value:380,name:"造林未成林"},{value:484,name:"封育未成林"},{value:300,name:"苗圃地"},{value:300,name:"采伐迹地"},{value:300,name:"火烧迹地"},{value:300,name:"其他无立木林地"},{value:300,name:"宜林荒山荒地"},{value:300,name:"宜林沙荒地"},{value:300,name:"其他宜林地"},{value:300,name:"辅助生产林地"}],getArrByKey=(e,a)=>{let t=a||"value",r=[];return e&&e.forEach(function(n){r.push(n[t])}),r},getSymbolData=e=>{let a=[];for(var t=0;t<e.length;t++)a.push({value:e[t].value,symbolPosition:"end"});return a};const colorList=["#74A3FF","#72B5FF"];option={grid:{top:"10%",bottom:-15,right:100,left:50,containLabel:!0},xAxis:{show:!1},yAxis:[{triggerEvent:!0,show:!0,inverse:!0,data:getArrByKey(data,"name"),axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,inside:!0,color:"#606266",margin:0,padding:[0,0,10,0],align:"left",verticalAlign:"bottom",formatter:function(e,a){return"{title|"+e+"}"},rich:{title:{width:50,fontSize:14}}}},{triggerEvent:!0,show:!0,inverse:!0,data:getArrByKey(data,"name"),axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:0,interval:0,inside:!0,padding:[0,0,10,0],color:"#4CB1A0",fontSize:14,align:"right",verticalAlign:"bottom",formatter:function(e,a){return data[a].value}}}],series:[{type:"bar",showBackground:!0,barMinWidth:"10",backgroundStyle:{opacity:.1,color:"#4D88FE"},yAxisIndex:0,data,barWidth:10,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:colorList[0]},{offset:1,color:colorList[1]}])}}}]};
