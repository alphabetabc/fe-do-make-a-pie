var data=[{value:2242,name:"原麦山丘",selected:!0},{value:1382,name:"真麦粮品"},{value:1250,name:"德南面包房"},{value:1244,name:"Baker&Spice"},{value:957,name:"零擀"},{value:671,name:"台北物语"}],count=0;option={title:{text:"北京人气欧包店",x:"center"},backgroundColor:"#FAEBD7",color:["#CD853F","#EE9A00","#EEAD0E","#EEC591","#EEC900","#F5DEB3"],series:[{type:"pie",selectedMode:"single",selectedOffset:20,radius:[0,"30%"],label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data},{type:"pie",selectedMode:"single",selectedOffset:20,radius:["40%","55%"],label:{normal:{show:!0,textStyle:{fontSize:24,color:"#698B69"}}},labelLine:{normal:{show:!1}},itemStyle:{normal:{opacity:.6}},data}]},app.timeTicket=setInterval(function(){var e=count%data.length;option.series[0].data[e].selected=!1,option.series[1].data[e].selected=!1,count++;var t=count%data.length;option.series[0].data[t].selected=!0,option.series[1].data[t].selected=!0,myChart.setOption(option,!0)},1e3);