var uploadedDataURL="/asset/get/s/data-1608555250848-dtMgEcnGa.json",nameMap="江苏省";window.dataList=[{name:"南京市",value:396},{name:"徐州市",value:66},{name:"连云港市",value:222},{name:"宿迁市",value:688},{name:"淮安市",value:75},{name:"盐城市",value:121},{name:"扬州市",value:91},{name:"泰州市",value:479},{name:"南通市",value:34},{name:"镇江市",value:631},{name:"无锡市",value:1203},{name:"苏州市",value:10},{name:"常州市",value:693},{name:"聊城市",value:934}];var geoCoordMap={},convertData=function(a){console.log("data",a);for(var t=[],r=0;r<a.length;r++){var e=geoCoordMap[a[r].name];e&&t.push({name:a[r].name,value:e.concat(a[r].value)})}return console.log("res",t),t};$.get(uploadedDataURL,function(a){debugger;echarts.registerMap(nameMap,a),myChart.showLoading();var t=echarts.getMap(nameMap).geoJson.features;myChart.hideLoading(),t.forEach(function(e){var o=e.properties.name;geoCoordMap[o]=e.properties.center}),console.log(geoCoordMap);var r={title:{text:"江苏省地图",top:"2%",textStyle:{color:"#000",fontSize:16}},visualMap:[{min:0,max:1e3,show:!1,realtime:!1,calculable:!1,seriesIndex:[0],inRange:{color:["rgb(202,249,130)","rgb(129,211,248)","rgb(255,255,128)","rgb(128,255,255)","rgb(0,255,255)","rgb(128,128,255)","rgb(236,128,141)","rgb(194,128,255)","rgb(245,154,35)","rgb(112,182,3)","rgb(0,182,128)","rgb(99,0,191)"]}},{min:0,max:1e3,seriesIndex:1,show:!0,splitNumber:4,right:"2%",inRange:{color:["#FF6464","#FFA85A","#FFEC6F","#8BBCFE"].reverse()},formatter:function(e){return""}}],geo:{map:nameMap,show:!1,roam:!0,label:{normal:{show:!1},emphasis:{show:!1}}},series:[{type:"map",map:nameMap,label:{normal:{show:!0,textStyle:{fontSize:12,fontWeight:400,color:"rgb(0,0,0) "}}},data:window.dataList},{type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:[40,40],label:{normal:{show:!0,textStyle:{color:"#000",fontSize:10,fontWeight:600},formatter(e){return e.data.value[2]}}},hoverAnimation:!0,itemStyle:{normal:{color:"pink"}},zlevel:6,data:convertData(window.dataList)}]};myChart.setOption(r,!0)});
