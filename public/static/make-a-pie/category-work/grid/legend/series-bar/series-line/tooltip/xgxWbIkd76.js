option={tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},legend:{data:[{name:"新单量",textStyle:{color:"#7d838b"}},{name:"累计单量",textStyle:{color:"#7d838b"}},{name:"人数",textStyle:{color:"#7d838b"}}],top:"0px",textStyle:{color:"#fff"}},xAxis:[{type:"category",data:["8:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"],axisPointer:{type:"shadow"},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#BCC2CA"}},axisLabel:{show:!0,interval:0,textStyle:{color:"#7d838b"}}}],yAxis:[{type:"value",axisLabel:{show:!0,textStyle:{color:"#7d838b"}},splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#BCC2CA"}},axisTick:{show:!1}},{type:"value",show:!0,axisTick:{show:!1},splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#BCC2CA"}},axisLabel:{show:!0,textStyle:{color:"#7d838b"}}}],series:[{name:"新单量",type:"bar",data:[25.6,76.7,135.6,162.2,32.6,20,6.4,3.3],stack:"总量",barWidth:30,itemStyle:{normal:{color:"#FF9080",label:{show:!0,position:"insideTop",formatter:function(e){return e.value>0?e.value:""}}}}},{name:"累计单量",type:"bar",stack:"总量",data:[28.7,70.7,75.6,82.2,48.7,18.8,6,2.3],barWidth:30,itemStyle:{normal:{color:"#00BFB7",label:{show:!0,position:"insideTop",formatter:function(e){return e.value>0?e.value:""}}}}},{name:"人数",type:"line",data:[3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2],yAxisIndex:1,symbolSize:10,itemStyle:{normal:{color:"#FCE630"}},smooth:!0}]};