var uploadedDataURL="/asset/get/s/data-1518338805373-S1Temta8G.json";myChart.showLoading(),$.getJSON(uploadedDataURL,function(u){echarts.registerMap("nanchang",u),myChart.hideLoading();var c={南昌县:[115.93,28.55],东湖区:[115.9,28.68],西湖区:[115.87,28.67],青云谱区:[115.92,28.63],湾里区:[115.73,28.72],青山湖区:[115.95,28.68],新建县:[115.82,28.7],安义县:[115.55,28.85],进贤县:[116.27,28.37]},o=[{name:"南昌县",value:199},{name:"东湖区",value:39},{name:"西湖区",value:152},{name:"青云谱区",value:299},{name:"湾里区",value:89},{name:"青山湖区",value:52},{name:"新建县",value:9},{name:"安义县",value:352},{name:"进贤县",value:99}],l=480,n=9,m=100,i=20,r=function(e){for(var a=[],t=0;t<e.length;t++){var s=c[e[t].name];s&&a.push({name:e[t].name,value:s.concat(e[t].value)})}return a};option={title:{text:"数据分析 - 南昌市",subtext:"",x:"center",textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:function(e){return typeof e.value[2]>"u"?e.name+" : "+e.value:e.name+" : "+e.value[2]}},legend:{orient:"vertical",y:"bottom",x:"right",data:["credit_pm2.5"],textStyle:{color:"#fff"}},visualMap:{show:!1,min:0,max:500,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{color:["#1488CC","#2B32B2"]}},geo:{show:!0,map:"nanchang",label:{normal:{show:!1},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}}},series:[{name:"credit_pm2.5",type:"scatter",coordinateSystem:"geo",data:r(o),symbolSize:function(e){return e[2]/10},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#05C3F9"}}},{type:"map",map:"tianjin",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!1},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:o},{name:"点",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:function(e){var a=(m-i)/(l-n),t=i-a*n;return t=m-a*l,a*e[2]+t},label:{normal:{show:!0,textStyle:{color:"#fff",fontSize:9}}},itemStyle:{normal:{color:"#F62157"}},zlevel:6,data:r(o)},{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:r(o.sort(function(e,a){return a.value-e.value}).slice(0,5)),symbolSize:function(e){return e[2]/10},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#05C3F9",shadowBlur:10,shadowColor:"#05C3F9"}},zlevel:1}]},myChart.setOption(option)});
