let datas={yData1:[502.84,205.97,332.79,281.55,398.35,214.02],yData2:[501.84,105.97,132.79,281.55,298.35,114.02],xData:["A","B","C","D","E","F"],legend:["今年","去年"]},xData=datas.xData,yData1=datas.yData1,yData2=datas.yData2,legend=datas.legend,color=["#00B795","#4aa3f0"],textColor="#0172E4",axisLineColor="#0172E4",legendTextColor="#003A76",fontSize=16;option={tooltip:{trigger:"axis",axisPointer:{}},legend:{icon:"rect",itemWidth:50,itemHeight:2,itemGap:250,bottom:"3%",textStyle:{color:legendTextColor,fontSize,padding:[50,10,10,-45]},data:legend},xAxis:[{show:!0,type:"category",axisLine:{show:!0,lineStyle:{color:axisLineColor}},splitArea:{show:!1},axisLabel:{color:textColor},splitLine:{show:!1},axisTick:{show:!1},boundaryGap:!1,data:xData}],grid:{x:"5%",y:"5%",x2:"5%",y2:"15%",borderWidth:1},yAxis:[{type:"value",splitLine:{show:!0,lineStyle:{color,type:"dashed"}},axisLine:{show:!0,lineStyle:{color:axisLineColor}},axisLabel:{show:!0,textStyle:{color:textColor}},axisTick:{show:!1}},{type:"value",splitLine:{show:!0,lineStyle:{color,type:"dashed"}},axisLine:{show:!0,lineStyle:{type:"dashed",color:axisLineColor}},axisLabel:{show:!0,textStyle:{color:textColor}},axisTick:{show:!1}}],series:[{name:legend[0],type:"line",smooth:!1,showAllSymbol:!1,symbol:"circle",symbolSize:2,lineStyle:{normal:{color:color[0]}},itemStyle:{color:color[0]},data:yData1},{name:legend[1],type:"line",yAxisIndex:1,smooth:!1,showAllSymbol:!1,symbol:"circle",symbolSize:2,lineStyle:{normal:{color:color[1]}},itemStyle:{color:color[1]},data:yData2}]};
