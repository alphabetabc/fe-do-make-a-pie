var uploadedDataURL="/asset/get/s/data-1610266581688-xhgO3Gdzu.geojson",center={},option=null;$.get(uploadedDataURL,function(e){echarts.registerMap("js",e),option={title:{show:!0,x:"center",y:"top",text:"云南省大理市行政区域图（其他县级市合作QQ470797533）",textStyle:{color:"#2980b9",fontSize:16}},series:[{type:"map",mapType:"js",geoIndex:-1,zoom:1.1,label:{show:!0,color:"#999",emphasis:{color:"white",show:!1}},itemStyle:{normal:{borderColor:"#2980b9",borderWidth:1,areaColor:"#12235c"}}}]},myChart.setOption(option)});