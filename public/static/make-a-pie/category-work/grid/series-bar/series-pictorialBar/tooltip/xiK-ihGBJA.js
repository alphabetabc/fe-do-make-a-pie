var xdata=["1","2"],data=[20,50],maxArr=[100,100];option={backgroundColor:"rgba(5,39,58,1)",tooltip:{trigger:"axis",borderRadius:5,borderColor:"#6baab2",borderWidth:1,formatter:function(t){}},grid:{left:"3%",right:"3%",bottom:"0%",top:"15%",containLabel:!0},xAxis:{data:xdata,triggerEvent:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,rotate:45,interval:0,textStyle:{color:"rgb(95,109,119)"}}},yAxis:{name:"单位：个数",triggerEvent:!0,nameTextStyle:{color:"rgb(95,109,119)",fontSize:18},splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,.1)"}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"rgba(255,255,255,.1)"}},axisLabel:{show:!0,textStyle:{color:"rgb(148,159,167)",fontSize:16}}},series:[{name:"hill",barMinHeight:10,type:"pictorialBar",barCategoryGap:"60%",symbol:"path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#01EAED"},{offset:.5,color:"#02C4DD"},{offset:1,color:"#029ED9"}])}},label:{normal:{show:!0,position:"top",textStyle:{color:"#fff",fontSize:20}}},data,z:10},{name:"hill",type:"bar",barWidth:"20%",symbol:"path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",itemStyle:{normal:{color:"rgba(11,47,68,.8)"}},data:maxArr,z:9}]};