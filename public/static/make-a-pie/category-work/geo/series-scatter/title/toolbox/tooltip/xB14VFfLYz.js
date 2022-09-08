for(var geoCoordMap={北京:[116.407395,39.904211],柏林:[13.404954,52.520007],芝加哥:[-87.629798,41.878114],迪拜:[55.270783,25.204849],香港:[114.109497,22.396428],伊斯坦布尔:[28.978359,41.008238],伦敦:[-.127758,51.507351],纽约:[-74.005941,40.712784],巴黎:[2.352222,48.856614],上海:[121.473701,31.230416],新加坡:[103.819836,1.352083],悉尼:[151.209296,-33.86882],东京:[139.691706,35.689487]},rawData=[["北京",28.2,29.9,60.3,51.8,17,18,1979,9,34,27,16,184,730,1.467,4.767,5.852,-.683,3.325,5.417,50.6,463,420,310,4370,.26,14.25,3.64,23800,67,1.24,41,160,400,660,700,1554,660,4.5,5.6,17,11400,7e3,8500,7600,6200,11900,13300,11700,10700,18300,17100,8900,5400,7600,19800,19800],["柏林",109.7,97.1,72.2,64.1,79.2,70.1,1742,28,16,11,9,56,720,1.784,2.276,2.754,.234,1.15,2.483,62.5,389,530,841,4670,2.98,80.3,10.79,35600,246,2.1,34,120,230,570,710,2395,1178,17.7,25.8,30,56900,38600,35500,28500,47400,57600,84200,74500,72100,51700,38100,28200,32e3,28100,81700,81700],["芝加哥",105.3,101.9,79.1,72.9,83.3,80.6,1853,12,11,15,9,32,540,3.222,2.86,3.798,-.321,1.641,3.142,71.1,460,780,1398,4270,2.25,34.99,12.5,22100,95,1.11,38,200,270,740,1200,3535,2214,20.3,27.1,25,49300,52100,44e3,49e3,58500,48300,79300,88500,88200,40300,42600,23200,33800,38700,103500,103500],["迪拜",63.5,82,78.2,77.2,49.6,64.2,2095,24,11,10,14,46,1120,9.272,11.115,11.454,1.56,.878,.882,75.3,484,790,2447,4550,.54,null,8.17,23100,94,1.01,95,200,680,1270,1450,4882,3483,16.2,16.2,0,35900,16300,14200,3600,38300,58100,116800,91400,64800,26200,22900,13600,9800,19600,8e4,8e4],["香港",58.5,68.1,73.1,75.2,42.8,49.8,2295,11,9,23,9,53,970,2.018,2.027,4.285,.588,2.312,5.281,73.4,651,520,1800,4770,1.33,20.48,3.99,23800,509,1.65,58,290,610,390,620,9661,4222,12.5,13.9,9,52500,20100,20100,18900,23100,40800,64400,63700,44600,22300,25100,22100,14e3,19e3,62600,62600],["伊斯坦布尔",39,39.4,71.5,65.6,27.9,28.2,2139,19,42,9,14,166,720,9.597,8.756,10.444,6.251,8.567,6.472,64,430,630,1282,5490,.95,15.84,8.94,34600,1189,2.37,44,240,420,630,880,3147,1476,7.1,9.1,20,14800,14600,13500,9500,20300,51300,38600,39100,34100,19300,13500,9500,9200,9300,33500,33500],["伦敦",91.2,86.2,87.2,83,79.5,75.2,1786,22,15,6,13,42,930,2.3,2.346,3.629,2.12,3.339,4.454,81,436,770,1981,4910,3.7,81.95,23.03,28e3,217,2.4,50,200,440,480,800,4830,3263,19,25.9,26,55700,44400,40900,39100,51700,36400,80300,75e3,65900,46600,40700,26300,37600,27100,64200,64200],["纽约",100,100,100,100,100,100,2061,13,9,12,5,28,1180,3.222,2.86,3.798,-.321,1.641,3.142,97.6,552,1e3,3354,3960,2.42,85.98,8.5,20500,100,1.15,71,340,730,570,980,7239,4299,25.2,32.6,22,62900,57200,5e4,69300,79100,85500,118200,119300,107400,68400,54800,42300,41300,41700,120600,120600],["巴黎",94.8,89.4,83.9,77.5,78.1,73.6,1557,29,15,14,12,44,1100,1.912,1.607,3.159,.103,1.735,2.294,75.6,522,770,1670,5030,2.16,42.87,9.39,33700,486,1.89,64,210,600,1020,1410,3250,2279,18.5,25.4,26,38700,32800,28e3,25900,32100,36800,71e3,71100,67100,80700,34700,25300,25400,25600,86900,86900],["上海",37.2,38.4,56.2,49.7,20.9,21.6,1966,9,28,43,8,142,740,2.242,2.535,4.674,-.683,3.325,5.417,48.5,404,470,712,3950,.58,10.4,3.64,29400,76,1.26,64,250,440,400,960,1424,919,5.4,6.8,17,12200,8500,9300,6700,9200,23700,39600,24700,15800,28900,12300,7400,8200,7600,53200,53200],["新加坡",50.8,53.3,94.9,89.2,48.2,50.7,2036,14,18,21,12,58,920,.973,2.096,6.514,.589,2.824,5.247,87.1,589,710,1994,5120,1.36,null,8.65,124900,966,1.25,88,180,410,530,840,4455,3496,12.8,15.7,18,41200,21900,19600,15e3,27200,30400,82600,77600,46800,27800,28200,19e3,14500,21600,86800,86800],["悉尼",112.5,117.1,83.7,77.8,94.1,98,1846,15,11,9,6,32,690,3.538,2.332,4.353,1.82,2.845,3.389,75.9,508,680,1644,5210,3.43,39.35,9.75,22200,245,1.5,45,220,350,580,820,4183,2175,24.7,30.6,18,57400,41800,39400,39200,72e3,55900,111e3,93400,79e3,52200,50500,40400,50500,36800,110300,110300],["东京",112.5,117.1,83.7,77.8,94.1,98,1846,15,11,9,6,32,690,3.538,2.332,4.353,1.82,2.845,3.389,75.9,508,680,1644,5210,3.43,39.35,9.75,22200,245,1.5,45,220,350,580,820,4183,2175,24.7,30.6,18,57400,41800,39400,39200,72e3,55900,111e3,93400,79e3,52200,50500,40400,50500,36800,110300,110300]],toolTipData=[],i=0;i<rawData.length;i++){var name=rawData[i][0];toolTipData.push({name,value:[{name:"鲜花",value:Math.round(Math.random()*100+10)},{name:"星星",value:Math.round(Math.random()*100+10)},{name:"香蕉",value:Math.round(Math.random()*100+10)},{name:"嫌弃",value:Math.round(Math.random()*100+10)}]})}function makeMapData(o){for(var a=[],e=0;e<o.length;e++){var r=geoCoordMap[o[e][0]];r&&a.push({name:o[e][0],value:r.concat(o[e].slice(1,2))})}return a}option={backgroundColor:new echarts.graphic.RadialGradient(.5,.5,.4,[{offset:0,color:"#FBF9F8"},{offset:1,color:"#FBF9F8"}]),title:{text:"世界地图",left:"left",top:0,itemGap:0,textStyle:{color:"#28B8DC"},z:20},tooltip:{backgroundColor:"#232F49",trigger:"item",formatter:function(o){if(typeof o.value[2]>"u"){for(var a="",e=0;e<toolTipData.length;e++)if(o.name==toolTipData[e].name){a+=toolTipData[e].name+":<br>";for(var r=0;r<toolTipData[e].value.length;r++)a+=toolTipData[e].value[r].name+":"+toolTipData[e].value[r].value+"<br>"}return a}else{for(var a="",e=0;e<toolTipData.length;e++)if(o.name==toolTipData[e].name){a+=toolTipData[e].name+":<br>";for(var r=0;r<toolTipData[e].value.length;r++)a+=toolTipData[e].value[r].name+":"+toolTipData[e].value[r].value+"<br>"}return a}}},toolbox:{show:!0,left:"right",iconStyle:{normal:{borderColor:"#eee"}},feature:{},z:200},geo:{map:"world",backgroundColor:"#00BFFF",silent:!0,label:{emphasis:{show:!1,areaColor:"#eee"}},itemStyle:{normal:{borderWidth:0,borderColor:"#404a59",areaColor:"rgb(216,228,236)"},emphasis:{show:!1,areaColor:"black"}},left:"5%",top:60,bottom:"5%",right:"5%",roam:!0},grid:[{show:!0,left:0,right:0,top:"100%",bottom:0,borderColor:"transparent",backgroundColor:"#FBF9F8",z:99},{show:!0,left:0,right:0,top:0,height:28,borderColor:"transparent",backgroundColor:"#FBF9F8",z:10}],series:[{name:"Prices and Earnings 2012",type:"scatter",coordinateSystem:"geo",data:makeMapData(rawData),activeOpacity:1,label:{normal:{formatter:"{b}",fontWeight:"bold",color:"black",position:"top",show:!0}},symbolSize:14,zlevel:6,itemStyle:{normal:{color:"#05C3F9"}}}]};
