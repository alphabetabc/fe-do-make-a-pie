option={title:{text:"Awesome Chartx"},backgroundColor:"#000",itemStyle:{color:"#fff"},xAxis:{type:"value",axisLabel:{color:"#fff"}},yAxis:{type:"value",axisLabel:{color:"#fff"}},grid:{show:!0},series:[{type:"graph",coordinateSystem:"cartesian2d",lineStyle:{width:3,curveness:.3,opacity:.1},edgeSymbol:["none","arrow"],data:[{name:"a",value:[10,10],symbolSize:30,symbol:"image://https://10.1.15.106:8080/images/server2.png"},{name:"b",value:[20,20],symbolSize:30,symbol:"image://https://10.1.15.106:8080/images/server2.png"}],links:[{source:"a",target:"b"}]}]};let i=0;setInterval(()=>{i%2===0?(option.series.shift(),myChart.setOption(option)):(option.series.push({type:"lines",lineStyle:{color:"#fff",width:4,curveness:1,opacity:.1},z:3,effect:{show:!0,color:"blue",loop:!0,symbol:"arrow",period:2,symbolSize:9},coordinateSystem:"cartesian2d",data:[{coords:[[10,10],[20,20]]}]}),myChart.setOption(option)),i++,option.series[1].data=[],console.log(myChart),myChart.setOption(option)},1e3);
