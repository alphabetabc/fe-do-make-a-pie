var data=[{month:"1月份",value:100},{month:"2月份",value:90},{month:"3月份",value:200},{month:"4月份",value:150},{month:"5月份",value:230},{month:"6月份",value:135}],bkData=[100,100,100,100,100,100],xData=["1月份","2月份","3月份","4月份","5月份","6月份"];option={backgroundColor:"",color:["#3398DB"],tooltip:{show:!0,trigger:"axis",axisPointer:{type:"line",lineStyle:{opacity:0}},backgroundColor:"rgb(7,55,133)",borderColor:"#0daee9",textStyle:{color:"#fff"}},grid:{left:"5%",right:"5%",bottom:"5%",top:"10%",height:"85%",containLabel:!0,z:22},xAxis:[{type:"category",boundaryGap:!0,gridIndex:0,data:xData,axisLabel:{textStyle:{fontSize:12}},axisLine:{lineStyle:{color:"rgba(0,0,0,.8)"}},axisTick:{show:!1}}],yAxis:[{type:"value",nameTextStyle:{color:"rgb(170,170,170)"},gridIndex:0,axisTick:{show:!1},axisLine:{lineStyle:{}},axisLabel:{color:"rgba(0,0,0,.8)",fontSize:12,formatter:"{value}"},splitLine:{lineStyle:{color:"rgba(255,255,255,.1)"}}},{type:"value",show:!1,gridIndex:0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#95a2aa",fontSize:14,formatter:"{value}"},splitLine:{lineStyle:{color:"rgba(255,255,255,.1)"}}}],series:[{name:"高发事件统计",type:"bar",barWidth:"30%",xAxisIndex:0,yAxisIndex:0,itemStyle:{normal:{color:"#00A2FF"}},label:{show:!0,position:"top"},data,zlevel:11},{name:"背景",type:"bar",barWidth:"30%",xAxisIndex:0,yAxisIndex:1,barGap:"-100%",data:bkData,itemStyle:{normal:{color:"rgba(0,162,255,0.1)",barBorderRadius:[0,0,0,0]}},tooltip:{show:!1},zlevel:9}]};