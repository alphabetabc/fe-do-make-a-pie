var uploadedDataURL="/asset/get/s/data-1482909892121-BJ3auk-Se.json";myChart.showLoading(),$.getJSON(uploadedDataURL,function(n){echarts.registerMap("jiangxi",n),myChart.hideLoading();var s={医院1:[117.121225,36.66466],医院2:[117.161225,36.78466],医院3:[115.480656,35.23375],医院4:[117.261225,36.78466]},o=[{name:"医院1",value:190},{name:"医院2",value:100},{name:"医院3",value:158},{name:"医院4",value:158}],i=480,m=9,u=100,f=20,r=function(e){for(var t=[],a=0;a<e.length;a++){var l=s[e[a].name];l&&t.push({name:e[a].name,value:l.concat(e[a].value)})}return t};option={backgroundColor:"#020933",title:{top:20,text:"医院经纬度-测试",subtext:"",x:"center",textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:function(e){}},legend:{orient:"vertical",y:"bottom",x:"right",data:["pm2.5"],textStyle:{color:"#fff"}},visualMap:{show:!1,min:0,max:500,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{}},geo:{show:!0,map:"jiangxi",label:{normal:{show:!1},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"transparent",borderColor:"#3fdaff",borderWidth:2,shadowColor:"rgba(63, 218, 255, 0.5)",shadowBlur:30},emphasis:{areaColor:"#2B91B7"}}},series:[{name:"light",type:"scatter",coordinateSystem:"geo",data:r(o),symbolSize:function(e){return e[2]/10},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#F4E925"}}},{type:"map",map:"jiangxi",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!1},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#FFFFFF"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:o},{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:r(o.sort(function(e,t){return t.value-e.value}).slice(0,5)),symbolSize:function(e){return e[2]/10},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#F4E925",shadowBlur:10,shadowColor:"#05C3F9"}},zlevel:1}]},myChart.setOption(option)});
