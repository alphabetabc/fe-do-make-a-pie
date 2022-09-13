var chartData=[{name:"三务公开",value:65,value1:15,value2:6},{name:"扶贫领域",value:79,value1:32,value2:11},{name:"扫黑除恶",value:39,value1:5,value2:1},{name:"民生领域",value:72,value1:6,value2:2},{name:"耕地问题",value:45,value1:7,value2:2}];option={backgroundColor:"#000f4e",title:{show:!0,text:"专项监督",textStyle:{color:"#fff",fontFamily:"Simsun",fontSize:14},x:"center",y:"top"},tooltip:{show:!0,trigger:"axis",backgroundColor:"rgba(0,15,78,0.6)",borderColor:"#00afff",borderWidth:1,borderRadius:0,textStyle:{color:"#fff",fontSize:13,align:"left"},axisPointer:{type:"line",lineStyle:{width:1,type:"dotted",color:"rgba(46,149,230,.9)"}}},legend:{show:!0,orient:"horizontal",data:["检查","发现","整改"],icon:"circle",selectedMode:!0,itemWidth:10,itemHeight:10,itemGap:20,textStyle:{fontSize:13,color:"#9bc8ff"},x:"center",y:"25"},grid:{top:"25%",right:"3%",bottom:"10%",left:"10%"},xAxis:{type:"category",axisLabel:{show:!0,interval:0,textStyle:{color:"#fff",fontSize:13},formatter:"{value}"},axisLine:{lineStyle:{color:"rgba(15,45,134,.9)"}},axisTick:{show:!1},data:function(t){var e=[];return t.forEach(function(a){e.push(a.name)}),e}(chartData)},yAxis:{type:"value",name:"（次）",nameTextStyle:{color:"#93d3fc",fontSize:12,align:"right"},axisLabel:{show:!0,textStyle:{color:"#9bc8ff",fontSize:13},interval:0,margin:10},splitNumber:5,axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:"rgba(15,45,134,.6)",width:1}},axisTick:{show:!1}},series:[{name:"检查",type:"scatter",stack:"总量",label:{normal:{show:!1,position:"top",textStyle:{color:"#9bc8ff",fontSize:12},formatter:"{c}"}},itemStyle:{normal:{color:"rgba(255,55,135,1)"}},symbol:"circle",symbolPosition:"end",symbolSize:30,symbolOffset:[0,"-120%"],data:function(t){var e=[];return t.forEach(function(a){var r=a.name,o=a.value,l=o/10;e.push({name:r,value:o,symbolSize:l})}),e}(chartData)},{name:"发现",type:"pictorialBar",barWidth:40,stack:"总量",label:{normal:{show:!1,position:"top",textStyle:{color:"#9bc8ff",fontSize:12},formatter:"{c}"}},itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(142,48,255,1)"},{offset:1,color:"rgba(142,48,255,.2)"}],globalCoord:!1}}},symbol:"path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",data:function(t){var e=[];return t.forEach(function(a){e.push(a.value1)}),e}(chartData)},{name:"整改",type:"pictorialBar",barWidth:40,stack:"总量",label:{normal:{show:!1,position:"top",textStyle:{color:"#9bc8ff",fontSize:12},formatter:"{c}"}},itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0,236,150,1)"},{offset:1,color:"rgba(0,236,150,.2)"}],globalCoord:!1}}},symbol:"path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",data:function(t){var e=[];return t.forEach(function(a){e.push(a.value2)}),e}(chartData)}]};var app={curIndex:-1};setInterval(()=>{var t=chartData.length;myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:app.curIndex}),app.curIndex=(app.curIndex+1)%t,myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:app.curIndex}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:app.curIndex})},3e3);
