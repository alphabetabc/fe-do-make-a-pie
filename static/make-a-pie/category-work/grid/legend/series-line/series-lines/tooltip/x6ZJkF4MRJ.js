var data1=[14,15,65,24,75,23,24,43,27,72,12,53],data2=[45,65,24,74,75,23,42,54,13,32,52,13],json={chart0:{xcategory:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],low:data1,lowLine:[]}},json2={chart0:{xcategory:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],low:data2,lowLine:[]}},zrUtil=echarts.util;zrUtil.each(json.chart0.xcategory,function(e,o){json.chart0.lowLine.push([{coord:[o,json.chart0.low[o]]},{coord:[o+1,json.chart0.low[o+1]]}])}),zrUtil.each(json.chart0.xcategory,function(e,o){json2.chart0.lowLine.push([{coord:[o,json2.chart0.low[o]]},{coord:[o+1,json2.chart0.low[o+1]]}])});var option={backgroundColor:"#03060F",tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#15ecf4"}},backgroundColor:"rgba(0,0,0,.8)",extraCssText:"box-shadow: 4px 4px 10px rgba(21, 250, 255,.6);",formatter:function(e){var o=e[0].name+"<br>";return e.forEach(function(a){o+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+a.color+'"></span>',parseFloat(a.data)>=50?o+=a.seriesName+': <span class="growth">增长'+a.data+"%</span><br>":parseFloat(a.data)<50&&(o+=a.seriesName+': <span class="reduce">降低'+a.data+"%</span><br>")}),o}},legend:{data:["同比","环比"],textStyle:{fontSize:12,color:"rgb(0,253,255,0.6)"},top:"5%",right:"5%"},grid:{bottom:50,left:70,right:50},xAxis:{axisLine:{show:!0,lineStyle:{color:"#15faff"}},axisTick:{show:!1},axisLabel:{show:!0},data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},yAxis:{max:100,splitNumber:4,interval:25,axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed",color:"#4b4d64"}},axisLabel:{formatter:"{value} %",textStyle:{color:"#ffffff"}}},series:[{name:"环比",type:"line",symbol:"circle",symbolSize:10,areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255, 204,1, .9)"},{offset:.8,color:"rgba(6, 8, 41,.1)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"#ffcb00"}},data:data1},{name:"环比",type:"lines",coordinateSystem:"cartesian2d",zlevel:1,smooth:!0,symbol:"circle",effect:{show:!0,smooth:!0,period:2,symbolSize:8},lineStyle:{normal:{color:"#ffcb00",width:0,opacity:0,curveness:0}},data:json.chart0.lowLine},{name:"同比",type:"line",symbol:"circle",symbolSize:10,areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(21, 250, 255,.9)"},{offset:.8,color:"rgba(6, 8, 41,.1)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"#15faff"}},data:data2},{name:"同比",type:"lines",coordinateSystem:"cartesian2d",zlevel:1,smooth:!0,symbol:"circle",effect:{show:!0,smooth:!0,period:2,symbolSize:8},lineStyle:{normal:{color:"#15faff",width:0,opacity:0,curveness:0}},data:json2.chart0.lowLine}]};