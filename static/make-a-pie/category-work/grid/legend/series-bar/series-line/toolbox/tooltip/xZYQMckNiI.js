app.title="断线图",option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){var t,a;return e[0].value!="-"||e[2].value!="-"?(t=e[0],a=e[2]):t=e[1],t.name+"<br/>"+e[1].seriesName+" : "+t.value+"<br/>"+a.seriesName+" : "+a.value}},toolbox:{feature:{saveAsImage:{}}},legend:{data:["目标值","实际值"],itemHeight:4},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],barGap:0,series:[{name:"目标1值",type:"bar",barWidth:"100%",stack:"广告",data:[120,120,120,140,140,140,210],itemStyle:{color:"transparent"},label:{normal:{show:!0,position:"top"}}},{name:"目标值",type:"bar",barWidth:"100%",stack:"广告",data:[1,1,1,1,1,1,1]},{name:"实际值",type:"line",data:[60,30,79,100,200,300,100]}]};
