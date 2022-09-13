var data=["象山社保","职业鉴定","劳动监察"],uploadedDataURL="/asset/get/s/data-1526891266407-B19bm-lJQ.json",allData={citys:[{name:"职业鉴定",value:[125.44335937499999,36.38591277287651],label:{normal:{}}},{name:"人才中心",value:[107.12695312499999,37.16031654673677],label:{normal:{position:"top",offset:[0,6]}}},{name:"阳光政务",value:[115.5,42.48830197960227],label:{normal:{position:"right",offset:[-6,0]}}},{name:"社保卡",value:[124.00390625,40.17680856570235]},{name:"五险统征",value:[113.99414062499999,55.92458580482951],label:{normal:{}}},{name:"象山社保",value:[111.26953125,47.15984001304432],label:{normal:{position:"left",offset:[6,0]}}},{name:"人事人才",value:[98.61328125,55.1286490684888],label:{normal:{}}},{name:"劳动监察",value:[94.779296875,48.83798245308484],label:{normal:{position:"top",offset:[0,6]}}},{name:"宁海社保",value:[88.087890625,56.84897198026975],label:{normal:{position:"left",offset:[8,0]}}},{name:"慈溪社保",value:[83.154296875,42.61779143282346],label:{normal:{}}},{name:"就业同步",value:[75.44140625,46.13417004624326],label:{normal:{position:"left",offset:[8,0]}}},{name:"自助服务一体机",value:[86.044921875,51.890053935216926],label:{normal:{position:"left",offset:[8,0]}}},{name:"全民参保",value:[76.595703125,61.897577621605016],label:{normal:{position:"left",offset:[6,0]}}},{name:"公共服务内网",value:[124.8046875,52.96187505907603]},{name:"公共服务外网",value:[121.46484375,62.103882522897855],label:{normal:{}}},{name:"",value:[104.442382625,25.895892559415024],label:{normal:{position:"center"}}},{name:"医保",value:[109.248046875,60.326947742998414],label:{normal:{}}},{name:"12333",value:[90.703125,59.44507509904714],label:{normal:{}}}],cityLine:[{name:"医保",coords:[[109.248046875,60.326947742998414],[104.442382625,25.895892559415024]],lineStyle:{normal:{}}},{name:"职业鉴定",coords:[[125.44335937499999,36.38591277287651],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:.35}}},{name:"人才中心",coords:[[107.12695312499999,37.16031654673677],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:.1}}},{name:"阳光政务",coords:[[115.5,42.48830197960227],[104.442382625,25.895892559415024]],lineStyle:{normal:{}}},{name:"社保卡",coords:[[124.00390625,40.17680856570235],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:.3}}},{name:"五险统征",coords:[[113.99414062499999,55.92458580482951],[104.442382625,25.895892559415024]],lineStyle:{normal:{}}},{name:"象山社保",coords:[[111.26953125,47.15984001304432],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:.1}}},{name:"人事人才",coords:[[98.61328125,55.1286490684888],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:-.1}}},{name:"劳动监察",coords:[[94.779296875,48.83798245308484],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:-.18}}},{name:"宁海社保",coords:[[88.087890625,56.84897198026975],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:-.2}}},{name:"慈溪社保",coords:[[83.154296875,42.61779143282346],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:-.2}}},{name:"就业同步",coords:[[75.44140625,46.13417004624326],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:-.35}}},{name:"自助服务一体机",coords:[[86.044921875,51.890053935216926],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:-.2}}},{name:"全民参保",coords:[[76.595703125,61.897577621605016],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:-.4}}},{name:"公共服务内网",coords:[[124.8046875,52.96187505907603],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:.3}}},{name:"公共服务外网",coords:[[121.46484375,62.103882522897855],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:.3}}},{name:"12333",coords:[[90.703125,59.44507509904714],[104.442382625,25.895892559415024]],lineStyle:{normal:{curveness:-.2}}}]};data.forEach(function(l){var o=l;console.log(allData),allData.citys.forEach(function(a,e){a.name===o&&(allData.citys[e].label.normal.backgroundColor="red")}),allData.cityLine.forEach(function(a,e){a.name===o&&(allData.cityLine[e].lineStyle.normal.color="red",allData.cityLine[e].lineStyle.normal.width=2,allData.cityLine[e].lineStyle.normal.type="dashed")}),console.log(allData)});var option2={geo:{zoom:1.2,map:"ditu",label:{emphasis:{show:!1}},silent:!0,roam:!1,itemStyle:{normal:{areaColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)"},emphasis:{areaColor:"#2a333d"}}},series:[{name:"地点",type:"scatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{brushType:"stroke",period:7,scale:26},label:{normal:{show:!0,color:"#fff",offset:[-8,0],position:"right",formatter:"{b}",backgroundColor:"rgb(24,171,154)",padding:[5,10],borderRadius:20}},symbolSize:1,itemStyle:{normal:{color:"#46bee9"}},data:allData.citys},{name:"线路",type:"lines",coordinateSystem:"geo",zlevel:2,large:!0,effect:{show:!0,constantSpeed:30,symbol:"arrow",symbolSize:6,trailLength:0},lineStyle:{normal:{color:"rgb(24,171,154)",width:1,opacity:.6,curveness:.2}},data:allData.cityLine}]};$.get(uploadedDataURL,function(l){echarts.registerMap("ditu",l),myChart.setOption(option2)});
