for(var data=[10],xMax=70,kd=[],i=0,len=70;i<=len;i++)i>70?kd.push("0"):i%5===0?kd.push("5"):kd.push("3");var option={backgroundColor:"#0e1733",xAxis:[{show:!1,min:0,max:70},{show:!1,data:[],min:0,max:70}],yAxis:[{show:!1,data:[]},{show:!1,data:[]},{show:!1,data:[]},{show:!1,min:-110,max:100}],series:[{name:" ",type:"bar",barWidth:15,silent:!0,barBorderRadius:30,itemStyle:{normal:{color:"#0D223C",barBorderRadius:30}},barGap:"-100%",data:data.map(function(a){return xMax})},{name:" ",type:"bar",barWidth:15,silent:!0,yAxisIndex:0,data:[{value:40,itemStyle:{normal:{barBorderRadius:30,color:"#30E4FF"}}}]},{name:"刻度",type:"bar",xAxisIndex:1,yAxisIndex:3,label:{normal:{show:!0,position:"top",distance:10,color:"#35F7FF",fontSize:15,formatter:function(a){return console.log(a.dataIndex),a.dataIndex<30&&a.dataIndex%10===0||a.dataIndex%10===0?a.dataIndex-20+"℃":""}}},data:kd,barGap:"10%",barWidth:2,itemStyle:{normal:{color:"#35F7FF",barBorderRadius:10}},z:0}]};
