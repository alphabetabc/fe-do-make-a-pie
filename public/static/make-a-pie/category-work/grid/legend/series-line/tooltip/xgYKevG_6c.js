eventInfo();function eventInfo(){var o=echarts.init(document.getElementById("chart-panel"));o.setOption({color:["#F5C300","#2F4F4F"],legend:{x:"center",y:"bottom",itemGap:80,data:["温度","湿度"]},tooltip:{axisPointer:{type:"cross"},triggerOn:"click",alwaysShowContent:!0,trigger:"axis",formatter:function(e){var n="";if(e.length>0){Xindex=e[0].dataIndex,n+=e[0].name+"<br>";for(var t=0;t<e.length;t++)t===0?n+=e[t].marker+e[t].seriesName+": "+e[t].data+'&nbsp;&nbsp;&nbsp;<button  style="pointer-events: all;"  onclick="open1()">查 看</button><br>':n+=e[t].marker+e[t].seriesName+": "+e[t].data+"<br>"}return n}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["80:00","80:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00"]}],yAxis:[{type:"value",interval:10}],series:[{name:"温度",type:"line",smooth:!0,data:[21,25,27,29,30,31,32,35,36,35,30,29,27,25,24,23,21]},{name:"湿度",type:"line",smooth:!0,data:[50,49,48,48,47,47,41,41,40,40,40,46,48,50,57,63,62,60,63]}]})}open1=function(){alert("tooltip点击事件")};var Index=0,Time=setInterval(function(){myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:Index}),Index++;var o=myChart.getOption();Index>=o.series[0].data.length&&(Index=0)},2e3);