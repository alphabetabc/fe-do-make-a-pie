option={backgroundColor:"#000",grid:{y:"25",x:"5",right:"4%",bottom:"3%",containLabel:!0},legend:{x:"25",itemGap:10,itemWidth:15,itemHeight:"10",data:[{name:"已收佣金",textStyle:{fontWeight:"bold",color:"#e8e8dc",fontSize:"10"}},{name:"未收佣金",textStyle:{fontWeight:"bold",color:"#e8e8dc",fontSize:"10"}}]},xAxis:{type:"category",splitLine:{show:!1},data:["2.1-2.3","2.4-2.10","2.11-2.17","2.18-2.14","2.25-2.28"]},yAxis:{type:"value",axisLabel:{textStyle:{color:"none"}},splitLine:{lineStyle:{color:"#1f3054"}}},series:[{name:"已收佣金",barWidth:30,borderWidth:"15",type:"bar",stack:"总量",itemStyle:{normal:{color:"#57ced2"}},label:{normal:{color:"#121212",show:!0,position:"inside"}},data:[98,125,100,98,20]},{name:"未收佣金",type:"bar",stack:"总量",itemStyle:{normal:{color:"#f5c551"}},label:{normal:{color:"#121212",show:!0,position:"inside"}},data:[18,18,48,18,20]},{name:"总计",type:"bar",stack:"总量",label:{normal:{offset:["50","80"],show:!0,position:"insideBottom",formatter:"{c}",textStyle:{color:"#fff"}}},itemStyle:{normal:{color:"rgba(128, 128, 128, 0)"}},data:[0,0,0,0,0]}]};var series=option.series,fun=function(o){for(var e=0,t=0,a=series.length;t<a;t++)console.log(series[t].data[o.dataIndex]),e+=series[t].data[o.dataIndex];return console.log(e),e};series[series.length-1].label.normal.formatter=fun,option&&typeof option=="object"&&myChart.setOption(option,!0);
