option={title:{text:"青年十大领域在时间序列上的发展情况（北京）",subtext:"本图均为虚拟数据"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){var t;return e[1].value!="-"?t=e[1]:t=e[2],t.name+"<br/>"+t.seriesName+" : "+t.value}},legend:{data:["降低","增加"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",splitLine:{show:!1},data:function(){for(var e=[],t=2010;t<=2018;t++)e.push(t+"年");return e}()},yAxis:{type:"value"},series:[{name:"辅助",type:"bar",stack:"总量",itemStyle:{normal:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:[0,46,27,83,31,1,56,79,61,41]},{name:"增加",type:"bar",stack:"总量",label:{normal:{show:!0,position:"top"}},data:[46,"-",56,"-","-",55,23,"-","-","-"]},{name:"降低",type:"bar",stack:"总量",label:{normal:{show:!0,position:"bottom"}},data:["-",19,"-",52,30,"-","-",18,20]}]};
