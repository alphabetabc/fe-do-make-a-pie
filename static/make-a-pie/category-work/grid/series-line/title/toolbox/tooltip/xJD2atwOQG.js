option={title:{text:"告警趋势图"},tooltip:{trigger:"axis",axisPointer:{type:"cross"},formatter:function(e){return e[0].name+"<br />"+e[0].seriesName+":"+e[0].data}},toolbox:{show:!0,feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["00:00","01:15","02:30","03:45"]},yAxis:{type:"value",axisLabel:{formatter:"{value} W"},axisPointer:{snap:!0}},series:[{name:"底层闲",type:"line",smooth:!0,symbolSize:0,symbol:"circle",data:[100,150,250,180]},{name:"告警一",type:"line",smooth:!0,symbolSize:20,symbol:"circle",itemStyle:{color:"yellow"},lineStyle:{color:"rgb(0,0,0,0)"},data:[null,null,250,null]},{name:"告警三",type:"line",smooth:!0,itemStyle:{color:"green"},symbolSize:20,symbol:"circle",lineStyle:{color:"rgb(0,0,0,0)"},data:[null,150,null,null]}]},myChart.on("click",function(e){alert(e.seriesId)});
