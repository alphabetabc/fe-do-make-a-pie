var xdata=["交警","志愿者","巡特警","特警","交通辅助","机关合成队"],data=[980,410,798,960,410,220];option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){let t='<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:#02C4DD"></span>';return e[0].name+"<br>备勤及可增援力量："+e[0].value}},grid:{left:"4%",right:"4%",bottom:"3%",top:"15%",containLabel:!0},xAxis:{data:xdata,triggerEvent:!0,axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"rgba(193, 207, 220, 1)"}},axisLabel:{show:!0,rotate:0,interval:0,textStyle:{padding:[14,0,0,0],fontSize:14,color:"rgba(0, 0, 0, 1)"}}},yAxis:{triggerEvent:!0,nameTextStyle:{color:"rgba(255,255,255,1)",fontSize:16,padding:[0,0,10,-20]},splitLine:{show:!0,lineStyle:{color:"rgba(193, 207, 220, 1)"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,textStyle:{color:"rgba(0, 0, 0, 0.72)",fontSize:16}}},series:[{name:"备勤及可增援力量",barMinHeight:10,type:"pictorialBar",barCategoryGap:"60%",symbol:"path://M0,10 L10,10 L5,0 L0,10 z",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(40, 204, 228, 1)"},{offset:.5,color:"RGBA(184, 240, 251, 1)"},{offset:1,color:"RGBA(255, 255, 255, 1)"}])}},label:{normal:{show:!1}},data,z:10}]};