var convertRatePostion=10;option={backgroundColor:"#fff",height:350,legend:{show:!0,top:20,textStyle:{fontSize:10},data:["用户群A","用户群B"]},xAxis:{min:-100,max:100,axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"#eee",type:"dotted"}},axisLabel:{formatter:function(l,e){return Math.abs(l)+"%"},color:"#aaa",fontSize:10}},yAxis:{z:11,axisLine:{show:!0,lineStyle:{color:"#fff",width:1}},data:["进入首页","0a","开始注册","ab","填写手机号","bc","发送验证码","cd","注册成功"],inverse:!0,axisTick:{show:!1},axisLabel:{show:!0,color:"#000",interval:1,fontSize:11}},animationDurationUpdate:1200,series:[{type:"bar",z:9,itemStyle:{normal:{color:"rgb(255, 184, 163, 0.3)"}},silent:!0,barWidth:40,barGap:"-100%",data:[100,null,100,null,70,null,25,null,11]},{name:"用户群B",type:"bar",barWidth:40,z:10,data:[100,null,70,null,25,null,11,null,9],itemStyle:{color:"#f4b93b"},markPoint:{symbol:"triangle",symbolSize:[40,25],symbolRotate:180,label:{position:"insideTop",distance:3,fontSize:8},itemStyle:{color:"#bbb"},data:[{value:"70%",xAxis:convertRatePostion,yAxis:"0a"},{value:"38%",xAxis:convertRatePostion,yAxis:"ab"},{value:"40%",xAxis:convertRatePostion,yAxis:"bc"},{value:"82%",xAxis:convertRatePostion,yAxis:"cd"}]}},{type:"bar",z:9,itemStyle:{normal:{color:"rgb(255, 184, 163, 0.3)"}},silent:!0,barWidth:40,barGap:"-100%",data:[-100,null,-100,null,-90,null,-45,null,-21]},{name:"用户群A",type:"bar",barWidth:40,z:10,data:[-100,null,-90,null,-45,null,-21,null,-11],itemStyle:{color:"#00a0e9"},markPoint:{symbol:"triangle",symbolSize:[40,25],symbolRotate:180,label:{position:"insideTop",distance:3,fontSize:8},itemStyle:{color:"#bbb"},data:[{value:"90%",xAxis:-convertRatePostion,yAxis:"0a"},{value:"50%",xAxis:-convertRatePostion,yAxis:"ab"},{value:"45%",xAxis:-convertRatePostion,yAxis:"bc"},{value:"50%",xAxis:-convertRatePostion,yAxis:"cd"}]}}]};
