var colors=["#5793f3","#DC143C","#68228B","#00CD00","#EE9A00","#0f0f0f"];option={color:colors,title:{text:"七十四英语教案审核速度图",subtext:"七十四英语审核速度图",itemGap:5,left:"40",textStyle:{fontSize:18}},tooltip:{trigger:"axis"},grid:{right:"5%"},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["七年级","八年级","九年级","中考复习"]},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},data:function(){for(var a=[],e=1;e<=61;e++)a.push("第"+e+"份教案");return a}()}],yAxis:[{type:"value",name:"",min:0,max:14,show:!1,position:"right",axisLine:{lineStyle:{color:colors[0]}},axisLabel:{formatter:"{value} ml"}},{type:"value",name:"",show:!1,min:0,max:7,position:"right",offset:0,axisLine:{lineStyle:{color:colors[1]}},axisLabel:{formatter:"{value} ml"}},{type:"value",name:"时间间隔",nameLocation:"middle",position:"left",min:0,max:14,axisTick:{alignWithLabel:!1},axisLine:{lineStyle:{}},nameTextStyle:{fontSize:"",fontWeight:""},axisLabel:{formatter:"{value}天 "}}],series:[{name:"七年级",type:"bar",yAxisIndex:0,barGap:-1,barWidth:1.5,data:[1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1]},{name:"八年级",type:"bar",yAxisIndex:0,barWidth:1.5,data:[,,,,,,,,,,,,,,,,,,,,,1,1,1,1,1,1,1,1,2,3,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,9,11,1,1,1]},{name:"九年级",type:"bar",yAxisIndex:0,barWidth:1.5,data:[]},{name:"中考复习",type:"bar",yAxisIndex:0,barWidth:1.5,data:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,1,1,1,1]}]};
