var geoCoordMap={乌鲁木齐:[87.9236,43.5883],佛山:[112.8955,23.1097],保定:[115.0488,39.0948],兰州:[103.5901,36.3043]},k=0,planePath="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",data=[[{name:"乌鲁木齐"},{name:"佛山",value:5}],[{name:"佛山"},{name:"保定",value:5}],[{name:"保定"},{name:"兰州",value:5}],[{name:"兰州"},{name:"乌鲁木齐",value:5}]],convertData=function(e){var r=[],o=geoCoordMap[e[0].name],a=geoCoordMap[e[1].name];return o&&a&&r.push({fromName:e[0].name,toName:e[1].name,coords:[o,a]}),r},series=[];[data[k]].forEach(function(e,r){series.push({type:"lines",zlevel:1,effect:{show:!0,period:6,trailLength:.7,color:"#fff",symbolSize:3},lineStyle:{normal:{color:"red",width:1,curveness:0}},data:convertData(data[k])},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{brushType:"stroke",scale:3,period:2},label:{normal:{show:!0,position:"right",formatter:"{b}"}},symbol:"circle",symbolSize:function(o){return o[2]/8},itemStyle:{normal:{color:"red"}},data:function(){return{name:e[1].name,value:geoCoordMap[e[1].name].concat([e[1].value])}}})}),option={backgroundColor:"#404a59",title:{text:"**之间的传输",subtext:"数据纯属虚构",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item"},legend:{orient:"vertical",top:"bottom",left:"right",data:[],textStyle:{color:"#fff"},selectedMode:"single"},geo:{map:"china",zoom:1,label:{emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#323c48",borderColor:"#404a59"},emphasis:{areaColor:"#2a333d"}}},series},setInterval(function(){option.series[0].data=convertData(data[k]),myChart.setOption(option,!0),k++,k>3&&(k=0)},3e3);