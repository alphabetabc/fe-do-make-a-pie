var uploadedDataURL="/asset/get/s/data-1504625299896-Hkh5zB3tZ.json";myChart.setOption(option={bmap:{center:[120.17,30.27],zoom:12,roam:!0,mapStyle:{styleJson:[{featureType:"water",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"land",elementType:"all",stylers:{color:"#f3f3f3"}},{featureType:"railway",elementType:"all",stylers:{visibility:"off"}},{featureType:"highway",elementType:"all",stylers:{color:"#fdfdfd"}},{featureType:"highway",elementType:"labels",stylers:{visibility:"off"}},{featureType:"arterial",elementType:"geometry",stylers:{color:"#fefefe"}},{featureType:"arterial",elementType:"geometry.fill",stylers:{color:"#fefefe"}},{featureType:"poi",elementType:"all",stylers:{visibility:"off"}},{featureType:"green",elementType:"all",stylers:{visibility:"off"}},{featureType:"subway",elementType:"all"},{featureType:"manmade",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"local",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"arterial",elementType:"labels",stylers:{visibility:"off"}},{featureType:"boundary",elementType:"all",stylers:{color:"#fefefe"}},{featureType:"building",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"label",elementType:"labels.text.fill",stylers:{color:"#999999"}}]}},series:[]}),myChart.showLoading(),$.getJSON(uploadedDataURL,function(e){for(var o=300/e.length,a=[],l=0;l<e.length;l+=1){for(var r=[[e[l][0][0]/1e6,e[l][0][1]/1e6]],t=1;t<e[l].length;t+=1){var y=e[l][t][0]/1e6+r[t-1][0],s=e[l][t][1]/1e6+r[t-1][1];r.push([y,s])}a.push({coords:r})}myChart.hideLoading(),myChart.setOption(option={series:[{type:"lines",coordinateSystem:"bmap",polyline:!0,data:a,silent:!0,lineStyle:{normal:{color:"#c23531",opacity:.5,width:1}},progressiveThreshold:500,progressive:200}]})});
