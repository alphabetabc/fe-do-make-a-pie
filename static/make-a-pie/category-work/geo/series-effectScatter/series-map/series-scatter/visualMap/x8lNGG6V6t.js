var uploadedDataURL="/asset/get/s/data-1528971808162-BkOXf61WX.json";let data=[{name:"湖北",value:[113.289984,31.42,2e3]},{name:"湖南",value:[112.03042,27,2e5]},{name:"四川",value:[102.112035,30.630737,5e3]},{name:"重庆",value:[108.112035,30.630737,6e4]},{name:"山东",value:[118.19,36.22,20050]}],LableData=[{name:"湖北",value:[113.289984,31.42,2e3]},{name:"湖南",value:[112.03042,27,2e5]},{name:"四川",value:[102.112035,30.630737,5e3]},{name:"重庆",value:[108.112035,30.630737,6e4]},{name:"山东",value:[118.19,36.22,20050]}];var option={backgroundColor:"#021640",geo:{map:"china",aspectScale:.75,zoom:1,top:90,roam:!1,itemStyle:{normal:{areaColor:"#d47e63",shadowColor:"#002666",shadowOffsetX:12,shadowOffsetY:16,borderColor:"#d47e63"},emphasis:{areaColor:"#2AB8FF",borderWidth:0,color:"green",label:{show:!0}}},regions:[{name:"南海诸岛",itemStyle:{areaColor:"rgba(0, 10, 52, 1)",borderColor:"rgba(0, 10, 52, 1)",normal:{opacity:0,label:{show:!0,color:"#009cc9"}}}}]},visualMap:{min:0,max:1e4,calculable:!1,show:!0,right:50,bottom:50,color:["#00eaff","#fc9700","#ffde00","#ffde00","red"],textStyle:{color:"#fff"}},series:[{type:"map",roam:!1,layoutSize:"90%",aspectScale:.75,zoom:1,roam:!1,map:"china",top:90,label:{normal:{show:!0,textStyle:{color:"#1DE9B6"}},emphasis:{textStyle:{color:"rgb(183,185,14)"}}},itemStyle:{normal:{borderColor:"rgb(147, 235, 248,.8)",borderWidth:.2,areaColor:{type:"linear",x:.2,y:.8,r:.8,colorStops:[{offset:0,color:"#002283"},{offset:.3,color:"#011f6d"},{offset:1,color:"#021640"}],globalCoord:!0}},emphasis:{areaColor:{type:"radial",x:.2,y:.8,r:.8,colorStops:[{offset:0,color:"#091739"},{offset:1,color:"#0b1843"}],globalCoord:!0},borderWidth:1,borderColor:"#f9bc90"}}},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,symbolSize:10,rippleEffect:{period:2,scale:4,brushType:"fill"},label:{normal:{show:!1,position:"right",formatter:"{b}",color:"#b3e2f2",fontWeight:"400",fontSize:12}},data,itemStyle:{normal:{show:!1,color:"#ff3f3a",shadowBlur:20,shadowColor:"#fff"},emphasis:{areaColor:"#f00"}}},{name:"lable",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:[75,70],hoverAnimation:!0,zlevel:2,label:{normal:{show:!0,textStyle:{color:"#fff",lineHeight:15},formatter(e){return e.data.value[2]}}},itemStyle:{normal:{color:"#6495ED",opacity:.8,borderColor:"#aee9fb",borderWidth:.6}},showEffectOn:"render",rippleEffect:{brushType:"stroke"},data:LableData}]};myChart.showLoading();let index=-1;$.getJSON(uploadedDataURL,function(e){echarts.registerMap("china",e),myChart.hideLoading(),myChart.setOption(option,!0)});
