let colors=["#1F75F3","#26C7E0","#F7B500"];option={color:colors,tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{type:"solid"}}},legend:{zlevel:2,data:["data1","data2","data3"],left:"auto",align:"auto",textStyle:{fontSize:13},icon:"roundRect",itemWidth:14,itemHeight:14,itemGap:40,borderRadius:4,padding:[12,15]},xAxis:[{type:"category",boundaryGap:["5%","5%"],data:["5月1日","5月2日","5月3日","5月4日","5月5日","5月6日","5月7日"],axisTick:{show:!0,alignWithLabel:!0}}],yAxis:[{type:"value",max:500,min:0,axisLabel:{interval:0,textStyle:{fontSize:15}},axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{width:1}}},{type:"value",min:0,max:500,nameTextStyle:{color:"#ebf8ac"},position:"right",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:"rgba(204,209,215,.5)"}},axisLabel:{show:!0,formatter:"{value}",textStyle:{fontSize:15,color:"rgba(249,240,255,.85)"}}}],series:[{name:"data3",type:"line",symbol:"emptyCircle",symbolSize:3,showSymbol:!1,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#1F75F3 "},{offset:1,color:"#1F75F3 "}]},opacity:1},lineStyle:{width:0},emphasis:{focus:"series"},data:[120,252,191,234,51,35,31]},{name:"data2",type:"line",symbol:"emptyCircle",symbolSize:3,showSymbol:!1,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#26C7E0"},{offset:1,color:"#0F2E5D"}]},opacity:1},lineStyle:{width:0},emphasis:{focus:"series"},data:[102,232,201,154,190,21,410]},{name:"data1",type:"line",symbol:"emptyCircle",symbolSize:3,showSymbol:!1,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#FFD36B"},{offset:1,color:"#BF9100"}]},opacity:1},lineStyle:{width:0},emphasis:{focus:"series"},data:[125,212,101,134,90,230,210]}]};