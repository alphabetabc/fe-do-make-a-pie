var uploadedDataURL="/asset/get/s/data-1519188124693-rkro_O5vz.json";myChart.showLoading(),cityname=[],$.get(uploadedDataURL,function(a){myChart.hideLoading(),echarts.registerMap("chinacity",a);var e=echarts.getMap("chinacity").geoJson.features;console.log("==========mapFeatures=============="),console.log(e),e.forEach(function(n){var m=n.properties.name;cityname.push(m)}),console.log(cityname),myChart.setOption(option={title:{text:"2021年11月6日全国新型冠状病毒本土现存确诊情况",left:"center"},visualMap:{show:!0,type:"piecewise",pieces:[{min:300,max:500},{min:20,max:300},{min:1,max:20}],showLabel:!0,right:"15%",bottom:"20%",text:["现存确诊病例"],calculable:!0,inRange:{color:["#1488CC","#cc5333"]}},tooltip:{trigger:"item",formatter:"{b}<br/>{c}(人)"},toolbox:{show:!0,feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{pixelRatio:4}}},series:[{name:"总人口",type:"map",mapType:"chinacity",label:{normal:{show:!1}},roam:!0,data:[{name:"黑河市",value:212},{name:"哈尔滨市",value:5},{name:"阿拉善盟",value:126},{name:"锡林郭勒盟",value:10},{name:"呼和浩特市",value:2},{name:"鄂尔多斯市",value:1},{name:"兰州市",value:73},{name:"天水市",value:38},{name:"张掖市",value:13},{name:"嘉峪关市",value:5},{name:"陇南市",value:2},{name:"香港特别行政区",value:112},{name:"德宏傣族景颇族自治州",value:8},{name:"石家庄市",value:62},{name:"邢台市",value:2},{name:"保定市",value:2},{name:"上海市",value:61},{name:"杭州市",value:1},{name:"银川市",value:29},{name:"吴忠市",value:11},{name:"中卫市",value:1},{name:"中山市",value:1},{name:"日照市",value:14},{name:"郑州市",value:15},{name:"开封市",value:5},{name:"商丘市",value:5},{name:"驻马店市",value:4},{name:"安阳市",value:1},{name:"周口市",value:1},{name:"许昌市",value:1},{name:"西安市",value:1},{name:"成都市",value:1},{name:"宜宾市",value:1},{name:"自贡市",value:1},{name:"长沙市",value:3},{name:"株洲市",value:1},{name:"常州市",value:3},{name:"两江区",value:1},{name:"九龙坡区",value:1},{name:"长寿区",value:1},{name:"巴南区",value:1},{name:"沙坪呗区",value:1},{name:"上饶市",value:6},{name:"九江市",value:1},{name:"遵义市",value:8},{name:"天门市",value:2},{name:"大连市",value:8},{name:"西宁市",value:11},{name:"海东市",value:1}]}]})});
