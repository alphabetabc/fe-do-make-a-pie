var jiangsu="/asset/get/s/data-1557368914117-YDdLgQCLJ.json";$.get(jiangsu,function(i){echarts.registerMap("jiangsu",i);var o={"":[120.61562,31.349619],吴中区:[120.3971099,31.232765],相城区:[120.601043,31.4802088],姑苏区:[120.602416,31.3043684],工业园区:[120.75347,31.3677],高新区:[120.3840637,31.3723991],吴江区:[120.60585,30.9787865],常熟市:[120.74852,31.658156],张家港市:[120.621643,31.9195301],昆山市:[120.958137,31.381925],太仓市:[121.184692,31.5949131]},r=[{name:"",value:10},{name:"吴中区",value:9},{name:"相城区",value:8},{name:"姑苏区",value:7},{name:"工业园区",value:6},{name:"高新区",value:5},{name:"吴江区",value:4},{name:"常熟市",value:3},{name:"张家港市",value:2},{name:"昆山市",value:1},{name:"太仓市",value:1}],m=0;r.forEach(function(a,l){m+=a.value});var p=[{name:"常熟市",value:75},{name:"昆山市",value:95}],u="arrow",c=function(a,l){for(var e=[],n=0;n<l.length;n++){var s=o[a],f=o[l[n].name];s&&f&&e.push({coords:[s,f]})}return e},t=[];[["",r]].forEach(function(a,l){t.push({name:a[0],type:"lines",zlevel:2,effect:{show:!0,period:6,trailLength:.1,symbol:u,symbolSize:10},lineStyle:{normal:{width:2,opacity:.4,curveness:.2,color:"#00eaff"}},data:c(a[0],a[1])},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{period:4,brushType:"stroke",scale:4},label:{normal:{show:!1,position:"right",offset:[10,110],formatter:function(e){return e.data.name},fontSize:13},emphasis:{show:!0}},symbol:"circle",symbolSize:function(e){return 5},itemStyle:{normal:{show:!1,color:"#00eaff"}},data:a[1].map(function(e){return console.log(e),{name:e.name,value:o[e.name].concat([e.value])}})},{name:a[0],type:"scatter",coordinateSystem:"geo",zlevel:2,label:{normal:{show:!0,color:"#fff",position:"right",formatter:"{b}"}},symbol:"circle",symbolSize:function(e){return 5},itemStyle:{normal:{show:!0,color:"#00eaff"}},data:a[1].map(function(e){return console.log(e),{name:e.name,value:o[e.name].concat([e.value])}})},{name:"item[0]",type:"scatter",coordinateSystem:"geo",zlevel:2,label:{normal:{show:!0,position:"right",formatter:"{b}"}},symbolSize:function(e){return 25},symbol:"path://M512 39.384615l169.353846 295.384615 342.646154 63.015385-240.246154 248.123077L827.076923 984.615385l-315.076923-145.723077L196.923077 984.615385l43.323077-334.769231L0 401.723077l342.646154-63.015385L512 39.384615",itemStyle:{normal:{show:!0,color:"#DC143C"}},data:[{name:a[0],value:o[a[0]].concat([100])}]})});var v={type:"map",map:"jiangsu",geoIndex:0,label:{normal:{show:!1},emphasis:{show:!1}},data:r};t.unshift(v),option={backgroundColor:"#050b29",tooltip:{trigger:"item",formatter:"{b}"},visualMap:{show:!1,min:0,max:10,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[0],textStyle:{fontSize:"25"},inRange:{color:["#5193ff","#5193ff","#5193ff","#5193ff","#5193ff","#7B68EE","#4682B4","#07e9fd","#7ac6f5","#7e58c5","#eb3600"]}},geo:{map:"jiangsu",zoom:1.2,roam:!0,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#fbfbfb",borderColor:"#b9b4b7"},emphasis:{areaColor:"#05ff09"}}},series:t},myChart.setOption(option)});
