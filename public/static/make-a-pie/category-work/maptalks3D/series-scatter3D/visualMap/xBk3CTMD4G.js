var uploadedDataURL="/asset/get/s/data-1515821994295-B1f2ofDNG.json";myChart.showLoading(),$.getJSON(uploadedDataURL,function(e){myChart.hideLoading();for(var t=[],o=1e4,a=0;a<e[0].length;a++){var r=e[0][a].geoCoord,d=r.concat(Math.random()*o),l={name:"",value:d};t.push(l)}myChart.setOption({visualMap:{show:!1,calculable:!0,realtime:!1,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]},outOfRange:{colorAlpha:0},max:o},maptalks3D:{urlTemplate:"http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",center:[121.4693,31.12307],zoom:3,pitch:50,boxHeight:2},series:[{type:"scatter3D",coordinateSystem:"maptalks3D",silent:!0,data:t,itemStyle:{borderWidth:.5,borderColor:"#fff"}}]})});
