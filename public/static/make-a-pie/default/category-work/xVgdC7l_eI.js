var ROOT_PATH="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";let option;$.getJSON(ROOT_PATH+"/data-gl/asset/data/flights.json",function(e){function a(t){return[e.airports[t][3],e.airports[t][4]]}var s=e.routes.map(function(t){return[a(t[1]),a(t[2])]});console.log(s),myChart.setOption({backgroundColor:"#000",globe:{baseTexture:"data-gl/asset/world.topo.bathy.200401.jpg",heightTexture:"data-gl/asset/bathymetry_bw_composite_4k.jpg",shading:"lambert",displacementScale:.1,environment:"data-gl/asset/starfield.jpg",realisticMaterial:{roughness:"/asset/get/s/data-1497599804873-H1SHkG-mZ.jpg",metalness:"/asset/get/s/data-1497599800643-BJbHyGWQW.jpg",textureTiling:[8,4]},light:{ambient:{intensity:.5},main:{intensity:.5}},viewControl:{autoRotate:!0,autoRotateAfterStill:3},layers:[{type:"blend",blendTo:"emission",texture:"asset/night.jpg"},{type:"overlay",texture:"asset/clouds.png",shading:"lambert",distance:5}]},series:{type:"lines3D",coordinateSystem:"globe",effect:{show:!0,trailWidth:1,trailLength:.2,trailOpacity:1.5,trailColor:"rgb(30, 30, 60)"},blendMode:"lighter",lineStyle:{width:1,color:"rgb(50, 50, 150)",opacity:.1},data:s}})}),option&&myChart.setOption(option);