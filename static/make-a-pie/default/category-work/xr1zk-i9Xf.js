var lineList=["1","10","11"],lineData=new Array,busline=null,lineTag=0,hStep=300/(lineList.length-1);option={bmap:{center:[112.594099,37.866561],zoom:12,roam:!0,enableMapClick:!1,mapStyle:{styleJson:[{featureType:"water",elementType:"all",stylers:{color:"#021019"}},{featureType:"highway",elementType:"geometry.fill",stylers:{color:"#000000"}},{featureType:"highway",elementType:"geometry.stroke",stylers:{color:"#147a92"}},{featureType:"arterial",elementType:"geometry.fill",stylers:{color:"#000000"}},{featureType:"arterial",elementType:"geometry.stroke",stylers:{color:"#0b3d51"}},{featureType:"local",elementType:"geometry",stylers:{color:"#000000"}},{featureType:"land",elementType:"all",stylers:{color:"#08304b"}},{featureType:"railway",elementType:"geometry.fill",stylers:{color:"#000000"}},{featureType:"railway",elementType:"geometry.stroke",stylers:{color:"#08304b"}},{featureType:"subway",elementType:"geometry",stylers:{lightness:-70}},{featureType:"building",elementType:"geometry.fill",stylers:{color:"#000000"}},{featureType:"all",elementType:"labels.text.fill",stylers:{color:"#857f7f"}},{featureType:"all",elementType:"labels.text.stroke",stylers:{color:"#000000"}},{featureType:"building",elementType:"geometry",stylers:{color:"#022338"}},{featureType:"green",elementType:"geometry",stylers:{color:"#062032"}},{featureType:"boundary",elementType:"all",stylers:{color:"#1e1c1c"}},{featureType:"manmade",elementType:"all",stylers:{color:"#022338"}}]}},series:[{type:"lines",coordinateSystem:"bmap",polyline:!0,data:lineData,silent:!0,lineStyle:{normal:{opacity:.2,width:1}},progressiveThreshold:500,progressive:100},{type:"lines",coordinateSystem:"bmap",polyline:!0,data:lineData,lineStyle:{normal:{width:.02}},effect:{constantSpeed:40,show:!0,trailLength:.02,symbolSize:2},zlevel:1}]};var addLineData=function(l){for(var e=new Array,t=0;t<l.length;t++)e.push([l[t].lng,l[t].lat]);lineData.push({coords:e,lineStyle:{normal:{color:echarts.color.modifyHSL("#5A94DF",Math.round(hStep*lineTag))}}});var r={series:[{type:"lines",data:lineData},{type:"lines",data:lineData}]};myChart.setOption(r)},searchBusLine=function(l){busline==null&&(busline=new BMap.BusLineSearch("太原",{onGetBusListComplete:function(e){if(e){var t=e.getBusListItem(0);busline.getBusLine(t)}},onGetBusLineComplete:function(e){console.log(e.getPath()),addLineData(e.getPath()),lineTag++,lineTag<lineList.length&&searchBusLine(lineList[lineTag])}})),busline.getBusList(l)};$(function(){searchBusLine(lineList[lineTag])});
