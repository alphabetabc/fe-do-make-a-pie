var yAxisData=["初中及以下","中专","专科","高中","文盲","硕士、博士等","本科"];option={backgroundColor:"transparent",tooltip:{formatter:"{b} ({c})"},grid:{left:"5%",right:"5%",bottom:"2%",top:"22%",containLabel:!0},xAxis:[{type:"value",axisLabel:{textStyle:{fontSize:14,color:"#282828"}},splitLine:{show:!1},axisLine:{lineStyle:{color:"#282828"}},axisTick:{show:!1}}],yAxis:[{name:"单位:人",type:"category",interval:0,axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisLabel:{textStyle:{fontSize:14,color:"#282828"}},data:yAxisData}],series:[{type:"bar",barWidth:10,showBackground:!0,backgroundStyle:{color:"#E4E7ED"},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#679BFF"},{offset:.8,color:"#639CFD"}],!1),barBorderRadius:[0,5,5,0]}},label:{normal:{show:!0,position:"right",textStyle:{color:"#00FFCD"}}},data:["135","764","692","834","549","734","423"]}]};
