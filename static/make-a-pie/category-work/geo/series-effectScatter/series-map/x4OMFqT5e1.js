var uploadedDataURL="/asset/get/s/data-1507863641060-Sy-whsTh-.json";$.get(uploadedDataURL,function(t){echarts.registerMap("xj",t);var m={巴音郭楞蒙古:[88.1653,39.6002],和田:[81.167,36.9855],哈密:[93.7793,42.9236],阿克苏:[82.9797,41.0229],阿勒泰:[88.2971,47.0929],喀什:[77.168,37.8534],塔城:[86.6272,45.8514],昌吉:[89.6814,44.4507],克孜勒苏柯尔克孜:[74.6301,39.5233],吐鲁番:[89.6375,42.4127],伊犁哈萨克:[82.5513,43.5498],博尔塔拉蒙古:[81.8481,44.6979],乌鲁木齐:[87.9236,43.5883],克拉玛依:[85.2869,45.5054],阿拉尔:[81.2769,40.6549],图木舒克:[79.1345,39.8749],五家渠:[87.5391,44.3024],石河子:[86.0229,44.2914]},r=[{name:"巴音郭楞蒙古",value:15},{name:"和田",value:0},{name:"哈密",value:0},{name:"阿克苏",value:0},{name:"阿勒泰",value:15},{name:"喀什",value:0},{name:"塔城",value:0},{name:"昌吉",value:0},{name:"克孜勒苏柯尔克孜",value:0},{name:"吐鲁番",value:0},{name:"伊犁哈萨克",value:0},{name:"博尔塔拉蒙古",value:0},{name:"乌鲁木齐",value:15},{name:"克拉玛依",value:0},{name:"阿拉尔",value:0},{name:"图木舒克",value:0},{name:"五家渠",value:0},{name:"石河子",value:0}],u=function(e){for(var o=[],a=0;a<e.length;a++){var n=m[e[a].name];n&&o.push({name:e[a].name,value:n.concat(e[a].value)})}return o},l=[];[["xj",r]].forEach(function(e,o){l.push({name:"定位点",type:"effectScatter",coordinateSystem:"geo",legendHoverLink:"true",rippleEffect:{period:5,brushType:"fill",scale:3},data:u(e[1]),symbolSize:function(a){return a[2]},itemStyle:{normal:{color:"#ffed00"}},zlevel:1},{type:"map",map:"xj",geoIndex:0,roam:!0,data:r})}),option={backgroundColor:"#00265f",selectedMode:"single",geo:{show:!0,map:"xj",roam:!0,zoom:1,label:{normal:{show:!0,textStyle:{color:"#fff"}},emphasis:{textStyle:{color:"#fff"}}},itemStyle:{normal:{areaColor:"#114284",borderColor:"#279be5",borderWidth:1.5,color:"rgba(0,0,0,0)",shadowColor:"rgba(63, 218, 255, 0.5)",shadowBlur:1},emphasis:{areaColor:"#009be5"}}},series:l},myChart.setOption(option),myChart.on("click",function(e){console.log(e)})});