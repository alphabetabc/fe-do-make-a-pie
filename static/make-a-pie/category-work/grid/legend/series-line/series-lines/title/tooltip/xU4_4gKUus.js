var data1=[0,0,0,0,0,0,0,0,0,0,50.65,50.65],data2=[0,0,0,0,0,0,0,0,0,0,92,91],json={chart0:{xcategory:["11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],low:data1,lowLine:[]}},json2={chart0:{xcategory:["11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],low:data2,lowLine:[]}},zrUtil=echarts.util;zrUtil.each(json.chart0.xcategory,function(e,o){json.chart0.lowLine.push([{coord:[o,json.chart0.low[o]]},{coord:[o+1,json.chart0.low[o+1]]}])}),zrUtil.each(json.chart0.xcategory,function(e,o){json2.chart0.lowLine.push([{coord:[o,json2.chart0.low[o]]},{coord:[o+1,json2.chart0.low[o+1]]}])});var option={backgroundColor:"#03060F",title:{show:!0,text:"2021年11月体重趋势",textStyle:{align:"center",color:"#fff",fontSize:20},top:"3%",left:"5%"},tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 255, 233,0)"},{offset:.5,color:"rgba(255, 255, 255,1)"},{offset:1,color:"rgba(0, 255, 233,0)"}],global:!1}}}},legend:{data:["danni","zc"],textStyle:{fontSize:12,color:"rgb(0,253,255,0.6)"},top:"5%",right:"5%"},grid:{top:120,bottom:50,left:70,right:50},xAxis:{axisLine:{show:!0,lineStyle:{color:"#15faff"}},axisTick:{show:!1},axisLabel:{show:!0},data:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"]},yAxis:{max:100,splitNumber:4,interval:25,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1,lineStyle:{type:"dashed",color:"#4b4d64"}},axisLabel:{formatter:"{value} kg",textStyle:{color:"#ffffff"}}},series:[{name:"danni",type:"line",symbol:"circle",symbolSize:10,areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255, 204,1, .9)"},{offset:.8,color:"rgba(6, 8, 41,.1)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"#ffcb00"}},data:data1},{name:"danni",type:"lines",coordinateSystem:"cartesian2d",zlevel:1,smooth:!0,symbol:"circle",effect:{show:!0,smooth:!0,period:2,symbolSize:8},lineStyle:{normal:{color:"#ffcb00",width:0,opacity:0,curveness:0}},data:json.chart0.lowLine},{name:"zc",type:"line",symbol:"circle",symbolSize:10,areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(21, 250, 255,.9)"},{offset:.8,color:"rgba(6, 8, 41,.1)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"#15faff"}},data:data2},{name:"zc",type:"lines",coordinateSystem:"cartesian2d",zlevel:1,smooth:!0,symbol:"circle",effect:{show:!0,smooth:!0,period:2,symbolSize:8},lineStyle:{normal:{color:"#15faff",width:0,opacity:0,curveness:0}},data:json2.chart0.lowLine}]};