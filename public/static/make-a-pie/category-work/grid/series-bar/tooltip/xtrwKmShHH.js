var xdata=["党委会","董事会","监事会","经理层"],data=[9,0,1,0];option={backgroundColor:"#0a1a38",tooltip:{trigger:"axis",backgroundColor:"#202630",borderColor:"#202630",textStyle:{color:"#fff",fontSize:12},axisPointer:{type:"line",lineStyle:{type:"solid"}}},grid:{top:"15%",right:"10%",left:"10%",bottom:"12%"},xAxis:[{type:"category",color:"#59588D",data:xdata,axisLabel:{margin:20,color:"#809dbe",textStyle:{fontSize:12}},axisLine:{show:!0,lineStyle:{color:"#457fa3"}},axisTick:{show:!0}}],yAxis:[{max:10,min:-2,axisLabel:{color:"#ccc",textStyle:{fontSize:12}},axisLine:{show:!1,lineStyle:{color:"rgba(107,107,107,0.37)"}},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(33, 57, 93,.9)"}}}],series:[{type:"bar",data,barWidth:"30px",label:{},itemStyle:{normal:{color:function(e){let o=e.value>0?["#FF9A22","#FFD56E"]:["#FFD56E","#FF9A22"];return new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(70, 157, 226)"},{offset:1,color:"rgba(70, 157, 226,.1)"}],!1)}}}}]};
