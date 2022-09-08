var name_title="各省访客分布",subname="",nameColor=" rgb(55, 75, 113)",name_fontFamily="等线",subname_fontSize=15,name_fontSize=18,mapName="china",data=[{name:"安徽",value:66700},{name:"北京",value:60365},{name:"福建",value:69003},{name:"甘肃",value:13821},{name:"广东",value:179419},{name:"广西",value:32148},{name:"贵州",value:23958},{name:"海南",value:8833},{name:"河北",value:68955},{name:"河南",value:89746},{name:"黑龙江",value:24985},{name:"湖北",value:65377},{name:"湖南",value:56366},{name:"吉林",value:20140},{name:"江苏",value:155869},{name:"江西",value:40243},{name:"辽宁",value:45475},{name:"内蒙古",value:18158},{name:"宁夏",value:4870},{name:"青海",value:2780},{name:"山东",value:109596},{name:"山西",value:33375},{name:"陕西",value:38842},{name:"上海",value:68829},{name:"四川",value:62467},{name:"天津",value:22681},{name:"西藏",value:962},{name:"新疆",value:12374},{name:"云南",value:31154},{name:"浙江",value:233131},{name:"重庆",value:27925}],geoCoordMap={},toolTipData=[{name:"安徽",value:[{name:"支付金额",value:1616745},{name:"访客数",value:66700}]},{name:"北京",value:[{name:"支付金额",value:2156576},{name:"访客数",value:60365}]},{name:"福建",value:[{name:"支付金额",value:1719807},{name:"访客数",value:69003}]},{name:"甘肃",value:[{name:"支付金额",value:323535},{name:"访客数",value:13821}]},{name:"广东",value:[{name:"支付金额",value:4624719},{name:"访客数",value:179419}]},{name:"广西",value:[{name:"支付金额",value:662102},{name:"访客数",value:32148}]},{name:"贵州",value:[{name:"支付金额",value:620073},{name:"访客数",value:23958}]},{name:"海南",value:[{name:"支付金额",value:220491},{name:"访客数",value:8833}]},{name:"河北",value:[{name:"支付金额",value:1453640},{name:"访客数",value:68955}]},{name:"河南",value:[{name:"支付金额",value:1808798},{name:"访客数",value:89746}]},{name:"黑龙江",value:[{name:"支付金额",value:670433},{name:"访客数",value:24985}]},{name:"湖北",value:[{name:"支付金额",value:1617945},{name:"访客数",value:65377}]},{name:"湖南",value:[{name:"支付金额",value:1464625},{name:"访客数",value:56366}]},{name:"吉林",value:[{name:"支付金额",value:521960},{name:"访客数",value:20140}]},{name:"江苏",value:[{name:"支付金额",value:4663961},{name:"访客数",value:155869}]},{name:"江西",value:[{name:"支付金额",value:862185},{name:"访客数",value:40243}]},{name:"辽宁",value:[{name:"支付金额",value:1313990},{name:"访客数",value:45475}]},{name:"内蒙古",value:[{name:"支付金额",value:471542},{name:"访客数",value:18158}]},{name:"宁夏",value:[{name:"支付金额",value:112290},{name:"访客数",value:4870}]},{name:"青海",value:[{name:"支付金额",value:66695},{name:"访客数",value:2780}]},{name:"山东",value:[{name:"支付金额",value:2622393},{name:"访客数",value:109596}]},{name:"山西",value:[{name:"支付金额",value:620516},{name:"访客数",value:33375}]},{name:"陕西",value:[{name:"支付金额",value:881462},{name:"访客数",value:38842}]},{name:"上海",value:[{name:"支付金额",value:2359948},{name:"访客数",value:68829}]},{name:"四川",value:[{name:"支付金额",value:1772257},{name:"访客数",value:62467}]},{name:"天津",value:[{name:"支付金额",value:767996},{name:"访客数",value:22681}]},{name:"西藏",value:[{name:"支付金额",value:15957},{name:"访客数",value:962}]},{name:"新疆",value:[{name:"支付金额",value:321619},{name:"访客数",value:12374}]},{name:"云南",value:[{name:"支付金额",value:940737},{name:"访客数",value:31154}]},{name:"浙江",value:[{name:"支付金额",value:4802334},{name:"访客数",value:233131}]},{name:"重庆",value:[{name:"支付金额",value:706113},{name:"访客数",value:27925}]}];myChart.showLoading();var mapFeatures=echarts.getMap(mapName).geoJson.features;myChart.hideLoading(),mapFeatures.forEach(function(n){var a=n.properties.name;geoCoordMap[a]=n.properties.cp}),console.log(data),console.log(toolTipData);var max=3e5,min=1e3,maxSize4Pin=80,minSize4Pin=20,convertData=function(n){for(var a=[],e=0;e<n.length;e++){var l=geoCoordMap[n[e].name];l&&a.push({name:n[e].name,value:l.concat(n[e].value)})}return a};option={title:{text:name_title,subtext:subname,x:"center",textStyle:{color:nameColor,fontFamily:name_fontFamily,fontSize:name_fontSize},subtextStyle:{fontSize:subname_fontSize,fontFamily:name_fontFamily}},tooltip:{trigger:"item",formatter:function(n){if(typeof n.value[2]>"u"){for(var a="",e=0;e<toolTipData.length;e++)if(n.name==toolTipData[e].name){a+=toolTipData[e].name+":<br>";for(var l=0;l<toolTipData[e].value.length;l++)a+=toolTipData[e].value[l].name+":"+toolTipData[e].value[l].value+"<br>"}return console.log(a),a}else{for(var a="",e=0;e<toolTipData.length;e++)if(n.name==toolTipData[e].name){a+=toolTipData[e].name+":<br>";for(var l=0;l<toolTipData[e].value.length;l++)a+=toolTipData[e].value[l].name+":"+toolTipData[e].value[l].value+"<br>"}return console.log(a),a}}},visualMap:{show:!0,min:0,max:25e4,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{color:["#BC8F8F","#CD0000"]}},geo:{show:!0,map:mapName,label:{normal:{show:!1},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}}},series:[{name:"散点",type:"scatter",coordinateSystem:"geo",data:convertData(data),symbolSize:function(n){return n[2]/1e4},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#05C3F9"}}},{type:"map",map:mapName,geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!0},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data},{name:"点",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:function(n){var a=(maxSize4Pin-minSize4Pin)/(max-min),e=minSize4Pin-a*min;return e=maxSize4Pin-a*max,a*n[2]+e},label:{normal:{show:!0,textStyle:{color:"#fff",fontSize:9}}},itemStyle:{normal:{color:"#F62157"}},zlevel:6,data:convertData(data)},{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:convertData(data.sort(function(n,a){return a.value-n.value}).slice(0,5)),symbolSize:function(n){return n[2]/1e4},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"yellow",shadowBlur:10,shadowColor:"yellow"}},zlevel:1}]},myChart.setOption(option);