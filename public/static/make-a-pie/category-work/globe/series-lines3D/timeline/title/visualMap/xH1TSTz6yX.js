$.getJSON("/asset/get/s/data-1483975567865-BJOcimZIg.json",function(s){function a(t){return[s.airports[t][3],s.airports[t][4]]}var e=s.routes.slice(0,900).map(function(t){return{coords:[a(t[1]),a(t[2])],value:Math.round(Math.random()*100)}});myChart.setOption({timeline:{axisType:"category",autoPlay:!0,data:["2014","2015","2016","2017"]},baseOption:{title:{text:"境外资本流入",textStyle:{color:"#fff"},left:"center",top:20},visualMap:{id:"lines",type:"piecewise",show:!1,seriesIndex:0,splitNumber:4,max:100,color:["#215096","#3598c1","#40a9ed","#b7d6f3"]},backgroundColor:"#000",globe:{baseTexture:"/asset/get/s/data-1491837049070-rJZtl7Y6x.jpg",heightTexture:"/asset/get/s/data-1491889019097-rJQYikcpl.jpg",environment:"/asset/get/s/data-1499132777213-SyZdmO_4-.jpg",shading:"lambert",globeRadius:60,light:{ambient:{intensity:.4},main:{intensity:.4}},viewControl:{autoRotate:!0}},series:[{type:"lines3D",coordinateSystem:"globe",lineStyle:{width:1.5,opacity:.8},data:[]}]},options:[{title:{text:"2014"},series:[{data:e.slice(0,5)}]},{title:{text:"2015"},series:[{data:e.slice(0,50)}]},{title:{text:"2016"},series:[{data:e.slice(0,150)}]},{title:{text:"2017"},series:[{data:e}]}]})});