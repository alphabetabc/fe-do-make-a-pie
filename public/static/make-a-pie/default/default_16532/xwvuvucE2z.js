var uploadedDataURL="/asset/get/s/data-1598406021187-6roTNOQlk.json";$.get(uploadedDataURL,function(e){echarts.registerMap("js",e);var o={visualMap:[{show:!0,type:"piecewise",min:800,max:5e4}],geo:{id:0,show:!0,map:"js",regions:[{name:"广东省",itemStyle:{areaColor:"red",color:"red"}}],roam:!0,aspectScale:.75,zoom:1.6,itemStyle:{areaColor:{type:"radial",x:1,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#abcdef"},{offset:.5,color:"#123456"},{offset:1,color:"#abcdef"}],global:!0},borderColor:"#000",borderWidth:0,shadowColor:"rgba(0, 0, 0, 0.2)",shadowBlur:100,shadowOffsetX:20},emphasis:{itemStyle:{areaColor:"red",shadowColor:"rgba(0, 0, 0, 1)",shadowBlur:10,shadowOffsetX:10}}},series:[{name:"散点图",type:"scatter",coordinateSystem:"geo",data:[{name:"武汉",value:[114.3896,30.6628,9e3]}]}]};myChart.setOption(o)});