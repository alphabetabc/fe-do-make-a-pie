let canvas=document.createElement("canvas"),mapChart=echarts.init(canvas,null,{width:4096,height:2048});mapChart.setOption({series:[{type:"map",map:"world",top:0,left:0,right:0,bottom:0,boundingCoords:[[-180,90],[180,-90]],itemStyle:{normal:{areaColor:"transparent",borderColor:"rgb(60, 60, 200)"}}}]}),$.getJSON("/asset/get/s/data-1491909692146-S1NH24cTe.json",function(t){var s=t.airports.map(function(e){return{coord:[e[3],e[4]]}});function l(e){return[t.airports[e][3],t.airports[e][4]]}var n={};t.routes.forEach(function(e){var r=t.airlines[e[0]],a=r[0];n[a]||(n[a]=[]),n[a].push(e)});var i=[];t.routes.forEach(function(e){i.push(l(e[1])),i.push(l(e[2]))});var o=t.airlines.map(function(e){var r=e[0],a=n[r];return a?{type:"lines3D",name:r,lineStyle:{width:1,color:"rgb(200, 60, 60)",opacity:.5},blendMode:"lighter",data:a.map(function(c){var u=Math.random();return{lineStyle:{width:u*2+.2,color:"rgb(200, 60, 60)",opacity:u/2},coords:[s[c[1]].coord,s[c[2]].coord]}})}:null}).filter(function(e){return!!e});o.push({type:"scatter3D",coordinateSystem:"globe",blendMode:"lighter",symbolSize:2,itemStyle:{color:"rgb(200, 60, 60)",opacity:.2},data:i}),myChart.setOption({legend:{selectedMode:"single",left:"left",data:Object.keys(n),orient:"vertical",textStyle:{color:"#fff"}},globe:{environment:"/asset/get/s/data-1491837999815-H1_44Qtal.jpg",heightTexture:"/asset/get/s/data-1491837512042-rJlLfXYax.jpg",displacementScale:.02,displacementQuality:"high",baseColor:"#000",shading:"realistic",realisticMaterial:{roughness:.2,metalness:0},postEffect:{enable:!0,depthOfField:{enable:!1,focalDistance:150}},temporalSuperSampling:{enable:!0},layers:[{texture:mapChart}],light:{ambient:{intensity:0},main:{intensity:.1,shadow:!1},ambientCubemap:{texture:"/asset/get/s/data-1491837984109-r1u7NmY6e.hdr",exposure:1,diffuseIntensity:.5,specularIntensity:2}},viewControl:{autoRotate:!1},silent:!0},series:o}),window.addEventListener("keydown",function(){o.forEach(function(e,r){myChart.dispatchAction({type:"lines3DToggleEffect",seriesIndex:r})})})});
