option={backgroundColor:"#2a2c30",legend:{data:["计划","实际","预测"]},grid:{left:"3%",right:"4%",bottom:"10%",containLabel:!0},toolbox:{show:!0,top:-5,right:15,feature:{saveAsImage:{}}},yAxis:{type:"value"},xAxis:[{type:"category",data:["01","02","03","04","05","06","07","08","09","10","11","12"],axisLine:{show:!0,lineStyle:{color:"#6d7483"}},axisLabel:{color(a){return a==="05"?"#67C23A":"#6d7483"}}},{type:"category",data:["01","02","03","04","05","06","07","08","09","10","11","12"],show:!1}],dataZoom:[{type:"inside",show:!0,start:0,end:50,xAxisIndex:0},{type:"inside",show:!0,start:0,end:50,xAxisIndex:1}],series:[{type:"bar",barGap:0,xAxisIndex:1,barWidth:15},{name:"计划",type:"bar",barWidth:15,data:[8,15,10,20,42,24,57,24,7,6,4,38],label:{normal:{show:!0,position:"top"}},itemStyle:{normal:{barBorderRadius:30,color:"#1ca8ae"}}},{name:"实际",type:"bar",xAxisIndex:1,barGap:"0",barWidth:15,data:[5,51,51,20,42,24,57,24,7,6,48,96],label:{normal:{show:!0,position:"top"}},itemStyle:{normal:{barBorderRadius:30,color:"#0279ff"}}},{name:"预测",type:"bar",barGap:0,barWidth:15,data:[10,10,30,51,51,51,20,42,24,57,24,45],label:{normal:{show:!0,position:"top"}},itemStyle:{normal:{barBorderRadius:30,color:"rgba(103,92,230, 0.5)"}}}]};
