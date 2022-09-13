var mapName="china",data=[{name:"杭州",pName:"浙江",value:[120.219375,30.259244,125]},{name:"宁波",pName:"浙江",value:[121.579006,29.885259,55]},{name:"合肥",pName:"安徽",value:[117.282699,31.866942,36]},{name:"黄山市",pName:"安徽",value:[118.29357,29.734435,125]},{name:"南京",pName:"江苏",value:[118.778074,32.057236,78]},{name:"苏州",pName:"江苏",value:[120.619907,31.317987,69]},{name:"成都",pName:"四川",value:[104.067923,30.679943,100]},{name:"广东",pName:"广东",value:[113.394818,23.408004,36]},{name:"深圳",pName:"广东",value:[114.025974,22.546054,58]}],provinces=[{name:"北京"},{name:"天津"},{name:"河北"},{name:"山西"},{name:"内蒙古"},{name:"辽宁"},{name:"吉林"},{name:"黑龙江"},{name:"上海"},{name:"江苏"},{name:"浙江"},{name:"安徽"},{name:"福建"},{name:"江西"},{name:"山东"},{name:"河南"},{name:"湖北"},{name:"湖南"},{name:"重庆"},{name:"四川"},{name:"贵州"},{name:"云南"},{name:"西藏"},{name:"陕西"},{name:"甘肃"},{name:"青海"},{name:"宁夏"},{name:"新疆"},{name:"广东"},{name:"广西"},{name:"海南"}];provinces.forEach(e=>{e.value=data.filter(a=>a.pName===e.name).reduce((a,m)=>m.value[2]+a,0)}),provinces.sort((e,a)=>a.value-e.value),console.log(provinces);var colors=["#f15a24","#f47b28","#f89d2c","#fcaa2f","#fccc21"].reverse(),max=provinces[0].value,min=0;option={title:{text:"风险城市分布图",x:"center",textStyle:{color:"#999",fontSize:24}},tooltip:{trigger:"item",formatter:function(e){for(var a="",m=0;m<data.length;m++)e.name==data[m].name&&(a+=data[m].name+" : "+data[m].value[2]);return a}},visualMap:{show:!0,min:0,max,text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{color:["#ddfdfe","#2686e2"]}},geo:{show:!0,map:mapName,label:{normal:{show:!1},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{borderColor:"#3B5077"},emphasis:{areaColor:"pink"}}},series:[{name:"散点",type:"scatter",coordinateSystem:"geo",data,symbolSize:function(e){return e[2]/10},label:{normal:{formatter:"{b}",position:"right",color:"#000",show:!0},emphasis:{show:!1}},itemStyle:{normal:{color:"yellow"}}},{type:"map",map:mapName,geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!0},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},data:provinces},{name:"Top 5",silent:!0,type:"effectScatter",coordinateSystem:"geo",data:data.slice(0,5),symbolSize:function(e){return e[2]/10},rippleEffect:{brushType:"stroke"},itemStyle:{normal:{color:function(e){return colors[e.dataIndex]}}}}]},myChart.setOption(option);