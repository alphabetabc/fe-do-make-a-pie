var colorSet=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#8AFF34"},{offset:1,color:"#D5FF53"}]),labelRight={normal:{label:{position:"right"},color:colorSet}},ydata=["服务满意度","人员到岗率","巡检完成率"],dataArr=[.44,{value:-.23,itemStyle:labelRight},.08];option={backgroundColor:"rgba(0,0,0,.5)",title:{text:"周同比",textStyle:{color:"#fff",fontSize:20},x:"center",y:20},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:80,bottom:30},xAxis:{type:"value",splitLine:{lineStyle:{type:"dashed",color:"#10365B"}},axisTick:{show:!1},axisLine:{lineStyle:{color:"rgba(255,255,255,0)"}},axisLabel:{textStyle:{fontSize:16,color:"#02E3FF"},formatter:"{value}%"}},yAxis:{type:"category",axisLine:{show:!0,lineStyle:{width:3,color:"#194BD0"}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{width:2,color:"rgba(8,25,51,.3)"}},data:ydata},series:[{name:"周同比",type:"bar",stack:"总量",label:{normal:{show:!1,formatter:"{b}%"}},itemStyle:{normal:{show:!1,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#4CE1FF"},{offset:1,color:"#3394FF"}])}},data:dataArr}]};
