app.title="bar-plot";var plotData=[20,62,210,344,400,340,230];function renderPlotItem(r,t){var o=t.value(0),a=t.size([0,0])[0]*.85,e=t.coord([t.value(0),t.value(1)]);return{type:"line",shape:{x1:e[0]-a/2,x2:e[0]+a/2,y1:e[1],y2:e[1]},style:t.style({fill:null,stroke:t.visual("color"),lineWidth:2})}}option={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"访问人数",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]},{type:"custom",name:"Plot",renderItem:renderPlotItem,encode:{x:0,y:1},data:plotData}]};