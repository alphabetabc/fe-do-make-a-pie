var uploadedDataURL="/asset/get/s/data-1528971808162-BkOXf61WX.json",geoGpsMap=[109.1162,34.2004],geoCoordMap={江苏:[118.8062,31.9208],内蒙古:[110.3467,41.4899],辽宁:[123.1238,42.1216],陕西:[109.1162,34.2004],甘肃:[103.5901,36.3043],青海:[101.4038,36.8207],新疆:[87.9236,43.5883],河南:[113.4668,34.6234],西藏:[116.3896,39.91],浙江:[119.5313,29.8773],福建:[119.4543,25.9222],湖南:[113.0823,28.2568],四川:[113.0823,28.2568],云南:[102.9199,25.4663],广东:[113.12244,23.009505],海南:[110.3893,19.8516]},value={江苏:1e4,内蒙古:1e4,辽宁:1e4,陕西:1e4,福建:1e4,甘肃:1e4,青海:1e4,新疆:1e4,湖北:1e4,浙江:1e4,河南:1e4,湖南:1e4,云南:1e4,广东:1e4,海南:1e4,西藏:1e4},colors="#f9b207";$(function(){var m=["长春","长春","青岛","青岛","成都","成都"],a=[],h=[],p=[];for(var s in geoCoordMap)a.push({year:"陕西",name:s,value:value[s]/100,value1:value[s]/100});a.sort(function(u,i){return u.value-i.value});for(var l=0;l<a.length;l++)p.push(a[l].value1),h.push(a[l].name);console.log(a),$.getJSON(uploadedDataURL,function(n){console.log(n),echarts.registerMap("china",n);var u=function(e){for(var o=[],r=0;r<e.length;r++){var t=geoCoordMap[e[r].name];t&&o.push({name:e[r].name,value:t.concat(e[r].value)})}return o},i=function(e,o){for(var r=[],t=0;t<e.length;t++){var c=e[t],f=geoCoordMap[c.name];debugger;var v=o;v&&f&&r.push([{coord:v,value:c.value},{coord:f}])}return r};optionXyMap01={backgroundColor:"#001540",geo:{show:!0,map:"china",roam:!0,zoom:1,center:[101.4038,36.8207],label:{emphasis:{show:!1}},itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10},emphasis:{areaColor:"#389BB7",borderWidth:0}}},series:[{type:"map",map:"china",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!1},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#FFFFFF"},emphasis:{areaColor:"#2B91B7"}},animation:!1},{type:"effectScatter",coordinateSystem:"geo",data:u(a.sort(function(e,o){return o.value-e.value}).slice(0,20)),symbolSize:function(e){return e[2]/10},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:colors,shadowBlur:10,shadowColor:colors}},zlevel:1},{type:"lines",zlevel:2,effect:{show:!0,period:4,trailLength:.02,symbol:"arrow",symbolSize:3},lineStyle:{normal:{color:colors,width:.1,opacity:.5,curveness:.3}},data:i(a,geoGpsMap)}]},myChart.setOption(optionXyMap01)})});
