option={tooltip:{},xAxis:{show:!1},yAxis:{data:["2013","2014","2015","2016"],inverse:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{margin:10,color:"#999",fontSize:16}},grid:{top:"center",height:200,left:70,right:100},series:[{type:"pictorialBar",symbol:"rect",symbolRepeat:"fixed",symbolMargin:"20%",symbolClip:!0,color:"#29ABE2",symbolSize:[36,10],data:[891,1220,660,1670],markLine:{symbol:"rect",label:{formatter:"max: {c}",position:"start"},lineStyle:{color:"#29ABE2",type:"dotted",opacity:.2,width:2},data:[{type:"max"}]},z:10},{color:"#ccc",type:"pictorialBar",itemStyle:{normal:{opacity:.8}},label:{show:!0,position:"right",offset:[10,0],color:"#29ABE2",fontSize:18},animationDuration:0,symbolRepeat:"fixed",symbolMargin:"20%",symbol:"rect",symbolSize:[36,10],data:[891,1220,660,1670],z:5}]};function random(){return+(Math.random()*(maxData-10)).toFixed(1)}setInterval(function(){var t=[random(),random(),random(),random()];myChart.setOption({series:[{data:t.slice()},{data:t.slice()}]})},3e3);