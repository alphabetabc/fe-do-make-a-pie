var uploadedDataURL="/asset/get/s/data-1553602548454-zgyrICCD2.json";function showProvince(){var e="jialingqu";$.get(uploadedDataURL,function(t){echarts.registerMap(e,t),myChart.setOption(option={title:{text:"人口流入地分析",left:"center"},tooltip:{trigger:"item"},series:[{type:"map",mapType:e,roam:!0,label:{normal:{show:!0},emphasis:{textStyle:{color:"#fff"}}},itemStyle:{normal:{borderColor:"#389BB7",areaColor:"#fff"},emphasis:{areaColor:"#389BB7",borderWidth:0}},animation:!0}]})})}var currentIdx=0;showProvince();
