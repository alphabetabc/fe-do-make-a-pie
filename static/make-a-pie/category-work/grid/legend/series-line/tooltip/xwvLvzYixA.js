for(var firstLineData=[33,45,255,21,35,24,13],secondLineData=[252,124,123,63,16,63,145],thirdLineData=[14,53,111,180,24,152,231],fourthLineData=[45,215,25,214,90,34,53],seven_day_data=[],seven_day_date=new Date,i=0;i<7;i++){var month=seven_day_date.getMonth()+1,day=seven_day_date.getDate()-1;seven_day_date=new Date(seven_day_date.getTime()-1e3*60*60*24),seven_day_data.push(addZero(month)+"."+addZero(day))}seven_day_data.reverse();function addZero(e){return e<10&&(e="0"+e),e}option={backgroundColor:"#031A32",tooltip:{show:!0,trigger:"axis",axisPointer:{animation:!1,type:"line",axis:"x"}},legend:{icon:"roundRect",top:30,right:"8%",itemHeight:5,itemWidth:20,textStyle:{color:"#00FCF9",fontSize:14}},grid:[{left:"8%",right:"8%",top:"12%",bottom:"12%"}],xAxis:[{type:"category",name:"",color:"#00FCF9",axisLabel:{show:!0,color:"#73D6FF",fontSize:14},axisTick:{show:!0,alignWithLabel:!0},axisLine:{show:!0,lineStyle:{color:"#3d5269",width:1}},data:seven_day_data}],yAxis:[{name:"次数",type:"value",gridIndex:0,nameTextStyle:{color:"#73D6FF",fontSize:14,align:"left",padding:[0,0,0,-20]},axisLabel:{showMinLabel:!0,textStyle:{color:"#73D6FF",fontSize:14}},splitLine:{show:!0},axisLine:{show:!0,lineStyle:{color:"#3d5269",width:1}},axisTick:{show:!0},minInterval:1}],series:[{name:"高兴",type:"line",smooth:!0,lineStyle:{color:"#B708B7",width:2},itemStyle:{color:"#B708B7"},symbolSize:0,data:firstLineData},{name:"愤怒",type:"line",smooth:!0,lineStyle:{color:"#4790A3",width:2},itemStyle:{color:"#4790A3"},symbolSize:0,data:secondLineData},{name:"悲伤",type:"line",smooth:!0,lineStyle:{color:"#78A747",width:2},itemStyle:{color:"#78A747"},symbolSize:0,data:thirdLineData},{name:"平静",type:"line",smooth:!0,lineStyle:{color:"#FFCCCC",width:2},itemStyle:{color:"#FFCCCC"},symbolSize:0,data:fourthLineData}]};
