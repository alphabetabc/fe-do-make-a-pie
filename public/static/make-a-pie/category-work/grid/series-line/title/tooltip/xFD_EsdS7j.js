option={title:{text:"同一数据两条折线实现切断处虚线连接"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){for(var r=e[0].name+"<br/>",o=0;o<e.length;o++)for(var l=e.length-1;l>o;l--)if(e[l].data===e[o].data){e.splice(l,1);break}for(var t=0;t<e.length;t++){var n=e[t].color;r+="<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:"+n+";'></span><span style=''> "+e[t].seriesName+": </span><span style=''>"+e[t].value+"</span></br>"}return r}},xAxis:{data:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},yAxis:{},series:[{type:"line",connectNulls:!0,itemStyle:{normal:{lineStyle:{color:"#f0c95c",type:"dotted"},borderColor:"#00E4FF"}},data:[220,"-",191,234,290,330,310]},{type:"line",color:"#f0c95c",data:[220,"-",191,234,290,330,310]}]};
