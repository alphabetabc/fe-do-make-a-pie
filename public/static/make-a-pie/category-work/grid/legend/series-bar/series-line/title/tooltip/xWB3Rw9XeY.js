let data={num:[4312,3601,3920,3596,3389,1312],pct:[34.6,27.31,12.1,10.8,9.6,7.6]},colors=["#1890FF","#27CAFF"],splitNumber=5;option={color:colors,backgroundColor:"#fff",title:{text:"质量问题排列图",x:"center",textStyle:{color:"#2D527C",fontSize:"20",fontWeight:"bold"},subtextStyle:{color:"#2D527C",fontSize:"14",fontWeight:"bold"}},grid:{top:"20%",bottom:"10%",left:"15%",right:"15%"},legend:{top:"9%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",axisTick:{show:!1},axisLabel:{textStyle:{color:"#333333",fontSize:14}},axisLine:{show:!1,lineStyle:{color:"#1890FF"}},data:["外观","包装","尺寸","功能","运输","其他"]},yAxis:[{name:"数量",type:"value",position:"left",min:0,max:5e3,splitNumber,interval:(5e3-0)/splitNumber,splitLine:{lineStyle:{type:"dashed",color:"#707070"}},axisLine:{show:!1},axisTick:{show:!1}},{name:"百分比",type:"value",position:"right",offset:65,min:0,max:100,splitNumber,interval:(100-0)/splitNumber,splitLine:{show:!1},axisLine:{show:!1},axisLabel:{formatter:function(e,t){return parseInt(e)+"%"},textStyle:{color:"#333333",fontSize:14}},axisTick:{show:!1}}],series:[{name:"质量问题数量",type:"bar",barWidth:"40%",data:data.num,label:{show:!0,position:"top",distance:-20,color:"#FFF"}},{name:"质量问题百分比",type:"line",symbol:"circle",symbolSize:10,yAxisIndex:1,data:data.pct,label:{show:!0,position:"top",distance:10,color:"#333333"}}]};