var colorlists=["#6a5acd","#13B5B1","#50F873","#FAD717","#FF6B00","#da70d6","#afeeee","#98db98","#ffc0cb","#0AB2AE","#00ff7f","#708090","#ff4500","#808000","#000080","#20b2aa","#87cefa","#ffa07a","#4b0082","#ffd700"],testdata=[{value:9,name:"北京电影学院"},{value:11,name:"中国传媒大学"},{value:19,name:"北京大学"},{value:26,name:"清华大学"},{value:47,name:"浙江大学"},{value:55,name:"我去大学"},{value:66,name:"家里蹲学院"},{value:77,name:"嗯哼大学"},{value:88,name:"啊哈大学"},{value:99,name:"是大学"}];option={title:{textStyle:{color:"#1e90ff"},text:"高校XTOP10",left:"center"},tooltip:{show:"true",trigger:"item",axisPointer:{type:"shadow"}},grid:{top:"50px",bottom:"1px",left:"5px"},xAxis:{type:"value",show:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},yAxis:[{type:"category",axisLabel:{show:!0,color:"#00C5CD",formatter:function(e){},fontSize:1},itemStyle:{},axisTick:{show:!1},axisLine:{show:!1},data:[]}],series:[{color:colorlists,type:"scatter",symbolSize:30,itemStyle:{normal:{borderWidth:2,borderColor:"#FFF",color:function(e){var a=colorlists;return a[e.dataIndex]},formatter:function(e){return e.value>0?e.value:""},opacity:1}}},{name:"高校XTOP10",type:"bar",barWidth:10,silent:!1,itemStyle:{normal:{barBorderRadius:testdata.length,color:function(e){var a=colorlists;return a[e.dataIndex]}}},label:{normal:{show:!0,position:[0,"-200%"],textStyle:{color:"#000"},formatter:function(e){var a=e.dataIndex;return"NO."+(testdata.length-a)+" "+testdata[a].name}}},data:testdata}]};