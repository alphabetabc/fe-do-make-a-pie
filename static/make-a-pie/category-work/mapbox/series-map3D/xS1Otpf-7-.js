mapboxgl.accessToken=mapboxglToken,$.getJSON("/asset/get/s/data-1491900403342-rkjxOfqTl.json",function(e){echarts.registerMap("buildings",e);var a=e.features.map(function(t){return{name:t.properties.name,value:Math.random(),height:+t.properties.height*10}});myChart.setOption({mapbox:{center:[13.409779,52.520645],zoom:13,pitch:50,bearing:-10,style:"mapbox://styles/mapbox/dark-v9",postEffect:{enable:!0,SSAO:{enable:!0,intensity:1.2,radius:10},screenSpaceReflection:{enable:!0}},light:{main:{intensity:1,shadow:!1,shadowQuality:"high"},ambient:{intensity:0},ambientCubemap:{texture:"/asset/get/s/data-1491838644249-ry33I7YTe.hdr",exposure:1,diffuseIntensity:.5,specularIntensity:2}}},series:[{type:"map3D",coordinateSystem:"mapbox",map:"buildings",data:a,shading:"realistic",instancing:!0,silent:!0,itemStyle:{borderColor:[0,2,10],borderWidth:1},realisticMaterial:{metalness:1,roughness:.4}}]})});
