const xList=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],yList=[220,182,191,234,290,330,310],yListFull=[],maxNum=330;yList.forEach(o=>{yListFull.push(maxNum)}),option={backgroundColor:"black",tooltip:{},xAxis:{splitLine:{show:!1},axisTick:{show:!0},axisLine:{lineStyle:{color:"#00D2FF"}},axisLabel:{show:!0,fontSize:12,color:"#FFFFFF"},data:xList},yAxis:[{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,fontSize:12,color:"#FFFFFF"},splitLine:{show:!1},max:maxNum}],grid:{top:20,left:20,right:20,bottom:20,containLabel:!0},series:[{type:"pictorialBar",symbol:"rect",symbolRepeat:!0,symbolMargin:"20%",symbolClip:!0,symbolSize:[16,5],label:{normal:{show:!1,position:"right",offset:[-60,30],textStyle:{color:"darkorange",fontSize:18}}},itemStyle:{normal:{color:"rgb(95,172,235)"}},data:yList,z:22},{type:"pictorialBar",itemStyle:{normal:{color:"#355F69"}},symbolRepeat:!0,symbolMargin:"20%",symbol:"rect",silent:!0,symbolSize:[16,5],data:yListFull}]};