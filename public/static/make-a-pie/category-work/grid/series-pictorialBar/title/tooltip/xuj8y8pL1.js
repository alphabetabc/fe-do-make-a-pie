var maxData=150,greenBar=[50,44,124],symbolMargin="50",titleLeft="9%",titleTop=["6.5%","35.5%","62.5%"],gridLeft="10%",gridRight="30%";option={tooltip:{},title:[{text:"项",top:"0%",right:"6%",textStyle:{color:"#fff",fontWeight:100,fontSize:14}},{text:"985",top:titleTop[0],left:titleLeft,textStyle:{color:"#16fffc",fontWeight:100}},{text:"211",top:titleTop[1],left:titleLeft,textStyle:{color:"#16fffc",fontWeight:100}},{text:"其他",top:titleTop[2],left:titleLeft,textStyle:{color:"#16fffc",fontWeight:100}}],xAxis:{max:maxData,splitLine:{show:!1},offset:10,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},yAxis:{data:["","",""],offset:20,inverse:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{margin:10,textStyle:{color:"#999",fontSize:16}}},grid:{top:"10%",bottom:"3%",left:gridLeft,right:gridRight},series:[{type:"pictorialBar",symbol:"rect",itemStyle:{normal:{barBorderRadius:5,color:"#16fffc"}},symbolRepeat:"fixed",symbolMargin:symbolMargin+"%",symbolClip:!0,symbolSize:[10,20],symbolBoundingData:maxData,data:greenBar,z:99999999,animationEasing:"elasticOut",animationDelay:function(t,e){return e.index*30}},{type:"pictorialBar",itemStyle:{normal:{color:"rgba(54,215,182,0.27)"}},label:{normal:{show:!0,formatter:function(t){return t.value},position:"right",offset:[110,0],textStyle:{color:"#16fffc",fontSize:32,fontWeight:100},align:"right"}},animationDuration:0,symbolRepeat:"fixed",symbolMargin:symbolMargin+"%",symbol:"rect",symbolSize:[10,20],symbolBoundingData:maxData,data:greenBar,z:99999,animationEasing:"elasticOut",animationDelay:function(t,e){return e.index*30}}]};