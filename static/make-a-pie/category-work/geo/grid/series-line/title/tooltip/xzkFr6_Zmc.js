var geoCoordMap={北京:[116.46,39.92],成都:[104.06,30.67],杭州:[120.19,30.26],济南:[117,36.65],福州:[119.3,26.08],上海:[121.48,31.22],重庆:[106.54,29.59],宁波:[121.56,29.86],南昌:[115.89,28.68],厦门:[118.1,24.46],太原:[112.53,37.87],哈尔滨:[126.63,45.75],西安:[108.95,34.27],沈阳:[123.38,41.8],大连:[121.62,38.92],长沙:[113,28.21],银川:[106.27,38.47],石家庄:[114.48,38.03],武汉:[114.31,30.52],呼和浩特:[111.65,40.82],天津:[117.2,39.13],兰州:[103.73,36.03],青岛:[120.33,36.07],南京:[118.78,32.04],长春:[125.35,43.88],郑州:[113.65,34.76],合肥:[117.27,31.86],拉萨:[91.11,29.97],乌鲁木齐:[87.68,43.77]},rawData=[["北京",101.6,90.1,77.1,69.1,78.3,69.4,1755,24,15,7,9,44,720,1.651,1.59,2.205,.974,.93,2.477,67.4,364,690,1113,4960,3.19,30.05,16.34,24e3,689,1.8,50,200,390,690,1040,2331,1580,17.5,25.5,30,48400,39200,26300,30200,55400,39800,104400,58700,64600,49200,40300,31100,40300,27700,66700,66700],["成都",62.6,60.5,66.2,58.2,41.4,40,1822,22,29,13,25,86,590,3.314,2.991,4.236,1.349,4.701,3.1,56.8,390,580,880,4620,1.81,13.81,5.5,24900,389,2.02,54,100,210,630,1110,1489,647,10.1,13.5,24,26200,23300,18500,17100,24500,24200,57200,44e3,34100,30700,21e3,17700,15400,16300,34400,34400],["杭州",77.9,82.9,76.7,67.8,59.8,63.5,1852,20,15,16,7,51,580,3.362,2.377,3.959,2.116,2.303,4.027,66.1,496,630,1023,4450,2.57,40.86,13.62,23900,226,1.33,45,190,280,560,670,1644,1333,16,19.5,17,35700,31500,36500,28500,41800,31100,61300,55e3,56300,37300,33400,26900,27200,27500,64900,64900],["济南",26.4,31.4,55.4,48.2,14.6,17.4,2312,7,36,25,20,165,550,4.637,2.242,5.468,-.845,3.272,3.807,47,422,440,414,4370,.75,3.47,2.47,29600,103,1,56,90,320,400,600,1463,932,4.4,4.8,5,8300,8400,11100,3e3,10900,10900,32200,22400,24600,14500,7800,6e3,5800,6500,19400,19400],["福州",79.7,78.6,74.7,65.6,59.6,58.7,1760,29,18,11,6,52,740,3.563,2.844,4.13,-.238,2.043,3.052,64,393,750,984,5e3,2.59,41.96,10.36,26900,177,1.77,51,170,330,580,1110,1269,1087,14.8,19.4,23,41300,34100,29100,29800,31500,32100,40800,67e3,43100,38900,28900,25500,25e3,28e3,58300,58300],["宁波",28.2,29.9,60.3,51.8,17,18,1979,9,34,27,16,184,730,1.467,4.767,5.852,-.683,3.325,5.417,50.6,463,420,310,4370,.26,14.25,3.64,23800,67,1.24,41,160,400,660,700,1554,660,4.5,5.6,17,11400,7e3,8500,7600,6200,11900,13300,11700,10700,18300,17100,8900,5400,7600,19800,19800],["上海",109.7,97.1,72.2,64.1,79.2,70.1,1742,28,16,11,9,56,720,1.784,2.276,2.754,.234,1.15,2.483,62.5,389,530,841,4670,2.98,80.3,10.79,35600,246,2.1,34,120,230,570,710,2395,1178,17.7,25.8,30,56900,38600,35500,28500,47400,57600,84200,74500,72100,51700,38100,28200,32e3,28100,81700,81700],["重庆",41.4,40.7,53.1,47,22.3,22,1981,15,52,34,17,142,540,4.296,5.544,6.998,4.202,2.27,3.416,45.8,363,410,634,4170,.84,null,2.81,20200,303,1.24,25,140,300,310,440,1554,841,5.5,7.3,12,11100,7600,8400,7e3,7300,11900,27600,65800,19700,14600,12300,7400,4100,5300,31900,31900],["宁波",51.3,50.7,53.9,47.1,27.7,27.3,1884,23,31,20,19,126,490,4.264,1.89,3.935,.925,.697,4.079,45.9,344,330,414,4740,1.08,22.97,5.61,26700,65,1.93,28,120,230,250,340,1683,841,6.9,9,22,11300,14100,11300,1e4,16300,18900,20300,43300,22800,15800,16100,9600,12600,16400,48300,48300],["南昌",107.5,78.5,75.8,68.8,81.5,59.5,1729,20,19,10,11,54,730,2.337,1.814,4.493,-.009,2.332,3.469,67.1,433,690,1243,4580,2.42,26.03,15.71,23200,500,1.91,63,130,280,630,800,2538,1839,15,26.5,42,44e3,36500,38200,34200,52100,43600,97e3,73700,67100,56900,42300,35200,33500,36e3,78200,78200],["厦门",35.5,32,56.7,50.4,20.1,18.1,1912,22,49,13,26,206,740,3.878,7.934,6.067,4.209,4.85,3.9,49.1,340,390,556,5270,1.43,15.96,7.64,22600,76,1.95,28,130,410,580,920,2123,1165,4.6,6.6,28,8900,11500,9300,7e3,10900,16800,25600,21100,23300,21400,11100,8200,6500,8900,29300,29300],["太原",42.9,46.2,55,47.7,23.6,25.4,1830,13,45,12,16,187,620,10.898,8.83,8.585,6.27,10.461,9.775,46.5,310,380,401,5170,.28,null,7.97,20200,307,1.27,25,160,280,400,660,1359,738,6.4,7.7,16,8700,16300,11900,10200,11400,15800,34300,17600,19200,17100,15800,14600,7500,10400,15400,15400],["哈尔滨",37.1,34,39.8,34.8,14.8,13.5,1836,26,57,21,26,230,370,6.552,4.84,7.848,5.581,6.101,5.812,33.9,244,270,388,3830,.75,9.43,3.17,11700,36,1.9,25,100,190,180,300,984,530,3.4,4.8,29,5600,7500,9500,7900,7400,14900,13900,22e3,11400,8800,6e3,8200,5800,5300,13200,13200],["西安",21.9,25.7,91.1,85.4,20,23.4,1878,17,80,59,13,272,830,13.654,18.703,30.37,27.081,28.187,26.09,83.3,689,690,2098,8460,.35,null,11.65,49e3,18,.01,68,190,400,520,950,3820,2784,5.9,6.5,7,10500,5400,10900,6100,9700,25400,16800,30600,22800,15800,8400,9500,5400,6700,12400,12400],["沈阳",105.3,101.9,79.1,72.9,83.3,80.6,1853,12,11,15,9,32,540,3.222,2.86,3.798,-.321,1.641,3.142,71.1,460,780,1398,4270,2.25,34.99,12.5,22100,95,1.11,38,200,270,740,1200,3535,2214,20.3,27.1,25,49300,52100,44e3,49e3,58500,48300,79300,88500,88200,40300,42600,23200,33800,38700,103500,103500],["大连",23,25,33.2,29.5,7.6,8.3,2264,13,65,15,40,370,370,6.177,6.372,8.349,10.882,11.99,8.628,28.8,208,210,466,4590,.25,10.58,1.95,15300,93,.77,18,100,250,260,410,867,556,2.1,2.5,11,4500,2500,1900,1300,4800,10200,13500,11100,9600,6700,5400,3e3,1800,4e3,14100,14100],["长沙",38.8,50.2,68.6,66.9,26.6,34.4,2165,25,20,12,15,82,690,11.828,13.764,15.049,-4.865,-2.433,2,65.3,355,870,1735,3790,1.14,null,4.12,17e3,27,.24,63,200,360,340,470,4869,3004,8.7,8.7,0,22300,10400,9800,4100,20600,13700,49500,47e3,32900,27100,19800,10900,3200,11500,23100,23100],["银川",63.5,82,78.2,77.2,49.6,64.2,2095,24,11,10,14,46,1120,9.272,11.115,11.454,1.56,.878,.882,75.3,484,790,2447,4550,.54,null,8.17,23100,94,1.01,95,200,680,1270,1450,4882,3483,16.2,16.2,0,35900,16300,14200,3600,38300,58100,116800,91400,64800,26200,22900,13600,9800,19600,8e4,8e4],["石家庄",101.9,103.3,76.3,69.7,77.7,78.8,1707,21,14,7,10,39,580,2.7,2.873,3.108,-1.683,-1.557,1.139,68,454,720,1554,5160,2.74,34.53,14.89,32e3,427,2.01,55,130,260,470,600,2331,1592,19.8,25.3,20,57100,45500,38300,28200,42600,42100,88800,86100,54300,45800,31700,25300,28200,28800,85e3,85e3],["武汉",102.2,90.5,86.3,77.2,88.2,78.1,1731,28,14,8,10,42,950,1.784,2.276,2.754,.234,1.15,2.483,75.3,439,710,1282,5510,3.24,86.77,16.23,36800,78,1.89,68,130,370,840,890,2370,1644,19.7,28.7,30,60900,33300,40400,34100,48800,4e4,83300,77700,77700,61600,50600,37900,34100,29100,104100,104100],["呼和浩特",116,111.8,106.6,96.8,123.6,119.2,1893,20,14,6,7,24,1220,1.047,.732,2.43,-.476,.685,.228,94.5,714,1080,1567,5330,3.67,58.23,27.78,25200,135,2.04,99,270,620,850,1150,4701,2434,30,40.2,24,89600,77400,61900,58900,78400,76500,105800,113300,89400,110900,64900,49200,55400,61800,171100,171100],["天津",93,86,86.5,82.3,80.2,74.2,1712,28,16,13,6,44,960,1.279,1.584,3.9,1.635,1.686,3.323,80.3,497,840,1437,5400,3.28,34.83,12.71,34600,152,1.97,44,200,450,610,1200,8677,1437,18.7,26.1,27,48e3,42200,38200,38700,40500,41200,89900,60500,69200,44700,38600,34600,33500,35600,74500,74500],["兰州",58.5,68.1,73.1,75.2,42.8,49.8,2295,11,9,23,9,53,970,2.018,2.027,4.285,.588,2.312,5.281,73.4,651,520,1800,4770,1.33,20.48,3.99,23800,509,1.65,58,290,610,390,620,9661,4222,12.5,13.9,9,52500,20100,20100,18900,23100,40800,64400,63700,44600,22300,25100,22100,14e3,19e3,62600,62600],["青岛",39,39.4,71.5,65.6,27.9,28.2,2139,19,42,9,14,166,720,9.597,8.756,10.444,6.251,8.567,6.472,64,430,630,1282,5490,.95,15.84,8.94,34600,1189,2.37,44,240,420,630,880,3147,1476,7.1,9.1,20,14800,14600,13500,9500,20300,51300,38600,39100,34100,19300,13500,9500,9200,9300,33500,33500],["南京",14.7,17.2,53.7,48.6,7.9,9.2,2111,11,62,100,27,348,500,13.104,6.034,9.777,4.813,5.133,5.357,47.4,369,330,673,4460,.38,2.64,2.93,47800,717,.76,19,160,320,190,390,2719,1087,2.3,2.6,7,2700,2600,2200,1300,10100,4400,17e3,13e3,10700,5300,4800,2700,1400,3200,15800,15800],["长春",80.6,75.5,52.1,47.3,41.5,38.9,1886,15,26,9,10,94,490,4.688,7.09,11.504,7.125,4.27,4.999,46.1,310,400,738,3800,1.25,15.59,4.07,35500,56,1.45,28,100,320,310,400,2162,1295,9.8,13.5,21,17700,11900,21e3,7500,41800,18e3,51500,36800,74900,11900,22400,10500,15900,6600,65900,65900],["郑州",26.2,28.7,42.4,36.3,11,12.1,2331,15,67,8,19,290,420,4.198,10.952,11.704,16.244,11.703,11.068,35.4,300,300,168,4220,.19,5.24,1.49,21500,50,.15,27,100,200,380,430,1113,492,3,3.6,15,1600,1400,2700,2600,6600,48800,27700,20500,9600,3200,6200,5400,1900,3100,10900,10900],["合肥",19.5,20.9,53.1,46.9,10.5,11.2,1850,24,45,18,29,266,930,9.009,12.843,25.201,15.9,9.365,7.958,45.7,263,450,556,4140,.25,12.15,4.56,24900,null,1.22,42,150,530,430,600,1631,854,2.8,3.4,16,3800,5300,6500,4900,7e3,10500,11100,14100,6700,1e4,4900,4100,4e3,3900,13300,13300],["拉萨",122,92.6,100.9,88.8,123.1,93.4,1674,29,15,9,6,36,1060,1.9,1.712,3.399,1.319,2.298,2.757,86.7,567,960,1100,5060,4.88,59.92,17.33,63400,641,1.99,72,270,490,950,1150,2616,1735,23.5,40.1,41,86500,56300,68400,58500,68900,61e3,86400,94500,89200,72900,61900,46e3,64800,42200,109200,109200],["乌鲁木齐",41.1,42,52.1,46.2,21.5,22,1986,15,25,20,21,129,500,3.609,2.027,5.4,.6,1.7,3.2,45.1,346,400,777,4300,.68,7.06,2.44,25700,91,.59,58,120,220,230,540,1256,621,5.5,7,17,10400,8300,10700,6100,12800,17100,44e3,31200,23600,11400,13200,7400,5100,7100,22700,22700]];function makeMapData(a){for(var o=[],t=0;t<a.length;t++){var r=geoCoordMap[a[t][0]];r&&o.push({name:a[t][0],value:r.concat(a[t].slice(1))})}return o}option={animation:!1,backgroundColor:new echarts.graphic.RadialGradient(.5,.5,.4,[{offset:0,color:"#4b5769"},{offset:1,color:"#404a59"}]),title:{text:"Inflation from 2006 to 2011",subtext:"data from macrofocus",sublink:"https://www.macrofocus.com/public/products/infoscope/datasets/pricesandearnings/",left:"center",top:5,itemGap:0,textStyle:{color:"#eee"}},tooltip:{trigger:"axis"},geo:{map:"china",silent:!0,roam:!0,zoom:1,center:[116.46,39.92],label:{emphasis:{show:!1,areaColor:"#eee"}},itemStyle:{normal:{borderWidth:.2,borderColor:"#404a59"}},itemStyle:{normal:{areaColor:"#323c48",borderColor:"#111"},emphasis:{areaColor:"#2a333d"}}},series:[]};function renderEachCity(){for(var a={xAxis:[],yAxis:[],grid:[],series:[]},o=14,t=6,r="2006",n=[],i=0;i<t;i++)n.push(+r+i+"");Object.keys(rawData).forEach(function(s,e){var f=geoCoordMap[rawData[e][0]],c=myChart.convertToPixel("geo",f);e+="",inflationData=[];for(var l=0;l<t;l++)inflationData.push(rawData[e][o+l]);a.xAxis.push({id:e,gridId:e,type:"category",name:rawData[e][0],nameStyle:{color:"#ddd",fontSize:12},nameLocation:"middle",nameGap:3,splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},axisLine:{onZero:!1,lineStyle:{color:"#bbb"}},data:n,z:100}),a.yAxis.push({id:e,gridId:e,splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},axisLine:{lineStyle:{color:"#bbb"}},z:100}),a.grid.push({id:e,width:30,height:30,left:c[0]-15,top:c[1]-15,z:100}),a.series.push({id:e,type:"line",xAxisId:e,yAxisId:e,data:inflationData,z:100})}),console.log(a),myChart.setOption(a)}setTimeout(renderEachCity,10);function throttle(a,o,t){var r,n=0,i=0,s=null,e,f,c;o=o||0;function l(){i=new Date().getTime(),s=null,a.apply(f,c||[])}var u=function(){r=new Date().getTime(),f=this,c=arguments,e=r-(t?n:i)-o,clearTimeout(s),t?s=setTimeout(l,o):e>=0?l():s=setTimeout(l,-e),n=r};return u}var throttledRenderEachCity=throttle(renderEachCity,130);myChart.on("geoRoam",throttledRenderEachCity);