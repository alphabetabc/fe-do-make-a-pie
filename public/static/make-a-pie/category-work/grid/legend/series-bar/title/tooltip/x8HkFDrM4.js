option={title:{text:"Awesome Chart"},legend:{data:["登录人数","总用户数"]},xAxis:{data:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},yAxis:{},tooltip:{trigger:"axis",axisPointer:{type:"cross"},formatter:function(e){let o=e[0].name+"<br>";for(var t=0;t<e.length;t++)o+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+e[t].color+';"></span>',option.series[e[t].seriesIndex].name=="登录人数"?o+=e[t].seriesName+": "+e[t].value+"%<br>":o+=e[t].seriesName+": "+e[t].value+"<br>";return o}},series:[{name:"总用户数",type:"bar",color:"#ccc",data:[100,200,101,500,230,333,100]},{label:{show:!0,position:"top",color:"#fff",formatter:"{c}%"},name:"登录人数",type:"bar",barGap:"-100%",data:[80,30,30,340,30,60,10],itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00FBFF"},{offset:1,color:"#39A7FC"}],!1)},emphasis:{}}}]};
