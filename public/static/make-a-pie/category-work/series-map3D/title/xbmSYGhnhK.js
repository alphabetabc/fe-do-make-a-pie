const zjMap="/asset/get/s/data-1634008447791-hRIfL3ly5.json";$.getJSON(zjMap,function(e){echarts.registerMap("zhejiang",e),myChart.setOption(option)}),option={title:{text:"杭州市3D地图"},series:[{type:"map3D",name:"浙江",selectedMode:"single",regionHeight:5,map:"zhejiang",viewControl:{distance:110,rotateSensitivity:[1,1]},label:{show:!0,textStyle:{color:"white",fontSize:20}},itemStyle:{color:"#2B5890",borderWidth:3,borderColor:"#5578A5"},emphasis:{label:{show:!0,textStyle:{color:"#fff"}},itemStyle:{color:"#0489d6"}},data:[]}]};
