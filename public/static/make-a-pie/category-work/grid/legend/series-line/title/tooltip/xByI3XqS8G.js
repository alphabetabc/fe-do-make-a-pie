var getDayTime=function(){for(var e=[],t=0;t<24;t++){var r=t+":00";e.push(r)}return e},getRandomData=function(){for(var e=[],t=0;t<24;t++){var r=Math.random()*100-Math.random()*50;e.push(Math.abs(r).toFixed(2))}return e};option={color:["#66CCFF","#CC6666","#66CCCC","#FF9999","#CCFF99"],title:{text:"近一小时情况",top:-5},grid:[{top:"11%",bottom:0,left:"5%",right:"5%",height:"80%"}],tooltip:{trigger:"axis",formatter:function(e){if(e instanceof Array){for(var t=[{data:[]}],r=e[0].axisValue,a=0;a<e.length;a++){var o=e[a].seriesId.split(e[a].seriesId[0]);t[o[2]].data.push({marker:e[a].marker,seriesName:e[a].seriesName,data:e[a].data})}return"<div><time>"+r+"</time><br />"+t.map(function(i){return"<span>"+i.text+"</span>"+i.data.map(function(n){return'<p style="margin: 0;padding: 0;">'+n.marker+n.seriesName+": "+n.data+"%</p>"}).join("")}).join("")}}},axisPointer:{link:{xAxisIndex:"all"}},legend:{data:["接收","发送"]},xAxis:[{type:"category",gridIndex:0,boundaryGap:!1,axisLabel:{interval:0},data:getDayTime()}],yAxis:[{name:"",type:"value",nameTextStyle:{fontSize:14},min:0,max:100,gridIndex:0,splitLine:{lineStyle:{type:"dashed"}}}],series:[{name:"接收",type:"line",data:getRandomData()},{name:"发送",type:"line",data:getRandomData()}]};
