var option={tooltip:{show:!1},grid:{top:"20%",left:"5%",right:"5%",bottom:"15%"},xAxis:{data:["平均CPU率","平均内存利用率","平均硬盘利用率"],offset:15,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{color:"#fff",fontSize:14}},yAxis:{min:0,max:100,splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},series:[{type:"bar",barGap:"20%",label:{show:!0,position:"top",color:"#2979ff",fontSize:14,formatter:o=>"{a|"+o.name+`}
{b|`+o.value+"}次",rich:{a:{padding:[7,10],backgroundColor:"rgba(128,128,128,.5)",color:"#fff",fontSize:14},b:{color:"#fff",fontSize:25,align:"center",lineHeight:36}}},itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(41, 121, 255, 1)"},{offset:1,color:"rgba(0, 192, 255, 1)"}],globalCoord:!1}},barWidth:"20%",data:[49,80,67],z:11},{type:"bar",barGap:"10%",label:{show:!1,position:"top",padding:10,color:"#2979ff",fontSize:14,formatter:function(o){return o.value}},itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(141, 121, 255, 1)"},{offset:1,color:"rgba(0, 192, 255, 1)"}],globalCoord:!1}},barWidth:"20%",data:[49,75,85],z:10}],backgroundColor:"#190c12"};