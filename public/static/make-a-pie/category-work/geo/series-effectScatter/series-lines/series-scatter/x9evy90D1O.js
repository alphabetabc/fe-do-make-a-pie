var uploadedDataURL="/asset/get/s/data-1482909832739-rJ-cdy-Hx.json";$.getJSON(uploadedDataURL,function(l){echarts.registerMap("jilin",l);let t=[[127.2808389302688,42.30988722890512,"抚松互通至榆树川互通S门架"],[125.94983637920117,42.890404601870685,"西兴隆互通S至一座营互通门架"],[125.913469599092,41.43548701609915,"清河互通至五女峰互通门架"],[123.85247350046755,43.913703494916476,"兴隆互通至新安互通门架"]],r=t.length-1,e=[];t.forEach(o=>{let a=[o[0],o[1]];e.push(a)}),option={backgroundColor:"#013954",geo:{map:"jilin",show:!0,aspectScale:.75,zoom:1,roam:"scale",label:{normal:{show:!0,textStyle:{color:"#1DE9B6"}},emphasis:{textStyle:{color:"rgb(183,185,14)"}}},itemStyle:{normal:{areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"#09132c"},{offset:1,color:"#072460"}],globalCoord:!0},shadowColor:"rgb(58,115,192)",shadowOffsetX:1,shadowOffsetY:1}},silent:!0},series:[{type:"effectScatter",coordinateSystem:"geo",showEffectOn:"render",zlevel:1,rippleEffect:{period:15,scale:4,brushType:"fill"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",offset:[15,0],color:"#1DE9B6",show:!0}},itemStyle:{normal:{color:"#1DE9B6",shadowBlur:10,shadowColor:"#333"}},symbol:"circle",symbolSize:16,data:[{value:e[0],itemStyle:{color:"#4ab2e5"}},{value:e[r]}]},{type:"lines",zlevel:2,effect:{show:!0,period:8,trailLength:.1,symbol:"path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",symbolSize:17},lineStyle:{normal:{color:"#1DE9B6",width:3,opacity:1,curveness:.3}},polyline:!0,label:{},data:[{coords:e,lineStyle:{color:"#4ab2e5"}}]},{type:"scatter",symbol:"pin",symbolSize:24,zlevel:3,label:{show:!0,formatter:o=>o.value[2],fontSize:12,position:[15,15],borderWidth:1,borderColor:"#1c7baf",borderRadius:4,color:"#fff",padding:[5,10]},emphasis:{label:{backgroundColor:"#0c4fff"}},itemStyle:{color:"lightskyblue"},coordinateSystem:"geo",data:t}]},myChart.setOption(option)});
