var zhengzhou="/asset/get/s/data-1620445221286-11-rx7NZ8.json";myChart.showLoading(),$.getJSON(zhengzhou,function(n){echarts.registerMap("china",n),myChart.hideLoading();var m={中原区:[113.546928,34.780838],二七区:[113.594642,34.678253],管城区:[113.75524,34.696862],金水区:[113.743791,34.810784],上街区:[113.284108,34.788622],惠济区:[113.621348,34.891176],中牟县:[114.004302,34.713431],巩义市:[113.033328,34.697267],荥阳市:[113.358941,34.796495],新密市:[113.433255,34.508082],新郑市:[113.729471,34.453334],登封市:[113.035049,34.412311]},o=[{name:"中原区",value:2e3},{name:"二七区",value:1e3},{name:"管城区",value:1e3},{name:"金水区",value:1e3},{name:"上街区",value:1e3},{name:"惠济区",value:1e3},{name:"中牟县",value:1e3},{name:"巩义市",value:1e3},{name:"荥阳市",value:1e3},{name:"新密市",value:1e3},{name:"新郑市",value:1e3},{name:"登封市",value:1e3}],s=480,i=9,f=100,u=20,t=function(e){for(var r=[],a=0;a<e.length;a++){var l=m[e[a].name];l&&r.push({name:e[a].name,value:l.concat(e[a].value)})}return r};option={backgroundColor:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#0f378f"},{offset:1,color:"#00091a"}],globalCoord:!1},title:{top:20,text:"延时课堂区域分布 - 郑州市",subtext:"",x:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item",formatter:function(e){return typeof e.value[2]>"u"?e.name+" : "+e.value:e.name+" : "+e.value[2]}},legend:{orient:"vertical",y:"bottom",x:"right",data:["pm2.5"],textStyle:{color:"#fff"}},visualMap:{show:!1,min:0,max:500,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{}},geo:{map:"china",show:!0,roam:!0,center:[113.594642,34.678253],zoom:20,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#3a7fd5",borderColor:"#0a53e9",shadowColor:"#092f8f",shadowBlur:20},emphasis:{areaColor:"#0a2dae"}}},series:[{symbolSize:5,label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#fff"}},name:"light",type:"scatter",coordinateSystem:"geo",data:t(o)},{type:"map",map:"china",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!1},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#FFFFFF"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:o},{name:"Top 5",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:[50,50],label:{normal:{show:!0,textStyle:{color:"transparent",fontSize:9},formatter(e){return e.data.value[2]}}},itemStyle:{normal:{color:"transparent"}},data:t(o),showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,zlevel:1}]},myChart.setOption(option)});