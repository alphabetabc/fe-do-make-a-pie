var uploadedDataURL="/asset/get/s/data-1519279347346-BkslpCjwf.json";myChart.showLoading(),$.getJSON(uploadedDataURL,function(n){echarts.registerMap("jiangxi",n),myChart.hideLoading();var s={省委:[117.37,31.786],合肥市:[117.37,31.386],六安市:[116.27,31.786],滁州市:[118.07,32.486],蚌埠市:[117.27,33.086],淮南市:[116.67,32.786],宿州市:[117.77,33.486],淮北市:[116.67,33.686],亳州市:[116.27,33.386],阜阳市:[115.57,32.986],安庆市:[116.47,30.486],池州市:[117.47,30.386],黄山市:[118.17,29.886],宣城市:[119.27,30.916],芜湖市:[118.17,31.186],马鞍山市:[118.47,31.616],铜陵市:[117.87,30.956]},t={normal:[{fromName:"省委",toName:"合肥市",coords:[[117.37,31.786],[117.37,31.386]]},{fromName:"省委",toName:"六安市",coords:[[117.37,31.786],[116.27,31.786]]},{fromName:"省委",toName:"滁州市",coords:[[117.37,31.786],[118.07,32.486],[117.37,31.786]]},{fromName:"省委",toName:"蚌埠市",coords:[[117.37,31.786],[117.27,33.086],[117.37,31.786]]},{fromName:"省委",toName:"淮南市",coords:[[117.37,31.786],[116.67,32.786],[117.37,31.786]]},{fromName:"省委",toName:"宿州市",coords:[[117.37,31.786],[117.77,33.486],[117.37,31.786]]},{fromName:"省委",toName:"淮北市",coords:[[117.37,31.786],[116.67,33.686],[117.37,31.786]]},{fromName:"省委",toName:"亳州市",coords:[[117.37,31.786],[116.27,33.386],[117.37,31.786]]},{fromName:"省委",toName:"阜阳市",coords:[[117.37,31.786],[115.57,32.986],[117.37,31.786]]},{fromName:"省委",toName:"池州市",coords:[[117.37,31.786],[117.47,30.386],[117.37,31.786]]},{fromName:"省委",toName:"黄山市",coords:[[117.37,31.786],[118.17,29.886],[117.37,31.786]]},{fromName:"省委",toName:"宣城市",coords:[[117.37,31.786],[119.27,30.916],[117.37,31.786]]},{fromName:"省委",toName:"芜湖市",coords:[[117.37,31.786],[118.17,31.186],[117.37,31.786]]},{fromName:"省委",toName:"安庆市",coords:[[117.37,31.786],[116.47,30.486],[117.37,31.786]]},{fromName:"省委",toName:"马鞍山市",coords:[[117.37,31.786],[118.47,31.616],[117.37,31.786]]},{fromName:"省委",toName:"铜陵市",coords:[[117.37,31.786],[117.87,30.956],[117.37,31.786]]}],warning:[]},r=[{name:"省委",value:190},{name:"合肥市",value:190},{name:"六安市",value:190},{name:"滁州市",value:190},{name:"蚌埠市",value:190},{name:"淮南市",value:90},{name:"宿州市",value:120},{name:"淮北市",value:120},{name:"亳州市",value:120},{name:"阜阳市",value:120},{name:"安庆市",value:190},{name:"池州市",value:190},{name:"黄山市",value:190},{name:"宣城市",value:190},{name:"芜湖市",value:190},{name:"马鞍山市",value:190},{name:"铜陵市",value:90}],i=480,c=9,f=100,u=20,m=function(e){for(var a=[],o=0;o<e.length;o++){var l=s[e[o].name];l&&a.push({name:e[o].name,value:l.concat(e[o].value)})}return a};option={backgroundColor:"#091c3d",title:{top:20,text:"",subtext:"",x:"center",textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:function(e){return typeof e.value[2]>"u"?e.name+" : "+e.value:e.name+" : "+e.value[2]}},legend:{orient:"vertical",y:"bottom",x:"right",data:["pm2.5"],textStyle:{color:"#fff"}},visualMap:{show:!1,min:0,max:500,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{}},geo:{show:!0,map:"jiangxi",label:{normal:{show:!1},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"transparent",borderColor:"#3fdaff",borderWidth:2,shadowColor:"rgba(63, 218, 255, 0.5)",shadowBlur:30},emphasis:{areaColor:"#2B91B7"}}},series:[{name:"light",type:"scatter",coordinateSystem:"geo",data:m(r),symbolSize:function(e){return e[2]/10},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#F4E925"}}},{type:"map",map:"jiangxi",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!1},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#FFFFFF"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:r},{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:m(r.sort(function(e,a){return a.value-e.value}).slice(0,5)),symbolSize:function(e){return e[2]/10},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#F4E925",shadowBlur:10,shadowColor:"#05C3F9"}},zlevel:1},{name:"线路",type:"lines",coordinateSystem:"geo",zlevel:2,large:!0,effect:{show:!0,constantSpeed:30,symbol:"arrow",symbolSize:0,trailLength:0},lineStyle:{normal:{color:"#0fff17",width:2,opacity:1,curveness:.15}},data:t.normal},{name:"线路",type:"lines",coordinateSystem:"geo",zlevel:2,large:!0,effect:{show:!0,constantSpeed:30,symbol:"arrow",symbolSize:10,trailLength:0},lineStyle:{normal:{color:"rgb(255, 0, 0)",width:2,opacity:1,curveness:.15}},data:t.warning}]},myChart.setOption(option)});
