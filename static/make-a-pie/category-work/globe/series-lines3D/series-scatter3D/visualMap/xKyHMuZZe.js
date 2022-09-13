let canvas=document.createElement("canvas"),mapChart=echarts.init(canvas,null,{width:4096,height:2048}),pOp={geo:{show:!0,map:"china",label:{show:!0,color:"#f66",fontWeight:"bold",fontSize:16,emphasis:{color:"#000",show:!1}},itemStyle:{areaColor:"transparent",borderColor:"#ffff00"},emphasis:{areaColor:"transparent"},regions:[{name:"南海诸岛",value:0,itemStyle:{normal:{opacity:0,label:{show:!1}}}}],top:0,left:0,right:0,bottom:0,boundingCoords:[[-180,90],[180,-90]]},data:[]};mapChart.setOption(pOp),option={backgroundColor:"#333",visualMap:{show:!1,max:3e3,type:"continuous",seriesIndex:0,text:["scatter3D"],textStyle:{color:"#fff"},calculable:!0,inRange:{color:["#87aa66","#eba438","#d94d4c"],symbolSize:[8,30]}},globe:{baseTexture:"/asset/get/s/data-1565167424629-_VRUzTZn2.jpg",heightTexture:"/asset/get/s/data-1491889019097-rJQYikcpl.jpg",displacementScale:.04,displacementQuality:"high",globeOuterRadius:110,shading:"realistic",environment:"/asset/get/s/data-1491837999815-H1_44Qtal.jpg",realisticMaterial:{roughness:.9},postEffect:{enable:!0},temporalSuperSampling:{enable:!1},light:{main:{color:"#fff",intensity:2.8,shadow:!1},ambientCubemap:{diffuseIntensity:.2}},viewControl:{projection:"perspective",alpha:0,beta:180,center:[0,0,0],targetCoord:[120,38],autoRotate:!0,autoRotateAfterStill:20,distance:166},layers:[{type:"blend",texture:mapChart}]},series:[{type:"scatter3D",coordinateSystem:"globe",blendMode:"lighter",symbolSize:2,itemStyle:{color:"rgb(255,0,0)",opacity:1},data:[]},{name:"lines3D",type:"lines3D",coordinateSystem:"globe",effect:{show:!0,period:2,trailWidth:1,trailLength:.5,trailOpacity:1,trailColor:"#0087f4"},blendMode:"lighter",lineStyle:{width:1,color:"#0087f4",opacity:0},data:[],silent:!1}]},myChart.setOption(option);for(let e=0;e<50;e++)option.series[1].data=option.series[1].data.concat(getRandomData());function getRandomData(){return{coords:[[Math.random()*135.2,Math.random()*53.33],[121.51585,31.23045]],value:(Math.random()*30).toFixed(2)}}