var uploadedDataURL="/asset/get/s/data-1584778784899-WQBd2AfSc.json";myChart.showLoading(),$.getJSON(uploadedDataURL,function(l){echarts.registerMap("nanjing",l),myChart.hideLoading();var i={鼓楼区:[118.77,32.07],玄武区:[118.8,32.05],秦淮区:[118.8,32.02],江宁区:[118.85,31.95],栖霞区:[118.88,32.12],雨花台区:[118.77,32],浦口区:[118.62,32.05],高淳区:[118.88,31.33],六合区:[118.83,32.35],溧水区:[119.02,31.65],建邺区:[118.75,32.03]},o=[{name:"鼓楼区",value:149},{name:"玄武区",value:107},{name:"秦淮区",value:85},{name:"江宁区",value:63},{name:"栖霞区",value:36},{name:"雨花台区",value:32},{name:"浦口区",value:34},{name:"高淳区",value:30},{name:"六合区",value:19},{name:"溧水区",value:16},{name:"建邺区",value:9}],m=200,s=9,u=0,f=20,r=function(e){for(var t=[],a=0;a<e.length;a++){var n=i[e[a].name];n&&t.push({name:e[a].name,value:n.concat(e[a].value)})}return t};option={backgroundColor:"#020933",title:{top:20,text:"南京市各区文物保护单位分布",subtext:"",x:"center",textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:function(e){return typeof e.value[2]>"u"?e.name+" : "+e.value:e.name+" : "+e.value[2]}},legend:{orient:"vertical",y:"bottom",x:"right",data:["pm2.5"],textStyle:{color:"#fff"}},visualMap:{show:!1,min:0,max:500,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{}},geo:{show:!0,map:"nanjing",label:{normal:{show:!1},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"transparent",borderColor:"#3fdaff",borderWidth:2,shadowColor:"rgba(63, 218, 255, 0.5)",shadowBlur:50},emphasis:{areaColor:"#2B91B7"}}},series:[{name:"light",type:"scatter",coordinateSystem:"geo",data:r(o),symbolSize:function(e){return e[2]/10},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#F4E925"}}},{type:"map",map:"nanjing",geoIndex:0,aspectScale:.5,showLegendSymbol:!1,label:{normal:{show:!1},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#FFFFFF"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:o},{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:r(o.sort(function(e,t){return t.value-e.value}).slice(0,5)),symbolSize:function(e){return e[2]/10},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#F4E925",shadowBlur:10,shadowColor:"#05C3F9"}},zlevel:1}]},myChart.setOption(option)});