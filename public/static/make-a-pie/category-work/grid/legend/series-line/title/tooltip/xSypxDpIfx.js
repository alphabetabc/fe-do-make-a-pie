for(var count=300,categories=[],data1=[],data2=[],base1=8,base2=15,amp1=4,amp2=8,offset=0,i=0;i<count;i++)categories.unshift(offset.toString()),data1.unshift((i%2?-1:1)*(base1+Math.random()*amp1)),data2.unshift((i%2?1:-1)*(base2+Math.random()*amp2)),offset++;option={backgroundColor:"#333645",color:["#fd2e89","#ff80c2"],title:{text:"音频图",left:"center"},tooltip:{trigger:"axis"},legend:{left:"3%",data:["x","y"]},xAxis:{type:"category",name:"x",splitLine:{lineStyle:{type:"solid",color:"#ff80c2"}},axisLine:{lineStyle:{color:"#ff80c2"}},boundaryGap:!0,splitLine:{show:!1},axisLabel:{},data:categories},grid:{left:"3%",right:"4%",top:"10%",bottom:"4%",containLabel:!0},yAxis:{name:"y",splitLine:{lineStyle:{color:"#ff80c2"}},axisLabel:{textStyle:{color:"#ff80c2"}}},series:[{name:"x",type:"line",smooth:1,symbol:"none",lineStyle:{normal:{width:0}},areaStyle:{normal:{opacity:1}},data:data1},{name:"y",type:"line",smooth:!0,symbol:"none",lineStyle:{normal:{width:0}},areaStyle:{normal:{opacity:1}},data:data2}],animation:!1},setInterval(function(){for(var t=0;t<1.5;t++)categories.pop(),data1.pop(),data2.pop(),categories.unshift(offset.toString()),data1.unshift((offset%2?-1:1)*(base1+Math.random()*amp1)),data2.unshift((offset%2?1:-1)*(base2+Math.random()*amp2)),offset++;myChart.setOption({xAxis:{data:categories},series:[{name:"x",data:data1},{name:"y",data:data2}]})},50);
