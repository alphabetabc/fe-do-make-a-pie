mapboxgl.accessToken=mapboxglToken,myChart.showLoading(),$.getJSON("/asset/get/s/data-1502362944712-r1FBphYv-.json",function(a){echarts.registerMap("buildings",a),myChart.hideLoading();var t=a.features.map(function(e){return{name:e.properties.name,value:e.properties.height,height:+e.properties.height*10+.1}});myChart.setOption({visualMap:{show:!1,min:.4,max:10,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]}},mapbox:{center:[108.95346,34.24],zoom:14,pitch:50,bearing:-10,style:"mapbox://styles/mapbox/dark-v9",postEffect:{enable:!0,SSAO:{enable:!0,intensity:1.3,radius:5,quality:"low"},depthOfField:{enable:!0,blurRadius:4,focalDistance:90,quality:"low"}},light:{main:{intensity:3,alpha:-40,shadow:!0,shadowQuality:"high"},ambient:{intensity:0},ambientCubemap:{texture:"/asset/get/s/data-1491838644249-ry33I7YTe.hdr",exposure:1,diffuseIntensity:.5,specularIntensity:1}}},series:[{type:"map3D",coordinateSystem:"mapbox",map:"buildings",data:t,shading:"lambert",instancing:!0,silent:!0,itemStyle:{areaColor:"#fff"},realisticMaterial:{metalness:0,roughness:0}}]})});