var uploadedDataURL="/asset/get/s/data-1588835086979-SBbbLHjMg.json";myChart.showLoading(),cityname=[],$.get(uploadedDataURL,function(a){myChart.hideLoading(),echarts.registerMap("chinacity",a);var e=echarts.getMap("chinacity").geoJson.features;e.forEach(function(n){var o=n.properties.name;cityname.push(o)}),myChart.setOption(option={title:{text:"高亮城市且只显示省份轮廓",left:"center"},visualMap:{show:!0,type:"piecewise",pieces:[{min:1e3,max:5e3},{min:500,max:1e3}],showLabel:!0,text:["good night"],calculable:!0,inRange:{color:["#1488CC","#2B32B2"]}},geo:[{z:2,show:!0,map:"chinacity",label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{borderColor:"rgba(255,255,255,0)",areaColor:"rgba(255,255,255,0)",borderWidth:1},regions:[{name:"深圳市",itemStyle:{borderColor:"red",borderWidth:2}},{name:"郑州市",itemStyle:{borderColor:"red",borderWidth:2}}],roam:!0},{z:1,show:!0,map:"china",label:{normal:{show:!1},emphasis:{show:!1}},regions:[{name:"深圳市",itemStyle:{borderColor:"red",borderWidth:2}},{name:"郑州市",itemStyle:{borderColor:"red",borderWidth:2}}],roam:!1}],toolbox:{show:!0,feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{pixelRatio:4}}},series:[{geoIndex:0,name:"总人口",type:"map",mapType:"chinacity",label:{normal:{show:!1}},roam:!0,data:[{name:"万州区",value:39},{name:"云阳县",value:18},{name:"开州区",value:16},{name:"江北区",value:12},{name:"忠县",value:12},{name:"垫江县",value:11},{name:"渝北区",value:11},{name:"石柱县",value:10},{name:"长寿区",value:10},{name:"两江新区",value:10},{name:"巫溪县",value:10},{name:"九龙坡区",value:9},{name:"璧山区",value:8},{name:"合川区",value:8},{name:"渝中区",value:7},{name:"巫山县",value:6},{name:"大渡口区",value:6},{name:"丰都县",value:5},{name:"奉节县",value:5},{name:"大足区",value:4},{name:"綦江区",value:4},{name:"江津区",value:3},{name:"南岸区",value:3},{name:"永川区",value:3},{name:"梁平区",value:2},{name:"铜梁区",value:2},{name:"潼南区",value:2},{name:"黔江区",value:2},{name:"荣昌区",value:2},{name:"沙坪坝区",value:2},{name:"涪陵区",value:1},{name:"秀山县",value:1},{name:"城口县",value:1},{name:"巴南区",value:1},{name:"武隆区",value:1},{name:"温州市",value:241},{name:"杭州市",value:5e3},{name:"台州市",value:95},{name:"宁波市",value:55},{name:"金华市",value:34},{name:"绍兴市",value:24},{name:"嘉兴市",value:18},{name:"乐东市",value:1}]}]})}),myChart.on("georoam",function(a){var e=myChart.getOption();a.zoom!=null&&a.zoom!=null&&(e.geo[1].zoom=e.geo[0].zoom),e.geo[1].center=e.geo[0].center,myChart.setOption({geo:e.geo})});