app.title="百度知道回答，自定义tooltip环比增长",data1=[10,52,200,334,390,330,220],option={color:["#3398DB"],tooltip:{trigger:"item",formatter:function(t){return relVal=t.data+"，环比增长",relVal+=t.dataIndex===0?"未知":((t.data-data1[t.dataIndex-1])*100/data1[t.dataIndex-1]).toFixed(2)+"%",relVal}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"直接访问",type:"bar",barWidth:"60%",data:data1}]};