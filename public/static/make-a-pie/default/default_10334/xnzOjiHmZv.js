var uploadedDataURL="/asset/get/s/data-1604987052721-RrDEffHjT.json",powerData=[{name:"阎家梁风场",symbol:"circle",coords:[[114.18,40.45],[114.58,40.55],[115.48,40.55]],value:[20]}];myChart.showLoading(),$.getJSON(uploadedDataURL,function(o){var t=o.features.map(e=>({name:e.properties.name,id:e.id,value:0}));echarts.registerMap("shanxi",o),myChart.hideLoading();let a={title:{show:!1},grid:{left:10,top:20,right:10,bottom:30},geo:{geoIndex:1,map:"shanxi",label:{show:!1},zoom:1.2,animation:!1},series:[{name:"main",z:2,type:"map",map:"shanxi",mapType:"shanxi",zoom:1.2,label:{show:!0,formatter(e){return`￮ ${e.name}`},textStyle:{color:"#fff",fontSize:14,fontFamily:"MicrosoftYaHei",backgroundColor:"transparent"}},itemStyle:{color:"#004790",borderWidth:1,borderColor:"#54ADFF",areaColor:"#004790"},emphasis:{label:{show:!0,color:"#fff"},itemStyle:{color:"#17BBFF",borderColor:"#54ADFF",areaColor:"#17BBFF"}},data:t},{type:"lines",coordinateSystem:"geo",symbol:"circle",polyline:!0,symbolSize:[14,0],z:5,lineStyle:{type:"solid",opacity:1,color:"red",curveness:0},label:{show:!0,position:"end",formatter:e=>e.data.name},data:powerData},{type:"lines",coordinateSystem:"geo",symbol:"circle",symbolSize:[14,0],z:5,lineStyle:{type:"solid",opacity:0,color:"red",curveness:0},label:{show:!0,padding:[0,0,15,0],position:"end",formatter:e=>e.data.name},data:powerData},{type:"lines",coordinateSystem:"geo",symbol:"circle",symbolSize:[14,0],z:5,lineStyle:{type:"solid",opacity:1,color:"red",curveness:0},data:powerData}]};myChart.setOption(a)});