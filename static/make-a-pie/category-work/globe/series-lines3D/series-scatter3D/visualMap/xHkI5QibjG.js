$.getJSON("/asset/get/s/data-1491887968120-rJODPy9ae.json",function(e){e=e.filter(function(t){return t[2]>0}).map(function(t){return[t[0],t[1],.1]}),console.log(e),myChart.setOption({visualMap:{show:!1,min:0,max:600,inRange:{symbolSize:[10,10]}},globe:{environment:"#000",globeOuterRadius:100,shading:"realistic",realisticMaterial:{roughness:.7,metalness:.5},postEffect:{enable:!0},temporalSuperSampling:{enable:!0},light:{main:{intensity:.5,shadow:!1,alpha:45,beta:45}},viewControl:{autoRotate:!0,autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:[1,0],beta:180,alpha:20,distance:200,targetCoord:[116.46,39.92]}},series:[{type:"lines3D",coordinateSystem:"globe",itemStyle:{color:"darkgreen"},effect:{show:!0,period:5,trailOpacity:1},lineStyle:{opacity:0},zlevel:90,data:[[[116.46,39.92],[39.92,116.46]]]},{type:"scatter3D",coordinateSystem:"globe",itemStyle:{color:"bule"},zlevel:1,itemStyle:{opacity:.1},data:e}]})});