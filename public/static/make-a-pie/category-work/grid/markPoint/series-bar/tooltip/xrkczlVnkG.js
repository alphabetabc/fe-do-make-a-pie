var startTime="2001-05-03",endTime="2007-05-02",currentTime="2006-11-25",startDate=new Date(startTime.split("-")[0],startTime.split("-")[1],startTime.split("-")[2]),endDate=new Date(endTime.split("-")[0],endTime.split("-")[1],endTime.split("-")[2]),currentDate=new Date(currentTime.split("-")[0],currentTime.split("-")[1],currentTime.split("-")[2]),es=endDate.getTime()-startDate.getTime(),cs=currentDate.getTime()-startDate.getTime(),payTime0="2002-11-11",payDate0=new Date(payTime0.split("-")[0],payTime0.split("-")[1],payTime0.split("-")[2]),p0_s=payDate0.getTime()-startDate.getTime(),payTime1="2005-05-02",payDate1=new Date(payTime1.split("-")[0],payTime1.split("-")[1],payTime1.split("-")[2]),p1_s=payDate1.getTime()-startDate.getTime(),payTime2="2006-08-22",payDate2=new Date(payTime2.split("-")[0],payTime2.split("-")[1],payTime2.split("-")[2]),p2_s=payDate2.getTime()-startDate.getTime(),payTime3="2007-01-31",payDate3=new Date(payTime3.split("-")[0],payTime3.split("-")[1],payTime3.split("-")[2]),p3_s=payDate3.getTime()-startDate.getTime(),progressValueC=Math.round(cs/es*100),progressValue0=Math.round(p0_s/es*100),progressValue1=Math.round(p1_s/es*100),progressValue2=Math.round(p2_s/es*100),progressValue3=Math.round(p3_s/es*100);option={tooltip:{showContent:!1,trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{opacity:0}}},xAxis:{min:startTime,type:"time",show:!1},yAxis:{type:"category",data:["进度"],show:!1},series:[{name:"计划开始时间",type:"bar",barWidth:20,stack:"总量",label:{normal:{show:!0,position:"insidRight"}},markPoint:{symbol:"diamond",symbolSize:40,data:[{coord:[startTime,"进度"],itemStyle:{normal:{color:"#666666"}}}]},itemStyle:{normal:{barBorderColor:"#0000",color:"#0000"},emphasis:{barBorderColor:"#0000",color:"#0000"}},data:[startTime]},{name:"进度0",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight",formatter:progressValue0+"%"}},markPoint:{symbol:"triangle",symbolOffset:[0,"80%"],symbolSize:30,data:[{coord:[payTime0,"进度"],itemStyle:{normal:{color:"#666666"}}}]},itemStyle:{normal:{color:"#00D020",barBorderRadius:4,shadowBlur:7,shadowColor:"#00D020"},emphasis:{color:"#00D020",shadowBlur:7,shadowColor:"#00D020"}},data:[payTime0]},{name:"进度1",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight",formatter:progressValue1+"%"}},markPoint:{symbol:"triangle",symbolOffset:[0,"80%"],symbolSize:30,data:[{coord:[payTime1,"进度"],itemStyle:{normal:{color:"#666666"}}}]},itemStyle:{normal:{color:"#00D020",barBorderRadius:4,shadowBlur:7,shadowColor:"#00D020"},emphasis:{color:"#00D020",shadowBlur:7,shadowColor:"#00D020"}},data:[payTime1]},{name:"进度2",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight",formatter:progressValue2+"%"}},markPoint:{symbol:"triangle",symbolOffset:[0,"80%"],symbolSize:30,data:[{coord:[payTime2,"进度"],itemStyle:{normal:{color:"#666666"}}}]},itemStyle:{normal:{color:"#DD1111",barBorderRadius:4,shadowBlur:7,shadowColor:"#DD1111"},emphasis:{color:"#EE3333",shadowBlur:15,shadowColor:"#EE3333"}},data:[payTime2]},{name:"当前",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight",formatter:progressValueC+"%"}},markPoint:{symbol:"pin",symbolOffset:[0,"-15%"],data:[{coord:[currentTime,"进度"],itemStyle:{normal:{color:"#666666"}}}]},itemStyle:{normal:{color:"#DD1111",barBorderRadius:4,shadowBlur:7,shadowColor:"#DD1111"},emphasis:{color:"#EE3333",shadowBlur:15,shadowColor:"#EE3333"}},data:[currentTime]},{name:"进度3",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight",formatter:progressValue3+"%"}},markPoint:{symbol:"triangle",symbolOffset:[0,"80%"],symbolSize:30,data:[{coord:[payTime3,"进度"],itemStyle:{normal:{color:"#666666"}}}]},itemStyle:{normal:{color:"#007EBA",barBorderRadius:4,shadowBlur:7,shadowColor:"#007EBA"},emphasis:{color:"#009EDA",shadowBlur:15,shadowColor:"#009EDA"}},data:[payTime3]},{name:"计划结束时间",type:"bar",stack:"总量",markPoint:{symbol:"diamond",symbolSize:40,data:[{coord:[endTime,"进度"],itemStyle:{normal:{color:"#666666"}}}]},itemStyle:{normal:{color:"#007EBA",barBorderRadius:4,shadowBlur:7,shadowColor:"#007EBA"},emphasis:{color:"#009EDA",shadowBlur:15,shadowColor:"#009EDA"}},data:[endTime]}]};
