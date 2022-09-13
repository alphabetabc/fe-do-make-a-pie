var name_title="2019年全国省市GDP",subname=`数据来源：百度城市GDP贴吧
，
单位：(亿元)`,nameColor=" #663366",name_fontFamily="等线",subname_fontSize=15,name_fontSize=26,mapName="china",data=[{name:"北京",value:35371.3},{name:"天津",value:14104.28},{name:"河北",value:35104.5},{name:"山西",value:17026.68},{name:"内蒙古",value:17212.5},{name:"辽宁",value:24909.5},{name:"吉林",value:11726.8},{name:"黑龙江",value:13612.7},{name:"上海",value:38155.32},{name:"江苏",value:99631.52},{name:"浙江",value:62352},{name:"安徽",value:37114},{name:"福建",value:42395},{name:"江西",value:34757.5},{name:"山东",value:71067.5},{name:"河南",value:54259.2},{name:"湖北",value:45828.31},{name:"湖南",value:39752.12},{name:"重庆",value:23605.77},{name:"四川",value:46615.82},{name:"贵州",value:16769.34},{name:"云南",value:23223.75},{name:"西藏",value:1697.82},{name:"陕西",value:25793.17},{name:"甘肃",value:8718.3},{name:"青海",value:2965.95},{name:"宁夏",value:3748.48},{name:"新疆",value:13597.11},{name:"广东",value:107671.07},{name:"广西",value:21237.14},{name:"海南",value:5308.94}],geoCoordMap={},toolTipData=[{name:"北京",value:35371.3},{name:"天津",value:14104.28},{name:"河北",value:35104.5},{name:"山西",value:17026.68},{name:"内蒙古",value:17212.5},{name:"辽宁",value:24909.5},{name:"吉林",value:11726.8},{name:"黑龙江",value:13612.7},{name:"上海",value:38155.32},{name:"江苏",value:99631.52},{name:"浙江",value:62352},{name:"安徽",value:37114},{name:"福建",value:42395},{name:"江西",value:34757.5},{name:"山东",value:71067.5},{name:"河南",value:54259.2},{name:"湖北",value:45828.31},{name:"湖南",value:39752.12},{name:"重庆",value:23605.77},{name:"四川",value:46615.82},{name:"贵州",value:16769.34},{name:"云南",value:23223.75},{name:"西藏",value:1697.82},{name:"陕西",value:25793.17},{name:"甘肃",value:8718.3},{name:"青海",value:2965.95},{name:"宁夏",value:3748.48},{name:"新疆",value:13597.11},{name:"广东",value:107671.07},{name:"广西",value:21237.14},{name:"海南",value:5308.94}];myChart.showLoading();var mapFeatures=echarts.getMap(mapName).geoJson.features;myChart.hideLoading(),mapFeatures.forEach(function(e){var a=e.properties.name;geoCoordMap[a]=e.properties.cp}),console.log(data),console.log(toolTipData);var max=12e3,min=10,maxSize4Pin=8,minSize4Pin=3,convertData=function(e){for(var a=[],n=0;n<e.length;n++){var l=geoCoordMap[e[n].name];l&&a.push({name:e[n].name,value:l.concat(e[n].value)})}return a};option={title:{text:name_title,subtext:subname,x:"center",textStyle:{color:nameColor,fontFamily:name_fontFamily,fontSize:name_fontSize},subtextStyle:{fontSize:subname_fontSize,fontFamily:name_fontFamily}},tooltip:{trigger:"item",formatter:function(e){return typeof e.value[2]>"u"?e.name+" : "+e.value:e.name+" : "+e.value[2]}},visualMap:{show:!0,min:1500,max:12e4,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{color:["#600060","#FFFFFF"]}},geo:{show:!0,map:mapName,label:{normal:{show:!1},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#CC99CC"}}},series:[{name:"散点",type:"scatter",coordinateSystem:"geo",data:convertData(data),symbolSize:function(e){return e[2]/4e3},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#FF9900"}}},{type:"map",map:mapName,geoIndex:0,aspectScale:.75,showLegendSymbol:!1,encode:{value:2},label:{normal:{show:!0},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#DD78DD"}},animation:!1,data},{name:"点",type:"scatter",coordinateSystem:"geo",symbol:"pin",encode:{value:2},symbolSize:function(e){var a=(maxSize4Pin-minSize4Pin)/(max-min),n=minSize4Pin-a*min;return n=maxSize4Pin-a*max,a*e[2]+n},label:{normal:{show:!0,textStyle:{color:"#fff",fontSize:9}}},itemStyle:{normal:{color:"#FF0000"}},zlevel:6,data:convertData(data)},{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:convertData(data.sort(function(e,a){return a.value-e.value}).slice(0,5)),symbolSize:function(e){return e[2]/4e3},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"yellow",shadowBlur:10,shadowColor:"yellow"}},zlevel:1}]},myChart.setOption(option);