data=[{name:"商品1",value:55.35,label:"55.35%",sum:100},{name:"忠县柑橘大丰骐达",value:25.68,label:"25.68%",sum:100},{name:"商品3",value:16.24,label:"16.24%",sum:100},{name:"商品4",value:6.24,label:"6.24%",sum:100},{name:"商品5",value:5.24,label:"5.24%",sum:100}],data=data.sort((e,t)=>t.value-e.value),getArrByKey=(e,t)=>{let a=t||"value",r=[];return e&&e.forEach(function(o){r.push(o[a])}),r},opt={index:0},color=["#368BFF","#0CEBEA"],option={grid:{top:"2%",bottom:"1%",right:30,left:30,containLabel:!0},tooltip:{show:!0,formatter:"{b} : {c}%"},xAxis:{show:!1},yAxis:[{triggerEvent:!0,show:!0,inverse:!0,data:getArrByKey(data,"name"),axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,align:"right",verticalAlign:"middle",fontSize:16,textStyle:{color:"#FEFEFE"},formatter:function(e,t){var a="";return e.length>4?(a=e.substr(0,4)+"...",a):e}}},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#ffffff",fontSize:"12"}},data:getArrByKey(data,"label")}],series:[{name:"百分比条",type:"bar",showBackground:!0,backgroundStyle:{barBorderRadius:30},yAxisIndex:0,data,barWidth:30,itemStyle:{normal:{show:!0,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:color[0]},{offset:1,color:color[1]}],!1),barBorderRadius:30},emphasis:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#CE8A00"},{offset:1,color:"#EEBA00"}])}},label:{normal:{show:!1,position:"right",textStyle:{fontSize:16},formatter:function(e,t){return e.value}}}}]};
