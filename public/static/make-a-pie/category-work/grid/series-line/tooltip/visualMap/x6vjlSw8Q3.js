let cutYDataIdx=4;const yDataFlow=[10,220,35,400,50,600,700,800,900,1e3],yDataSaturation=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1];let xData=[1,2,3,4,5,6,7,8,9];option={backgroundColor:"#000912",color:["#6DD400","#32C5FF","#E02020","#D6F700","#44D7B6","#8563FF","#B620E0"],tooltip:{trigger:"axis",axisPointer:{textStyle:{color:"#fff"}}},grid:{left:50,right:45,top:40,bottom:30},calculable:!0,visualMap:[{type:"piecewise",show:!1,dimension:0,seriesIndex:0,pieces:[{gt:0,lt:cutYDataIdx,color:"rgba(117,219,110,0.8)"},{gt:cutYDataIdx,lt:xData.length,color:"rgba(117,219,110,0.3)"}]},{type:"piecewise",show:!1,dimension:0,seriesIndex:1,pieces:[{gt:0,lt:cutYDataIdx,color:"rgba(103,117,231,0.8)"},{gt:cutYDataIdx,lt:xData.length,color:"rgba(103,117,231,0.3)"}]}],xAxis:[{type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#90979c"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1}}],yAxis:[{type:"value",axisLabel:{formatter:"{value} %"},splitLine:{show:!1},axisLine:{lineStyle:{color:"#90979c"},show:!1},axisTick:{show:!1},splitArea:{show:!1}},{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#90979c"},show:!1},axisTick:{show:!1},axisLabel:{interval:0},splitArea:{show:!1}}],series:[{name:"整体饱和度",type:"line",data:yDataSaturation,smooth:!0,symbolSize:0,areaStyle:{}},{name:"交通流率",type:"line",yAxisIndex:1,data:yDataFlow,symbolSize:0,smooth:!0,areaStyle:{}}]};
