var uploadedDataURL="/asset/get/s/data-1562809498447-cNgQ9Iswh.json",geoCoordMap={石家庄市第二医院:[114.47697,38.052536],革新:[114.481869,38.056937],赵陵铺镇卫生院:[114.489795,38.101993],大郭镇卫生院:[114.41203,38.085278],杜北乡卫生院:[114.444291,38.132607],西三庄乡卫生院:[114.480454,38.089162],东焦:[114.47697,38.059882],宁安:[114.487631,38.057334],学府路社区卫生服务站:[114.479551,38.1448]},mydata=[{name:"石家庄市第二医院",value:"35"},{name:"革新",value:"23"},{name:"赵陵铺镇卫生院",value:"4"},{name:"大郭镇卫生院",value:"5"},{name:"杜北乡卫生院",value:"7"},{name:"西三庄乡卫生院",value:"5"},{name:"东焦",value:"4"},{name:"宁安",value:"2"},{name:"学府路社区卫生服务站",value:"4"}],convertData=function(o){for(var e=[],a=0;a<o.length;a++){var r=geoCoordMap[o[a].name];r&&e.push({name:o[a].name,value:r.concat(o[a].value)})}return e};myChart.showLoading(),$.ajax({url:uploadedDataURL,async:!1,dataType:"json",success:function(o){echarts.registerMap("xhq",o),myChart.hideLoading(),option={backgroundColor:"#151b53",tooltip:{formatter:function(e){return typeof e.value[2]>"u"?e.name:"就诊人数<br>"+e.name+":"+e.value[2]+"人"}},geo:{map:"xhq",show:!0,itemStyle:{normal:{areaColor:"#172260",borderColor:"#216ca7",borderWidth:1,shadowColor:"#216ca7",shadowBlur:1}},zoom:1.2},series:[{type:"map",map:"xhq",geoIndex:1,aspectScale:.75,zoom:1.2,label:{show:!0,textStyle:{fontSize:16,color:"#216ca7"},emphasis:{show:!0,textStyle:{fontSize:30,color:"#216ca7"}}},roam:!1,itemStyle:{normal:{areaColor:"transparent",borderColor:"transparent",borderWidth:1},emphasis:{areaColor:"#C9E6FF",shadowColor:"#5AB2FE",shadowBlur:20}},data:convertData(mydata)},{name:"就诊人数",type:"effectScatter",coordinateSystem:"geo",showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,symbolSize:function(e){var a=e[2];return a<10?10:a>30?30:a},label:{normal:{formatter:"{b}",position:"bottom",show:!0,textStyle:{fontSize:12}}},itemStyle:{normal:{color:"#216ca7"}},zlevel:6,data:convertData(mydata)}]},myChart.setOption(option)}});
