var CAINIAO_ICON="image://asset/get/s/data-1629685569572-YtBFDUfHU.PNG",MTYX_ICON="image://asset/get/s/data-1629684059923-ByF-BIHjt.jpg",DDMC_ICON="image://asset/get/s/data-1629684067163-l4_mRuguO.jpg",HEMA_ICON="image://asset/get/s/data-1629618244158-ID0IalaG6.jpg",seriesData=[{name:"芙蓉区",value:1},{name:"望城区",value:1},{name:"开福区",value:1},{name:"岳麓区",value:1},{name:"天心区",value:1},{name:"雨花区",value:1}],CAINIAO_ARR=[{name:"菜鸟长沙共享仓",value:[112.847458,28.240797]}],HEMA_ARR=[{name:"盒马集市",value:[113.029763,28.14731]}],MTYX_ARR=[{name:"美团优选",value:[112.92759,28.333358]}],DDMC_ARR=[{name:"多多买菜",value:[112.938814,28.228209]}],pathData=[{coords:[[112.847458,28.240797],[113.029763,28.14731]]},{coords:[[112.847458,28.240797],[112.92759,28.333358]]},{coords:[[112.847458,28.240797],[112.938814,28.228209]]}];$.getJSON("/asset/get/s/data-1629445801190-KECOiZ63g.json",null,function(o){echarts.registerMap("长沙市",o),option={backgroundColor:"#0B1C51",tooltip:{trigger:"item",formatter:function(e){return e.name}},geo:{show:!0,map:"长沙市",label:{normal:{show:!0,color:"#0B1C51"},emphasis:{show:!1}},zoom:1.2,roam:!0,itemStyle:{normal:{areaColor:"#0B1C51",borderColor:"#1F4E79",borderWidth:2},emphasis:{areaColor:"#52B3D6"}}},legend:{orient:"horizontal",id:1,y:"top",x:"left",itemWidth:20,data:[{name:"CAINIAO",icon:CAINIAO_ICON},{name:"MTYX",icon:MTYX_ICON},{name:"DDMC",icon:DDMC_ICON},{name:"HEMA",icon:HEMA_ICON}],textStyle:{color:"#FFFFFF",size:20}},visualMap:[{min:0,max:1,seriesIndex:0,show:!1,inRange:{color:["#ffffff","white"]},textStyle:{color:"#F7F7F7",size:20},formatter:function(e){return e.toFixed(1)}}],series:[{type:"map",geoIndex:0,data:seriesData},{type:"effectScatter",coordinateSystem:"geo",zlevel:20,rippleEffect:{period:4,brushType:"stroke",scale:10},symbol:"circle",symbolSize:function(e){return 10},itemStyle:{normal:{show:!1,color:"red"}},data:HEMA_ARR},{name:"HEMA",type:"scatter",coordinateSystem:"geo",data:HEMA_ARR,symbol:HEMA_ICON,symbolSize:function(e){return 20},label:{normal:{show:!1,formatter:function(e){return e.name},position:"right",color:"#69A4D9",fontSize:"8"},emphasis:{show:!1}},itemStyle:{normal:{color:"#4bbbb2",borderWidth:2,borderColor:"#b4dccd"}}},{name:"CAINIAO",type:"scatter",coordinateSystem:"geo",data:CAINIAO_ARR,symbol:CAINIAO_ICON,symbolSize:function(e){return 20},label:{normal:{show:!1,formatter:function(e){return e.name},position:"right",color:"#69A4D9",fontSize:"8"},emphasis:{show:!1}},itemStyle:{normal:{color:"#4bbbb2",borderWidth:2,borderColor:"#b4dccd"}}},{name:"MTYX",type:"scatter",coordinateSystem:"geo",data:MTYX_ARR,symbol:MTYX_ICON,symbolSize:function(e){return 30},label:{normal:{show:!1,formatter:function(e){return e.name},position:"right",color:"#69A4D9",fontSize:"8"},emphasis:{show:!1}},itemStyle:{normal:{color:"#4bbbb2",borderWidth:2,borderColor:"#b4dccd"}}},{name:"DDMC",type:"scatter",coordinateSystem:"geo",data:DDMC_ARR,symbol:DDMC_ICON,symbolSize:function(e){return 25},label:{normal:{show:!1,formatter:function(e){return e.name},position:"right",color:"#69A4D9",fontSize:"8"},emphasis:{show:!1}},itemStyle:{normal:{color:"#4bbbb2",borderWidth:2,borderColor:"#b4dccd"}}}]},myChart.setOption(option)});
