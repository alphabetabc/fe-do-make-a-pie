var colors=["#3A85D3","#5AD8A6","#008000","#5470c6","#61a0a8"];option={color:colors,title:{text:"油耗数据统计对比",subtext:"实时数据",left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){return t[0].name+"<br>"+t[0].marker+"进油功率："+t[0].value+"<br>"+t[1].marker+"净功率："+t[1].value+"<br>"+t[2].marker+"回油功率："+-t[2].value}},legend:{data:["进油功率","净功率","回油功率"],left:"5%"},grid:{left:"3%",right:"4%",bottom:"9%",containLabel:!0},dataZoom:{type:"slider",start:0,end:80},xAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value",axisTick:{show:!1},axisLabel:{formatter:function(t){return t>0?t:-t}}}],series:[{name:"进油功率",type:"bar",stack:"总量",label:{show:!0,position:"inside"},data:[320,302,341,374,390,450,420]},{name:"净功率",type:"bar",label:{show:!0},data:[200,170,240,244,200,220,210]},{name:"回油功率",type:"bar",stack:"总量",label:{show:!0,formatter:function(t){return-t.value}},data:[-120,-132,-101,-134,-190,-230,-210]}]};
