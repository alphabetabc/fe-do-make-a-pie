app.title="坐标轴刻度与标签对齐",option={tooltip:{trigger:"axis",axisPointer:{type:"line"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:[{value:"水库淹没影响区",textStyle:{color:"#333333"}},{value:"枢纽工程建设区",textStyle:{color:"#333333"}},{value:"城集镇新址占地区",textStyle:{color:"#333333"}}],axisTick:{show:!1,alignWithLabel:!0},nameTextStyle:{color:"#333333"},axisLabel:{show:!0,itemStyle:{color:"#333333"}},axisLine:{lineStyle:{color:"#cccccc"}}}],yAxis:[{type:"value",axisLabel:{show:!0},axisLine:{show:!1},axisTick:{show:!1}}],series:[{name:"累计实际征用地",type:"bar",label:{normal:{show:!1,position:"right",color:"#fff",fontSize:14}},barWidth:"33%",itemStyle:{normal:{color:"#2e9bff",barBorderRadius:[60,60,0,0]}},z:1,data:[{value:"70",itemStyle:{color:"#2e9bff"}},{value:"50",itemStyle:{color:"#ff9a05"}},{value:"80",itemStyle:{color:"#9360ff"}}]},{type:"bar",barGap:"-100%",barWidth:"33%",name:"规划审定",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#AFFAFF"},{offset:1,color:"#69B9ff"}],!1),barBorderRadius:[60,60,0,0]}},max:1,z:2,data:[{value:"20",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#AFFAFF"},{offset:1,color:"#69B9ff"}],!1),barBorderRadius:[60,60,0,0]}}},{value:"32",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#ffffdc"},{offset:1,color:"#ffe088"}],!1),barBorderRadius:[60,60,0,0]}}},{value:"50",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#e6cbff"},{offset:1,color:"#Da8afd"}],!1),barBorderRadius:[60,60,0,0]}}}]}]};