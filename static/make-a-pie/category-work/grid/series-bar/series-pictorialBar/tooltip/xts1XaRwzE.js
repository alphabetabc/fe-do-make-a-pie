const barColors=["#2aa7ff","#fde943","#33ffbb","#FF7D34","#ec6565"];option={backgroundColor:"#0E1327",tooltip:{trigger:"axis",textStyle:{align:"left",color:"#fff",textStyle:{align:"left",color:"#fff"},backgroundColor:"rgba(16, 32, 40, 0.88)",borderRadius:4,borderColor:"#20749e"},axisPointer:{type:"shadow"},formatter:t=>t[0].marker+t[0].name+": "+t[0].value},grid:{left:"5%",right:"0%",top:"20%",bottom:"5%",containLabel:!0},xAxis:{type:"category",boundaryGap:!0,axisLabel:{color:"rgba(230, 246, 255, 0.6)",fontSize:14,interval:0,width:60,overflow:"truncate"},axisLine:{width:1,type:"solid",color:"rgba(230, 246, 255, 0.49)"},axisTick:null,data:["党委","工委"]},yAxis:[{splitNumber:3,name:"个",nameTextStyle:{color:"rgba(230, 246, 255, 0.8)",fontSize:14,padding:[0,40,0,0]},axisTick:{show:!0,inside:!0},axisLine:{show:!0},minorTick:{show:!0},splitLine:{lineStyle:{type:"dashed",color:"rgba(230, 246, 255, 0.3)"}},axisLabel:{color:"rgba(230, 246, 255, 0.6)",fontSize:14}}],series:[{type:"pictorialBar",symbol:"rect",symbolSize:["70%",3],symbolOffset:[0,2],z:11,itemStyle:{color:function(t){return barColors[t.dataIndex]}},data:[83,41]},{type:"bar",itemStyle:{color:function(t){return barColors[t.dataIndex]},opacity:.4},label:{show:!0,position:"insideBottom",distance:20,fontSize:14,color:"inherit"},z:12,silent:!0,barWidth:"49%",data:[83,41]}]};