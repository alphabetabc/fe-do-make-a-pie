var data_val=[2220,1682,2791,3e3,4090,3230,2910],xdata=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];option={backgroundColor:"#fff",grid:{left:"2%",right:"4%",bottom:"10%",top:"14%",containLabel:!0},tooltip:{show:!0,backgroundColor:"#E8E093",borderColor:"#E8E093",borderWidth:4,textStyle:{color:"#354060"},formatter:"{b} : {c}¥",extraCssText:"box-shadow: 0 0 10px rgba(37,47,77,0.8)"},title:{text:"交易总量统计",x:"2%",y:"2%",textStyle:{color:"#34374E",fontSize:"22"}},xAxis:{type:"category",data:xdata,boundaryGap:!1,axisLabel:{textStyle:{color:"#AAAFC8"}},axisLine:{show:!1},axisTick:{show:!1}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#AAAFC8"}},splitLine:{show:!0,lineStyle:{color:"rgba(170,175,200,0.8)"}}},series:[{type:"bar",name:"linedemo",tooltip:{show:!1},animation:!1,barWidth:2,hoverAnimation:!1,data:data_val,itemStyle:{normal:{color:"#A2C8E9",opacity:.6,label:{show:!1}}}},{type:"line",name:"linedemo",smooth:!0,symbolSize:25,animation:!0,lineWidth:3,hoverAnimation:!0,data:data_val,symbol:"circle",itemStyle:{normal:{color:"#A2C8E9",shadowBlur:10,shadowColor:"rgba(128,172,209,0.8)",label:{show:!0,position:"top",textStyle:{color:"#fff"}}}}}]};
