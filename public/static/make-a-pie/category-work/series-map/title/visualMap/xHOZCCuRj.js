var uploadedDataURL="/asset/get/s/data-1577323610294-4zYmVBYI.json";function randomData(){return Math.round(Math.random()*1e4)}var geoCoordMap={国家级基地1:[94.12,39.66],国家级基地2:[97.2,39.55],国家级基地3:[95.28,40.29],省级基地1:[98.36,40.19],省级基地2:[97.88,39.49],省级基地3:[95.77,40.59],市级基地1:[102.66,38.89],市级基地2:[101.23,37.79],市级基地3:[99.4,39.69]},convertData=function(e){for(var t=[],a=0;a<e.length;a++){var r=geoCoordMap[e[a].name];r&&t.push({name:e[a].name,value:r.concat(e[a].value)})}return t};function showProvince(){var e="bj";$.get(uploadedDataURL,function(t){echarts.registerMap(e,t),myChart.setOption(option={backgroundColor:"#044060",title:{text:"北京市顺义区新能源企业地图",left:"center",textStyle:{color:"#fff"}},visualMap:{min:0,max:1e4,left:"left",top:"bottom",text:["高","低"],calculable:!0},series:[{type:"map",mapType:e,label:{normal:{show:!0},emphasis:{textStyle:{color:"#fff"}}},itemStyle:{normal:{borderColor:"#389BB7",areaColor:"#fff"},emphasis:{areaColor:"#389BB7",borderWidth:0}},animation:!1,data:[]}]})})}var currentIdx=0;showProvince();
