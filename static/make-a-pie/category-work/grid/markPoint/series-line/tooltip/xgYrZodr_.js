var itemStyle1={normal:{color:"#8dfeee",lineStyle:{color:"#8dfeee",width:1},areaStyle:{color:"rgba(174,254,251,0.8)"}}},itemStyle2={normal:{color:"#739dec",lineStyle:{color:"#739dec",width:1},areaStyle:{color:"rgba(115,157,236,0.5)"}}},option={tooltip:{trigger:"axis",formatter:function(a){console.log(a);for(var l,e=0;e++;e<7)l="TCP一二步握手成功率",l+=a[e].seriesName+":"+a[e].value;return l}},axisPointer:{link:{xAxisIndex:"all"}},color:["#aefefb","#739dec"],grid:[{left:"2%",top:"10%",bottom:"0%",height:"40%",width:"46%",containLabel:!0},{left:"51%",right:"0%",top:"10%",bottom:"0%",height:"40%",width:"46%",containLabel:!0},{left:"2%",top:"59%",bottom:"0%",height:"40%",width:"46%",containLabel:!0},{left:"51%",right:"0%",top:"59%",bottom:"0%",height:"40%",width:"46%",containLabel:!0}],xAxis:[{type:"category",boundaryGap:!1,data:["0","2","4","6","8","10","12"],axisLine:{show:!1,lineStyle:{color:"#6A6A6A"}},axisTick:{show:!1}},{gridIndex:1,type:"category",boundaryGap:!1,data:["0","2","4","6","8","10","12"],axisLine:{show:!1,lineStyle:{color:"#6A6A6A"}},axisTick:{show:!1}},{gridIndex:2,type:"category",boundaryGap:!1,data:["0","2","4","6","8","10","12"],axisLine:{show:!1,lineStyle:{color:"#6A6A6A"}},axisTick:{show:!1}},{gridIndex:3,type:"category",boundaryGap:!1,data:["0","2","4","6","8","10","12"],axisLine:{show:!1,lineStyle:{color:"#6A6A6A"}},axisTick:{show:!1}}],yAxis:[{name:"TCP一二步握手成功率",nameTextStyle:{align:"left",color:"#333",padding:[0,0,-10,0]},type:"value",axisLine:{show:!1,lineStyle:{color:"#6A6A6A"}},axisTick:{show:!1}},{name:"TCP客户端时延",nameTextStyle:{align:"left",color:"#333",padding:[0,0,-10,0]},gridIndex:1,type:"value",axisLine:{show:!1,lineStyle:{color:"#6A6A6A"}},axisTick:{show:!1}},{gridIndex:2,name:"TCP重传率",nameTextStyle:{align:"left",color:"#333",padding:[0,0,-10,0]},type:"value",axisLine:{show:!1,lineStyle:{color:"#6A6A6A"}},axisTick:{show:!1}},{gridIndex:3,name:"IPTV卡顿时长占比",nameTextStyle:{align:"left",color:"#333",padding:[0,0,-10,0]},type:"value",axisLine:{show:!1,lineStyle:{color:"#6A6A6A"}},axisTick:{show:!1}}],series:[{name:"全网",data:[15,27,134,125,57,15,10],markPoint:{data:[{symbol:"circle",symbolSize:12,coord:["2",47]}]},type:"line",areaStyle:{normal:{}},itemStyle:itemStyle1},{name:"用户群",data:[10,30,10,30,35,58,30],markPoint:{data:[{symbol:"circle",symbolSize:12,coord:["2",30]}]},type:"line",areaStyle:{normal:{}},itemStyle:itemStyle2},{name:"全网",data:[35,47,34,25,57,45,40],markPoint:{data:[{symbol:"circle",symbolSize:12,coord:["2",47]}]},type:"line",xAxisIndex:1,yAxisIndex:1,areaStyle:{normal:{}},itemStyle:itemStyle1},{name:"用户群",data:[20,30,40,30,35,58,30],markPoint:{data:[{symbol:"circle",symbolSize:12,coord:["2",30]}]},type:"line",xAxisIndex:1,yAxisIndex:1,areaStyle:{normal:{}},itemStyle:itemStyle2},{name:"全网",data:[35,47,34,25,57,45,40],markPoint:{data:[{symbol:"circle",symbolSize:12,coord:["2",47]}]},type:"line",xAxisIndex:2,yAxisIndex:2,areaStyle:{normal:{}},itemStyle:itemStyle1},{name:"用户群",data:[20,30,40,30,35,58,30],markPoint:{data:[{symbol:"circle",symbolSize:12,coord:["2",30]}]},type:"line",xAxisIndex:2,yAxisIndex:2,areaStyle:{normal:{}},itemStyle:itemStyle2},{name:"全网",data:[35,47,34,25,57,45,40],markPoint:{data:[{symbol:"circle",symbolSize:12,coord:["2",47]}]},type:"line",xAxisIndex:3,yAxisIndex:3,areaStyle:{normal:{}},itemStyle:itemStyle1},{name:"用户群",data:[20,30,40,30,35,58,30],markPoint:{data:[{symbol:"circle",symbolSize:12,coord:["2",30]}]},type:"line",xAxisIndex:3,yAxisIndex:3,areaStyle:{normal:{}},itemStyle:itemStyle2}]};
