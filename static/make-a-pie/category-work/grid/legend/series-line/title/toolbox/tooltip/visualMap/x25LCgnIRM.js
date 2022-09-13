option={title:{text:"堆叠区域图"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],visualMap:{top:50,right:10,pieces:[{gt:0,lte:50,symbol:"pin",color:"#93CE07"},{gt:50,lte:100,symbolSize:4,symbol:"diamond",color:"#FBDB0F"},{gt:100,lte:150,symbol:"circle",color:"#FC7D02"},{gt:150,lte:200,color:"#FD0100"},{gt:200,lte:300,symbol:"diamond",color:"#AA069F"},{gt:300,color:"#AC3B2A"}],itemSymbol:"diamond"},series:[{name:"邮件营销",type:"line",stack:"总量",symbolSize:10,areaStyle:{},symbol:"circle",emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]};