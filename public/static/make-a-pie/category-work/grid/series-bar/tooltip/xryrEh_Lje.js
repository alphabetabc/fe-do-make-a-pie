app.title="坐标轴刻度与标签对齐",option={tooltip:{trigger:"item",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["服务类","货物类","服务类","投融资类","其他"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{type:"bar",barWidth:"60px",data:[10,52,200,334,330],itemStyle:{normal:{color:function(t){var a=["#91c7ae","#c23531","#2f4554","#61a0a8","#d48265"];return a[t.dataIndex]}}},label:{normal:{show:!0,position:"top",formatter:"{c}"}}}]};
