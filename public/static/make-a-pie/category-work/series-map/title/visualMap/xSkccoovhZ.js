var uploadedDataURL="/asset/get/s/data-1499156198404-H1AJkAOEZ.json";function showProvince1(){var e="bj";$.get(uploadedDataURL,function(a){echarts.registerMap(e,a),myChart.setOption(option={backgroundColor:"#ffffff",title:{text:"北京市各区房价",subtext:"时间：2017.08",left:"center",textStyle:{color:"#000"}},visualMap:{min:.05,max:2.6,dimension:0,left:"left",top:"bottom",text:["HIGH","LOW"],calculable:!0,inRange:{color:["#3EACE5","#F02FC2"]}},series:[{type:"map",mapType:e,label:{normal:{show:!1},emphasis:{textStyle:{color:"rgba(255, 255, 255, 0.8)"}}},itemStyle:{normal:{borderColor:"#fff",borderWidth:1,areaColor:"#000"},emphasis:{areaColor:"#EABBFF",borderColor:"rgb(255,222,254)",borderWidth:1}},animation:!1,data:[{name:"东城区",value:2.154761905,label:{normal:{show:!1}}},{name:"西城区",value:2.545098039,label:{normal:{show:!1}}},{name:"海淀区",value:.857076566},{name:"朝阳区",value:.869230769},{name:"石景山区",value:.776190476,label:{normal:{show:!1}}},{name:"大兴区",value:.150772201},{name:"门头沟区",value:.02122674},{name:"昌平区",value:.146056548},{name:"通州区",value:.15209713},{name:"房山区",value:.052562814},{name:"丰台区",value:.759477124},{name:"顺义区",value:.1},{name:"怀柔区",value:.018087612},{name:"密云区",value:.021489457},{name:"延庆区",value:.015747242},{name:"平谷区",value:.044526316}]}]})})}var currentIdx=0;showProvince1();