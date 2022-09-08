var uploadedDataURL="/asset/get/s/data-1636282594315-JLsviKcqm.xls",uploadedDataURL="/asset/get/s/data-1528971808162-BkOXf61WX.json",geoCoordMap={北京:[116.4,40.4],天津:[117.04,39.52],河北:[115.21,38.44],山西:[111.95,37.65],内蒙古:[112.17,42.81],辽宁:[123.42,41.29],吉林:[126.32,43.38],黑龙江:[128.34,47.05],上海:[121.46,31.28],江苏:[120.26,32.54],浙江:[120.15,29.28],安徽:[117.28,31.86],福建:[118.31,26.07],江西:[115.89,27.97],山东:[118.01,36.37],河南:[113.46,34.25],湖北:[112.29,30.98],湖南:[112.08,27.79],广东:[113.98,22.82],广西:[108.67,23.68],海南:[110.03,19.33],重庆:[107.51,29.63],四川:[103.36,30.65],贵州:[106.91,26.67],云南:[101.71,24.84],西藏:[89.13,30.66],陕西:[108.94,34.46],甘肃:[103.82,36.05],青海:[97.07,35.62],宁夏:[106.27,36.76],新疆:[86.61,40.79]},d1={北京:48458,天津:31291,河北:18118,山西:17854,内蒙古:22310,辽宁:24576,吉林:18684,黑龙江:18593,上海:49867,江苏:29539,浙江:35537,安徽:18363,福建:25404,江西:18437,山东:22703,河南:17125,湖北:20026,湖南:19317,广东:27859,广西:16873,海南:18979,重庆:20110,四川:17221,贵州:13697,云南:15223,西藏:12254,陕西:17395,甘肃:13467,青海:15813,宁夏:17329,新疆:16859},d2={北京:52530,天津:34074,河北:19725,山西:19049,内蒙古:24127,辽宁:26040,吉林:19967,黑龙江:19838,上海:54305,江苏:32070,浙江:38529,安徽:19998,福建:27608,江西:20110,山东:24685,河南:18443,湖北:21787,湖南:21115,广东:30296,广西:18305,海南:20653,重庆:22034,四川:18808,贵州:15121,云南:16720,西藏:13639,陕西:18874,甘肃:14670,青海:17302,宁夏:18832,新疆:18355},d3={北京:57230,天津:37022,河北:21484,山西:20420,内蒙古:26212,辽宁:27835,吉林:21368,黑龙江:21206,上海:58988,江苏:35024,浙江:42046,安徽:21863,福建:30048,江西:22031,山东:26930,河南:20170,湖北:23757,湖南:23103,广东:33003,广西:19905,海南:22553,重庆:24153,四川:20580,贵州:16704,云南:18348,西藏:15457,陕西:20635,甘肃:16011,青海:19001,宁夏:20562,新疆:19975},d4={北京:62361,天津:39506,河北:23446,山西:21990,内蒙古:28376,辽宁:29701,吉林:22798,黑龙江:22726,上海:64183,江苏:38096,浙江:45840,安徽:23984,福建:32644,江西:24080,山东:29205,河南:21964,湖北:25815,湖南:25241,广东:35810,广西:21485,海南:24579,重庆:26386,四川:22461,贵州:18430,云南:20084,西藏:17286,陕西:22528,甘肃:17488,青海:20757,宁夏:22400,新疆:21500},d5={北京:67756,天津:42404,河北:25665,山西:23828,内蒙古:30555,辽宁:31820,吉林:24563,黑龙江:24254,上海:69442,江苏:41400,浙江:49899,安徽:26415,福建:35616,江西:26262,山东:31597,河南:23903,湖北:28319,湖南:27680,广东:39014,广西:23328,海南:26679,重庆:28920,四川:24703,贵州:20397,云南:22082,西藏:19501,陕西:24666,甘肃:19139,青海:22618,宁夏:24412,新疆:23103},d6={北京:69434,天津:43854,河北:27136,山西:25214,内蒙古:31497,辽宁:32738,吉林:25751,黑龙江:24902,上海:72232,江苏:43390,浙江:52397,安徽:28103,福建:37202,江西:28017,山东:32886,河南:24810,湖北:27881,湖南:29380,广东:41029,广西:24562,海南:27904,重庆:30824,四川:26522,贵州:21795,云南:23295,西藏:21744,陕西:26226,甘肃:20335,青海:24037,宁夏:25735,新疆:23845},colors=[["#1DE9B6","#FFFF00","#04B9FF","#5DBD32","#FFC809","#FB95D5","#BDA29A","#6E7074","#E690D1","#C4CCD3","#1DE9B6","#04B9FF","#FFC809","#FB95D5","#C4CCD3","#1DE9B6","#04B9FF","#FFC809","#FB95D5"],["#37A2DA","#FFFF00","#32C5E9","#5DBD32","#FFDB5C","#FF9F7F","#FB7293","#E062AE","#546570","#E7BCF3","#9D96F5","#8378EA","#8378EA","#37A2DA","#fde8cd","#32C5E9","#FFDB5C","#FF9F7F","#E7BCF3","#9D96F5","#8378EA"],["#DD6B66","#FFFF00","#E69D87","#8DC1A9","#EA7E53","#EEDD78","#73A373","#73B9BC","#7289AB","#91CA8C","#F49F42","#73A373","#73B9BC","#7289AB","#91CA8C","#F49F42","#DD6B66","#E69D87","#EA7E53","#EEDD78"]],colorIndex=2;$(function(){var m=["2015","2016","2017","2018","2019","2020"],a=[[],[],[],[],[],[]],i=[],p=[];for(var e in geoCoordMap)a[0].push({year:"2015",name:e,value:d1[e]}),a[1].push({year:"2016",name:e,value:d2[e]}),a[2].push({year:"2017",name:e,value:d3[e]}),a[3].push({year:"2018",name:e,value:d4[e]}),a[4].push({year:"2019",name:e,value:d5[e]}),a[5].push({year:"2020",name:e,value:d6[e]});for(var o=0;o<a.length;o++){a[o].sort(function(u,t){return u.value-t.value}),p.push([]),i.push([]);for(var s=0;s<a[o].length;s++)p[o].push(a[o][s].value),i[o].push(a[o][s].name)}$.getJSON(uploadedDataURL,function(d){echarts.registerMap("china",d);var u=function(r){for(var n=[],l=0;l<r.length;l++){var c=geoCoordMap[r[l].name];c&&n.push({name:r[l].name,value:c.concat(r[l].value)})}return n};optionXyMap01={timeline:{data:m,axisType:"category",autoPlay:!0,playInterval:3e3,left:"5%",right:"15%",bottom:"1%",width:"65%",label:{normal:{textStyle:{color:"#ddd"}},emphasis:{textStyle:{color:"#fff"}}},symbolSize:10,lineStyle:{color:"#555"},checkpointStyle:{borderColor:"#777",borderWidth:2},controlStyle:{showNextBtn:!0,showPrevBtn:!0,normal:{color:"#666",borderColor:"#666"},emphasis:{color:"#aaa",borderColor:"#aaa"}}},baseOption:{animation:!0,animationDuration:1e3,animationEasing:"cubicInOut",animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut",grid:{right:"2%",top:"15%",bottom:"5%",width:"20%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(150,150,150,0.1)"}}},geo:{show:!0,map:"china",roam:!0,zoom:.9,center:[113.83531246,34.0267395887],label:{emphasis:{show:!1}},itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10}}}},options:[]};for(var t=0;t<m.length;t++)optionXyMap01.options.push({backgroundColor:"#013954",title:{text:"2015~2020中国各省居民人均可支配收入",left:"23%",top:"7%",textStyle:{color:"#fff",fontSize:20}},xAxis:{type:"value",scale:!0,position:"top",min:0,max:8e4,boundaryGap:!1,splitNumber:4,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:2,textStyle:{color:"#aaa"}}},yAxis:{type:"category",nameGap:16,axisLine:{show:!0,lineStyle:{color:"#ddd"}},axisTick:{show:!1,lineStyle:{color:"#ddd"}},axisLabel:{interval:0,textStyle:{color:"#ddd"}},data:i[t]},series:[{type:"map",map:"china",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!1},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#FFFFFF"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:a},{name:"Top 5",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:[50,50],label:{normal:{show:!0,textStyle:{color:"#fff",fontSize:9},formatter(r){return r.data.value[2]}}},itemStyle:{normal:{color:"#D8BC37"}},data:u(a[t].sort(function(r,n){return n.value-r.value}).slice(0,35)),showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,zlevel:1},{zlevel:1.5,type:"bar",barMaxWidth:10,symbol:"none",itemStyle:{normal:{color:colors[colorIndex][t]}},data:p[t]}]});myChart.setOption(optionXyMap01)})});
