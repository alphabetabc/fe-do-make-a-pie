var mbz=650;option={tooltip:{trigger:"axis",formatter:"{b}月<br/>当前{c}个<br/>目标"+mbz+"个"},grid:{top:"10%",left:"10%",right:"10%",bottom:"10%"},xAxis:{type:"category",data:["01","02","03","04","05","06","07","08","09","10","11","12"],axisLabel:{textStyle:{color:"#000",fontSize:14}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#000"}}},yAxis:{name:"数量（个）",nameTextStyle:{color:"#000",fontSize:14},type:"value",axisLabel:{textStyle:{color:"#000",fontSize:14}},axisTick:{length:3,lineStyle:{color:"#F00"}},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:"#092E4C"}}},series:[{type:"pictorialBar",barWidth:28,itemStyle:{normal:{color:"rgba(0,0,0,0)"}},label:{show:!0,position:"bottom",distance:-7,formatter:function(t){return t.value>=mbz?"{a|}":"{b|}"},rich:{a:{backgroundColor:{image:"/asset/get/s/data-1592185297414-5mugBO3T4.png"},width:28,height:14},b:{backgroundColor:{image:"/asset/get/s/data-1592185303240-PEIFKZG2O.png"},width:28,height:14}}},z:10,data:[522,555,448,1520,321,54,753,495,486,984,912,552],animationEasing:"elasticOut"},{data:[522,555,448,1520,321,54,753,495,486,984,912,552],type:"bar",barWidth:16,z:20,itemStyle:{normal:{color:function(t){return t.value>=mbz?new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0,255,255,0)"},{offset:1,color:"rgba(0,255,255,1)"}]):new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(248,180,24,0)"},{offset:1,color:"rgba(248,180,24,1)"}])}}},label:{show:!0,position:"top",distance:-4,formatter:function(t){return t.value>=mbz?"{a|}":"{b|}"},rich:{a:{backgroundColor:{image:"/asset/get/s/data-1592185403376-ocypxv0hY.png"},width:16,height:8},b:{backgroundColor:{image:"/asset/get/s/data-1592185409290-b4gFOn9x5.png"},width:16,height:8}}},markLine:{silent:!0,symbol:"none",lineStyle:{normal:{color:"#0FF",type:"dotted"}},data:[{yAxis:mbz}],label:{orient:"vertical",normal:{fontSize:11,formatter:"目标值"}}}}]};
