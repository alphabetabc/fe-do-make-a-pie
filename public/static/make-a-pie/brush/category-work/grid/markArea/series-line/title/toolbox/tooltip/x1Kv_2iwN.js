for(var chartData={name:"theDemo",lower:[],upper:[],timestamp:[],value:[]},i=0;i<1e3;i++)chartData.value[i]=Math.ceil(Math.random()*10),chartData.lower[i]=chartData.value[i]-1,chartData.upper[i]=chartData.value[i]+2,chartData.timestamp[i]=i+1;var markData=[],option={title:{show:!0,text:chartData.name,textStyle:{fontSize:14},top:10},grid:{left:40,right:40},xAxis:{type:"category",boundaryGap:!1,data:chartData.timestamp},brush:{toolbox:["lineX","clear"],transformable:!1,seriesIndex:"all",throttleType:"debounce",xAxisIndex:0,throttleDelay:1e3,brushMode:"multiple"},tooltip:{show:!1},yAxis:[{type:"value"}],series:[{name:"line",type:"line",data:chartData.value,symbol:"none",lineStyle:{color:"#00a2ff",width:1},showSymbol:!1,sampling:"average",showAllSymbol:!1,markArea:{data:markData}},{name:"line",type:"line",data:chartData.anomaly,symbol:"none",lineStyle:{color:"red",width:1},showSymbol:!1,sampling:"average",showAllSymbol:!1},{name:"lineBtm",type:"line",stack:"lb",data:chartData.lower,symbol:"none",lineStyle:{color:"transparent"},showSymbol:!1,sampling:"average",showAllSymbol:!1},{name:"lineTop",type:"line",areaStyle:{color:"#bedbff"},stack:"lb",data:chartData.upper,symbol:"none",lineStyle:{color:"transparent"},showSymbol:!1,sampling:"average",showAllSymbol:!1}]};myChart.setOption(option),myChart.off("brush"),myChart.on("brushSelected",a=>{if(a.batch[0].areas.length>0){var e=a.batch[0].areas[0].coordRange;markData.push([{xAxis:chartData.timestamp[e[0]],itemStyle:{color:"rgba(255,70,70,0.3)"}},{xAxis:chartData.timestamp[e[1]]}]),console.log(e),myChart.setOption(option)}});
