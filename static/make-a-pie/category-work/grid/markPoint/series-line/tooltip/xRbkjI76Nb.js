app.title="百度知道回答，如何设置折线图只显示最大值数值",data1=[10,52,200,334,390,330,220],option={color:["#3398DB"],tooltip:{trigger:"item",formatter:function(t){return relVal=t.data+"，环比增长",relVal+=t.dataIndex===0?"未知":((t.data-data1[t.dataIndex-1])*100/data1[t.dataIndex-1]).toFixed(2)+"%",relVal}},grid:[{left:"3%",right:"4%",bottom:"47%",containLabel:!0},{top:"58%",left:"3%",right:"4%",bottom:"3%",containLabel:!0}],xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}},{gridIndex:1,type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"},{gridIndex:1,type:"value"}],series:[{name:"直接访问",type:"line",barWidth:"60%",markPoint:{data:[{name:"最大值",type:"max"}]},data:data1},{name:"直接访问",type:"line",barWidth:"60%",xAxisIndex:1,yAxisIndex:1,label:{show:!0,formatter:function(t){let a=0;for(let e in data1)a=data1[e]>data1[a]?e:a;return t.dataIndex==a?t.data:""}},data:data1}]};
