var uploadedDataURL="/asset/get/s/data-1520166901794-HJRxuDtOG.json",bg='<div class="bg-tooltip"></div>';$.get(uploadedDataURL,function(e){echarts.registerMap("gd",e),option={tooltip:{formatter:function(){},enterable:!0,padding:0,zlevel:500,transitionDuration:1,textStyle:{color:"#000",decoration:"none"}},geo:{map:"gd",roam:"false",layoutCenter:["50%","55%"],layoutSize:"90%",aspectScale:.75,itemStyle:{normal:{borderColor:"rgba(147,235,248,1)",borderWidth:.5,color:"#203b50",opacity:.5},emphasis:{areaColor:"rgba(147,235,248,0)"}},z:2},series:[{type:"map",map:"gd",label:{normal:{show:!0}},top:"13%",left:"15%",aspectScale:.75,roam:!1,itemStyle:{normal:{borderColor:"rgba(147,235,248,0.6)",borderWidth:.8,areaColor:{type:"linear-gradient",x:0,y:30,x2:7,y2:0,colorStops:[{offset:0,color:"#009DA1"},{offset:1,color:"#005B9E"}],global:!0},opacity:1},emphasis:{areaColor:"rgba(147,235,248,0)"}},zlevel:1},{name:"错误图标",coordinateSystem:"geo",type:"effectScatter",symbol:""}]},myChart.setOption(option)});