myChart.showLoading(),$.get("https://geo.datav.aliyun.com/areas_v2/bound/320200_full.json",function(e){myChart.hideLoading(),echarts.registerMap("WUXI",e),myChart.setOption(option={backgroundColor:"rgb(0, 16, 42)",title:{text:"无锡市各市区交通事故及交通指数",textStyle:{color:"#ffffff"},padding:10},geo:{show:!0,roam:!0},series:[{name:"香港18区人口密度",type:"map",map:"WUXI",roam:!1,zoom:1,itemStyle:{areaColor:"rgb(3,32,72)",borderColor:"rgb(2,52,105)",borderWidth:2},emphasis:{label:{show:!1},itemStyle:{areaColor:"rgb(15, 111, 195)"}}}]})});