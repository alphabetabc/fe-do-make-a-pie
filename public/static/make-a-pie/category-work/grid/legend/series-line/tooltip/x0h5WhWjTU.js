var firstLineData=[11,12,2,14,19,13,12],secondLineData=[13,12,16,9,12,16,14],thirdLineData=[8,14,12,14,19,13,15],fourthLineData=[8,18,13,14,9,19,10],seven_day_date=new Date,seven_day_data=[];function addZero(e){return e<10&&(e="0"+e),e}for(var i=0;i<7;i++){var month=seven_day_date.getMonth()+1,day=seven_day_date.getDate();seven_day_date=new Date(seven_day_date.getTime()-1e3*60*60*24),seven_day_data.push(addZero(month)+"."+addZero(day))}seven_day_data.reverse(),option={backgroundColor:"#031A32",tooltip:{show:!0,trigger:"axis",axisPointer:{animation:!1,type:"line",axis:"x"}},legend:{top:"10%",textStyle:{color:"#00FCF9",fontSize:16}},grid:[{left:"8%",right:"8%",top:180,height:120},{left:"8%",right:"8%",top:300,height:120},{left:"8%",right:"8%",top:420,height:120},{left:"8%",right:"8%",top:540,height:120}],xAxis:[{type:"category",name:"",color:"#00FCF9",axisLabel:{show:!1,color:"transparent"},axisTick:{show:!1,alignWithLabel:!0},axisLine:{show:!0,lineStyle:{color:"#3d5269",width:1}},data:seven_day_data},{gridIndex:1,type:"category",name:"",axisLabel:{show:!1,color:"transparent"},axisTick:{show:!1,alignWithLabel:!0},axisLine:{show:!0,lineStyle:{color:"#3d5269",width:1}},data:seven_day_data},{gridIndex:2,type:"category",name:"",axisLabel:{show:!1},axisTick:{show:!1,alignWithLabel:!0},axisLine:{show:!0,lineStyle:{color:"#3d5269",width:1}},data:seven_day_data},{gridIndex:3,type:"category",name:"",axisLabel:{show:!0,textStyle:{color:"#73D6FF",fontSize:14}},axisTick:{show:!0,alignWithLabel:!0},axisLine:{show:!0,lineStyle:{color:"#3d5269",width:1}},data:seven_day_data}],yAxis:[{name:"次数",type:"value",gridIndex:0,scale:!0,nameTextStyle:{color:"#73D6FF",fontSize:14,align:"left",padding:[0,0,0,-12]},axisLabel:{showMinLabel:!1,textStyle:{color:"#73D6FF",fontSize:14}},splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},minInterval:10},{gridIndex:1,name:"",type:"value",scale:!0,splitLine:{show:!1},axisLabel:{showMinLabel:!1,textStyle:{color:"#73D6FF",fontSize:14}},axisLine:{show:!1},axisTick:{show:!1},minInterval:10},{gridIndex:2,name:"",type:"value",scale:!0,splitLine:{show:!1},axisLabel:{showMinLabel:!1,textStyle:{color:"#73D6FF",fontSize:14}},axisLine:{show:!1},axisTick:{show:!1},minInterval:10},{gridIndex:3,name:"",type:"value",scale:!0,splitLine:{show:!1},axisLabel:{showMinLabel:!1,textStyle:{color:"#73D6FF",fontSize:14}},axisLine:{show:!1},axisTick:{show:!1},minInterval:10}],series:[{name:"高兴",type:"line",symbolSize:0,hoverAnimation:!1,connectNulls:!0,data:firstLineData,symbol:"circle",symbolSize:8,smooth:!1,itemStyle:{color:"#B708B7"}},{name:"愤怒",type:"line",xAxisIndex:1,yAxisIndex:1,symbolSize:0,hoverAnimation:!1,connectNulls:!0,data:secondLineData,symbol:"circle",symbolSize:8,smooth:!1,itemStyle:{color:"#4790A3"}},{name:"悲伤",type:"line",xAxisIndex:2,yAxisIndex:2,symbolSize:0,hoverAnimation:!1,connectNulls:!0,data:thirdLineData,symbol:"circle",symbolSize:8,smooth:!1,itemStyle:{color:"#78A747"}},{name:"平静",type:"line",xAxisIndex:3,yAxisIndex:3,symbolSize:0,hoverAnimation:!1,connectNulls:!0,data:fourthLineData,symbol:"circle",symbolSize:8,smooth:!1,itemStyle:{color:"#FFCCCC"}}]};
