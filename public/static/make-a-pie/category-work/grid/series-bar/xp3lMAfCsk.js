var dataLine=[1500,200,100],myColor=["#CC0000","#FF9900","#33CC00"];option={backgroundColor:"#101E40",grid:[{left:"5%",top:"5%",right:"8%",bottom:"1%",containLabel:!0}],xAxis:[{max:2e3,show:!1}],yAxis:[{axisTick:{show:!1},axisLine:{show:!1},axisLabel:{textStyle:{color:"#fff",fontSize:16},formatter:function(t){return t+" :单位"}},data:["紧急","严重","一般"]},{axisTick:"none",axisLine:"none",show:!1,axisLabel:{textStyle:{color:"#fff",fontSize:0},formatter:function(t){return 222}},data:[1,1,1]},{axisLine:{lineStyle:{color:"rgba(0,0,0,0)"}},data:[]}],series:[{name:"条",type:"bar",stack:"b",yAxisIndex:0,data:dataLine,barWidth:20,itemStyle:{normal:{color:function(t){return myColor[t.dataIndex]}}},z:2},{name:"框",type:"bar",yAxisIndex:1,barGap:"-100%",data:[1e4,1e4,1e5],barWidth:20,itemStyle:{normal:{color:"#2F6781"}},z:1,label:{normal:{show:!0,position:"right",distance:10,formatter:function(t){return dataLine[t.dataIndex]+"次"},textStyle:{color:"#fff",fontSize:16}}}}]};