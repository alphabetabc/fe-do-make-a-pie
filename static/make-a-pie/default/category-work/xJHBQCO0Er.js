import*as r from"echarts";var y="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples",s=document.getElementById("main"),i=r.init(s),o;$.get(y+"/data/asset/data/hangzhou-tracks.json",function(e){const l=e.map(function(t){return{coords:t.map(function(a,f){return a.coord})}});i.setOption(o={bmap:{center:[120.13066322374,30.240018034923],zoom:1,roam:!0,mapStyle:{styleJson:[{featureType:"water",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"land",elementType:"all",stylers:{color:"#f3f3f3"}},{featureType:"railway",elementType:"all",stylers:{visibility:"off"}},{featureType:"highway",elementType:"all",stylers:{color:"#fdfdfd"}},{featureType:"highway",elementType:"labels",stylers:{visibility:"off"}},{featureType:"arterial",elementType:"geometry",stylers:{color:"#fefefe"}},{featureType:"arterial",elementType:"geometry.fill",stylers:{color:"#fefefe"}},{featureType:"poi",elementType:"all",stylers:{visibility:"off"}},{featureType:"green",elementType:"all",stylers:{visibility:"off"}},{featureType:"subway",elementType:"all",stylers:{visibility:"off"}},{featureType:"manmade",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"local",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"arterial",elementType:"labels",stylers:{visibility:"off"}},{featureType:"boundary",elementType:"all",stylers:{color:"#fefefe"}},{featureType:"building",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"label",elementType:"labels.text.fill",stylers:{visibility:"off"}}]}},series:[{type:"lines",coordinateSystem:"bmap",data:l,polyline:!0,lineStyle:{color:"purple",opacity:.6,width:1}}]})});