option={tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{borderWidth:0,top:30,bottom:60,textStyle:{color:"#fff"}},legend:{textStyle:{color:"#90979c"},data:["成交量（万方）","成交均价（万元/平分）"]},calculable:!0,xAxis:[{type:"category",data:["2011","2012","2013","2014","2015","2016"]}],yAxis:[{type:"value",show:!1}],series:[{name:"成交量（万方）",type:"bar",stack:"总量",barMaxWidth:30,barGap:"0%",itemStyle:{normal:{color:"rgba(254,191,7,1)",label:{show:!0,textStyle:{color:"#fff"},position:"insideTop",formatter:function(t){return t.value>0?t.value:""}}}},data:[1729,1937,1279,975,2488,1374]},{name:"成交均价（万元/平分）",type:"line",stack:"总量",symbolSize:20,symbol:"circle",itemStyle:{normal:{color:"rgba(153,153,153,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:[2.23,2.25,2.41,2.72,3.23,3.83]}]};