xData=["正常设备","报警设备","离线设备","故障设备"],yData=[14350,298,5037,239],option={backgroundColor:"#061326",grid:{top:"25%",left:"-5%",bottom:"5%",right:"5%",containLabel:!0},tooltip:{show:!0},animation:!1,xAxis:[{type:"category",data:xData,axisTick:{alignWithLabel:!0},nameTextStyle:{color:"#82b0ec"},axisLine:{show:!1,lineStyle:{color:"#82b0ec"}},axisLabel:{textStyle:{color:"#fff"},margin:30}}],yAxis:[{show:!1,type:"value",axisLabel:{textStyle:{color:"#fff"}},splitLine:{lineStyle:{color:"#0c2c5a"}},axisLine:{show:!1}}],series:[{name:"",type:"pictorialBar",symbolSize:[40,10],symbolOffset:[0,-6],symbolPosition:"end",z:12,label:{normal:{show:!0,position:"top",fontSize:15,fontWeight:"bold",color:"#34DCFF"}},color:"#2DB1EF",data:yData},{name:"",type:"pictorialBar",symbolSize:[40,10],symbolOffset:[0,7],z:12,color:"#2DB1EF",data:yData},{name:"",type:"pictorialBar",symbolSize:[50,15],symbolOffset:[0,12],z:10,itemStyle:{normal:{color:"transparent",borderColor:"#2EA9E5",borderType:"solid",borderWidth:1}},data:yData},{name:"",type:"pictorialBar",symbolSize:[70,20],symbolOffset:[0,18],z:10,itemStyle:{normal:{color:"transparent",borderColor:"#19465D",borderType:"solid",borderWidth:2}},data:yData},{type:"bar",barWidth:"40",barGap:"10%",barCateGoryGap:"10%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,.7,[{offset:0,color:"#38B2E6"},{offset:1,color:"#0B3147"}]),opacity:.8}},data:yData}]};