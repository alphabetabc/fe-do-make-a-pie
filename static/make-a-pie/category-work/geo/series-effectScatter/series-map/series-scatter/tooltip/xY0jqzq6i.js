var uploadedDataURL="/asset/get/s/data-1577153065762-Zq6YVYcp.js",uploadedDataURL="/asset/get/s/data-1577153005327-oQERdTEn.js",uploadedDataURL="/asset/get/s/data-1577152995195-oBuEJOTu.js",data=[{name:"兰州",value:30},{name:"嘉峪关",value:30},{name:"金昌",value:30},{name:"白银",value:30},{name:"天水",value:30},{name:"酒泉",value:30},{name:"张掖",value:30},{name:"武威",value:30},{name:"定西",value:30},{name:"陇南",value:30},{name:"平凉",value:30},{name:"庆阳",value:30},{name:"临夏",value:30},{name:"甘南",value:30}],toolTipData=[{name:"兰州",value:[{name:"人员数量",value:30}]},{name:"嘉峪关",value:[{name:"人员数量",value:30}]},{name:"金昌",value:[{name:"人员数量",value:30}]},{name:"白银",value:[{name:"人员数量",value:30}]},{name:"天水",value:[{name:"人员数量",value:30}]},{name:"酒泉",value:[{name:"人员数量",value:30}]},{name:"张掖",value:[{name:"人员数量",value:30}]},{name:"武威",value:[{name:"人员数量",value:30}]},{name:"定西",value:[{name:"人员数量",value:30}]},{name:"陇南",value:[{name:"人员数量",value:30}]},{name:"平凉",value:[{name:"人员数量",value:30}]},{name:"庆阳",value:[{name:"人员数量",value:30}]},{name:"临夏",value:[{name:"人员数量",value:30}]},{name:"甘南",value:[{name:"人员数量",value:30}]}],geoCoordMap={兰州:[103.82,36.07],酒泉:[96.2,40.1],金昌:[102.18,38.5],白银:[104.18,36.55],天水:[105.72,34.58],嘉峪关:[98.52,39.75],张掖:[100.45,38.93],武威:[102.63,37.93],定西:[104.62,35.58],陇南:[104.92,33.4],平凉:[106.67,35.55],庆阳:[107.63,36.23],临夏:[103.22,35.6],甘南:[102.92,34.98]},convertData=function(o){for(var l=[],e=0;e<o.length;e++){var a=geoCoordMap[o[e].name];a&&l.push({name:o[e].name,value:a.concat(o[e].value)})}return l};option={tooltip:{trigger:"item",borderRadius:4,padding:5,textStyle:{color:"#f5f5f5",fontSize:14},formatter:function(o){if(typeof o.value[2]>"u"){for(var l="",e=0;e<toolTipData.length;e++)if(o.name==toolTipData[e].name){l+=toolTipData[e].name+":<br>";for(var a=0;a<toolTipData[e].value.length;a++)l+=toolTipData[e].value[a].name+":"+toolTipData[e].value[a].value+"个<br>"}return l}else{for(var l="",e=0;e<toolTipData.length;e++)if(o.name==toolTipData[e].name){l+=toolTipData[e].name+":<br>";for(var a=0;a<toolTipData[e].value.length;a++)l+=toolTipData[e].value[a].name+":"+toolTipData[e].value[a].value+"个<br>"}return l}}},geo:{show:!0,map:"gansu",zoom:1.1,roam:!1,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{areaColor:"rgba(103, 193, 184)",borderColor:"rgba(103, 193, 184)"},emphasis:{areaColor:"#069f8a"}}},series:[{name:"散点",type:"scatter",coordinateSystem:"geo",data:convertData(data),symbolSize:"6",label:{normal:{show:!0,formatter:"{b}",position:"right",offset:[5,0]},emphasis:{show:!0}},itemStyle:{normal:{color:"#fff"}}},{type:"map",map:"gansu",roam:!1,zoom:1.1,data,selectedMode:"single",label:{normal:{show:!1,textStyle:{color:"#895139"}},emphasis:{show:!1,textStyle:{color:"#323232"}}},itemStyle:{normal:{borderWidth:1,borderColor:"rgba(64, 2, 134, 0.2)",areaColor:"rgba(103, 193, 184)"},emphasis:{borderWidth:1,borderColor:"rgba(13, 140, 176, 1)",areaColor:"#069f8a"}}},{name:"点",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:30,label:{normal:{show:!0,textStyle:{color:"#fff",fontSize:9}}},itemStyle:{normal:{color:"#F62157"}},zlevel:6,data:convertData(data)},{name:"Top",type:"effectScatter",coordinateSystem:"geo",data:convertData(data),symbolSize:12,showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!1}},itemStyle:{normal:{color:"#f2fb01",shadowBlur:10,shadowColor:"#f2fb01"}},zlevel:1}]};
