app.title="折柱混合",option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},grid:{top:"8%",right:"15%",left:"10%",bottom:"5%"},legend:{data:["降雪量","降水量","蒸发量","平均温度"]},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisPointer:{type:"shadow"},axisLabel:{interval:0,rotate:40,margin:10,textStyle:{fontSize:10,color:"red"}}}],yAxis:[{type:"value",name:"水量(ml)",min:0,max:2500,interval:250,axisLabel:{formatter:"{value}"}},{type:"value",name:"温度",min:0,max:25,interval:5,axisLabel:{formatter:"{value} °C"}},{type:"value",name:"雪量(cm)",offset:60,min:0,max:10,interval:2,axisLabel:{formatter:"{value}"}}],series:[{name:"蒸发量",type:"bar",data:[222,504,887,1323,1395,1676,2235,2062,1900,1020,726,300],markPoint:{data:[{name:"蒸发",value:1323,xAxis:3,yAxis:1323,symbolSize:80},{name:"蒸发",value:1676,xAxis:5,yAxis:1676,symbolSize:70}],itemStyle:{normal:{label:{show:!0,formatter:function(e){for(var e=(e.value||0).toString(),a="";e.length>3;)a=","+e.slice(-3)+a,e=e.slice(0,e.length-3);return e&&(a=e+a),a}}}}}},{name:"降水量",type:"bar",data:[265,544,999,1126,1428,1670,2175,2182,1948,1218,826,422],markPoint:{data:[{name:"降水",value:1323,xAxis:9,yAxis:1218,symbolSize:120}],itemStyle:{normal:{label:{show:!0,formatter:function(e){for(var e=(e.value||0).toString(),a="";e.length>3;)a=","+e.slice(-3)+a,e=e.slice(0,e.length-3);return e&&(a=e+a),`降水

`+a+`

ml`}}}}}},{name:"平均温度",type:"line",yAxisIndex:1,data:[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2],markPoint:{data:[{name:"年最高",value:23.4,xAxis:7,yAxis:23.4,symbolSize:100},{name:"年最低",value:2,xAxis:0,yAxis:2}],itemStyle:{normal:{label:{show:!0,formatter:function(t){return t.value+" °C"}}}}},markLine:{data:[{type:"average",name:"平均值"}]},itemStyle:{normal:{lineStyle:{width:5,type:"dotted"}}}},{name:"降雪量",type:"line",yAxisIndex:2,data:[4,3.2,0,0,0,0,0,0,0,0,1,4.2]}]};