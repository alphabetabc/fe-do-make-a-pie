var szRoad={success:!0,errorCode:0,errorMsg:"成功",data:[{ROAD_LINE:"118.541246,24.752119;118.541641,24.751873;118.534644,24.745163;118.538012,24.742398;118.53724,24.741577"}]},busLines=[],data=szRoad.data,hStep=300/(data.length-1),i=0;for(var x in data){var line=data[x],pointString=line.ROAD_LINE,pointArr=pointString.split(";"),lnglats=[];for(var j in pointArr)lnglats.push(pointArr[j].split(","));busLines.push({coords:lnglats,lineStyle:{normal:{color:echarts.color.modifyHSL("#5A94DF",Math.round(hStep*x))}}})}option={bmap:{center:[118.536255,24.740859],zoom:15,roam:!0,mapStyle:{styleJson:[{featureType:"water",elementType:"all",stylers:{color:"#031628"}},{featureType:"land",elementType:"geometry",stylers:{color:"#000102"}},{featureType:"highway",elementType:"all",stylers:{visibility:"off"}},{featureType:"arterial",elementType:"geometry.fill",stylers:{color:"#000000"}},{featureType:"arterial",elementType:"geometry.stroke",stylers:{color:"#0b3d51"}},{featureType:"local",elementType:"geometry",stylers:{color:"#000000"}},{featureType:"railway",elementType:"geometry.fill",stylers:{color:"#000000"}},{featureType:"railway",elementType:"geometry.stroke",stylers:{color:"#08304b"}},{featureType:"subway",elementType:"geometry",stylers:{lightness:-70}},{featureType:"building",elementType:"geometry.fill",stylers:{color:"#000000"}},{featureType:"all",elementType:"labels.text.fill",stylers:{color:"#857f7f"}},{featureType:"all",elementType:"labels.text.stroke",stylers:{color:"#000000"}},{featureType:"building",elementType:"geometry",stylers:{color:"#022338"}},{featureType:"green",elementType:"geometry",stylers:{color:"#062032"}},{featureType:"boundary",elementType:"all",stylers:{color:"#465b6c"}},{featureType:"manmade",elementType:"all",stylers:{color:"#022338"}},{featureType:"label",elementType:"all",stylers:{visibility:"off"}}]}},series:[{type:"lines",coordinateSystem:"bmap",polyline:!0,data:busLines,silent:!0,lineStyle:{normal:{opacity:.2,width:1}},progressiveThreshold:500,progressive:200},{type:"lines",coordinateSystem:"bmap",polyline:!0,data:busLines,lineStyle:{normal:{width:0}},effect:{constantSpeed:50,show:!0,trailLength:.5,symbolSize:3},zlevel:1}]};
