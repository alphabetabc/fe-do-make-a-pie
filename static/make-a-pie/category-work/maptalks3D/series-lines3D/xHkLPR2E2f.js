$.getJSON("/asset/get/s/data-1524055280228-SkugT242f.json",function(i){var t=i.features,r=300/(t.length-1),e=[],o=0;for(var a in t){var n=t[a].geometry.coordinates;e.push({coords:n,lineStyle:{color:echarts.color.modifyHSL("#5A94DF",Math.round(r*a))}})}var s={maptalks3D:{center:[-74.01164278497646,40.70769573605318],zoom:14,pitch:55,urlTemplate:"http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",altitudeScale:2,postEffect:{enable:!0,FXAA:{enable:!0}},light:{main:{intensity:1,shadow:!0,shadowQuality:"high"},ambient:{intensity:0},ambientCubemap:{texture:"/asset/get/s/data-1491838644249-ry33I7YTe.hdr",exposure:1,diffuseIntensity:.5,specularIntensity:2}}},series:[{type:"lines3D",coordinateSystem:"maptalks3D",effect:{show:!0,constantSpeed:1,trailWidth:3,trailLength:1,trailOpacity:1,spotIntensity:10},blendMode:"lighter",polyline:!0,lineStyle:{width:5,color:"rgb(100, 100, 0)",opacity:0},data:e}]};myChart.setOption(s),window.addEventListener("resize",function(){myChart.resize()})});
