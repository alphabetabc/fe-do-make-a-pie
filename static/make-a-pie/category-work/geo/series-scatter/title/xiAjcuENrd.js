echarts.registerMap("beijin",{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[116.25938415527344,39.87707332113241],[116.40495300292967,39.87707332113241],[116.40495300292967,40.04075787580295],[116.25938415527344,40.04075787580295],[116.25938415527344,39.87707332113241]]]}}]}),option={backgroundColor:"#156484",title:{text:"1111",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item",show:!1,showContent:!1,alwaysShowContent:!1,enterable:!0},geo:[{type:"map",map:"beijin",tooltip:{show:!0},itemStyle:{normal:{areaColor:"rgba(255, 255, 255, 0)",borderColor:"red",borderWidth:2},emphasis:{show:!1,areaColor:"rgba(255, 255, 255, 0)"}}}],series:[{name:"beijin",type:"map",mapType:"beijin",roam:!0,itemStyle:{normal:{areaColor:"rgba(255, 255, 255, 0)",borderColor:"red",borderWidth:2},emphasis:{show:!1,areaColor:"rgba(255, 255, 255, 0)"}}}]},myChart.setOption(option,!0),option.series.push({name:"aaa",type:"pie",radius:"5%",center:myChart.convertToPixel({geoIndex:0},[116.35938415527345,39.97707332113241]),color:"red",data:[{name:"data1",value:12}]}),myChart.setOption(option);
