var uploadedDataURL="/asset/get/s/data-1555851394070-aGGRVy22M.json";myChart.showLoading();function coltowgs(a,r){var t=118.36,o=121.986379,e=30.67,l=33.402324,n=1e3,c=Math.min(e,l),h=Math.min(t,o),s=n*360/(2*Math.PI*6371004*Math.cos((e+l)*Math.PI/360)),i=n*360/(2*Math.PI*6371004),f=a*s+(h-s/2),u=r*i+(c-i/2);return[f,u]}var option={title:{text:"上海到南京出行轨迹",textStyle:{color:"#fff",fontSize:30},right:"0%"},visualMap:{show:!1,calculable:!0,realtime:!1,dimension:3,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]},outOfRange:{colorAlpha:0}},maptalks3D:{center:[120.0693,31.71307],zoom:8,pitch:10,urlTemplate:"http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",postEffect:{enable:!0,FXAA:{enable:!0}},light:{main:{intensity:1,shadow:!0,shadowQuality:"high"},ambient:{intensity:0},ambientCubemap:{texture:"/asset/get/s/data-1491838644249-ry33I7YTe.hdr",exposure:1,diffuseIntensity:.5,specularIntensity:2}}},series:[{type:"lines3D",coordinateSystem:"maptalks3D",blendMode:"lighter",effect:{show:!0,trailWidth:1,trailOpacity:.5,trailLength:.2,constantSpeed:5},data:[],polyline:!0,large:!0,lineStyle:{opacity:.5}}]};$.getJSON(uploadedDataURL,function(a){myChart.hideLoading();for(var r=[],t=0;t<a.length;t+=1){for(var o=[],e=0;e<a[t].length;e+=1)a[t].length>0&&(loncol=a[t][e][0],latcol=a[t][e][1],coor=coltowgs(loncol,latcol),o.push([coor[0],coor[1]]));r.push(o)}option.visualMap.max=3e4,option.series[0].data=r,option&&typeof option=="object"&&myChart.setOption(option,!0)});
