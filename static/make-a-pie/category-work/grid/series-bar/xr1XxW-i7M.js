var baifenbi=[.1,1,1],grayBar=[1,1,1],city=["供应链   ","即时通讯   ","综合管理平台   "];option={backgroundColor:["#FFFFFF"],color:["#4CC970"],grid:{left:"30%",right:"50%",bottom:"50%",top:"30%",containLabel:!0},xAxis:[{show:!1},{show:!1}],yAxis:{type:"category",axisLabel:{show:!0,interval:0,color:"#3AC0FC",fontSize:12,padding:[5,5,5,5]},itemStyle:{},axisTick:{show:!1},axisLine:{show:!1},data:city},series:[{show:!0,type:"bar",barGap:"-100%",barWidth:"5px",itemStyle:{normal:{barBorderRadius:5,color:"rgba(0,0,0,0.2)"}},z:1,label:{normal:{show:!0,textStyle:{color:"#2AA2FF"},position:"right",formatter:function(a){return(baifenbi[a.dataIndex]*100).toFixed(1)+"%"}}},data:grayBar},{show:!0,type:"bar",barGap:"-100%",barWidth:"5px",max:1,itemStyle:{normal:{barBorderRadius:5}},labelLine:{show:!1},z:2,data:baifenbi}]};
