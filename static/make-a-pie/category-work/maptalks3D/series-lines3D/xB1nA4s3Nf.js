function mecatorToLngLat(a){var t=[];if(Array.isArray(a[0]))for(var e=0;e<a.length;e++){var r=proj4("EPSG:3857","EPSG:4326",a[e]);t.push(r)}else t=proj4("EPSG:3857","EPSG:4326",a);return t}var taxiRoutes=[],dataurl="/asset/get/s/data-1516182603477-B1XI252Ef.json";myChart.showLoading(),$.getJSON(dataurl,function(a){myChart.hideLoading();var t=a.data,e=300/(t.length-1),r=0;for(var i in t){var n=t[i],s=n.split(";"),o=[];for(var p in s)o.push(s[p].split(","));taxiRoutes.push({coords:o,lineStyle:{color:echarts.color.modifyHSL("#5A94DF",Math.round(e*i))}})}option={maptalks3D:{center:[127.41212033876286,36.35230174302066],zoom:8,baseLayer:{urlTemplate:"http://a.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png",subdomains:["a","b","c","d"]},pitch:50,altitudeScale:2,urlTemplate:"http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",postEffect:{enable:!0,FXAA:{enable:!0}},light:{main:{intensity:1,shadow:!0,shadowQuality:"high"},ambient:{intensity:0},ambientCubemap:{texture:"/asset/get/s/data-1491838644249-ry33I7YTe.hdr",exposure:1,diffuseIntensity:.5,specularIntensity:2}}},series:[{type:"lines3D",coordinateSystem:"maptalks3D",effect:{show:!0,constantSpeed:1,trailWidth:2,trailLength:.4,trailOpacity:1,spotIntensity:10},blendMode:"lighter",polyline:!0,lineStyle:{width:.1,color:"rgb(100, 100, 0)",opacity:0},data:taxiRoutes}]},myChart.setOption(option)});
