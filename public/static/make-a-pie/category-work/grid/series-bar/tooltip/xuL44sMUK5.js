var fontSize=e=>e;let x=["a","b","c","d"],data=[80,70,60,30];option={backgroundColor:"#012248",grid:{top:"center",left:"center",containLabel:!0},tooltip:{show:!0},xAxis:{show:!0,splitLine:{lineStyle:{color:"none"}},axisLabel:{color:"#fff",textStyle:{fontSize:fontSize(14)}},axisLine:{lineStyle:{color:"#6f8bbb",width:1,type:"none"}}},yAxis:[{type:"category",inverse:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{margin:fontSize(40),textStyle:{align:"left",fontSize:fontSize(14),color:"#fff"}},data:x},{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{fontSize:fontSize(14),color:"#fff"},formatter:"{value}%"},splitArea:{show:!1},splitLine:{show:!1},data}],series:[{type:"bar",itemStyle:{normal:{show:!0,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#6390F0"},{offset:1,color:"#25EBE9"}]),barBorderRadius:15,borderWidth:0,borderColor:"#333"}},label:{normal:{show:!1}},barWidth:"15",data}]};
