option={color:"#ffc400",grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"value",splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,formatter:function(a){return a>0?a:-a}}}],yAxis:[{type:"category",axisTick:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{color:"#000"},data:["女","男"]}],series:[{name:"男",type:"bar",barWidth:"40px",stack:"总量",label:{normal:{show:!0,color:"#000",position:"bottom"}},data:[450,""]},{name:"女",type:"bar",barWidth:"40px",stack:"总量",label:{normal:{show:!0,position:"bottom",color:"#000",formatter:function(a){return-a.value}}},data:["",-210]}]};