myChart.showLoading(),$.getJSON("/asset/get/s/data-1491900403342-rkjxOfqTl.json",function(e){echarts.registerMap("buildings",e),myChart.hideLoading();var a=e.features.map(function(t){return{name:t.properties.name,value:Math.random(),height:+t.properties.height*10+20}});myChart.setOption({maptalks3D:{center:[13.409779,52.520645],zoom:13,pitch:50,bearing:-10,baseLayer:{urlTemplate:"http://a.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png"},postEffect:{enable:!0,SSAO:{enable:!0,intensity:1.3,radius:5},screenSpaceReflection:{enable:!1},depthOfField:{enable:!0,blurRadius:4,focalDistance:90}},light:{main:{intensity:2,alpha:-40,shadow:!0,shadowQuality:"high"},ambient:{intensity:0},ambientCubemap:{texture:"/asset/get/s/data-1491838644249-ry33I7YTe.hdr",exposure:1,diffuseIntensity:.5,specularIntensity:1}}},series:[{type:"map3D",coordinateSystem:"maptalks3D",map:"buildings",data:a,shading:"realistic",instancing:!0,silent:!0,itemStyle:{areaColor:"#fff"},realisticMaterial:{metalness:0,roughness:0}}]})}),window.addEventListener("resize",function(){myChart.resize()});
