option={title:{text:"图例的展示模型。。。",subtext:"木可"},tooltip:{trigger:"axis"},legend:{data:["邮件营销","联盟广告qweqwe",`
`,"广告A","直接访问","搜索引擎"],formatter:function(t){if(t.length<4){for(var e="",a=0;a<4-t.length;a++)e+="　 ";return t+e}else return t.length>4&&(t=t.substring(0,3),t+="..."),t}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告qweqwe",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"广告A",type:"line",stack:"总量",data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}]};