var echartData=[32,25,39,26,28],option={tooltip:{trigger:"item",formatter:"{b}<br/>{c}人"},grid:{top:"30%",left:"5%",right:"30%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["985院校","211院校","一本","二本","三本"]}],yAxis:[{type:"value"}],series:[{name:"人数统计",barMaxWidth:"40%",type:"bar",label:{normal:{show:!0,position:"top"}},itemStyle:{normal:{color:function(t){var e=["#C1232B","#B5C334","#E87C25","#27727B","#FE8463","#9BCA63","#FAD860","#F3A43B","#60C0DD"];return e[t.dataIndex]},label:{show:!0,position:"top",formatter:function(t){var e=0,o=0;return echartData.forEach(function(r,a){e+=r}),o=(t.value/e*100).toFixed(2),""+t.name+`

`+t.value+"人，"+o+"%"}}}},data:echartData}]};
