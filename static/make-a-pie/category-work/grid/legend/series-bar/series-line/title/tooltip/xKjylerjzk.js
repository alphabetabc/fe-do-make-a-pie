option={grid:{x:"10%",y:"10%",x2:"20%",y2:0,containLabel:!0},title:{text:"中标情况",subtext:"纯属虚构",padding:[5,10,10,60]},tooltip:{borderColor:"rgba(0,0,0,.8)",backgroundColor:"rgba(0,0,0,.8)",textStyle:{color:"#fff"},trigger:"axis",formatter:function(e){var t=e[0].name;return t+="<br/>"+e[0].marker+e[0].seriesName+" : "+e[0].value+"次",t+="<br/>"+e[1].marker+e[1].seriesName+" : "+e[1].value+"次",t+="<br/>"+e[2].marker+e[2].seriesName+" : "+e[2].value+"万元",t},axisPointer:{type:"none"}},legend:{icon:"circle",data:["同类供应商均值","中标次数","中标金额"],right:10,bottom:20,orient:"vertical",textStyle:{color:"#000",fontSize:14},selected:{中标金额:!0}},xAxis:[{type:"category",boundaryGap:!0,axisTick:{alignWithLabel:!0,show:!0},data:["2014","2015","2016","2017","2018","2019","2020"]}],yAxis:[{type:"value",min:0,max:60,interval:10,axisLabel:{formatter:"{value}"},splitLine:{show:!0,lineStyle:{color:"#91939d",type:"dashed"}},axisLine:{show:!1},axisTick:{show:!1}},{type:"value",min:0,max:300,interval:50,axisLabel:{formatter:"{value} "},splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1}}],series:[{name:"同类供应商均值",type:"line",symbol:"none",itemStyle:{normal:{color:"#ffbf00"}},data:[8,10,8,5,9,11,17]},{name:"中标次数",type:"line",symbol:"none",itemStyle:{normal:{color:"#ff3300"}},data:[5,4,9,3,12,9,11]},{name:"中标金额",type:"bar",yAxisIndex:1,barWidth:25,itemStyle:{normal:{color:"#4ecb73"}},data:[90,125,75,100,125,125,125]}]};