let XData=["12","13","14","15","16","17","18日"],valueData=[67,87,163,78,88,98,158];option={tooltip:{trigger:"axis",axisPointer:{show:!0,status:"shadow",z:-1,shadowStyle:{color:"rgba(251, 169, 128, 0.1)"},type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"6%",containLabel:!0},xAxis:[{position:"bottom",type:"category",axisLine:{show:!0,lineStyle:{color:"#ECF1F6"}},axisTick:{show:!1},axisLabel:{show:!0,rotate:0,fontSize:12,color:"rgba(0, 0, 0, 1)"},splitLine:{show:!0,lineStyle:{color:"rgba(193, 207, 220, 1)",width:0,type:"dashed"}},gridIndex:0,data:XData}],yAxis:[{type:"value",position:"left",minInterval:50,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,rotate:0,fontSize:12,color:"rgba(0, 0, 0, 1)"},splitLine:{show:!0,lineStyle:{color:"rgba(193, 207, 220, 1)",width:1,type:"solid"}}}],series:[{name:"未消防检查的单位数量",type:"bar",data:valueData,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(251, 169, 128, 1)"},{offset:1,color:"rgba(247, 203, 107, 1)"}])}},label:{normal:{show:!0,position:"top",textStyle:{color:"rgba(219, 141, 73, 1)",fontSize:18,fontFamily:"DIN",fontWeight:"bold"}}},barMaxWidth:"25%"}]};