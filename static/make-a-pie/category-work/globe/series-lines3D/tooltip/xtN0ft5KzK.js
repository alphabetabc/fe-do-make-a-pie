var uploadedDataURL="/asset/get/s/data-1625545136350-oWFk_ystL.json",baseTexture=null,option=null,geoJson=null;function getGeoJsonData(){$.getJSON(uploadedDataURL,function(t){geoJson=t,getBaseTexture()})}function getBaseTexture(){echarts.registerMap("world",geoJson);let t=document.createElement("canvas");baseTexture=echarts.init(t,null,{width:4096,height:2048}),baseTexture.setOption({backgroundColor:"#031c48",geo:{type:"map",map:"world",left:0,top:0,right:0,bottom:0,boundingCoords:[[-180,90],[180,-90]],roam:!1,itemStyle:{normal:{areaColor:"#2455ad",borderColor:"#000c2d"},emphasis:{areaColor:"#357cf8"}},label:{normal:{fontSize:20,show:!0,textStyle:{color:"#fff"}},emphasis:{fontSize:30,show:!0,textStyle:{color:"yellow"}}}}}),drawEarth()}function drawEarth(){option={backgroundColor:"#013954",tooltip:{trigger:"item"},globe:{baseTexture,globeRadius:150,environment:"#000",shading:"color",light:{main:{color:"#fff",intensity:1,alpha:40,beta:-30},ambient:{color:"#fff",intensity:1}},viewControl:{alpha:30,beta:160,autoRotate:!0,autoRotateAfterStill:10,distance:240}},series:[{name:"世界贸易情况",type:"lines3D",coordinateSystem:"globe",effect:{show:!0},blendMode:"lighter",lineStyle:{width:2},data:[],silent:!1}]};for(let t=0;t<100;t++)option.series[0].data=option.series[0].data.concat(rodamData());myChart.clear(),myChart.setOption(option,!0)}function rodamData(){let t="随机数据"+Math.random().toFixed(5)*1e5,e=116.2,o=39.56,a=Math.random()*360-180,r=Math.random()*180-90;return{coords:[[e,o],[a,r]],value:(Math.random()*3e3).toFixed(2)}}getGeoJsonData();