var barData=[{name:65,value:45},{name:20,value:15},{name:45,value:30},{name:15,value:10}],colorList=["#59c5a7","#51b8fe","#fa827d","#ffa55d","#9c7de1","#5d9eff","#ffdb5d","#ee82ed","#8fca5f","#b995f5"];option={backgroundColor:"#ffffff",color:colorList,xAxis:{type:"category",data:["1-8h","9-24h","25-32h","33-40h"],axisTick:{show:!1},axisLine:{lineStyle:{color:"#51b8fe",width:2}},axisLabel:{textStyle:{color:"#999"}}},yAxis:{name:"[%]",nameLocation:"end",nameTextStyle:{color:"#999"},axisLine:{lineStyle:{color:"#51b8fe",width:2}},axisTick:{show:!1},axisLabel:{textStyle:{color:"#999"}},splitLine:{lineStyle:{color:"#ddd"}}},series:[{name:"任务时长分布图",type:"bar",itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]}}},data:barData,label:{normal:{show:!0,position:"top",offset:[0,-5],textStyle:{fontSize:20},formatter:function(e){return e.data.name}}}}],barCategoryGap:"55%"};