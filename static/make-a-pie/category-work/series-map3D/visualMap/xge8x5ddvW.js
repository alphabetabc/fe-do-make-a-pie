var uploadedDataURL="/asset/get/s/data-1596769914590-QPsOGWcZ0.json",uploadedDataURLqg="https://geo.datav.aliyun.com/areas_v2/bound/100000_full.json";$.getJSON(uploadedDataURLqg,function(a){echarts.registerMap("qg",a),console.log(a),option={visualMap:{show:!1,min:2,max:1,inRange:{color:["#0c274b","#69edc0"]}},series:[{type:"map3D",name:"map3D",map:"qg",label:{show:!1,textStyle:{color:"#000",fontSize:12,opacity:1,backgroundColor:"rgba(0,23,11,0)"}},itemStyle:{color:"#0c294d",opacity:1,borderWidth:.5,borderColor:"#1cccff"},emphasis:{label:{show:!0,textStyle:{color:"#fff",fontSize:15}},itemStyle:{areaColor:"#d9b74f"}},groundPlane:{show:!1,color:"#aaa"},light:{main:{intensity:1,shadow:!0,alpha:70,beta:10},ambient:{intensity:0}},viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:0,rotateSensitivity:1,zoomSensitivity:2,panSensitivity:1,panMouseButton:"left",rotateMouseButton:"left",distance:200,minDistance:40,maxDistance:400,alpha:40,beta:15,minAlpha:-360,maxAlpha:360,minBeta:-360,maxBeta:360,center:[0,0,0],animation:!0,animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut"},boxWidth:150,boxHeight:150,regionHeight:3,data:[{name:"南京",value:2},{name:"重庆",value:2},{name:"广东",value:2},{name:"北京",value:2},{name:"新疆",value:1},{name:"西藏",value:1},{name:"青海",value:1},{name:"甘肃",value:1},{name:"内蒙古",value:1},{name:"黑龙江",value:1},{name:"宁夏",value:1},{name:"四川",value:1},{name:"云南",value:1},{name:"广西",value:1},{name:"湖南",value:1},{name:"贵州",value:1},{name:"重庆",value:1},{name:"陕西",value:1},{name:"湖北",value:1},{name:"河南",value:1},{name:"山西",value:1},{name:"河北",value:1},{name:"山东",value:1},{name:"江西",value:1},{name:"福建",value:1},{name:"香港",value:1},{name:"台湾",value:1},{name:"海南",value:1},{name:"浙江",value:1},{name:"安徽",value:1},{name:"江苏",value:1},{name:"天津",value:1},{name:"辽宁",value:1},{name:"吉林",value:1},{name:"南海诸岛",value:1}]}]},myChart.setOption(option)});
