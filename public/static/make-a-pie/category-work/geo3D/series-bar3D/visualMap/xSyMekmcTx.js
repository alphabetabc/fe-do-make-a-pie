$.getJSON("/asset/get/s/data-1491887968120-rJODPy9ae.json",function(t){t=t.filter(function(e){return e[2]>0}).map(function(e){return[e[0],e[1],Math.sqrt(e[2])]}),myChart.setOption({backgroundColor:"#cdcfd5",geo3D:{map:"world",shading:"lambert",light:{main:{intensity:5,shadow:!0,shadowQuality:"high",alpha:30},ambient:{intensity:0},ambientCubemap:{texture:"/asset/get/s/data-1491896094618-H1DmP-5px.hdr",exposure:1,diffuseIntensity:.5}},viewControl:{distance:50,panMouseButton:"left",rotateMouseButton:"right"},groundPlane:{show:!0,color:"#999"},postEffect:{enable:!0,bloom:{enable:!1},SSAO:{radius:1,intensity:1,enable:!0},depthOfField:{enable:!1,focalRange:10,blurRadius:10,fstop:1}},temporalSuperSampling:{enable:!0},itemStyle:{},regionHeight:2},visualMap:{max:40,calculable:!0,realtime:!1,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]},outOfRange:{colorAlpha:0}},series:[{type:"bar3D",coordinateSystem:"geo3D",shading:"lambert",data:t,barSize:.1,minHeight:.2,silent:!0,itemStyle:{color:"orange"}}]})});