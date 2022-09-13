var geoCoordMap={南宁:[108.479,23.1152],广州:[113.5107,23.2196],重庆:[107.7539,30.1904],芬兰:[24.909912,60.169095],美国:[-100.696295,33.679979],日本:[139.710164,35.706962],韩国:[126.979208,37.53875],瑞士:[7.445147,46.956241],东南亚:[117.53244,5.300343],澳大利亚:[135.193845,-25.304039],德国:[13.402393,52.518569],英国:[-.126608,51.208425],加拿大:[-102.646409,59.994255]},CQData=[[{name:"芬兰"},{name:"重庆",value:30}],[{name:"德国"},{name:"重庆",value:30}],[{name:"英国"},{name:"重庆",value:30}],[{name:"重庆"},{name:"英国",value:30}]],GZData=[[{name:"日本"},{name:"广州",value:30}],[{name:"东南亚"},{name:"广州",value:30}]],NNData=[[{name:"南宁"},{name:"加拿大",value:30}],[{name:"南宁"},{name:"美国",value:100}],[{name:"南宁"},{name:"澳大利亚",value:95}],[{name:"南宁"},{name:"瑞士",value:30}]],planePath="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",convertData=function(e){for(var l=[],a=0;a<e.length;a++){var o=e[a],r=geoCoordMap[o[1].name],n=geoCoordMap[o[0].name];r&&n&&l.push([{coord:r},{coord:n}])}return l},color=["#9ae5fc","#dcbf71"],series=[];[["重庆",CQData],["广州",GZData],["南宁",NNData]].forEach(function(e,l){series.push({type:"lines",zlevel:1,effect:{show:!0,period:6,trailLength:.7,color:"#fff",symbolSize:3},lineStyle:{normal:{color:color[0],width:0,curveness:-.2}},data:convertData(e[1])},{type:"lines",zlevel:2,symbolSize:10,effect:{show:!0,period:6,trailLength:0,symbol:planePath,symbolSize:15},lineStyle:{normal:{color:color[0],width:1,opacity:.6,curveness:-.2}},data:convertData(e[1])},{type:"effectScatter",coordinateSystem:"geo",zlevel:3,rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"left",formatter:"{b}"}},itemStyle:{normal:{color:color[0]}},data:e[1].map(function(a){return{name:a[1].name,value:geoCoordMap[a[1].name],symbolSize:a[1].value/8}})})}),series.push({type:"effectScatter",coordinateSystem:"geo",zlevel:3,rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"left",formatter:"{b}"}},symbolSize:function(e){return e[2]/8},itemStyle:{normal:{color:color[1]}},data:[{name:"重庆",value:[107.7539,30.1904,30],label:{normal:{position:"top"}}},{name:"广州",value:[113.5107,23.2196,30],label:{normal:{position:"right"}}},{name:"南宁",value:[108.479,23.1152,30]}]});var option={backgroundColor:"#404a59",title:{show:"false"},geo:{map:"world",roam:!1,itemStyle:{normal:{areaColor:"#ff8800"},emphasis:{areaColor:"red"}},regions:[{name:"China",selected:!0,itemStyle:{emphasis:{areaColor:"#7d7d7d"}},label:{emphasis:{show:!1}}}]},series,textStyle:{fontSize:12}};