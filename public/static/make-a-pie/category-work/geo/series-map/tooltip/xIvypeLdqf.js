myChart.showLoading(),$.get("https://ironbeetle.cn/shenzhen.json",function(e){console.log("geoJson",e),myChart.hideLoading(),echarts.registerMap("sz",e),myChart.setOption(option={backgroundColor:"#093a88",tooltip:{trigger:"item",formatter:"{b}"},geo:[{map:"sz",zoom:1.015,roam:!1,itemStyle:{normal:{areaColor:"#093c8b",shadowColor:"#e0dfb8",shadowOffsetX:0,shadowOffsetY:5}},silent:!0},{map:"sz",roam:!1,itemStyle:{normal:{shadowColor:"#093c8b",shadowOffsetX:-4,shadowOffsetY:4}}}],series:[{type:"map",mapType:"sz",label:{show:!1},geoIndex:1,itemStyle:{areaColor:"rgba(0,0,0,0)"}},{type:"map",mapType:"sz",label:{show:!0},geoIndex:2,itemStyle:{areaColor:"#98d4ff"}}]})});
