var uploadedDataURL="/asset/get/s/data-1495284690309-Bk9Ro3Te-.json";mapboxgl.accessToken=mapboxglToken,myChart.showLoading(),$.getJSON(uploadedDataURL,function(e){myChart.hideLoading(),myChart.setOption({visualMap:{show:!1,calculable:!0,realtime:!1,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]},outOfRange:{colorAlpha:0},max:e[1]},mapbox:{center:[121.4693,31.12307],zoom:10,pitch:50,bearing:-10,style:"mapbox://styles/mapbox/light-v9",boxHeight:2},series:[{type:"scatter3D",coordinateSystem:"mapbox",silent:!0,data:e[0],itemStyle:{borderWidth:.5,borderColor:"#fff"}}]})});