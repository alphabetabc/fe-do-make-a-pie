var option={backgroundColor:"#333",title:{text:"任意经纬度lines",textStyle:{color:"#fff",fontSize:22,fontWeight:0}},color:["gold","aqua","lime"],legend:{show:!0,selected:{},x:"left",orient:"vertical",textStyle:{color:"white"},data:[]},geo:{show:!0,roam:!1,map:"china",label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#1b1b1b",borderColor:"rgba(100,149,237,0.7)"},emphasis:{areaColor:"rgba(0,0,0,0.6)"}}},series:[{name:"lines",type:"lines",coordinateSystem:"geo",effect:{constantSpeed:30,show:!0,trailLength:.7,symbolSize:3,color:"rgba(255, 255, 255, 0.5)",symbol:"circle"},itemStyle:{normal:{lineStyle:{color:"#4ef2f2",width:.8,opacity:.9,curveness:.2}}},data:[]},{symbol:"circle",coordinateSystem:"geo",type:"effectScatter",symbolSize:3,itemStyle:{normal:{color:"#4ef2f2"}},rippleEffect:{period:4,brushType:"stroke",scale:4},data:[]}]};function getData(){var t=[],o=[],a=[[[116.395645,39.929986],[121.309555,37.536562]],[[116.395645,39.929986],[101.722423,26.587571]],[[116.395645,39.929986],[101.722423,36.587571]],[[117.210813,39.14393],[101.722423,36.587571]],[[116.395645,39.929986],[117.058739,30.537898]]];a.forEach(function(e){t.push({coords:e}),o.push(e[0],e[1])}),option.series[0].data=t,option.series[1].data=o,myChart.setOption(option)}getData();
