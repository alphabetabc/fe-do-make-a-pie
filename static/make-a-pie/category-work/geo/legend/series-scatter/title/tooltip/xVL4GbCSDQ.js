var uploadedDataURL="/asset/get/s/data-1572199013532-gAXEhSWz.json";myChart.showLoading(),$.getJSON(uploadedDataURL,function(o){echarts.registerMap("jiangxi",o),myChart.hideLoading();var l={成都市:[104.08153,30.655823],绵阳市:[104.68556,31.473663],自贡市:[104.784445,29.345585],攀枝花市:[101.725544,26.588034],泸州市:[105.448526,28.877668],德阳市:[104.404417,31.133116],广元市:[105.850419,32.441617],遂宁市:[105.599424,30.539097],内江市:[105.064591,29.585886],乐山市:[103.77254,29.55794],资阳市:[104.634437,30.134956],宜宾市:[104.649403,28.758007],南充市:[106.117504,30.843783],达州市:[107.474592,31.214307],雅安市:[103.049539,30.016792],阿坝藏族羌族自治州:[102.231186,31.905609],甘孜藏族自治州:[101.968545,30.055278],凉山彝族自治州:[102.273502,27.887752],广安市:[106.639554,30.461747],巴中市:[106.751582,31.872889],眉山市:[103.856567,30.082527]},r=[{name:"成都市",value:390},{name:"绵阳市",value:158},{name:"自贡市",value:252},{name:"攀枝花市",value:99},{name:"泸州市",value:189},{name:"德阳市",value:52},{name:"广元市",value:158},{name:"遂宁市",value:152},{name:"内江市",value:189},{name:"乐山市",value:160},{name:"资阳市",value:80},{name:"宜宾市",value:180},{name:"南充市",value:190},{name:"达州市",value:290},{name:"阿坝藏族羌族自治州",value:190},{name:"甘孜藏族自治州",value:190},{name:"凉山彝族自治州",value:290},{name:"广安市",value:290},{name:"巴中市",value:290},{name:"眉山市",value:290}],m=480,i=9,u=100,v=20,s=function(e){for(var t=[],a=0;a<e.length;a++){var n=l[e[a].name];n&&t.push({name:e[a].name,value:n.concat(e[a].value)})}return t};option={backgroundColor:"#fff",title:{top:20,text:"四川省",subtext:"",x:"center",textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:function(e){return typeof e.value[2]>"u"?e.name+" : "+e.value:e.name+" : "+e.value[2]}},legend:{orient:"vertical",y:"bottom",x:"right",data:["pm2.5"],textStyle:{color:"#fff"}},geo:{show:!0,map:"jiangxi",label:{normal:{show:!1},emphasis:{show:!1}},roam:!1,itemStyle:{normal:{areaColor:"transparent",borderColor:"#000",borderWidth:2},emphasis:{areaColor:"#2B91B7"}}},series:[{name:"light",type:"scatter",coordinateSystem:"geo",symbolSize:function(e){return e[2]/10},label:{normal:{formatter:"{b}",position:"right",show:!1},emphasis:{show:!1}},itemStyle:{normal:{color:"#F4E925"}}}]},myChart.setOption(option)});