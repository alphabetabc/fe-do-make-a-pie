option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["办理量","办结量"],left:"right",icon:"path://M0,0L0,1L1,1L1,0Z"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:["无权利楼盘新建","无权利楼盘变更","期房转现房","无权利楼盘注销","期房转现房注销","国有建设用地使用权首次登记权籍调查","国有建设用地使用权变更登记权籍调查","宅基地使用权首次登记权籍调查","宅基地使用权变更登记权籍调查","林权权籍调查首次登记","林权权籍调查变更登记"],axisLabel:{color:"#666",margin:12,rotate:-60,formatter:function(e){return e.length>7&&e.length<=10?e.slice(0,7)+`
`+e.slice(7):e.length>10&&e.length<=14?e.slice(0,8)+`
`+e.slice(8):e.length>14?e.slice(0,9)+`
`+e.slice(9):e}},axisLine:{lineStyle:{color:"#EDEDED"}},axisTick:{show:!1}},yAxis:{type:"value",axisLabel:{color:"#666"},axisLine:{lineStyle:{color:"#EDEDED"}},axisTick:{show:!1},splitLine:{show:!1}},color:["#DFE6F3","#5A81CB"],series:[{name:"办结量",type:"bar",stack:"all",barWidth:8,data:[120,132,101,134,90,230,210,132,101,234,290]},{name:"办理量",type:"bar",stack:"all",data:[220,182,191,234,290,330,310,230,210,134,90]}]};
