option={title:{text:"折线图堆叠"},tooltip:{trigger:"axis",formatter:function(e){var o="";console.log(e);for(var t=0;t<e.length;t++)e[t].seriesName!="搜索引擎1"&&(o+=e[t].seriesName+":"+e[t].value+"</br>");return o}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日","周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",smooth:!0,symbol:"image://https://www.baidu.com/img/bd_logo1.png",data:[120,132,101,134,90,230,210,120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",smooth:!0,data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",smooth:!0,data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",smooth:!0,data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",smooth:!0,data:[820,932,901,934,1290,1330,1320]},{name:"搜索引擎1",type:"bar",data:[0,0,0,0,0,0,1500,0,0,0,0,0,0,1500],itemStyle:{normal:{color:"#000",borderColor:"#000",borderWidth:0,borderType:"solid",barBorderRadius:0,shadowColor:"#000",shadowOffsetX:0,shadowOffsetY:0,opacity:.5}}}]};
