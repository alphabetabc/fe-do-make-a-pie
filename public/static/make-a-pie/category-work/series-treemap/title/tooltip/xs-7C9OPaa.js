var formatUtil=echarts.format;function getLevelOption(){return[{itemStyle:{borderColor:"#777",borderWidth:0,gapWidth:1},upperLabel:{show:!1}},{itemStyle:{borderColor:"#555",borderWidth:5,gapWidth:1},emphasis:{itemStyle:{borderColor:"#ddd"}}},{colorSaturation:[.35,.5],itemStyle:{borderWidth:5,gapWidth:1,borderColorSaturation:.6}}]}myChart.setOption(option={title:{text:"Disk Usage",left:"center"},tooltip:{formatter:function(r){for(var l=r.value,o=r.treePathInfo,t=[],e=1;e<o.length;e++)t.push(o[e].name);return['<div class="tooltip-title">'+formatUtil.encodeHTML(t.join("/"))+"</div>","Disk Usage: "+formatUtil.addCommas(l)+" KB"].join("")}},series:[{name:"矩形图",type:"treemap",itemStyle:{normal:{label:{show:!0,formatter:"{b}: {c}"},borderWidth:1,borderColor:"#ccc"},emphasis:{label:{show:!0},color:"#cc99cc",borderWidth:3,borderColor:"#996699"}},data:[{name:"三星",value:6,itemStyle:{normal:{label:{show:!0,formatter:"{b}最多",textStyle:{color:"#ccc",fontSize:16}},color:"#ccff99",borderWidth:1},emphasis:{label:{show:!0,formatter:"{b}: {c}",textStyle:{color:"red",fontSize:18}},color:"#cc9999",borderWidth:3,borderColor:"#999999"}}},{name:"小米",value:4,itemStyle:{normal:{color:"blue"}},children:[{name:"小米",value:4,itemStyle:{color:"red"}},{name:"苹果",value:4,itemStyle:{color:"#9999cc"}}]},{name:"苹果",value:4,itemStyle:{normal:{color:"#9999cc"}}},{name:"魅族",value:1,itemStyle:{normal:{color:"#99cccc"}}},{name:"华为",value:2,itemStyle:{normal:{color:"#ccffcc"}}},{name:"联想",value:2,itemStyle:{normal:{color:"#ccccff"}}},{name:"中兴",value:1,itemStyle:{color:"red",normal:{color:"red",label:{show:!0,formatter:"{b}: {c}"},borderWidth:3,borderColor:"red"},emphasis:{label:{show:!0},color:"#cc9999",borderWidth:3,borderColor:"#999999"}}}]}]});
