var colorBlue=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#155fe7"},{offset:1,color:"#40b0f6"}],!1),showData={yRealData:[70,55,80],yData:[100,100,100]},itemStyles={};option={grid:{top:"10%",left:"8%",right:"8%",bottom:"15%",containLabel:!0},xAxis:{type:"value",axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},yAxis:{type:"category",boundaryGap:!0,axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},data:showData.xData},series:[{name:"销售量",barWidth:25,type:"bar",barCategoryGap:1,zlevel:2,data:showData.yRealData.map(a=>(itemStyles={color:colorBlue},{value:a,itemStyle:itemStyles}))},{barGap:"-100%",type:"bar",barWidth:25,barCategoryGap:2,color:"#4f75ad",zlevel:1,data:showData.yData}]};