app.title="正负条形图",option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["扣篮","三分","上篮"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"value"}],yAxis:[{type:"category",axisTick:{show:!1},data:["周一","周二","周三","周四","周五"]}],series:[{name:"扣篮",type:"bar",label:{normal:{show:!0,position:"inside"}},data:[170,240,244,200,210]},{name:"上篮",type:"bar",stack:"总量",label:{normal:{show:!0}},data:[320,302,341,374,390]},{name:"三分",type:"bar",stack:"总量",label:{normal:{show:!0,position:"left"}},data:[-120,-132,-101,-134,-190]}]};