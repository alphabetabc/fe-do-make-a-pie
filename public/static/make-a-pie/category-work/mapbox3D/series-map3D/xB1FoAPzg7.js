mapboxgl.accessToken="pk.eyJ1IjoibW9yZ2Vua2FmZmVlIiwiYSI6IjIzcmN0NlkifQ.0LRTNgCc-envt9d5MzR75w",$.getJSON("/asset/get/s/data-1524056463493-H1PcbpN2z.json",function(n){var t=n.map(function(e){return{type:"Feature",properties:{name:Math.random().toString(),height:e.height||100},geometry:{type:"Polygon",coordinates:[e.polygon]}}}),a={features:t};console.log(a),echarts.registerMap("buildings",a);var i=t.map(function(e){return{name:e.properties.name,value:Math.random()*1,height:e.properties.height}});console.log(i),myChart.setOption({mapbox3D:{center:[-74.01164278497646,40.70769573605318],zoom:16,pitch:55,bearing:-10,style:"mapbox://styles/mapbox/traffic-night-v2",postEffect:{},light:{main:{intensity:1,shadow:!1,shadowQuality:"high"},ambient:{intensity:0},ambientCubemap:{texture:"/asset/get/s/data-1491838644249-ry33I7YTe.hdr",exposure:1,diffuseIntensity:.5,specularIntensity:2}}},series:[{type:"map3D",coordinateSystem:"mapbox3D",map:"buildings",data:i,shading:"realistic",instancing:!0,silent:!0,realisticMaterial:{textureTiling:35,detailTexture:"/asset/get/s/data-1528097075999-B13VYDfxm.jpg"}}]})}),window.addEventListener("resize",function(){myChart.resize()});
