option={title:{},tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{width:0}}},legend:{},grid:{left:"3%",right:"4%",bottom:60,containLabel:!0},dataZoom:[{show:1,type:"slider",xAxisIndex:[0,1],realtime:!0},{show:1,type:"inside",xAxisIndex:[0,1],realtime:!0}],xAxis:[{type:"category",position:"bottom",data:["1月","2月","3月","4月","5月","1月","2月","3月","4月"]},{type:"category",position:"bottom",boundaryGap:0,nameGap:0,axisTick:{show:1,length:50,alignWithLabel:0,interval:function(e){if(e===5)return 1},lineStyle:{color:"#000"}},axisLabel:{formatter:function(e,t){if(t===2||t===7)return e}},offset:20,data:[{},{value:"2016",textStyle:{}},{value:"2016",textStyle:{padding:[0,0,0,110]}},{value:"2016",textStyle:{}},{value:"2016"},{value:"2016"},{value:"2016"},{value:"2017"},{value:"2017"},{value:"2017"}]}],yAxis:[{type:"value",boundaryGap:[0,.01]}],series:[{name:"a数量",type:"bar",data:[11203,13489,13034,10970,1744,10230,10470,13144,10230]},{name:"b数量",type:"bar",data:[12325,13438,11e3,12594,13441,11187,10970,11744,13030]}],color:["#3fb1e3","#6be6c1","#626c91","#a0a7e6","#FF9966","#96dee8","#ec7e7f","#c4ebad"]};