var xAxisData=[],data1=[],data2=[],data3=[],data4=[];function nrandom(e,a){return e+Math.floor(Math.random()*(a-e+1))}for(var i=0;i<30;i++){xAxisData.push("No."+i);let e=nrandom(40,45);data1.push(e);let a=nrandom(25,30);data2.push(a),data3.push(100-e-a)}var emphasisStyle={itemStyle:{shadowBlur:10,shadowColor:"rgba(0,0,0,0.3)"},selectorLabel:{color:"red"}};option={legend:{data:["N2","N3","REM"],left:"center",textStyle:{fontSize:10}},brush:{xAxisIndex:0},tooltip:{textStyle:{fontSize:9}},xAxis:{data:xAxisData,name:"日期",axisLine:{onZero:!0},splitLine:{show:!1},splitArea:{show:!1},name:"时间",nameTextStyle:{fontSize:9}},yAxis:{min:0,max:100,name:"占比",nameTextStyle:{fontSize:9,padding:[1,1,-5,-5]},splitLine:{show:!1},splitNumber:2,axisLabel:{color:"red",fontSize:12}},grid:{bottom:100},dataZoom:{type:"inside"},series:[{name:"N2",type:"bar",stack:"one",barWidth:"100%",emphasis:emphasisStyle,data:data1,z:0,itemStyle:{color:"#1f73aa"}},{name:"N3",type:"bar",stack:"one",emphasis:emphasisStyle,data:data2,z:0,itemStyle:{color:"#004A78"}},{name:"REM",type:"bar",stack:"one",emphasis:emphasisStyle,data:data3,itemStyle:{color:"#97D7F3"}},{name:"markline",type:"line",emphasis:emphasisStyle,data:[],zlevel:100,z:100,markLine:{name:"测试",symbol:"none",data:[{name:"Y 轴值为 100 的水平线",yAxis:80,label:{show:!0,color:"red",position:"end",formatter:"阻力位"}}]}},{name:"area",data:[],type:"line",markArea:{data:[[{xAxis:"No.0",yAxis:0,itemStyle:{color:"#721fc5"}},{xAxis:"No.15",yAxis:20}],[{name:"标域",label:{show:!0,position:["50%","50%"],formatter:"你好",color:"green",fontSize:20},xAxis:"No.8",yAxis:37,itemStyle:{color:"#721fc5"}},{xAxis:"No.23",yAxis:57}]]}}]};
