var xdata=["09-08","09-09","09-10"],data=[850,600,800];option={backgroundColor:"rgba(2, 12, 44, 1)",tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){return t[0].name+"<br>订单数 ："+t[0].value}},grid:{left:"4%",right:"4%",bottom:"3%",top:"15%",containLabel:!0},xAxis:{data:xdata,triggerEvent:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,rotate:0,interval:0,textStyle:{fontSize:14,color:"rgba(102, 105, 126, 1)"}}},yAxis:{triggerEvent:!0,splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.1)"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,textStyle:{color:"rgba(102, 105, 126, 1)",fontSize:16}}},series:[{name:"订单数",barMinHeight:10,type:"pictorialBar",barCategoryGap:"60%",symbol:"path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(18, 142, 137, 1)"},{offset:.5,color:"rgba(18, 142, 137, 0.8)"},{offset:1,color:"rgba(18, 142, 137, 0.3)"}])}},label:{normal:{show:!0,position:"top",textStyle:{color:"rgba(18, 142, 137, 1)",fontSize:20}}},data,z:10}]};
