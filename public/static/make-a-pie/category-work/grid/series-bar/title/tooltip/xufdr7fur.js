var xAxisData=["500","750","1000","1250","1500","1750","2000","2250","2500","2750","3000","3250","3500","3750","4000"],data=[30,50,35,45,52,60,68,70,86,90,84,70,45,52,60],option={title:{text:"供应商资质能力"},tooltip:{show:!0,trigger:"item"},xAxis:{name:"万",nameTextStyle:{color:"#000"},data:xAxisData,axisLabel:{interval:1,rotate:-25,fontSize:10}},yAxis:{axisTick:{show:!1},splitLine:{show:!0}},series:[{name:"bar",type:"bar",data,barWidth:10,color:"#0078db",animationDelay:function(a){return a*10}}],animationEasing:"elasticOut"};