var gridTop=40,gridBottom=50,gridLeft=80,gridRight=80,gridHeight=window.innerHeight-gridTop-gridBottom,textLineHeight=12;option={grid:{top:gridTop,bottom:gridBottom,left:gridLeft,right:gridRight},xAxis:{type:"category",boundaryGap:!1,data:["11-1","11-2","11-3","11-4","11-5"],splitLine:{show:!0,lineStyle:{type:"dashed"}},axisTick:{show:!1}},yAxis:{type:"value",max:30,interval:10,axisLabel:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLine:{show:!1},axisTick:{show:!1}},series:[{data:[10,0,30,30,20],type:"line",symbolSize:10,label:{show:!0,backgroundColor:"auto",color:"#fff",padding:[4,10],borderRadius:3},itemStyle:{color:"#2277ff",borderWidth:3},lineStyle:{color:"#2277ff"},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0, 158, 168, 0.8)"},{offset:1,color:"rgba(0, 70, 231, 0.4)"}])}}],visualMap:{min:0,max:30,splitNumber:2,color:["#2277ff","#ff0055"],type:"piecewise",show:!1},graphic:{elements:[{type:"text",top:gridTop+gridHeight/3*2.5-textLineHeight/2,left:gridLeft-40,style:{text:"轻度"}},{type:"text",top:gridTop+gridHeight/3*1.5-textLineHeight/2,left:gridLeft-40,style:{text:"中度"}},{type:"text",top:gridTop+gridHeight/3*.5-textLineHeight/2,left:gridLeft-40,style:{text:"重度"}}]}};
