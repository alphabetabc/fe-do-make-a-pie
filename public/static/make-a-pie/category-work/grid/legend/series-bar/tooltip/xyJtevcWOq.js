app.title="堆叠条形图",option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]},series:[{name:"直接访问",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},z:10,data:[320,302,301,334,390,330,320]},{name:"邮件营销",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},z:10,data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},z:10,data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},z:10,data:[150,212,201,154,190,330,410]},{name:"搜索引擎",type:"bar",stack:"总量",z:10,label:{normal:{show:!0,position:"insideRight"}},data:[820,832,901,934,1290,1330,1320]}]};function sum(a){let t=0;return option.series.forEach(e=>{t+=e.data[a]}),t}option.series.push({name:"总量",type:"bar",stack:"搜索引擎",barGap:"-100%",label:{normal:{show:!0,position:["101%","40%"],textStyle:{color:"#000"}}},itemStyle:{color:"#cccccc"},data:[sum(0),sum(1),sum(2),sum(3),sum(4),sum(5),sum(6)]}),myChart.setOption(option);