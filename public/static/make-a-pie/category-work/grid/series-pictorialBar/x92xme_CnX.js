var maxData=100,myData=["a","b","c","d","e...","f...","g","f...","h...","r","q...","前台接待","SMG","JWC","测试运维"],databeast=[89,59,62,24,32,76,96,14,33,70,68,60,85,92,20],fontSize=16,color="#fff";option={backgroundColor:"#000",xAxis:{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,margin:8,rotate:-45,textStyle:{color,fontSize}},data:myData},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},position:"center",axisLabel:{show:!0,formatter:"{value}%",textStyle:{color,fontSize}},splitLine:{show:!1}},series:[{type:"pictorialBar",symbol:"rect",label:{emphasis:{show:!0,position:"center",offset:[0,0],textStyle:{color:"#000",fontSize}}},itemStyle:{normal:{color:"rgba(52, 147, 177,1)"},emphasis:{color:"rgba(39, 103, 177,0.8)"}},symbolRepeat:"fixed",symbolMargin:"5%",symbolClip:!0,symbolSize:[25,30],symbolBoundingData:100,animationEasing:"elasticOut",data:databeast,animationDelay:function(a,e){return e.index*30}},{type:"pictorialBar",itemStyle:{normal:{color:"rgba(82,110,63,0.2)"}},label:{normal:{show:!1,formatter:function(a){return a.value},position:["0%","0%"],offset:[10,-20],textStyle:{color:"rgba(2,191,138,1)",fontSize:0}}},animationDuration:0,symbolRepeat:"fixed",symbolMargin:"5%",symbol:"rect",symbolSize:[25,30],symbolBoundingData:maxData,data:databeast,z:99999,animationEasing:"elasticOut",animationDelay:function(a,e){return e.index*30}}]};