var dataAll=[3200,3200,2200,3800,3e3,3800,3700],xdata=["07.01","07.02","07.03","07.04","07.05","07.06","07.07"],colorSet=new echarts.graphic.LinearGradient(0,1,0,0,[{offset:1,color:"rgba(103,86,254,.9)"},{offset:0,color:"rgba(13,47,119,.7)"}]);option={backgroundColor:"rgba(0,0,0,.2)",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:[{x:"7%",y:"5.5%",width:"78%",height:"38%"},{x:"7%",y2:"15%",width:"78%",height:"38%"}],xAxis:{gridIndex:0,data:xdata,axisTick:{show:!1},nameGap:"50",axisLine:{lineStyle:{color:"rgba(255,255,255,0)"}},axisLabel:{textStyle:{fontSize:14,color:"#fff"}}},yAxis:{min:0,max:4e3,splitLine:{lineStyle:{}},axisLine:{lineStyle:{color:"rgba(255,255,255,0)"}},axisLabel:{formatter:"{value}",color:"#65F5FD",fontSize:14}},series:[{type:"bar",data:dataAll,itemStyle:{normal:{color:colorSet,barBorderRadius:[5,5,5,5]},emphasis:{barBorderRadius:[5,5,5,5]}},barWidth:20,label:{normal:{show:!1,position:"top"}}}]};