option={title:{top:10,text:"整体地图渐变色，地图上的文字放大到一定比例才会显示。",left:"center",textStyle:{color:"#fff"}},backgroundColor:"rgba(0, 10, 52, 1)",series:[{type:"map",map:"china",tooltip:{show:!1},label:{show:!1,color:"#FFFFFF",fontSize:16},aspectScale:.75,layoutCenter:["50%","50%"],layoutSize:"118%",roam:!0,geoIndex:0,itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 0.6)",borderWidth:.8,areaColor:{type:"linear-gradient",x:0,y:1200,x2:1e3,y2:0,colorStops:[{offset:0,color:"#009DA1"},{offset:1,color:"#005B9E"}],global:!0}},emphasis:{areaColor:"rgba(147, 235, 248, 0)"}},zlevel:1}]};var myZoom;myChart.on("georoam",function(o){if(!(o.dy||o.dx)){var e=myChart.getOption().series[0].zoom;myZoom!=e&&(myZoom=e,myZoom>2?(option.series[0].label.show=!0,myChart.setOption(option)):(option.series[0].label.show=!1,myChart.setOption(option)))}});
