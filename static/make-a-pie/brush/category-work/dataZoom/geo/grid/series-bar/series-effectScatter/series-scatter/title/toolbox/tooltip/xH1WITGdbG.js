var geoCoordMap={北京市:[116.4007503787,39.9031844643],天津市:[117.2,39.13],河北省:[114.524073888,38.036954569],山西省:[112.56271037,37.8734242952],内蒙古自治区:[111.7590830143,40.8159854773],辽宁省:[123.4228793091,41.8332774857],吉林省:[125.3194840474,43.8935958874],黑龙江省:[126.656985929,45.7402920742],上海市:[121.469458249,31.2319316784],江苏省:[118.7577787179,32.062894652],浙江省:[120.1482777505,30.2679448569],安徽省:[117.3184107275,31.7302800302],福建省:[119.2912119374,26.1032130346],江西省:[115.9041671882,28.678717161],山东省:[117.0150329528,36.6684584614],河南省:[113.7468127479,34.7663740731],湖北省:[114.3365145193,30.5477075054],湖南省:[112.9774361866,28.1159896334],广东省:[113.2606645241,23.1343756641],广西壮族自治区:[108.3239914052,22.8181261724],海南省:[110.3445885734,20.0220493652],重庆市:[106.5482798308,29.565526745],四川省:[104.0645225402,30.573883935],贵州省:[106.7042685578,26.60146861],云南省:[102.7085605915,25.0482571732],西藏自治区:[91.1162572311,29.6496102663],陕西省:[108.949321969,34.2710565338],甘肃省:[103.8235810073,36.0596388322],青海省:[101.7780555423,36.6211031499],宁夏回族自治区:[106.2545973266,38.470732369],新疆维吾尔自治区:[87.6241711158,43.7919111236],台湾:[121.509062,25.044332]},data=[{name:"北京市",value:100},{name:"天津市",value:22},{name:"河北省",value:107},{name:"山西省",value:100},{name:"内蒙古自治区",value:84},{name:"辽宁省",value:64},{name:"吉林省",value:76},{name:"黑龙江省",value:158},{name:"上海市",value:99},{name:"江苏省",value:312},{name:"浙江省",value:224},{name:"安徽省",value:171},{name:"福建省",value:98},{name:"江西省",value:137},{name:"山东省",value:312},{name:"河南省",value:248},{name:"湖北省",value:175},{name:"湖南省",value:113},{name:"广东省",value:177},{name:"广西壮族自治区",value:124},{name:"海南省",value:18},{name:"重庆市",value:78},{name:"四川省",value:225},{name:"贵州省",value:73},{name:"云南省",value:86},{name:"西藏自治区",value:7},{name:"陕西省",value:249},{name:"甘肃省",value:147},{name:"青海省",value:22},{name:"宁夏回族自治区",value:12},{name:"新疆维吾尔自治区",value:82},{name:"台湾",value:56}],convertData=function(e){for(var t=[],a=0;a<e.length;a++){var r=geoCoordMap[e[a].name];r&&t.push({name:e[a].name,value:r.concat(e[a].value)})}return t},convertedData=[convertData(data),convertData(data.sort(function(e,t){return t.value-e.value}).slice(0,6))];data.sort(function(e,t){return e.value-t.value});for(var selectedItems=[],categoryData=[],barData=[],sum=0,count=data.length,i=0;i<data.length;i++)categoryData.push(data[i].name),barData.push(data[i].value),sum+=data[i].value;console.log(categoryData),console.log(sum+"   "+count),option={backgroundColor:"#000",animation:!0,animationDuration:1e3,animationEasing:"cubicInOut",animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut",title:[{text:"全国省市博物馆数量",subtext:`数据来源:国家统计局 http://data.stats.gov.cn/easyquery.htm?cn=E0103

传播学（媒体市场调查与分析）汤海雯 201501213025`,left:"center",textStyle:{color:"#FFFFE0"}},{id:"statistic",text:count?"各省市平均数量: "+parseInt((sum/count).toFixed(4)):"",right:120,top:40,width:100,textStyle:{color:"#FFFFE0",fontSize:16}}],toolbox:{iconStyle:{normal:{borderColor:"#fff"},emphasis:{borderColor:"#b1e4ff"}},feature:{dataZoom:{},brush:{type:["rect","polygon","clear"]},saveAsImage:{show:!0}}},brush:{outOfBrush:{color:"#abc"},brushStyle:{borderWidth:2,color:"rgba(0,0,0,0.1)",borderColor:"rgba(0,0,0,0.5)"},seriesIndex:[0,1],throttleType:"debounce",throttleDelay:300,geoIndex:0},geo:{map:"china",left:"10",right:"35%",center:[117.98561551896913,31.205000490896193],zoom:1.5,label:{emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#6E6E6E",borderColor:"#111"},emphasis:{areaColor:"#CDB38B"}}},tooltip:{trigger:"item"},grid:{right:40,top:100,bottom:40,width:"30%"},xAxis:{type:"value",scale:!0,position:"top",boundaryGap:!1,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:2,textStyle:{color:"#aaa"}}},yAxis:{type:"category",nameGap:16,axisLine:{show:!0,lineStyle:{color:"#ddd"}},axisTick:{show:!1,lineStyle:{color:"#ddd"}},axisLabel:{interval:0,textStyle:{color:"#ddd"}},data:categoryData},series:[{type:"scatter",coordinateSystem:"geo",data:convertedData[0],symbolSize:function(e){return Math.max(e[2]/10,8)},label:{normal:{formatter:"{b}",position:"right",show:!1},emphasis:{show:!0}},itemStyle:{normal:{color:"#ddb926",position:"right",show:!0}}},{type:"effectScatter",coordinateSystem:"geo",data:convertedData[0],symbolSize:function(e){return Math.max(e[2]/10,8)},showEffectOn:"emphasis",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#f4e925",shadowBlur:10,shadowColor:"#333"}},zlevel:1},{id:"bar",zlevel:2,type:"bar",symbol:"none",itemStyle:{normal:{color:"#ddb926"}},data}]};function renderBrushed(e){for(var t=e.batch[0].selected[0],a=[],r=[],n=[],m=30,s=0,l=0,o=0;o<t.dataIndex.length;o++){var v=t.dataIndex[o],u=convertedData[0][v],c=u.value[2];s+=c,l++,a.push(u)}a.sort(function(h,d){return h.value-d.value});for(var o=0;o<Math.min(a.length,m);o++)r.push(a[o].name),n.push(a[o].value[2]);this.setOption({yAxis:{data:r},xAxis:{axisLabel:{show:!!l}},title:{id:"statistic",text:l?"平均: "+(s/l).toFixed(4):""},series:{id:"bar",data:n}})}