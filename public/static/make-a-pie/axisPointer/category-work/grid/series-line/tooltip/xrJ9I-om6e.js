option={color:["#389A9E"],calculable:!1,grid:{left:"1%",right:"1%",bottom:"1%",containLabel:!1},tooltip:{trigger:"axis",axisPointer:{type:"line"},formatter:function(e){return e[0].data+"%"}},xAxis:{show:!1,type:"category",boundaryGap:!1,axisLine:{show:!1,onZero:!1},data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{show:!1,type:"value",axisLine:{show:!1,onZero:!1}},series:[{name:"成交",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},symbolSize:3,areaStyle:{normal:{color:"#389A9E",opacity:.5}},label:{normal:{show:!0,formatter:function(e){return e.name}}},data:[10,12,21,54,260,830,710]}]},myChart.on("click",function(e){console.log(e)});
