var geoCoordMap={北京:[116.405285,39.904989],福建:[119.306239,26.075302],浙江:[120.153576,30.287459],上海:[121.472644,31.231706],广东:[113.280637,23.125178],广西:[108.320004,22.82402],安徽:[117.283042,31.86119],湖南:[112.982279,28.19409],湖北:[114.298572,30.584355]},convertData=function(a){for(var o=[],e=0;e<a.length;e++){var t=geoCoordMap[a[e].name];t&&o.push({name:a[e].name,value:t.concat(a[e].value)})}return o};option={tooltip:{show:!0},visualMap:[{show:!1,type:"continuous",seriesIndex:0,text:["bar3D"],calculable:!0,max:300,inRange:{color:["#87aa66","#eba438","#d94d4c"]}}],geo3D:{map:"china",tooltip:{show:!1},regionHeight:2.9,label:{show:!1,textStyle:{color:"#fff",fontSize:12,backgroundColor:"rgba(0,0,0,0)"}},left:"10%",shading:"color",postEffect:{show:!0},itemStyle:{areaColor:"#008ae9",opacity:1,borderWidth:0,borderColor:"rgba(40,255,248,1)"},emphasis:{label:{show:!0},itemStyle:{areaColor:"#0067e9"}}},series:[{name:"bar3D",type:"bar3D",coordinateSystem:"geo3D",barSize:1.5,shading:"lambert",opacity:1,tooltip:{show:!1},minHeight:4,bevelSize:.3,label:{show:!1,formatter:"{b}"},data:convertData([{name:"北京",value:(Math.random()*300).toFixed(2)},{name:"福建",value:(Math.random()*300).toFixed(2)},{name:"浙江",value:(Math.random()*300).toFixed(2)},{name:"上海",value:(Math.random()*300).toFixed(2)},{name:"广东",value:(Math.random()*300).toFixed(2)},{name:"广西",value:(Math.random()*300).toFixed(2)},{name:"安徽",value:(Math.random()*300).toFixed(2)},{name:"湖南",value:(Math.random()*300).toFixed(2)},{name:"湖北",value:(Math.random()*300).toFixed(2)}])},{type:"map3D",map:"china",tooltip:{show:!1},label:{show:!0,textStyle:{color:"#fff",fontSize:12,backgroundColor:"rgba(0,0,0,0)"}},left:"10%",shading:"color",postEffect:{show:!0},itemStyle:{areaColor:"#008ae9",opacity:1,borderWidth:1.5,borderColor:"rgba(40,255,248,1)"},emphasis:{label:{show:!0},itemStyle:{areaColor:"#0067e9"}}}]};