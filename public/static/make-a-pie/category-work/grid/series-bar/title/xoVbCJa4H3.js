option={title:{text:"磁盘使用情况",subtext:"测试数据"},grid:{y:70,y2:30,x2:20},xAxis:[{inverse:!0,axisLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},splitLine:{show:!1},axisLabel:{color:"#fff",rich:{lg:{backgroundColor:"#339911",color:"#fff",borderRadius:15,align:"center",width:15,height:15}}},data:["C:","D:","E:","F:"]},{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!1},splitLine:{show:!1},data:["C:","D:","E:","F:"]}],yAxis:{show:!1},series:[{name:"条",type:"bar",xAxisIndex:0,barWidth:30,itemStyle:{normal:{color:"rgba(47,255,22,1)",barBorderRadius:30,label:{show:!0,position:"inside",formatter:"{c}%",textStyle:{color:"#E87C25"}}}},data:[90,70,20,10]},{name:"框",type:"bar",xAxisIndex:1,barWidth:40,barGap:"-100%",itemStyle:{normal:{color:"rgba(36,91,8,0.5)",borderColor:"#00c1de",borderWidth:3,barBorderRadius:15,label:{show:!0,formatter:function(e){return e.value>0?e.value+"%":""}}}},data:[100,100,100,100]}]};
