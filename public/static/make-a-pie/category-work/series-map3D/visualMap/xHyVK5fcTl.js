$.getJSON("/asset/get/s/data-1491900403342-rkjxOfqTl.json",function(e){echarts.registerMap("buildings",e);var a=e.features.map(function(t){return{name:t.properties.name,value:Math.random(),height:t.properties.height/10}});myChart.setOption({visualMap:{show:!1,min:.4,max:1,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]}},series:[{type:"map3D",map:"buildings",shading:"realistic",environment:"#000",realisticMaterial:{roughness:.6,textureTiling:20},postEffect:{enable:!0,SSAO:{enable:!0,intensity:1.3,radius:5},screenSpaceReflection:{enable:!1},depthOfField:{enable:!0,blurRadius:4,focalDistance:30}},light:{main:{intensity:3,alpha:40,shadow:!0,shadowQuality:"high"},ambient:{intensity:0},ambientCubemap:{texture:"/asset/get/s/data-1491838644249-ry33I7YTe.hdr",exposure:1,diffuseIntensity:.5,specularIntensity:1}},groundPlane:{show:!1,color:"#333"},viewControl:{minBeta:-360,maxBeta:360,alpha:50,center:[50,0,-10],distance:30,minDistance:5,panMouseButton:"left",rotateMouseButton:"middle",zoomSensitivity:.5},itemStyle:{areaColor:"#666"},label:{textStyle:{color:"white"}},silent:!0,instancing:!0,boxWidth:200,boxHeight:1,data:a}]})});