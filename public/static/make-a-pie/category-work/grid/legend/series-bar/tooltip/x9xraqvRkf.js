var data1=["50","60","30"],data2=["40","60","20"],data3=["30","50","10"],data4=["40","60","20"],data5=["30","50","10"];option={backgroundColor:"#fff",tooltip:{},legend:{show:!1},color:["#071960","#1740B4","#02DF82","#F87A0F","#FF3574"],grid:{left:"3%",right:"4%",top:"10%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",axisLine:{lineStyle:{color:"#1B3F81"}},axisLabel:{interval:0,margin:15,textStyle:{color:"#6B9DD7",fontStyle:"normal",fontSize:14}},data:["第一次","第二次","第三次"]}],yAxis:[{type:"value",axisLabel:{interval:0,margin:15,textStyle:{color:"#6B9DD7",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:14}},axisLine:{lineStyle:{color:"#1B3F81"}},splitLine:{lineStyle:{color:"#1B3F81"}}}],series:[{name:"年度指标",type:"bar",yAxisIndex:0,barWidth:"40px",itemStyle:{normal:{show:!0,borderWidth:0}},data:data1},{name:"半年指标",type:"bar",yAxisIndex:0,itemStyle:{normal:{show:!0,borderWidth:0}},barWidth:"40px",data:data2},{name:"完成值",type:"bar",yAxisIndex:0,barWidth:"40px",itemStyle:{normal:{show:!0,borderWidth:0}},data:data3}]};