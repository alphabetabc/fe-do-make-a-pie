var name_title="2020年云梦山游客来源全国统计",subname="数据来自奇镜科技",nameColor=" rgb(55, 75, 113)",name_fontFamily="等线",subname_fontSize=15,name_fontSize=18,mapName="china",data=[{name:"河北",value:1986},{name:"山西",value:213},{name:"山东",value:133},{name:"河南",value:71},{name:"天津",value:40},{name:"北京",value:25},{name:"江苏",value:13},{name:"广东",value:10},{name:"移动",value:7},{name:"陕西",value:6},{name:"上海",value:6},{name:"重庆",value:4},{name:"四川",value:4},{name:"广西",value:3},{name:"云南",value:3},{name:"浙江",value:3},{name:"安徽",value:3},{name:"湖北",value:2},{name:"江西",value:2},{name:"青海",value:2},{name:"内蒙古",value:2},{name:"甘肃",value:1},{name:"福建",value:1},{name:"黑龙江",value:1},{name:"湖南",value:1},{name:"吉林",value:1},{name:"辽宁",value:1}],toolTipData=[{name:"河北",value:1986},{name:"山西",value:213},{name:"山东",value:133},{name:"河南",value:71},{name:"天津",value:40},{name:"北京",value:25},{name:"江苏",value:13},{name:"广东",value:10},{name:"移动",value:7},{name:"陕西",value:6},{name:"重庆",value:4},{name:"四川",value:4},{name:"广西",value:3},{name:"云南",value:3},{name:"浙江",value:3},{name:"安徽",value:3},{name:"湖北",value:2},{name:"江西",value:2},{name:"青海",value:2},{name:"内蒙古",value:2},{name:"甘肃",value:1},{name:"福建",value:1},{name:"黑龙江",value:1},{name:"湖南",value:1},{name:"吉林",value:1},{name:"辽宁",value:1}],geoCoordMap={};myChart.showLoading();var mapFeatures=echarts.getMap(mapName).geoJson.features;myChart.hideLoading(),mapFeatures.forEach(function(a){var n=a.properties.name;geoCoordMap[n]=a.properties.cp});var max=6e3,min=9,maxSize4Pin=35,minSize4Pin=30,convertData=function(a){for(var n=[],e=0;e<a.length;e++){var l=geoCoordMap[a[e].name];l&&n.push({name:a[e].name,value:l.concat(a[e].value)})}return n};option={title:{text:name_title,subtext:subname,x:"center",textStyle:{color:nameColor,fontFamily:name_fontFamily,fontSize:name_fontSize},subtextStyle:{fontSize:subname_fontSize,fontFamily:name_fontFamily}},tooltip:{trigger:"item",formatter:function(a){if(typeof a.value[2]>"u"){for(var n="",e=0;e<toolTipData.length;e++)a.name==toolTipData[e].name&&(n+=toolTipData[e].name+":"+toolTipData[e].value+"人");return n}else{for(var n="",e=0;e<toolTipData.length;e++)a.name==toolTipData[e].name&&(n+=toolTipData[e].name+":"+toolTipData[e].value+"人");return n}}},visualMap:[{show:!0,min:1,max:300,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[0],inRange:{color:["#74add1","#ffd768","#ff8c71","#ff5428","#7f1100"]}},{show:!0,min:1,max:300,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{color:["#0b9df0","#74add1","#ffd768","#ff8c71","#ff5428"]}}],toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{saveAsImage:{}}},geo:{show:!0,map:mapName,label:{normal:{show:!0},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#ffffff",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}}},series:[{type:"map",map:mapName,geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!0},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data},{name:"点",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:function(a){var n=(maxSize4Pin-minSize4Pin)/(max-min),e=minSize4Pin-n*min;return e=maxSize4Pin-n*max,n*a[2]+e},label:{normal:{formatter:function(a){return a.data.value[2]},show:!0,textStyle:{color:"#fff",fontSize:9}}},itemStyle:{normal:{color:"#F62157"}},zlevel:6,data:convertData(data)}]},myChart.setOption(option);