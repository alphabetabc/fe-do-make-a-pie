xData=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],data1=["24","23","43","13","42","53","23","42","32","53","53","42"],data2=["54","73","32","53","41","15","74","14","82","86","93","54"],option={backgroundColor:"rgba(7, 29, 29,1)",timeline:{show:!1,top:0,data:[]},tooltip:{show:!0},title:{text:"XXXX完成项目数",textStyle:{color:"#FFFFFF",fontWeight:"800",fontSize:"20"},left:"center",top:"2%"},legend:{show:!0,top:"7%",textStyle:{color:"#CDD7D7"},data:["部门一","部门二"]},grid:[{show:!1,left:"10%",top:"10%",bottom:"20",containLabel:!0,width:"33%"},{show:!1,left:"51%",top:"10%",bottom:"20",width:"0%"},{show:!1,right:"10%",top:"10%",bottom:"20",containLabel:!0,width:"33%"}],xAxis:[{type:"value",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},{gridIndex:1,show:!1},{gridIndex:2,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}}],yAxis:[{type:"category",inverse:!0,position:"right",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},data:xData},{gridIndex:1,type:"category",inverse:!0,position:"center",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,align:"center",color:"#CDD7D7",fontSize:14},data:xData},{gridIndex:2,type:"category",inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},data:xData}],series:[{name:"部门一",type:"bar",xAxisIndex:0,yAxisIndex:0,barWidth:15,showBackground:!0,itemStyle:{borderRadius:5,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#3A6ECD"},{offset:1,color:"#4BE6E6"}])},label:{show:!0,position:"left",color:"#4BE6E6"},data:data1},{name:"部门二",type:"bar",xAxisIndex:2,yAxisIndex:2,barWidth:15,showBackground:!0,itemStyle:{borderRadius:5,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#F9DD46"},{offset:1,color:"#F29740"}])},label:{show:!0,position:"right",color:"#F29740"},data:data2}]};
