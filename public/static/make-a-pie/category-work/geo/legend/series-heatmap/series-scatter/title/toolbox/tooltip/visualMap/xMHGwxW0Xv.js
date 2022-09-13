var data=[{name:"安庆",value:11476},{name:"安康",value:8797},{name:"安阳",value:14077},{name:"安顺",value:14657},{name:"白城",value:2629},{name:"白山",value:4855},{name:"白沙",value:181},{name:"白银",value:3315},{name:"百色",value:8666},{name:"蚌埠",value:3551},{name:"阿克苏",value:4521},{name:"阿勒泰",value:2205},{name:"阿坝",value:73430},{name:"阿拉善盟",value:6539},{name:"阿拉尔",value:355},{name:"阿里",value:301},{name:"鞍山",value:7560}],geoCoordMap={安庆:[117.04,30.49],安康:[108.32,32.32],安阳:[114.34,36.09],安顺:[105.92,26.24],白城:[122.83,45.61],白山:[126.39,41.52],白沙:[109.26,19.14],白银:[104.2,36.54],百色:[106.52,23.92],蚌埠:[117.37,32.94],阿克苏:[80.25,41.17],阿勒泰:[88.125,47.838],阿坝:[101.765,32.901],阿拉善盟:[105.111,39.641],阿拉尔:[81.03,40.3],阿里:[81.15,30.17],鞍山:[122.977,41.115]},convertData=function(a){for(var t=[],e=0;e<a.length;e++){var n=geoCoordMap[a[e].name];n&&t.push(n.concat(a[e].value))}return t},convertData1=function(a){for(var t=[],e=0;e<a.length;e++){var n=geoCoordMap[a[e].name];n.pop(),n&&t.push(n.concat(a[e].value))}return t},option={title:{text:"各城市间夜数",subtext:"17个城市",x:"center",y:"top",textStyle:{color:"red",fontSize:"29"}},tooltip:{},toolbox:{},legend:{x:"left",y:"top"},visualMap:{min:700,max:28e3,show:!0},geo:{map:"china",roam:!0,show:!0},series:[{type:"heatmap",coordinateSystem:"geo",data:convertData(data),name:"热力图"},{type:"scatter",coordinateSystem:"geo",data:convertData(data),name:"点"}]};