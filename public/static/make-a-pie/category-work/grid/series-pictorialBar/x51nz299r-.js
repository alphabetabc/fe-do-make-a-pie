var maxData=100,greenBar=[30],symbolMargin="20";option={xAxis:{max:maxData,splitLine:{show:!1},offset:10,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},yAxis:{data:["","",""],offset:20,inverse:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{textStyle:{color:"#999",fontSize:12}}},grid:{top:"40%",bottom:"3%",left:"5%",right:"20%"},series:[{type:"pictorialBar",symbol:"roundRect",itemStyle:{normal:{barBorderRadius:1,color:"#4456AE"}},symbolRepeat:"fixed",symbolMargin:symbolMargin+"%",symbolClip:!0,symbolSize:[7,14],data:greenBar,z:99999999,animationDelay:function(a,e){return e.index*30}},{type:"pictorialBar",itemStyle:{normal:{color:"#15192C"}},label:{normal:{show:!0,formatter:function(a){return a.value},position:"right",offset:[50,3],textStyle:{color:"#000",fontSize:18},align:"right"}},animationDuration:200,symbolRepeat:"fixed",symbolMargin:symbolMargin+"%",symbol:"roundRect",symbolSize:[7,14],symbolBoundingData:maxData,data:greenBar,z:99999}]};
