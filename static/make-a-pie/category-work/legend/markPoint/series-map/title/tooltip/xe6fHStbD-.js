var uploadedDataURL="/asset/get/s/data-1610354742423-MrhSQAkdn.geojson";myChart.showLoading();var data=[];$.getJSON(uploadedDataURL,function(o){echarts.registerMap("mp",o),data=o.features.map(e=>({value:(Math.random()*1e3).toFixed(2),name:e.properties.name})),myChart.hideLoading(),option={backgroundColor:"#404a59",tooltip:{backgroundColor:"rgba(0,0,0,0)",trigger:"item"},title:{show:!0,x:"center",text:"江苏省张家港市行政区域图（其他县级市合作QQ470797533）",textStyle:{color:"#2980b9",fontSize:16}},legend:{show:!1},series:[{tooltip:{trigger:"item"},name:"",type:"map",map:"mp",zoom:.65,showLegendSymbol:!0,label:{show:!0,color:"#fff",fontSize:10},itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10}},emphasis:{itemStyle:{areaColor:"#FFD181",borderColor:"#404a59",borderWidth:1}},layoutCenter:["50%","50%"],layoutSize:"160%",markPoint:{symbol:"none"},data}]},myChart.setOption(option)});
