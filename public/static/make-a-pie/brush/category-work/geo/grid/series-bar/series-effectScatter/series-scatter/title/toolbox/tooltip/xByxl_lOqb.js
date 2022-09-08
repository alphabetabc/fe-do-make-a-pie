var geoCoordMap={太原:[112.55,37.87],北京:[116.4,39.9],天津:[117.2,39.12],呼和浩特:[111.73,40.83],沈阳:[123.43,41.8],大连:[121.62,38.92],长春:[125.32,43.9],哈尔滨:[126.53,45.8],上海:[121.47,31.23],南京:[118.78,32.07],杭州:[120.15,30.28],宁波:[121.55,29.88],合肥:[117.25,31.83],福州:[119.3,26.08],厦门:[118.08,24.48],南昌:[115.85,28.68],济南:[116.98,36.67],青岛:[120.38,36.07],郑州:[113.62,34.75],武汉:[114.3,30.6],长沙:[112.93,28.23],广州:[113.27,23.13],深圳:[114.05,22.55],南宁:[108.37,22.82],海口:[110.32,20.03],重庆:[106.55,29.57],成都:[104.07,30.67],贵阳:[106.63,26.65],昆明:[102.72,25.05],西安:[108.93,34.27],兰州:[103.82,36.07],银川:[106.28,38.47],乌鲁木齐:[87.62,43.82],西宁:[101.78,36.62]},data=[{name:"太原",value:52.9},{name:"北京",value:53.3},{name:"天津",value:54.2},{name:"石家庄",value:50.8},{name:"呼和浩特",value:54.1},{name:"沈阳",value:55.6},{name:"大连",value:54.2},{name:"长春",value:56.1},{name:"哈尔滨",value:58.3},{name:"上海",value:56.2},{name:"南京",value:54.2},{name:"杭州",value:56.2},{name:"宁波",value:57},{name:"合肥",value:54.4},{name:"福州",value:56},{name:"厦门",value:56.1},{name:"南昌",value:53.6},{name:"济南",value:53.6},{name:"青岛",value:54.2},{name:"郑州",value:55},{name:"武汉",value:55.9},{name:"长沙",value:54.9},{name:"广州",value:55.2},{name:"深圳",value:56.8},{name:"南宁",value:53.2},{name:"海口",value:55},{name:"重庆",value:53.6},{name:"成都",value:54.2},{name:"贵阳",value:58.9},{name:"昆明",value:53.5},{name:"西安",value:54.7},{name:"兰州",value:54.6},{name:"银川",value:53.1},{name:"乌鲁木齐",value:53.7},{name:"西宁",value:52.2}],convertData=function(e){for(var t=[],a=0;a<e.length;a++){var r=geoCoordMap[e[a].name];r&&t.push({name:e[a].name,value:r.concat(e[a].value)})}return t},convertedData=[convertData(data),convertData(data.sort(function(e,t){return t.value-e.value}).slice(0,6))];option={backgroundColor:"#404a59",animation:!0,animationDuration:1e3,animationEasing:"cubicInOut",animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut",title:[{text:"全国主要城市 噪音分贝",subtext:"data from 中国统计局官网",sublink:"http://www.stats.gov.cn/",left:"center",textStyle:{color:"#fff"}},{id:"statistic",right:120,top:40,width:100,textStyle:{color:"#fff",fontSize:16}}],toolbox:{iconStyle:{normal:{borderColor:"#fff"},emphasis:{borderColor:"#b1e4ff"}}},brush:{outOfBrush:{color:"#abc"},brushStyle:{borderWidth:2,color:"rgba(0,0,0,0.2)",borderColor:"rgba(0,0,0,0.5)"},seriesIndex:[0,1],throttleType:"debounce",throttleDelay:300,geoIndex:0},geo:{map:"china",left:"10",right:"35%",center:[117.98561551896913,31.205000490896193],zoom:2.5,label:{emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#323c48",borderColor:"#111"},emphasis:{areaColor:"#2a333d"}}},tooltip:{trigger:"item",formatter:function(e,t,a){console.log(e);var r="噪音<br />"+e.data.name+"&nbsp;:&nbsp;"+e.data.value[2];return r}},grid:{right:40,top:100,bottom:40,width:"30%"},xAxis:{type:"value",scale:!0,position:"top",boundaryGap:!1,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:2,textStyle:{color:"#aaa"}}},yAxis:{type:"category",name:"排名列表",nameGap:16,axisLine:{show:!1,lineStyle:{color:"#ddd"}},axisTick:{show:!1,lineStyle:{color:"#ddd"}},axisLabel:{interval:0,textStyle:{color:"#ddd"}},data:[]},series:[{name:"噪音分贝",type:"scatter",coordinateSystem:"geo",data:convertedData[0],symbolSize:function(e){return Math.max(e[2]/10,8)},label:{normal:{formatter:"{b}",position:"right",show:!1},emphasis:{show:!0}},itemStyle:{normal:{color:"#ddb926"}}},{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:convertedData[1],symbolSize:function(e){return Math.max(e[2]/10,8)},showEffectOn:"emphasis",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#f4e925",shadowBlur:10,shadowColor:"#333"}},zlevel:1},{id:"bar",zlevel:2,type:"bar",symbol:"none",itemStyle:{normal:{color:"#ddb926"}},data:[]}]},myChart.on("brushselected",renderBrushed),setTimeout(function(){myChart.dispatchAction({type:"brush",areas:[{geoIndex:0,brushType:"polygon",coordRange:[[119.72,34.85],[119.68,34.85],[119.5,34.84],[119.19,34.77],[118.76,34.63],[118.6,34.6],[118.46,34.6],[118.33,34.57],[118.05,34.56],[117.6,34.56],[117.41,34.56],[117.25,34.56],[117.11,34.56],[117.02,34.56],[117,34.56],[116.94,34.56],[116.94,34.55],[116.9,34.5],[116.88,34.44],[116.88,34.37],[116.88,34.33],[116.88,34.24],[116.92,34.15],[116.98,34.09],[117.05,34.06],[117.19,33.96],[117.29,33.9],[117.43,33.8],[117.49,33.75],[117.54,33.68],[117.6,33.65],[117.62,33.61],[117.64,33.59],[117.68,33.58],[117.7,33.52],[117.74,33.5],[117.74,33.46],[117.8,33.44],[117.82,33.41],[117.86,33.37],[117.9,33.3],[117.9,33.28],[117.9,33.27],[118.09,32.97],[118.21,32.7],[118.29,32.56],[118.31,32.5],[118.35,32.46],[118.35,32.42],[118.35,32.36],[118.35,32.34],[118.37,32.24],[118.37,32.14],[118.37,32.09],[118.44,32.05],[118.46,32.01],[118.54,31.98],[118.6,31.93],[118.68,31.86],[118.72,31.8],[118.74,31.78],[118.76,31.74],[118.78,31.7],[118.82,31.64],[118.82,31.62],[118.86,31.58],[118.86,31.55],[118.88,31.54],[118.88,31.52],[118.9,31.51],[118.91,31.48],[118.93,31.43],[118.95,31.4],[118.97,31.39],[118.97,31.37],[118.97,31.34],[118.97,31.27],[118.97,31.21],[118.97,31.17],[118.97,31.12],[118.97,31.02],[118.97,30.93],[118.97,30.87],[118.97,30.85],[118.95,30.8],[118.95,30.77],[118.95,30.76],[118.93,30.7],[118.91,30.63],[118.91,30.61],[118.91,30.6],[118.9,30.6],[118.88,30.54],[118.88,30.51],[118.86,30.51],[118.86,30.46],[118.72,30.18],[118.68,30.1],[118.66,30.07],[118.62,29.91],[118.56,29.73],[118.52,29.63],[118.48,29.51],[118.44,29.42],[118.44,29.32],[118.43,29.19],[118.43,29.14],[118.43,29.08],[118.44,29.05],[118.46,29.05],[118.6,28.95],[118.64,28.94],[119.07,28.51],[119.25,28.41],[119.36,28.28],[119.46,28.19],[119.54,28.13],[119.66,28.03],[119.78,28],[119.87,27.94],[120.03,27.86],[120.17,27.79],[120.23,27.76],[120.3,27.72],[120.42,27.66],[120.52,27.64],[120.58,27.63],[120.64,27.63],[120.77,27.63],[120.89,27.61],[120.97,27.6],[121.07,27.59],[121.15,27.59],[121.28,27.59],[121.38,27.61],[121.56,27.73],[121.73,27.89],[122.03,28.2],[122.3,28.5],[122.46,28.72],[122.5,28.77],[122.54,28.82],[122.56,28.82],[122.58,28.85],[122.6,28.86],[122.61,28.91],[122.71,29.02],[122.73,29.08],[122.93,29.44],[122.99,29.54],[123.03,29.66],[123.05,29.73],[123.16,29.92],[123.24,30.02],[123.28,30.13],[123.32,30.29],[123.36,30.36],[123.36,30.55],[123.36,30.74],[123.36,31.05],[123.36,31.14],[123.36,31.26],[123.38,31.42],[123.46,31.74],[123.48,31.83],[123.48,31.95],[123.46,32.09],[123.34,32.25],[123.22,32.39],[123.12,32.46],[123.07,32.48],[123.05,32.49],[122.97,32.53],[122.91,32.59],[122.83,32.81],[122.77,32.87],[122.71,32.9],[122.56,32.97],[122.38,33.05],[122.3,33.12],[122.26,33.15],[122.22,33.21],[122.22,33.3],[122.22,33.39],[122.18,33.44],[122.07,33.56],[121.99,33.69],[121.89,33.78],[121.69,34.02],[121.66,34.05],[121.64,34.08]]}]})},0);function renderBrushed(e){for(var t=e.batch[0].selected[0],a=[],r=[],l=[],u=50,i=0,n=0,o=0;o<t.dataIndex.length;o++){var m=t.dataIndex[o],s=convertedData[0][m],v=s.value[2];i+=v,n++,a.push(s)}a.sort(function(c,d){return c.value[2]-d.value[2]});for(var o=0;o<Math.min(a.length,u);o++)r.push(a[o].name),l.push(a[o].value[2]);this.setOption({yAxis:{data:r},xAxis:{axisLabel:{show:!!n}},title:{id:"statistic",text:n?"平均: "+(i/n).toFixed(4):""},series:{id:"bar",data:l}})}
