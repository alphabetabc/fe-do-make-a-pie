$.getJSON("/asset/get/s/data-1483975567865-BJOcimZIg.json",function(e){function o(t){return[e.airports[t][3],e.airports[t][4]]}var r=e.routes.map(function(t){return[o(t[1]),o(t[2])]});myChart.setOption({backgroundColor:"#000",globe:{baseTexture:"/asset/get/s/data-1491837049070-rJZtl7Y6x.jpg",heightTexture:"/asset/get/s/data-1491889019097-rJQYikcpl.jpg",shading:"lambert",light:{ambient:{intensity:.4},main:{intensity:.4}},viewControl:{autoRotate:!1}},series:{type:"lines3D",coordinateSystem:"globe",blendMode:"lighter",lineStyle:{width:1,color:"rgb(50, 50, 150)",opacity:.1},data:r}})});
