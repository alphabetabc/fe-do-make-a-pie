var uploadedDataURL="/asset/get/s/data-1611021202172-BNTu0VkB4.json";option={title:{text:"Awesome Chart"},xAxis:{data:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},yAxis:{},series:[{type:"line",data:[220,182,191,234,290,330,310]}]};var uploadedDataURL="/asset/get/s/data-1611021202172-BNTu0VkB4.json",center={},option=null;$.get(uploadedDataURL,function(e){echarts.registerMap("js",e),option={title:{show:!0,x:"center",y:"top",text:"灵寿县",textStyle:{color:"#2980b9",fontSize:16}},series:[{type:"map",mapType:"js",geoIndex:-1,zoom:1.1,label:{show:!0,color:"#999",emphasis:{color:"white",show:!1}},itemStyle:{normal:{areaColor:"#C9E6FF",borderColor:"#fff",borderWidth:2,shadowColor:"#5AB2FE",shadowBlur:20}}}]},myChart.setOption(option)});
