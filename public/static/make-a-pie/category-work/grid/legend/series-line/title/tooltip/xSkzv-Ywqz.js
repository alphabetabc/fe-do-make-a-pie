option={backgroundColor:"#FFFFFF",title:{text:"检主体查数、违规主体数对比(食品销售)"},tooltip:{trigger:"axis"},grid:{left:"30%",right:"32%",top:"30%",bottom:"45%",containLabel:!0},color:["#a4d8cc","#78d6ef"],legend:{top:"25%",data:["检查主体数","违法违规主体数"]},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,axisLabel:{interval:{default:0},rotate:50,formatter:function(e){var a="",t=e.length,r=4,l=Math.ceil(t/r);if(t>r){var o="";o=e.substring(0,4),a=o+"..."}else a=e;return a}},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]}],yAxis:{type:"value",min:0,max:800},series:[{name:"检查主体数",type:"line",areaStyle:{normal:{type:"default",color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00af87"},{offset:1,color:"#66FFCC"}],!1)}},smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[534,601,526,704,683,556,779,542,666,714,756,727]},{name:"违法违规主体数",type:"line",areaStyle:{normal:{type:"default",color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(19, 37, 250,0.2)"},{offset:1,color:"rgba(19, 37, 250,0.2)"}],!1)}},smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[247,184,178,206,195,238,167,151,169,231,151,206]}]};