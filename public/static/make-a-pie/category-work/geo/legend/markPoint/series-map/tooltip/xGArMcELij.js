var uploadedDataURL="/asset/get/s/data-1636163707194-oSkF9fGq_.json",outname=["广东省","广西壮族自治区","海南省","台湾省","香港特别行政区","澳门特别行政区"],outvalue=[10,23,33,66,55,44],outvalueje=["10","23","33","66","55","44"],outdata=[];$.getJSON(uploadedDataURL,function(r){echarts.registerMap("华南大区",r);for(var o=0;o<outname.length;o++)outdata.push({name:outname[o],value:outvalue[o],moneys:outvalueje[o]});option={backgroundColor:"#131C38",tooltip:{backgroundColor:"#000259",trigger:"axis"},legend:{show:!1},geo:[{map:"华南大区",aspectScale:1,zoom:.45,layoutCenter:["50%","50%"],layoutSize:"180%",show:!0,roam:!1,label:{emphasis:{show:!1}},itemStyle:{normal:{borderColor:"rgba(192,245,249,.8)",borderWidth:3,shadowColor:"#6FFDFF",shadowOffsetY:0,shadowBlur:10,areaColor:"rgba(29,85,139,.6)"}},emphasis:{areaColor:"rgba(29,85,139,.6)"}},{map:"华南大区",aspectScale:1,zoom:.45,layoutCenter:["50%","50%"],layoutSize:"180%",show:!0,roam:!1,label:{emphasis:{show:!1}},itemStyle:{normal:{borderColor:"rgba(192,245,249,.8)",borderWidth:3,shadowColor:"#2C99F6",shadowOffsetY:0,shadowBlur:120,areaColor:"rgba(29,85,139,.6)"}},emphasis:{areaColor:"rgba(29,85,139,.6)"}},{type:"map",map:"华南大区",zlevel:-1,aspectScale:1,zoom:.45,layoutCenter:["50%","50.7%"],layoutSize:"180%",roam:!1,silent:!0,itemStyle:{normal:{borderColor:"rgba(172, 122, 255,0.5)",shadowColor:"rgba(172, 122, 255,0.5)",shadowOffsetY:5,shadowBlur:15,areaColor:"rgba(5,21,35,0.1)"}}},{type:"map",map:"华南大区",zlevel:-2,aspectScale:1,zoom:.45,layoutCenter:["50%","51.4%"],layoutSize:"180%",roam:!1,silent:!0,itemStyle:{normal:{borderColor:"rgba(172, 122, 255,0.4)",shadowColor:"rgba(172, 122, 255,0.6)",shadowOffsetY:5,shadowBlur:15,areaColor:"rgba(5,21,35,0.1)"}}},{type:"map",map:"华南大区",zlevel:-3,aspectScale:1,zoom:.45,layoutCenter:["50%","52.1%"],layoutSize:"180%",roam:!1,silent:!0,itemStyle:{normal:{borderColor:"rgba(172, 122, 255,0.3)",shadowColor:"rgba(172, 122, 255,0.8)",shadowOffsetY:15,shadowBlur:8,areaColor:"rgba(5,21,35,0.1)"}}}],series:[{tooltip:{trigger:"item",position:"inside",formatter:function(a){var e="";return a.value>0?e='<div style="font-size: 16px;height: 30px;line-height: 30px;background:#000259;opacity: 0.75;border-radius: 3px;color:#fff">&nbsp;&nbsp;'+a.name+"&nbsp;&nbsp;&nbsp;"+a.value+"次&nbsp;&nbsp;&nbsp;&nbsp;"+a.data.moneys+"元&nbsp;&nbsp;":e='<div style="font-size: 16px;height: 30px;line-height: 30px;background:#000259;opacity: 0.75;border-radius: 3px;color:#fff">&nbsp;&nbsp;'+a.name+"&nbsp;&nbsp;&nbsp;0次&nbsp;&nbsp;&nbsp;&nbsp;0元&nbsp;&nbsp;",e}},type:"map",map:"华南大区",aspectScale:1,zoom:.45,showLegendSymbol:!1,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{areaColor:{type:"linear-gradient",x:0,y:300,x2:0,y2:0,colorStops:[{offset:0,color:"RGBA(37,108,190,1)"},{offset:1,color:"RGBA(15,169,195,1)"}],global:!0},borderColor:"#4ECEE6",borderWidth:1},emphasis:{areaColor:{type:"linear-gradient",x:0,y:300,x2:0,y2:0,colorStops:[{offset:0,color:"RGBA(37,108,190,1)"},{offset:1,color:"RGBA(15,169,195,1)"}],global:!0}}},layoutCenter:["50%","50%"],layoutSize:"180%",markPoint:{symbol:"none"},data:outdata}]},myChart.setOption(option)});