var uploadedDataURL="/asset/get/s/data-1594281065688-80dQTMwuL.json";$.getJSON(uploadedDataURL,function(a){echarts.registerMap("china",a);var e=[{name:"澳门",value:10},{name:"香港",value:11},{name:"台湾省",value:10},{name:"新疆维吾尔自治区",value:106},{name:"宁夏回族自治区",value:80},{name:"青海省",value:64},{name:"甘肃省",value:114},{name:"陕西省",value:173},{name:"西藏自治区",value:24},{name:"云南省",value:117},{name:"贵州省",value:103},{name:"四川省",value:238},{name:"重庆市",value:141},{name:"海南省",value:92},{name:"广西壮族自治区",value:123},{name:"广东省",value:293},{name:"湖南省",value:165},{name:"湖北省",value:195},{name:"河南省",value:235},{name:"山东省",value:361},{name:"江西省",value:149},{name:"福建省",value:165},{name:"安徽省",value:178},{name:"浙江省",value:251},{name:"江苏省",value:242},{name:"上海市",value:224},{name:"黑龙江省",value:200},{name:"吉林省",value:180},{name:"辽宁省",value:242},{name:"内蒙古自治区",value:230},{name:"山西省",value:225},{name:"河北省",value:529},{name:"天津市",value:295},{name:"北京市",value:740}],l={tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left",data:["男","女","城镇人口","农村人口"]},visualMap:{min:0,max:1e5,left:26,bottom:30,legend:!1,seriesIndex:1,pieces:[{gt:800,color:"#7f1100"},{gte:600,lte:800,color:"#ff5428"},{gte:400,lt:600,color:"#ff8c71"},{gt:200,lt:400,color:"#ffd768"},{gt:0,lt:200,color:"#ffffff"}],show:!0},geo:{map:"china",show:!0,roam:!0,label:{show:!0,color:"#fff"},emphasis:{label:{show:!1,color:"#fff"}},itemStyle:{normal:{areaColor:"#3a7fd5",borderColor:"#0a53e9",shadowColor:"#092f8f",shadowBlur:20},emphasis:{areaColor:"#0a2dae"}}},series:[{name:"总人口",type:"map",mapType:"loudi",label:{normal:{show:!0}},itemStyle:{normal:{borderColor:"#CD4F39",areaColor:"#54FF9F",borderWidth:4,opacity:.2}},data:e},{name:"确诊病例",type:"map",geoIndex:0,data:e}]};myChart.setOption(l)});
