var canvas=document.createElement("canvas"),mapChart=echarts.init(canvas,null,{width:768,height:768});$.getJSON("/asset/get/s/data-1567587302321-iYA4ItuUM.json",function(t){t=t.filter(function(e){return e[2]>0}).map(function(e){return[e[0],e[1],Math.sqrt(e[2])]}),myChart.setOption({visualMap:{show:!1,min:0,max:60,inRange:{symbolSize:[1,10]}},globe:{displacementScale:.05,displacementQuality:"high",globeOuterRadius:100,baseColor:"none"},series:{type:"scatter3D",coordinateSystem:"globe",blendMode:"lighter",symbolSize:2,itemStyle:{color:"rgb(50, 50, 150)",opacity:1},data:t}})});