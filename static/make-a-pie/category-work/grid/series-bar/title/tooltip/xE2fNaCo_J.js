function formatNumber(t,e=0){return new Intl.NumberFormat(void 0,{minimumFractionDigits:e,maximumFractionDigits:e}).format(t)}option={title:{left:"center",top:"10px",text:"飞书office ARR",textStyle:{fontSize:14,color:"rgba(0, 0, 0, 0.85)",fontWeight:"bold"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",splitLine:{show:!1},data:["2020-12-31",`1&2
双月`,`3&4
双月`,`5&6
双月`,`7&8
双月`,`9&10
双月`,`11&12
双月`,"总计"],axisLabel:{interval:0}},yAxis:{name:"ARR: 单位(万元)",type:"value"},series:[{name:"Placeholder",type:"bar",barWidth:40,stack:"Total",itemStyle:{borderColor:"transparent",color:"transparent"},emphasis:{itemStyle:{borderColor:"transparent",color:"transparent"}},data:[0,1e3,2e3,3e3,4500,6800,11300,0]},{name:"ARR金额",type:"bar",barWidth:40,stack:"Total",label:{show:!0,position:"top",formatter:t=>formatNumber(t.value)},data:[1e3,1e3,1e3,1500,2300,4500,6500,17800]}],animation:!1};
