option={title:{text:"服务调用排名",top:"top",left:"center",subtext:"TOP5"},tooltip:{formatter:function(t,a,e){return t.name+" 调用 "+t.data+" 次"}},color:["#2f4554"],grid:{left:"5%",right:"8%",bottom:"3%",containLabel:!0},xAxis:{name:"调用次数",type:"value",splitLine:{show:!1},max:30},yAxis:{type:"category",axisLabel:{interval:0,rotate:30},inverse:!0,data:["addCountry服务(1.0.0)","sayHi服务(2.2.2)","listCountries服务(1.0.0)","sayHello服务(1.0.0)","getCountryById服务(1.0.1)"]},animationDelay:function(t){return t*100},series:[{type:"bar",stack:"chart",barMaxWidth:30,z:3,label:{normal:{position:"right",show:!0}},data:[20,19,15,10,5]},{type:"bar",stack:"chart",barMaxWidth:30,silent:!0,itemStyle:{normal:{color:"#EEE"}},data:echarts.util.map(data,function(t,a){return 30-t})}]};
