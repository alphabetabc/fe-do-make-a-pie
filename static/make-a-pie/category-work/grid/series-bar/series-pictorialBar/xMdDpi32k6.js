var data=[{name:"window8",value:113},{name:"window7",value:265},{name:"window10",value:191},{name:"服务器",value:1559}],xName=[],maxData=[],bgData=[],maxValue=data[data.length-1].value;data.forEach(a=>{xName.push(a.name),maxData.push(maxValue+parseInt(maxValue/50)),bgData.push({name:a.name,value:maxValue,type:a.type})}),option={backgroundColor:"#051b4a",grid:{top:10,left:5,right:20,bottom:0,containLabel:!0},calculable:!0,xAxis:[{show:!1,min:0,max:maxValue}],yAxis:[{axisTick:"none",axisLine:"none",offset:"0",axisLabel:{margin:15,textStyle:{color:"rgba(255,255,255,.8)",fontSize:"14"}},data:xName},{axisTick:"none",axisLine:"none",type:"category",axisLabel:{margin:20,textStyle:{color:"#6DE8FA",fontSize:"14"}},data}],series:[{name:"外框",type:"bar",barGap:"-100%",data:maxData,cursor:"default",barWidth:12,itemStyle:{normal:{color:"transparent",barBorderColor:"#0e4160",barBorderWidth:1,barBorderRadius:5,label:{show:!1}}},z:0},{name:"背景色",type:"pictorialBar",barGap:"-100%",stack:"总量",symbol:"fixed",symbolOffset:[3,0],symbolSize:[8,6],symbolRepeat:"repeat",data:bgData,itemStyle:{normal:{color:"#0e4160"}},z:1},{name:"整体数据",type:"pictorialBar",barGap:"-100%",stack:"数量",symbol:"fixed",symbolOffset:[3,0],symbolSize:[8,6],symbolRepeat:"repeat",data,animationEasing:"elasticOut",itemStyle:{normal:{color:"#08e9a9"}},z:2}]};