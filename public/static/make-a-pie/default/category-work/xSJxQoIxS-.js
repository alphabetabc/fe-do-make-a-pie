var startPoint={x:108.943807,y:34.280969},bmap={center:[startPoint.x,startPoint.y],zoom:12,roam:!0},geoCoordMap={西安市雁塔区:[108.951122,34.220618],西安市灞桥区:[109.070932,34.279159],西安市长安区:[108.913375,34.163297],西安市未央区:[108.953105,34.29917],西安市莲湖区:[108.950678,34.270978],西安市临潼区:[109.220655,34.372783]},BJData=[[{name:"西安市雁塔区"},{name:"西安市灞桥区",value:39}],[{name:"西安市雁塔区"},{name:"西安市长安区",value:39}],[{name:"西安市雁塔区"},{name:"西安市未央区",value:38}],[{name:"西安市雁塔区"},{name:"西安市莲湖区",value:38}],[{name:"西安市雁塔区"},{name:"西安市临潼区",value:38}]],planePath="path://M128 724.224c0 42.432 19.2 80.192 48 103.744l0 84.864C176 941.12 195.2 960 224 960l48 0C300.8 960 320 941.12 320 912.832l0-47.168 384 0 0 47.168C704 941.12 723.2 960 752 960l48 0c28.8 0 48-18.88 48-47.168l0-84.864C876.8 804.352 896 766.656 896 724.224L896 252.608C896 87.552 723.2 64 512 64 300.8 64 128 87.552 128 252.608L128 724.224zM296 771.392c-38.4 0-72-33.024-72-70.72 0-37.696 33.6-70.72 72-70.72 38.4 0 72 33.024 72 70.72C368 738.368 334.4 771.392 296 771.392zM728 771.392c-38.4 0-72-33.024-72-70.72 0-37.696 33.6-70.72 72-70.72s72 33.024 72 70.72C800 738.368 766.4 771.392 728 771.392zM800 488.448l-576 0L224 252.608l576 0L800 488.448z",convertData=function(e){for(var r=[],a=0;a<e.length;a++){var o=e[a],t=geoCoordMap[o[0].name],l=geoCoordMap[o[1].name];t&&l&&r.push({fromName:o[0].name,toName:o[1].name,coords:[t,l]})}return r},color=["red"],series=[];[["西安市雁塔区",BJData]].forEach(function(e,r){series.push({name:e[0]+" 公交",type:"effectScatter",coordinateSystem:"bmap",zlevel:2,rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}"}},symbolSize:function(a){return a[2]/4},showEffectOn:"render",itemStyle:{normal:{color:color[r]}},data:[{name:e[0],value:geoCoordMap[e[0]].concat([100])}]},{name:e[0]+" 公交",type:"lines",coordinateSystem:"bmap",zlevel:1,effect:{show:!0,period:6,trailLength:.7,color:"#fff",symbolSize:3},lineStyle:{normal:{color:color[r],width:0,curveness:.2}},data:convertData(e[1])},{name:e[0]+" 公交",type:"lines",coordinateSystem:"bmap",zlevel:2,effect:{show:!0,period:6,trailLength:0,symbol:planePath,symbolSize:15},lineStyle:{normal:{color:color[r],width:1,opacity:.4,curveness:.2}},data:convertData(e[1])},{name:e[0]+" 公交",type:"effectScatter",coordinateSystem:"bmap",zlevel:2,rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}"}},symbolSize:function(a){return a[2]/4},showEffectOn:"render",itemStyle:{normal:{color:color[r]}},data:e[1].map(function(a){return{name:a[1].name,value:geoCoordMap[a[1].name].concat([a[1].value])}})})}),option={bmap,color:["gold","aqua","lime"],backgroundColor:"#404a59",title:{text:"西安市雁塔区公交线路运行图",subtext:"data-visual.cn",sublink:"http://data-visual.cn",left:"center",textStyle:{color:"red"}},tooltip:{trigger:"item"},legend:{orient:"vertical",top:"bottom",left:"right",data:["西安市雁塔区 公交"],textStyle:{color:"red"},selectedMode:"single"},geo:{map:"bmap",polyline:!0,progressiveThreshold:500,progressive:200,label:{emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#323c48",borderColor:"#404a59"},emphasis:{areaColor:"#2a333d"}}},series};