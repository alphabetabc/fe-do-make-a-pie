var colors=["#3A85D3","#5AD8A6","#5470c6","#008000","#61a0a8"];option={title:{text:"柱状图设计1-带滑动条、柱子带圆弧角"},color:colors,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["直接访问","线下访问"],align:"right",right:10},grid:{left:"3%",right:"4%",bottom:"8%",containLabel:!0},dataZoom:{type:"slider",start:0,end:80},xAxis:[{type:"category",data:["Mon","Tue飞飞飞","Wed","Thu","Fri","Sat","Sun","8月","9月","10月","11月","12月"],axisTick:{alignWithLabel:!0},axisLabel:{rotate:45}}],yAxis:[{type:"value"}],series:[{name:"直接访问",type:"bar",itemStyle:{barBorderRadius:[10,10,0,0]},barWidth:"30%",data:[10,52,200,334,390,330,220,34,67,12,123,255]},{name:"线下访问",type:"bar",barWidth:"30%",data:[10,66,98,289,370,310,200,134,67,12,123,240]}]};
