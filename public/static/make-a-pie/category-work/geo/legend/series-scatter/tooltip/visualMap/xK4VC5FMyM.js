var geoCoordMap={湖州:[120.1,30.86],苏州:[120.62,31.32],杭州:[120.19,30.26]},convertData=function(e){for(var a=[],o=0;o<e.length;o++){var r=geoCoordMap[e[o].name];r&&a.push({name:e[o].name,value:r.concat(e[o].value)})}return a};option={timeline:{bottom:"6%",autoPlay:!0,data:["2002","2003","2004"]},options:[{backgroundColor:"#fff",tooltip:{trigger:"item",formatter:function(e){return e.name+" : "+e.value[2]}},geo:{map:"china",label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#68BBFE",borderColor:"#fff",borderWidth:3},emphasis:{areaColor:"#F2F4F7"}}},series:[{type:"scatter",coordinateSystem:"geo",data:convertData([{name:"杭州",value:1},{name:"湖州",value:1},{name:"苏州",value:1}]),symbolSize:12,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{color:"#F7CD45"},emphasis:{borderColor:"#fff",borderWidth:1}}}]},{backgroundColor:"#fff",tooltip:{trigger:"item",formatter:function(e){return e.name+" : "+e.value[2]}},geo:{map:"china",label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#68BBFE",borderColor:"#fff",borderWidth:3},emphasis:{areaColor:"#F2F4F7"}}},series:[{type:"scatter",coordinateSystem:"geo",data:convertData([{name:"杭州",value:2},{name:"苏州",value:2}]),symbolSize:12,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{color:"#F7CD45"},emphasis:{borderColor:"#fff",borderWidth:1}}}]},{backgroundColor:"#fff",tooltip:{trigger:"item",formatter:function(e){return e.name+" : "+e.value[2]}},geo:{map:"china",label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#68BBFE",borderColor:"#fff",borderWidth:3},emphasis:{areaColor:"#F2F4F7"}}},series:[{type:"scatter",coordinateSystem:"geo",data:convertData([{name:"杭州",value:3},{name:"湖州",value:3}]),symbolSize:12,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{color:"#F7CD45"},emphasis:{borderColor:"#fff",borderWidth:1}}}]}]};