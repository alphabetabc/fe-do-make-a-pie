app.title="正负条形图",option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["利润1","支出2","收入3"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"value"}],yAxis:[{type:"category",axisTick:{show:!1},data:["周一","周二","周三","周四","周五","周六"]}],series:[{name:"利润1",type:"bar",label:{normal:{show:!0,position:"inside"}},data:[200,170,240,244,200,220]},{name:"收入3",type:"bar",stack:"总量",label:{normal:{show:!0}},data:[320,302,341,374,390,450]},{name:"支出2",type:"bar",stack:"总量",label:{normal:{show:!0,position:"left"}},data:[-120,-132,-101,-134,-190,-230]}]};
