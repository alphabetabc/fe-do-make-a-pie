var colors=["#63B8FF","#EE2C2C","#675bba","#66CD00","#EE9A00","#0f0f0f"];option={color:colors,title:{text:"小学数学教案审核速度图",subtext:"小学数学审核速度图",itemGap:5,left:"40",textStyle:{fontSize:18}},tooltip:{trigger:"axis"},grid:{right:"5%"},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["一年级","二年级","三年级","四年级","五年级","六年级"]},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},data:function(){for(var a=[],e=1;e<=315;e++)a.push("第"+e+"份教案");return a}()}],yAxis:[{type:"value",name:"",min:0,max:14,show:!1,position:"right",axisLine:{lineStyle:{color:colors[0]}},axisLabel:{formatter:"{value} ml"}},{type:"value",name:"",show:!1,min:0,max:7,position:"right",offset:0,axisLine:{lineStyle:{color:colors[1]}},axisLabel:{formatter:"{value} ml"}},{type:"value",name:"时间间隔",nameLocation:"middle",position:"left",min:0,max:14,axisTick:{alignWithLabel:!1},axisLine:{lineStyle:{}},nameTextStyle:{fontSize:"",fontWeight:""},axisLabel:{formatter:"{value}天 "}}],series:[{name:"一年级",type:"bar",yAxisIndex:0,barGap:-1,barWidth:1,data:[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,8,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,2,8,8,8]},{name:"二年级",type:"bar",yAxisIndex:0,barWidth:.5,data:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,1,4,4,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,3,3,3,3,3,4,4,5,5]},{name:"三年级",type:"bar",yAxisIndex:0,barWidth:1.5,data:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,28,0,0,0,1,1,2,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,24,1,1,2,2,2,2,2,2,2,2,3,2,2,2,2,2]},{name:"四年级",type:"bar",yAxisIndex:0,barWidth:.5,data:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,1,0,2,2,0,0,1,3,11,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,1,0,0,0,0,1,1,1,2,3,3,4,16,16]},{name:"五年级",type:"bar",yAxisIndex:0,barWidth:.5,data:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0,0,0,1,1,1,0,0,0,1,0,2,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0]},{name:"六年级",type:"bar",yAxisIndex:0,barWidth:1,data:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,40,3,3,3,3,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,4,4]}]};
