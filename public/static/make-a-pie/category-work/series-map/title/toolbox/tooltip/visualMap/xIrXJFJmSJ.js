var uploadedDataURL="/asset/get/s/data-1519188124693-rkro_O5vz.json";myChart.showLoading(),cityname=[],$.get(uploadedDataURL,function(a){myChart.hideLoading(),echarts.registerMap("chinacity",a);var e=echarts.getMap("chinacity").geoJson.features;console.log("==========mapFeatures=============="),console.log(e),e.forEach(function(n){var m=n.properties.name;cityname.push(m)}),console.log(cityname),myChart.setOption(option={title:{text:"到过的城市",left:"center"},visualMap:{show:!1,type:"piecewise",pieces:[{min:1e3,max:5e3},{min:500,max:1e3},{min:100,max:500},{min:20,max:100},{min:1,max:20}]},tooltip:{trigger:"item",formatter:"{b}"},toolbox:{show:!0,feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{pixelRatio:4}}},series:[{name:"",type:"map",mapType:"chinacity",label:{normal:{show:!1}},roam:!0,itemStyle:{normal:{borderColor:"#F0FFFF",areaColor:"#A9A9A9",borderWidth:.5,opacity:.3}},data:[{name:"平顶山市",value:1},{name:"郑州市",value:1},{name:"洛阳市",value:1},{name:"开封市",value:1},{name:"新乡市",value:1},{name:"漯河市",value:1},{name:"南阳市",value:1},{name:"驻马店市",value:1},{name:"信阳市",value:1},{name:"武汉市",value:1},{name:"襄樊市",value:1},{name:"十堰市",value:1},{name:"马鞍山市",value:1},{name:"阜阳市",value:1},{name:"青岛市",value:1},{name:"西安市",value:1},{name:"咸阳市",value:1},{name:"宝鸡市",value:1},{name:"廊坊市",value:1},{name:"兰州市",value:1},{name:"天水市",value:1},{name:"张掖市",value:1},{name:"酒泉市",value:1},{name:"嘉峪关市",value:1},{name:"平凉市",value:1},{name:"银川市",value:1},{name:"中卫市",value:1},{name:"上饶市",value:1},{name:"南京市",value:1},{name:"无锡市",value:1},{name:"苏州市",value:1},{name:"杭州市",value:1},{name:"舟山市",value:1},{name:"泉州市",value:1},{name:"厦门市",value:1},{name:"广州市",value:1},{name:"深圳市",value:1},{name:"珠海市",value:1},{name:"昌平区",value:1},{name:"海淀区",value:1},{name:"门头沟区",value:1},{name:"石景山区",value:1},{name:"房山区",value:1},{name:"大兴区",value:1},{name:"丰台区",value:1},{name:"西城区",value:1},{name:"东城区",value:1},{name:"朝阳区",value:1},{name:"通州区",value:1},{name:"顺义区",value:1},{name:"平谷区",value:1},{name:"宣武区",value:1},{name:"崇文区",value:1},{name:"密云县",value:1},{name:"怀柔区",value:1},{name:"延庆县",value:1},{name:"崇明县",value:1},{name:"浦东新区",value:1},{name:"南汇区",value:1},{name:"黄浦区",value:1},{name:"青浦区",value:1},{name:"虹口区",value:1},{name:"杨浦区",value:1},{name:"静安区",value:1},{name:"闸北区",value:1},{name:"长宁区",value:1},{name:"嘉定区",value:1},{name:"闵行区",value:1},{name:"松江区",value:1},{name:"金山区",value:1},{name:"奉贤区",value:1},{name:"宝山区",value:1},{name:"普陀区",value:1},{name:"徐汇区",value:1},{name:"卢湾区",value:1}]}]})});
