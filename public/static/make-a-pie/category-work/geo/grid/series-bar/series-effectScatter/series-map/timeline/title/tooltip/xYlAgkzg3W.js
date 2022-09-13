var uploadedDataURL="/asset/get/s/data-1528971808162-BkOXf61WX.json",geoCoordMap={北京:[116.4551,40.2539],深圳:[114.072026,22.552194],上海:[121.4648,31.2891],广州:[113.27,23.13],杭州:[119.5313,29.8773],苏州:[120.59,31.29],成都:[103.9526,30.7617],武汉:[114.31,30.52],南京:[118.8,32.06],重庆:[108.384366,30.439702],青岛:[120.39,36.06],宁波:[121.640618,29.86206],西安:[108.94,38.34],长沙:[113.0823,28.2568],济南:[117.12,36.65],天津:[117.4219,39.4189],郑州:[113.4668,34.6234],厦门:[118.1,24.46],合肥:[117.29,32.0581],东莞:[113.764742,23.02039],无锡:[120.31,31.49],佛山:[113.11,23.05],珠海:[113.556111,22.250876],昆明:[102.83,24.88],沈阳:[123.47,41.68]},d1={北京:75.52,深圳:71.3,上海:71.85,广州:52.51,杭州:48.32,苏州:56.44,成都:49.35,武汉:36.11,南京:42.49,重庆:41.7,青岛:38.25,宁波:39.69,西安:43.48,长沙:36.97,济南:35.25,天津:34.79,郑州:35.95,厦门:34.42,合肥:32.63,东莞:35.61,无锡:42.62,佛山:31.05,珠海:32.73,昆明:37.27,沈阳:27.65},d2={北京:91.14,深圳:74.9,上海:55.93,广州:31.68,杭州:30.79,苏州:33.06,成都:25.3,武汉:25.78,南京:31.21,重庆:19.44,青岛:24.9,宁波:28.97,西安:31.9,长沙:21.72,济南:16.18,天津:29.42,郑州:14.79,厦门:21.9,合肥:21.84,东莞:29.04,无锡:20.5,佛山:19.73,珠海:24.4,昆明:9.67,沈阳:16.5},d3={北京:68.8,深圳:70.12,上海:61.73,广州:68.83,杭州:55.63,苏州:47.35,成都:64.14,武汉:57.46,南京:49.37,重庆:57.49,青岛:45.31,宁波:43.15,西安:57.87,长沙:51.51,济南:47.69,天津:42.82,郑州:59.35,厦门:44.11,合肥:47.69,东莞:44.08,无锡:37.29,佛山:45.89,珠海:40.33,昆明:48.79,沈阳:43.14},d4={北京:12.74,深圳:36.89,上海:26.69,广州:55.26,杭州:56.99,苏州:70.55,成都:72.86,武汉:74.2,南京:55.09,重庆:73.48,青岛:73.4,宁波:61.72,西安:75.7,长沙:71.86,济南:72.55,天津:64.46,郑州:74.87,厦门:72.87,合肥:81.74,东莞:72.05,无锡:71.69,佛山:74.01,珠海:69.82,昆明:75.66,沈阳:84.2},d5={北京:63.56,深圳:44.66,上海:64.01,广州:50.82,杭州:56.58,苏州:58.01,成都:48.92,武汉:50.54,南京:56.38,重庆:45.79,青岛:48.66,宁波:51.36,西安:39.73,长沙:46.77,济南:53.13,天津:49.51,郑州:43.51,厦门:39.56,合肥:39.83,东莞:36.13,无锡:50.92,佛山:42.43,珠海:41.48,昆明:40.29,沈阳:52.35},d6={北京:36.8,深圳:39.53,上海:54.92,广州:64.99,杭州:29.94,苏州:28.49,成都:21.22,武汉:33.75,南京:27.74,重庆:36.36,青岛:46.18,宁波:44.75,西安:22.28,长沙:29.35,济南:49.39,天津:34.4,郑州:24.84,厦门:23.48,合肥:21.44,东莞:32.76,无锡:18.74,佛山:27.24,珠海:27.49,昆明:19.34,沈阳:15.73},d7={北京:48.23,深圳:60.2,上海:56.05,广州:60.4,杭州:60.16,苏州:56.13,成都:48.19,武汉:56.09,南京:56.21,重庆:60.23,青岛:56.24,宁波:58.17,西安:47.85,长沙:56.12,济南:48.15,天津:48.06,郑州:48.19,厦门:60.21,合肥:56.16,东莞:60.3,无锡:56.2,佛山:60.26,珠海:60.34,昆明:60.11,沈阳:48.15},d8={北京:89.87,深圳:100,上海:89.71,广州:92.12,杭州:87.95,苏州:45.94,成都:55.93,武汉:65.68,南京:69.62,重庆:42.26,青岛:51.78,宁波:55.16,西安:21.25,长沙:38.66,济南:35.1,天津:52.23,郑州:40.7,厦门:68.42,合肥:49.66,东莞:37.52,无锡:38.44,佛山:42.52,珠海:37.52,昆明:32.68,沈阳:32.97},colors=[["#1DE9B6","#F46E36","#04B9FF","#5DBD32","#FFC809","#FB95D5","#BDA29A","#7b0c00","#6E7074","#546570","#C4CCD3"],["#37A2DA","#67E0E3","#32C5E9","#9FE6B8","#FFDB5C","#FF9F7F","#FB7293","#E062AE","#E690D1","#E7BCF3","#9D96F5","#8378EA","#8378EA"],["#DD6B66","#759AA0","#E69D87","#8DC1A9","#EA7E53","#EEDD78","#73A373","#73B9BC","#7289AB","#91CA8C","#F49F42"]],colorIndex=0;$(function(){var i=["市场活力","科技创新","人力资源","成本节约","公共服务","基础设施","生态环境","政策环境"],e=[[],[],[],[],[],[],[],[]],u=[],p=[];for(var a in geoCoordMap)e[0].push({year:"市场活力",name:a,value:d1[a]}),e[1].push({year:"科技创新",name:a,value:d2[a]}),e[2].push({year:"人力资源",name:a,value:d3[a]}),e[3].push({year:"成本节约",name:a,value:d4[a]}),e[4].push({year:"公共服务",name:a,value:d5[a]}),e[5].push({year:"基础设施",name:a,value:d6[a]}),e[6].push({year:"生态环境",name:a,value:d7[a]}),e[7].push({year:"政策环境",name:a,value:d8[a]});for(var t=0;t<e.length;t++){e[t].sort(function(h,o){return h.value-o.value}),p.push([]),u.push([]);for(var s=0;s<e[t].length;s++)p[t].push(e[t][s].value),u[t].push(e[t][s].name)}$.getJSON(uploadedDataURL,function(d){echarts.registerMap("china",d);var h=function(r){for(var n=[],l=0;l<r.length;l++){var c=geoCoordMap[r[l].name];c&&n.push({name:r[l].name,value:c.concat(r[l].value)})}return n};optionXyMap01={timeline:{data:i,axisType:"category",autoPlay:!0,playInterval:3e3,left:"10%",right:"10%",bottom:"2%",width:"80%",label:{normal:{textStyle:{color:"#ddd"}},emphasis:{textStyle:{color:"#fff"}}},symbolSize:10,lineStyle:{color:"#555"},checkpointStyle:{borderColor:"#777",borderWidth:2},controlStyle:{showNextBtn:!0,showPrevBtn:!0,normal:{color:"#666",borderColor:"#666"},emphasis:{color:"#aaa",borderColor:"#aaa"}}},baseOption:{animation:!0,animationDuration:1e3,animationEasing:"cubicInOut",animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut",grid:{right:"1%",top:"15%",bottom:"10%",width:"20%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(150,150,150,0.1)"}}},geo:{show:!0,map:"china",roam:!0,zoom:1,center:[113.83531246,34.0267395887],label:{emphasis:{show:!1}},itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10},emphasis:{areaColor:"#389BB7",borderWidth:0}}}},options:[]};for(var o=0;o<i.length;o++)optionXyMap01.options.push({backgroundColor:"#013954",title:[{text:"营商环境指数TOP25城市八大指标表现",left:"25%",top:"7%",textStyle:{color:"#fff",fontSize:25}},{id:"statistic",text:i[o]+"指数",left:"75%",top:"8%",textStyle:{color:"#fff",fontSize:25}}],xAxis:{type:"value",scale:!0,position:"top",min:0,boundaryGap:!1,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:2,textStyle:{color:"#aaa"}}},yAxis:{type:"category",nameGap:16,axisLine:{show:!0,lineStyle:{color:"#ddd"}},axisTick:{show:!1,lineStyle:{color:"#ddd"}},axisLabel:{interval:0,textStyle:{color:"#ddd"}},data:u[o]},series:[{type:"map",map:"china",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!1},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#FFFFFF"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:e},{type:"effectScatter",coordinateSystem:"geo",data:h(e[o].sort(function(r,n){return n.value-r.value}).slice(0,25)),symbolSize:function(r){return r[2]/2},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:colors[colorIndex][o],shadowBlur:10,shadowColor:colors[colorIndex][o]}},zlevel:1},{zlevel:1.5,type:"bar",symbol:"none",itemStyle:{normal:{color:colors[colorIndex][o]}},data:p[o]}]});myChart.setOption(optionXyMap01)})});