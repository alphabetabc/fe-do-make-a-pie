var countMax=2e3,randomInt=function(e=0,t=1e3){var o=Math.random()*(t-e)+e;return parseInt(o,10)},geoCoordMap={江苏:[118.8062,31.9208],黑龙江:[127.9688,45.368],内蒙古:[110.3467,41.4899],吉林:[125.8154,44.2584],北京市:[116.4551,40.2539],辽宁:[123.1238,42.1216],河北:[114.4995,38.1006],天津:[117.4219,39.4189],山西:[112.3352,37.9413],陕西:[109.1162,34.2004],甘肃:[103.5901,36.3043],宁夏:[106.3586,38.1775],青海:[101.4038,36.8207],新疆:[87.9236,43.5883],四川:[103.9526,30.7617],重庆:[108.384366,30.439702],山东:[117.1582,36.8701],河南:[113.4668,34.6234],安徽:[117.29,32.0581],湖北:[114.3896,30.6628],浙江:[119.5313,29.8773],福建:[119.4543,25.9222],江西:[116.0046,28.6633],湖南:[113.0823,28.2568],贵州:[106.6992,26.7682],云南:[102.9199,25.4663],广东:[113.12244,23.009505],广西:[108.479,23.1152],海南:[110.3893,19.8516],上海:[121.4648,31.2891],西藏:[91.11,29.97],尼日利亚:[-4.388361,11.186148],美国洛杉矶:[-118.24311,34.052713],香港邦泰:[114.195466,22.282751],美国芝加哥:[-87.801833,41.870975],加纳库马西:[-4.62829,7.72415],英国曼彻斯特:[-1.657222,51.886863],德国汉堡:[10.01959,54.38474],哈萨克斯坦阿拉木图:[45.326912,41.101891],俄罗斯伊尔库茨克:[89.116876,67.757906],巴西:[-48.678945,-10.493623],埃及达米埃塔:[31.815593,31.418032],西班牙巴塞罗纳:[2.175129,41.385064],柬埔寨金边:[104.88659,11.545469],意大利米兰:[9.189948,45.46623],乌拉圭蒙得维的亚:[-56.162231,-34.901113],莫桑比克马普托:[32.608571,-25.893473],阿尔及利亚阿尔及尔:[3.054275,36.753027],阿联酋迪拜:[55.269441,25.204514],匈牙利布达佩斯:[17.108519,48.179162],澳大利亚悉尼:[150.993137,-33.675509],美国加州:[-121.910642,41.38028],澳大利亚墨尔本:[144.999416,-37.781726],墨西哥:[-99.094092,19.365711],加拿大温哥华:[-123.023921,49.311753]},points=[{from:{name:"北京市"},to:[{name:"福建",count:randomInt()},{name:"江西",count:randomInt()},{name:"湖南",count:randomInt()},{name:"贵州",count:randomInt()},{name:"云南",count:randomInt()},{name:"广东",count:randomInt()},{name:"广西",count:randomInt()},{name:"海南",count:randomInt()},{name:"上海",count:randomInt()},{name:"西藏",count:randomInt()},{name:"北京市",count:randomInt()},{name:"辽宁",count:randomInt()},{name:"河北",count:randomInt()},{name:"天津",count:randomInt()},{name:"四川",count:randomInt()}]},{from:{name:"四川"},to:[{name:"江苏",count:randomInt()},{name:"黑龙江",count:randomInt()},{name:"内蒙古",count:randomInt()},{name:"吉林",count:randomInt()},{name:"北京市",count:randomInt()},{name:"辽宁",count:randomInt()},{name:"河北",count:randomInt()},{name:"天津",count:randomInt()},{name:"山西",count:randomInt()},{name:"陕西",count:randomInt()},{name:"甘肃",count:randomInt()},{name:"宁夏",count:randomInt()},{name:"青海",count:randomInt()},{name:"新疆",count:randomInt()},{name:"重庆",count:randomInt()},{name:"山东",count:randomInt()},{name:"河南",count:randomInt()},{name:"安徽",count:randomInt()},{name:"湖北",count:randomInt()},{name:"浙江",count:randomInt()}]}];function getScatterData(e){for(var t=[],o={},n={},c=0;c<e.length;c++){var l=e[c].from,m=e[c].to;o[l.name]=geoCoordMap[l.name],n.hasOwnProperty(l.name)||(n[l.name]=0),m.map(function(a){n.hasOwnProperty(a.name)?n[a.name]=n[a.name]+a.count:n[a.name]=a.count,o.hasOwnProperty(a.name)||(o[a.name]=geoCoordMap[a.name])})}for(var u in o)t.push({name:u,value:o[u].concat(n[u])});return t}function getLinesData(e){for(var t=[],o=0;o<e.length;o++){var n=e[o];t=t.concat(n.to.map(function(c){return{coords:[geoCoordMap[n.from.name],geoCoordMap[c.name],c.name,c.count],value:c.count}}))}return t}option={backgroundColor:"#013954",title:{text:"网络攻击流量图（中国/全球）",subtext:"@idhyt",x:"center",top:20,textStyle:{color:"#fff"}},geo:{map:"china",show:!0,aspectScale:.75,layoutCenter:["50%","40%"],layoutSize:"80%",zoom:1.1,roam:!0,label:{normal:{show:!1,textStyle:{color:"#1DE9B6"}},emphasis:{textStyle:{color:"#FFA07A"}}},itemStyle:{normal:{borderColor:"rgb(147, 235, 248)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"#09132c"},{offset:1,color:"#274d68"}],globalCoord:!0},shadowColor:"rgb(58,115,192)",shadowOffsetX:5,shadowOffsetY:6},emphasis:{areaColor:"rgb(46,229,206)",borderWidth:.1,color:"green",label:{show:!0}}}},visualMap:{min:0,max:countMax,top:"40%",right:100,range:[0,countMax],show:!0,calculable:!0,textStyle:{color:"#fff"}},tooltip:{trigger:"item",backgroundColor:"#1540a1",borderColor:"#FFFFCC",showDelay:0,hideDelay:0,enterable:!0,transitionDuration:0,extraCssText:"z-index:100",formatter:function(e,t,o){if(e.componentSubType==="effectScatter")return"<span style='color:#fff;'>"+e.name+"</span><br/> 被攻击次数："+e.value[2];if(e.componentSubType==="lines")return"<span style='color:#fff;'>"+e.data.coords[2]+"</span><br/> be attacked："+e.data.coords[3]}},toolbox:{x:"center",top:80,feature:{myTool1:{show:!0,title:"China",icon:"path://M828.823 847.837l63.619 0 0-64.263-63.619 0 0 64.263zM510.741 912.091l127.23 0 0 64.268-127.23 0 0-64.268zM1008.606 153.874l-123.609-106.174c-9.098-7.766-21.691-9.837-32.765-5.203l-95.677 39.911-77.1 48.831c-10.186 6.556-15.85 18.329-14.575 30.402l9.609 94.608-89.001 61.763-104.905 12.524-83.851-46.016-52.098-102.629c-7.891-15.553-26.654-21.852-42.239-14.204l-113.053 55.718c-10.939 5.398-17.875 16.587-17.875 28.87l0 42.147-37.728 37.149-42.878 0c-8.204 0-16.159 3.21-22.074 9.001l-57.257 55.716c-12.974 12.658-12.974 33.612 0 46.27l50.198 48.849 28.818 137.906c1.524 7.276 5.474 13.829 11.262 18.449l104.391 84.514c5.661 4.56 12.665 7.063 19.914 7.063l115.024 0 0 69.921c0 17.743 14.246 32.14 31.802 32.14l128.062 0 57.959 39.851c10.052 6.931 23.09 7.439 33.653 1.349l78.75-45.443 108.661-41.321c5.788-2.189 10.746-6.103 14.444-11.113l68.384-94.862c3.947-5.534 6.109-12.148 6.109-18.899l0-93.573c0-8.684-3.498-16.976-9.605-23.007l-39.95-39.204 50.571-33.67c4.708-3.091 8.463-7.394 11.01-12.465l35.498-71.541 89.765-63.11c8.522-6.029 13.615-15.852 13.615-26.353l0-129.687c0-9.431-4.138-18.385-11.262-24.475l0 0zM956.243 291.195l-82.762 58.314c-4.319 3.075-7.884 7.185-10.238 11.954l-35.249 71.06-76.719 50.845c-16.992 11.306-19.281 35.531-4.709 49.867l58.716 57.712 0 69.532-56.685 78.682-104.261 40.091-65.907 37.659-49.687-34.18c-5.28-3.675-11.513-5.593-17.939-5.593l-106.114 0 0-69.923c0-17.743-14.249-32.14-31.81-32.14l-135.626 0-86.841-70.252-28.431-136.362c-1.342-6.315-4.454-12.09-9.103-16.528l-33.395-32.577 29.198-23.591 38.107 0c8.271 0 16.286-3.267 22.209-9.12l56.549-55.716c6.045-5.985 9.545-14.266 9.545-22.949l-5.284-10.079 72.521-58.554 42.309 83.347c2.926 5.728 7.505 10.467 13.105 13.557l101.405 55.733c5.789 3.089 12.404 4.364 18.961 3.583l122.647-14.695c5.09-0.646 9.989-2.462 14.249-5.414l111.073-76.985c9.613-6.691 14.826-18.058 13.617-29.759l-9.539-93.766 55.601-35.666 72.778-29.952 97.711 83.93 0 97.936-0.001 0zM956.243 291.195z",onclick:function(e){regionSwitch(e.scheduler.ecInstance,r=0)}},myTool2:{show:!0,title:"World",icon:"path://M496 0c-273.952 0-496 222.048-496 496s222.048 496 496 496 496-222.048 496-496-222.048-496-496-496zM927.2 480l-191.872 0c-1.76-70.88-14.368-138.592-36.736-200.576 43.2-18.016 83.136-41.984 119.552-70.304 64.736 72.672 105.216 167.04 109.056 270.88zM478.304 927.104c-53.184-44.288-97.792-101.792-130.432-168.576 41.888-13.088 86.272-20.256 132.128-21.728l0 190.368c-0.576 0-1.12-0.032-1.696-0.064zM513.632 64.896c60.352 50.24 109.6 117.536 142.912 196.032-45.632 15.584-94.112 24.64-144.576 26.24l0-222.368c0.608 0.032 1.12 0.064 1.664 0.096zM566.944 70.336c88.32 14.688 167.552 55.936 229.248 115.648-33.504 25.696-70.112 47.456-109.696 63.936-29.12-69.024-69.984-130.048-119.552-179.584zM480 64.8l0 222.368c-50.464-1.632-98.976-10.656-144.576-26.24 33.312-78.496 82.56-145.792 142.912-196.032 0.576-0.032 1.088-0.064 1.664-0.096zM305.472 249.952c-39.52-16.48-76.16-38.24-109.664-63.936 61.664-59.712 140.928-100.96 229.248-115.648-49.6 49.504-90.432 110.528-119.584 179.584zM323.36 290.432c49.344 17.12 101.92 27.104 156.64 28.768l0 160.8-191.328 0c1.728-67.008 13.6-131.04 34.688-189.568zM480 512l0 192.8c-50.464 1.536-99.264 9.792-145.248 24.608-27.712-65.984-44.064-139.488-46.08-217.408l191.328 0zM425.056 921.664c-79.136-13.152-151.008-47.616-209.44-97.664 31.52-21.856 65.6-40.352 102.016-54.4 27.904 57.856 64.416 109.216 107.424 152.064zM512 927.2l0-190.368c45.824 1.472 90.24 8.64 132.128 21.728-32.672 66.784-77.248 124.288-130.432 168.576-0.544 0-1.12 0.032-1.696 0.064zM674.368 769.6c36.384 14.048 70.432 32.576 102.016 54.4-58.432 50.016-130.304 84.512-209.44 97.664 43.008-42.848 79.488-94.208 107.424-152.064zM657.248 729.408c-46.016-14.816-94.816-23.072-145.248-24.608l0-192.8 191.328 0c-2.016 77.92-18.4 151.424-46.08 217.408zM512 480l0-160.8c54.688-1.664 107.264-11.616 156.64-28.736 21.056 58.528 32.928 122.56 34.688 189.568l-191.328 0zM173.888 209.12c36.416 28.32 76.352 52.288 119.52 70.304-22.368 61.984-34.976 129.696-36.736 200.576l-191.872 0c3.84-103.84 44.32-198.208 109.088-270.88zM64.8 512l191.872 0c1.984 81.76 19.072 158.976 48.096 228.384-40.544 15.808-78.336 36.864-113.216 61.792-75.136-74.784-122.56-177.024-126.752-290.176zM800.448 802.144c-34.88-24.896-72.672-45.984-113.248-61.792 29.056-69.408 46.112-146.624 48.128-228.384l191.872 0c-4.192 113.184-51.648 215.424-126.752 290.176z",onclick:function(e){regionSwitch(e.scheduler.ecInstance,r=1)}}},iconStyle:{normal:{borderColor:"#fff"},emphasis:{borderColor:"#b1e4ff"}}},series:[{type:"effectScatter",coordinateSystem:"geo",showEffectOn:"render",zlevel:1,rippleEffect:{period:15,scale:4,brushType:"fill"},label:{normal:{show:!0,formatter:"{b}",position:"top",offset:[5,0],color:"#1DE9B6"},emphasis:{show:!0}},symbol:"circle",symbolSize:function(e){return e[2]?6+e[2]/(countMax/10):6},itemStyle:{normal:{show:!0,color:"#1DE9B6"}},data:getScatterData(points)},{type:"lines",zlevel:2,effect:{show:!0,period:4,trailLength:.2,symbol:"arrow",symbolSize:5},lineStyle:{normal:{width:1,opacity:.1,curveness:.3}},data:getLinesData(points)}]};function regionSwitch(e,t=0){var o=JSON.parse(JSON.stringify(option));if(t===0)o.geo.map="china",o.series[0].data=getScatterData(points),o.series[1].data=getLinesData(points);else if(t===1){o.geo.map="world";var n=[{from:{name:"上海"},to:[{name:"加拿大温哥华",count:randomInt()},{name:"墨西哥",count:randomInt()},{name:"澳大利亚墨尔本",count:randomInt()},{name:"美国加州",count:randomInt()},{name:"澳大利亚悉尼",count:randomInt()},{name:"匈牙利布达佩斯",count:randomInt()},{name:"阿联酋迪拜",count:randomInt()},{name:"阿尔及利亚阿尔及尔",count:randomInt()},{name:"莫桑比克马普托",count:randomInt()},{name:"美国洛杉矶",count:randomInt()},{name:"香港邦泰",count:randomInt()},{name:"美国芝加哥",count:randomInt()},{name:"加纳库马西",count:randomInt()},{name:"英国曼彻斯特",count:randomInt()},{name:"德国汉堡",count:randomInt()},{name:"哈萨克斯坦阿拉木图",count:randomInt()},{name:"俄罗斯伊尔库茨克",count:randomInt()},{name:"巴西",count:randomInt()},{name:"埃及达米埃塔",count:randomInt()},{name:"西班牙巴塞罗纳",count:randomInt()},{name:"柬埔寨金边",count:randomInt()},{name:"意大利米兰",count:randomInt()},{name:"乌拉圭蒙得维的亚",count:randomInt()}]}];o.series[0].data=getScatterData(n),o.series[1].data=getLinesData(n)}e.setOption(o)}