var xAxisData=["组合1","组合2","组合3","组合4","组合5","组合6","组合7"],seriesData=[.1,.52,.2,.34,.39,.33,.22];option={color:["#ff7632"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"2%",bottom:"30",containLabel:!0},xAxis:[{type:"category",axisTick:{show:!1},axisLine:{lineStyle:{color:"#ccc"}},splitLine:{show:!1},axisLabel:{color:"#666"},data:xAxisData}],legend:{bottom:"0"},yAxis:[{type:"value",name:"收益率",nameTextStyle:{color:"#666"},axisTick:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{color:"#666"}}],series:[{name:"收益率",type:"bar",barWidth:"40",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255,118,50,0.2)"},{offset:1,color:"rgba(255,118,50,1)"}],!1),barBorderRadius:[30,30,30,30],shadowColor:"rgba(255,118,50,1)",shadowBlur:4}},barMinWidth:"30",data:seriesData}]};
