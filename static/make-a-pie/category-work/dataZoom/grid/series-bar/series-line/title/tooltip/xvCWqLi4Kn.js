option={tooltip:{show:!0,trigger:"axis",axisPointer:{type:"line",lineStyle:{color:"transparent"}},formatter:function(e){console.log(e)}},title:{text:"测试",left:50,textStyle:{fontSize:14,color:"#666666",fontWeight:300}},grid:{top:30,bottom:50},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},boundaryGap:!1,axisLine:{onZero:!1,lineStyle:{}},data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value"}],dataZoom:{type:"inside"},series:[{type:"bar",barWidth:"20",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"transparent"},{offset:0,color:"transparent"}],!1)},emphasis:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgba(2, 196, 251,1)"},{offset:0,color:"rgba(2, 196, 251,.1)"}],!1)}},data:[5.9,6.9,10.1,11.7,4.3,6.2,21.6,43.6,51.4,10.4,17.3,.7],backgroundStyle:{color:"rgba(220, 220, 220, 0.8)"}},{name:"2017 降水量",type:"line",itemStyle:{normal:{show:!1,color:"#3282FF",lineStyle:{color:"#3282FF"},label:{show:!1,position:"top",textStyle:{color:"#999999",fontSize:10}}},emphasis:{show:!0,color:"#3282FF",borderColor:"#ffffff",label:{show:!0,position:"top",textStyle:{color:"#fff",fontSize:16,padding:[10,10,10,10],backgroundColor:"rgba(24, 71, 185, .6)",borderRadius:4}}}},data:[5.9,6.9,10.1,11.7,4.3,6.2,21.6,43.6,51.4,10.4,17.3,.7]}]};