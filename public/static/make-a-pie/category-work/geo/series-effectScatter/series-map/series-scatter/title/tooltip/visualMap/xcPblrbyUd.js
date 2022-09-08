var name_title="2020年全国各省高考报名人数(万人)及一本录取率",subname="数据来自百度搜索",nameColor=" rgb(55, 75, 113)",name_fontFamily="等线",subname_fontSize=18,name_fontSize=28,mapName="china",data=[{name:"北京",value:4.9},{name:"天津",value:5.6},{name:"河北",value:62.48},{name:"山西",value:32.6},{name:"内蒙古",value:19.793},{name:"辽宁",value:24.4},{name:"吉林",value:14.2},{name:"黑龙江",value:21.13},{name:"上海",value:5},{name:"江苏",value:34.89},{name:"浙江",value:32.57},{name:"安徽",value:52.38},{name:"福建",value:20.26},{name:"江西",value:38.94},{name:"山东",value:53},{name:"河南",value:115.8},{name:"湖北",value:39.48},{name:"湖南",value:53.7},{name:"重庆",value:28.3},{name:"四川",value:67},{name:"贵州",value:47},{name:"云南",value:34.4},{name:"西藏",value:3},{name:"陕西",value:32.23},{name:"甘肃",value:26.31},{name:"青海",value:5.67},{name:"宁夏",value:6.03},{name:"新疆",value:22.93},{name:"广东",value:77.96},{name:"广西",value:50.7},{name:"海南",value:5.73}],geoCoordMap={},toolTipData=[{name:"北京",value:[{name:"总人数",value:4.9},{name:"一本录取率",value:30.5+"%"},{name:"一本录取人数",value:1.4945}]},{name:"天津",value:[{name:"总人数",value:5.6},{name:"一本录取率",value:24.1+"%"},{name:"一本录取人数",value:1.3496}]},{name:"河北",value:[{name:"总人数",value:62.48},{name:"一本录取率",value:14.6+"%"},{name:"一本录取人数",value:9.1221}]},{name:"山西",value:[{name:"总人数",value:32.6},{name:"一本录取率",value:9.8+"%"},{name:"一本录取人数",value:3.1948}]},{name:"内蒙古",value:[{name:"总人数",value:19.793},{name:"一本录取率",value:14+"%"},{name:"一本录取人数",value:2.771}]},{name:"辽宁",value:[{name:"总人数",value:24.4},{name:"一本录取率",value:16.1+"%"},{name:"一本录取人数",value:3.9284}]},{name:"吉林",value:[{name:"总人数",value:14.2},{name:"一本录取率",value:12.4+"%"},{name:"一本录取人数",value:1.7608}]},{name:"黑龙江",value:[{name:"总人数",value:21.13},{name:"一本录取率",value:13.5+"%"},{name:"一本录取人数",value:2.8526}]},{name:"上海",value:[{name:"总人数",value:5},{name:"一本录取率",value:21.8+"%"},{name:"一本录取人数",value:1.09}]},{name:"江苏",value:[{name:"总人数",value:34.89},{name:"一本录取率",value:12.1+"%"},{name:"一本录取人数",value:4.2217}]},{name:"浙江",value:[{name:"总人数",value:32.57},{name:"一本录取率",value:14+"%"},{name:"一本录取人数",value:4.5598}]},{name:"安徽",value:[{name:"总人数",value:52.38},{name:"一本录取率",value:14.2+"%"},{name:"一本录取人数",value:7.438}]},{name:"福建",value:[{name:"总人数",value:20.26},{name:"一本录取率",value:18.7+"%"},{name:"一本录取人数",value:3.7886}]},{name:"江西",value:[{name:"总人数",value:38.94},{name:"一本录取率",value:10.4+"%"},{name:"一本录取人数",value:4.0498}]},{name:"山东",value:[{name:"总人数",value:53},{name:"一本录取率",value:10.6+"%"},{name:"一本录取人数",value:5.618}]},{name:"河南",value:[{name:"总人数",value:115.8},{name:"一本录取率",value:7.8+"%"},{name:"一本录取人数",value:9.0324}]},{name:"湖北",value:[{name:"总人数",value:39.48},{name:"一本录取率",value:15.8+"%"},{name:"一本录取人数",value:6.2378}]},{name:"湖南",value:[{name:"总人数",value:53.7},{name:"一本录取率",value:11.2+"%"},{name:"一本录取人数",value:6.0144}]},{name:"重庆",value:[{name:"总人数",value:28.3},{name:"一本录取率",value:11.5+"%"},{name:"一本录取人数",value:3.2545}]},{name:"四川",value:[{name:"总人数",value:67},{name:"一本录取率",value:10.6+"%"},{name:"一本录取人数",value:7.102}]},{name:"贵州",value:[{name:"总人数",value:47},{name:"一本录取率",value:14.5+"%"},{name:"一本录取人数",value:6.815}]},{name:"云南",value:[{name:"总人数",value:34.4},{name:"一本录取率",value:10.9+"%"},{name:"一本录取人数",value:3.7496}]},{name:"西藏",value:[{name:"总人数",value:3},{name:"一本录取率",value:11+"%"},{name:"一本录取人数",value:.33}]},{name:"陕西",value:[{name:"总人数",value:32.23},{name:"一本录取率",value:14.6+"%"},{name:"一本录取人数",value:4.7056}]},{name:"甘肃",value:[{name:"总人数",value:26.31},{name:"一本录取率",value:15.2},{name:"一本录取人数",value:3.9991}]},{name:"青海",value:[{name:"总人数",value:5.67},{name:"一本录取率",value:15.2+"%"},{name:"一本录取人数",value:.8618}]},{name:"宁夏",value:[{name:"总人数",value:6.03},{name:"一本录取率",value:19+"%"},{name:"一本录取人数",value:1.1457}]},{name:"新疆",value:[{name:"总人数",value:22.93},{name:"一本录取率",value:12.9+"%"},{name:"一本录取人数",value:2.958}]},{name:"广东",value:[{name:"总人数",value:77.96},{name:"一本录取率",value:11.2+"%"},{name:"一本录取人数",value:8.7315}]},{name:"广西",value:[{name:"总人数",value:50.7},{name:"一本录取率",value:8.4+"%"},{name:"一本录取人数",value:4.2588}]},{name:"海南",value:[{name:"总人数",value:5.73},{name:"一本录取率",value:15.5+"%"},{name:"一本录取人数",value:.8882}]}];myChart.showLoading();var mapFeatures=echarts.getMap(mapName).geoJson.features;myChart.hideLoading(),mapFeatures.forEach(function(a){var n=a.properties.name;geoCoordMap[n]=a.properties.cp}),console.log(data),console.log(toolTipData);var max=480,min=9,maxSize4Pin=20,minSize4Pin=20,convertData=function(a){for(var n=[],e=0;e<a.length;e++){var l=geoCoordMap[a[e].name];l&&n.push({name:a[e].name,value:l.concat(a[e].value)})}return n};option={title:{text:name_title,subtext:subname,x:"center",textStyle:{color:nameColor,fontFamily:name_fontFamily,fontSize:name_fontSize},subtextStyle:{fontSize:subname_fontSize,fontFamily:name_fontFamily}},tooltip:{trigger:"item",formatter:function(a){if(typeof a.value[2]>"u"){for(var n="",e=0;e<toolTipData.length;e++)if(a.name==toolTipData[e].name){n+=toolTipData[e].name+":<br>";for(var l=0;l<toolTipData[e].value.length;l++)n+=toolTipData[e].value[l].name+":"+toolTipData[e].value[l].value+"<br>"}return console.log(n),n}else{for(var n="",e=0;e<toolTipData.length;e++)if(a.name==toolTipData[e].name){n+=toolTipData[e].name+":<br>";for(var l=0;l<toolTipData[e].value.length;l++)n+=toolTipData[e].value[l].name+":"+toolTipData[e].value[l].value+"<br>"}return console.log(n),n}}},visualMap:{show:!0,min:0,max:115,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{color:["#A5CC82","#00467F"]}},geo:{show:!0,map:mapName,label:{normal:{show:!1},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#FF0000"}}},series:[{name:"散点",type:"scatter",coordinateSystem:"geo",data:convertData(data),symbolSize:function(a){return a[2]/10},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#ffffff"}}},{type:"map",map:mapName,geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!0},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data},{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:convertData(data.sort(function(a,n){return n.value-a.value}).slice(0,5)),symbolSize:function(a){return a[2]/10},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"yellow",shadowBlur:10,shadowColor:"yellow"}},zlevel:1}]},myChart.setOption(option);