var value=[["product","GDP","PPI","PDD"],["2016-09",2242.6,7.1,7.2],["2016-10",3312.5,7.4,7.2],["2016-11",2127.5,6.4,8.2],["2016-12",3527,8.1,6.2],["2017-01",3547.3,7.1,6.2],["2017-02",2927.5,17.4,9.2],["2017-03",3126.5,7.4,4.2],["2017-04",2677,7.1,9.2],["2017-05",3546.5,27.2,11.2],["2017-06",3327.1,7.2,11.2],["2017-07",2226.1,7.1,7.2],["2017-08",3116.5,7.4,21.2],["2017-09",3336.6,7.4,19.2],["2017-10",3222,17.1,16.2],["2017-11",3337.5,7.2,12.2],["2017-12",2447.1,7.2,11.2],["2018-01",3117,7.1,12.2],["2018-02",-417.5,-1.4,11.2],["2018-03",2227.5,7,15.2],["2018-04",3117,7.1,5.2],["2018-05",3117.3,8.1,7.2],["2018-06",3227.6,7.1,12.2],["2018-07",2337.3,7.1,1.2]];option={dataset:{source:value},title:{text:"GDP同比增速",left:"40%"},tooltip:{},grid:{bottom:"100",left:"70",top:40},legend:{bottom:0,borderColor:"#000",borderWidth:1},xAxis:[{type:"category",axisPointer:{type:"shadow"},axisTick:{show:!1},axisLabel:{interval:0,rotate:90}}],yAxis:[{type:"value",name:"亿元",nameRotate:"90",nameGap:"60",nameLocation:"middle",min:-1100,max:4e3,splitArea:{show:!0,areaStyle:{color:["#B3D8FF","#fff"]}},axisTick:{show:!1}},{type:"value",name:"%",nameRotate:"270",nameGap:"40",nameLocation:"middle",min:-10,max:40,splitLine:{show:!1},axisTick:{show:!1}}],series:[{type:"bar",itemStyle:{barBorderRadius:[0,0,0,0],shadowColor:"rgba(0, 0, 0, 0.6)",shadowBlur:4,color:"#b1c8dc",opacity:.8},barWidth:20},{type:"line",yAxisIndex:1,itemStyle:{color:"#d4cf30"}},{type:"line",yAxisIndex:1,itemStyle:{color:"#64ca83"}}]};