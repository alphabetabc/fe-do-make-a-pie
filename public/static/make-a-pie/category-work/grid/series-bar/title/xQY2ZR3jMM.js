option=app.title="堆叠条形图",option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["直接访问","邮件营销","联盟广告"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:{type:"value"},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]},series:[{name:"直接访问",type:"bar",stack:"总量",itemStyle:{normal:{color:"#23fcff"}},data:[320,302,301,334,390,330,320]},{name:"邮件营销",type:"bar",stack:"总量",itemStyle:{normal:{color:"#34baff"}},data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"bar",stack:"总量",itemStyle:{normal:{color:"#fdee5c"}},data:[220,182,191,234,290,330,310]}]};