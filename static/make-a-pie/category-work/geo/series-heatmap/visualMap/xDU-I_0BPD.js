var uploadedDataURL="/asset/get/s/data-1594281065688-80dQTMwuL.json";$.get(uploadedDataURL,function(t){echarts.registerMap("china",t);let a=[["116.405285","39.904989",800],["117.190182","39.125596",600]],o=Math.max(...a.map(e=>e[2])),r=Math.min(...a.map(e=>e[2]));myChart.setOption({geo:{map:"china",label:{show:!0},itemStyle:{areaColor:"#76b1ff",borderColor:"#eee",shadowColor:"#76b1ff",shadowBlur:10,borderWidth:1},emphasis:{itemStyle:{areaColor:"#409EFF",borderWidth:0}}},visualMap:{show:!0,color:["#ff4601","#fffc00","#87cffa"],min:r,max:o},series:[{name:"AQI",type:"heatmap",coordinateSystem:"geo",data:a}]})});
