option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"53%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",axisLabel:{formatter:"{value}(百万元)"},data:["周一","周二","周三","周四","周五","周六","周日"]},series:[{name:"直接访问",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[320,302,301,334,390,330,320]},{name:"邮件营销",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[150,212,201,154,190,330,410]},{name:"搜索引擎",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight",offset:[35,0],formatter:function(a){return a.value+"     "+a.dataIndex+"%"}}},data:[820,832,901,934,1290,1330,1320]},{name:"饼图",type:"pie",center:["25%","75%"],radius:[10,"15%"],data:[{name:"示意1",value:1},{name:"示意2",value:2}]}]},dataDetails=[["类型","星期","明细"],["直接访问","周一",[{name:"a",value:1},{name:"b",value:2}]],["直接访问","周二",[{name:"a",value:1},{name:"b",value:2}]],["直接访问","周三",[{name:"a",value:1},{name:"b",value:2}]],["直接访问","周四",[{name:"a",value:1},{name:"b",value:2}]],["直接访问","周五",[{name:"a",value:1},{name:"b",value:2}]],["直接访问","周六",[{name:"a",value:1},{name:"b",value:2}]],["直接访问","周日",[{name:"a",value:1},{name:"b",value:2}]],["邮件营销","周一",[{name:"a",value:1},{name:"b",value:2}]],["邮件营销","周二",[{name:"a",value:1},{name:"b",value:2}]],["邮件营销","周三",[{name:"a",value:1},{name:"b",value:2}]],["邮件营销","周四",[{name:"a",value:1},{name:"b",value:2}]],["邮件营销","周五",[{name:"a",value:1},{name:"b",value:2}]],["邮件营销","周六",[{name:"a",value:1},{name:"b",value:2}]],["邮件营销","周日",[{name:"a",value:1},{name:"b",value:2}]],["联盟广告","周一",[{name:"a",value:1},{name:"b",value:2}]],["联盟广告","周二",[{name:"a",value:1},{name:"b",value:2}]],["联盟广告","周三",[{name:"a",value:1},{name:"b",value:2}]],["联盟广告","周四",[{name:"a",value:1},{name:"b",value:2}]],["联盟广告","周五",[{name:"a",value:2},{name:"b",value:2}]],["联盟广告","周六",[{name:"a",value:2},{name:"b",value:2}]],["联盟广告","周日",[{name:"a",value:2},{name:"b",value:2}]],["视频广告","周一",[{name:"a",value:2},{name:"b",value:2}]],["视频广告","周二",[{name:"a",value:2},{name:"b",value:2}]],["视频广告","周三",[{name:"a",value:2},{name:"b",value:2}]],["视频广告","周四",[{name:"a",value:2},{name:"b",value:2}]],["视频广告","周五",[{name:"a",value:2},{name:"b",value:2}]],["视频广告","周六",[{name:"a",value:2},{name:"b",value:2}]],["视频广告","周日",[{name:"a",value:2},{name:"b",value:2}]],["搜索引擎","周一",[{name:"a",value:3},{name:"b",value:2}]],["搜索引擎","周二",[{name:"a",value:3},{name:"b",value:2}]],["搜索引擎","周三",[{name:"a",value:3},{name:"b",value:2}]],["搜索引擎","周四",[{name:"a",value:3},{name:"b",value:2}]],["搜索引擎","周五",[{name:"a",value:3},{name:"b",value:2}]],["搜索引擎","周六",[{name:"a",value:3},{name:"b",value:2}]],["搜索引擎","周日",[{name:"a",value:3},{name:"b",value:2}]]],myChart.on("click",function(a){if(a.componentType==="series"&&a.seriesType==="bar"){alert("params.seriesName："+a.seriesName+"|params.name："+a.name);for(var e=1;e<dataDetails.length;e++)dataDetails[e][0]===a.seriesName&&dataDetails[e][1]===a.name&&myChart.setOption({series:[{name:"饼图",data:dataDetails[e][2]}]})}});