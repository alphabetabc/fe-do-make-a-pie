var uploadedDataURL="/asset/get/s/data-1504625299896-Hkh5zB3tZ.json";myChart.setOption(option={bmap:{center:[120.17,30.27],zoom:12,roam:!0,mapStyle:{styleJson:[{featureType:"water",elementType:"all",stylers:{color:"#031628"}},{featureType:"land",elementType:"geometry",stylers:{color:"#000102"}},{featureType:"highway",elementType:"all",stylers:{visibility:"off"}},{featureType:"arterial",elementType:"geometry.fill",stylers:{color:"#000000"}},{featureType:"arterial",elementType:"geometry.stroke",stylers:{color:"#0b3d51"}},{featureType:"local",elementType:"geometry",stylers:{color:"#000000"}},{featureType:"railway",elementType:"geometry.fill",stylers:{color:"#000000"}},{featureType:"railway",elementType:"geometry.stroke",stylers:{color:"#08304b"}},{featureType:"subway",elementType:"geometry",stylers:{lightness:-70}},{featureType:"building",elementType:"geometry.fill",stylers:{color:"#000000"}},{featureType:"all",elementType:"labels.text.fill",stylers:{color:"#857f7f"}},{featureType:"all",elementType:"labels.text.stroke",stylers:{color:"#000000"}},{featureType:"building",elementType:"geometry",stylers:{color:"#022338"}},{featureType:"green",elementType:"geometry",stylers:{color:"#062032"}},{featureType:"boundary",elementType:"all",stylers:{color:"#465b6c"}},{featureType:"manmade",elementType:"all",stylers:{color:"#022338"}},{featureType:"label",elementType:"all",stylers:{visibility:"off"}}]}},series:[]}),myChart.showLoading(),$.getJSON(uploadedDataURL,function(l){for(var y=300/l.length,o=[],e=0;e<l.length;e+=1){for(var r=[[l[e][0][0]/1e6,l[e][0][1]/1e6]],t=1;t<l[e].length;t+=1){var s=l[e][t][0]/1e6+r[t-1][0],a=l[e][t][1]/1e6+r[t-1][1];r.push([s,a])}o.push({coords:r,lineStyle:{normal:{color:echarts.color.modifyHSL("#61adff",y*e)}}})}myChart.hideLoading(),myChart.setOption(option={series:[{type:"lines",coordinateSystem:"bmap",polyline:!0,data:o,lineStyle:{normal:{width:.05}},effect:{constantSpeed:40,show:!0,trailLength:.2,symbolSize:2},zlevel:1}]})});