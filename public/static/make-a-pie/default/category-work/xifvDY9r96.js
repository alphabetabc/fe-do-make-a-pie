var uploadedDataURL="/asset/get/s/data-1464248983149-HJ1jcQNX.json";$.getJSON(uploadedDataURL,function(t){var y=[].concat.apply([],t.map(function(e){return e.slice(1).map(function(r,l){return[e[l],e[l+1]]})}));myChart.setOption(option={animation:!1,bmap:{center:[120.127117,30.228247],zoom:14,roam:!0,mapStyle:{styleJson:[{featureType:"water",elementType:"all",stylers:{color:"#113549ff"}},{featureType:"land",elementType:"all",stylers:{color:"#091220ff"}},{featureType:"railway",elementType:"all",stylers:{visibility:"off"}},{featureType:"highway",elementType:"geometry",stylers:{visibility:"on",weight:4}},{featureType:"highway",elementType:"geometry.fill",stylers:{color:"#12223dff"}},{featureType:"highway",elementType:"geometry.stroke",stylers:{color:"#fed66900"}},{featureType:"highway",elementType:"labels",stylers:{visibility:"on"}},{featureType:"highway",elementType:"labels.text.fill",stylers:{color:"#12223dff"}},{featureType:"highway",elementType:"labels.text.stroke",stylers:{color:"#ffffff00"}},{featureType:"highway",elementType:"labels.icon",stylers:{visibility:"on"}},{featureType:"arterial",elementType:"geometry",stylers:{color:"#12223dff"}},{featureType:"arterial",elementType:"geometry.fill",stylers:{color:"#12223dff"}},{featureType:"poi",elementType:"all",stylers:{visibility:"off"}},{featureType:"green",elementType:"all",stylers:{visibility:"off"}},{featureType:"subway",elementType:"all",stylers:{visibility:"off"}},{featureType:"manmade",elementType:"all",stylers:{color:"#12223dff"}},{featureType:"local",elementType:"all",stylers:{color:"#12223dff"}},{featureType:"arterial",elementType:"labels",stylers:{visibility:"off"}},{featureType:"boundary",elementType:"all",stylers:{color:"#fefefe"}},{featureType:"building",elementType:"all",stylers:{color:"#143e56ff"}},{featureType:"label",elementType:"geometry",stylers:{visibility:"off"}}]}},series:[{type:"lines",coordinateSystem:"bmap",data:y,lineStyle:{normal:{color:"#2dc4bb",opacity:.4,width:1}}}]})});
