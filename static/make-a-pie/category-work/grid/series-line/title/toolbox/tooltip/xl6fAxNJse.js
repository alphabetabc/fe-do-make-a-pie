option={title:{text:"动态数据",subtext:"纯属虚构"},tooltip:{trigger:"axis"},toolbox:{show:!0,feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},xAxis:[{type:"category",boundaryGap:!0,data:function(){for(var t=new Date,e=[],a=10;a--;)e.unshift(t.toLocaleTimeString().replace(/^\D*/,"")),t=new Date(t-2e3);return e}()}],yAxis:[{type:"value",scale:!0,name:"价格",max:30,min:0,boundaryGap:[.2,.2]}],series:[{name:"最新成交价",type:"line",data:function(){for(var t=[],e=0;e<10;)t.push((Math.random()*10+5).toFixed(1)-0),e++;return t}()}]},setInterval(function(){axisData=new Date().toLocaleTimeString().replace(/^\D*/,"");var t=option.series[0].data;t.shift(),t.push((Math.random()*10+5).toFixed(1)-0),option.xAxis[0].data.shift(),option.xAxis[0].data.push(axisData),myChart.setOption(option)},1e3);
