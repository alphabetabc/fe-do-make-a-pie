option={title:{text:"折线图堆叠"},tooltip:{trigger:"axis"},legend:{data:["电话营销","邮件营销","联盟广告"],selected:{电话营销:!1,邮件营销:!0,联盟广告:!0}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"电话营销",type:"line",stack:"总量",data:[90,12,78,99,35,321,34]},{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]}]};function isAllUnselected(t){var a=0;for(var e in t)!t.hasOwnProperty(e)||t[e]===!0&&++a;return a===0}function getLast(t){var a=0,e=[];for(var r in t)!t.hasOwnProperty(r)||t[r]===!0&&(++a,e.push(r));return e[0]}var lastName="";myChart.on("legendselectchanged",function(t){var a=t.selected,e=getLast(a);if(lastName=e||lastName,isAllUnselected(a)){alert("至少选中一个legend！");var r={};r[lastName]=!0,myChart.setOption({legend:{selected:r}})}});