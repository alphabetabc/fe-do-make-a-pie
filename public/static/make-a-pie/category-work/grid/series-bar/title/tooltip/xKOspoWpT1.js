var data=[{name:"江苏省",value:.53},{name:"北京市",value:.38},{name:"上海",value:.46},{name:"重庆",value:.36},{name:"河北",value:.34},{name:"河南",value:.32},{name:"云南",value:.16},{name:"辽宁",value:.43},{name:"黑龙江",value:.41},{name:"湖南",value:.24},{name:"安徽",value:.33}],average=.3;data=data.sort(function(e,a){return a.value-e.value});for(var yData=[],barData=[],i=0;i<data.length;i++)barData.push(data[i]),data[i].value<average?yData.push(i+","+data[i].name+",lower"):yData.push(i+","+data[i].name);var option={title:[{text:"某某地区1-6月份完成率",textStyle:{color:"#2D3E53",fontSize:18},x:"center",top:100}],tooltip:{show:!0,formatter:function(e){var a=parseFloat(e.data.value)*100;return e.name+"："+a+"%"}},grid:{top:"20%",bottom:"10%",left:"6%",right:"2%",containLabel:!0},xAxis:{show:!1},yAxis:{type:"category",inverse:!0,nameGap:16,axisLine:{show:!1,lineStyle:{color:"#ddd"}},axisTick:{show:!1,lineStyle:{color:"#ddd"}},axisLabel:{interval:0,margin:85,textStyle:{color:"#455A74",align:"left",fontSize:14},rich:{a:{color:"#fff",backgroundColor:"#f36a5a",width:20,height:20,align:"center",borderRadius:2},b:{color:"#fff",backgroundColor:"#4197FD",width:20,height:20,align:"center",borderRadius:2}},formatter:function(e){var a=e.split(","),r=a[0],t=a[1];return a[2]?["{a|"+(parseInt(r)+1)+"}  "+t].join(`
`):["{b|"+(parseInt(r)+1)+"}  "+t].join(`
`)}},data:yData},series:[{name:"barSer",type:"bar",roam:!1,visualMap:!1,zlevel:2,barMaxWidth:8,barGap:0,itemStyle:{normal:{color:function(e){console.log(e);var a=parseFloat(e.data.value),r=[{colorStops:[{offset:0,color:"#f36a5a"},{offset:1,color:"#f36a5a"}]},{colorStops:[{offset:0,color:"#00C0FA"},{offset:1,color:"#2F95FA"}]}];return a<average?r[0]:r[1]},barBorderRadius:15}},data:barData,label:{normal:{show:!0,textStyle:{color:"#455A74",fontSize:14},position:"right",offset:[35,0],formatter:function(e){var a=parseFloat(e.data.value)*100;return a+"%"}}}}]};