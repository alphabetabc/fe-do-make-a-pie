state={dataList:[200,182,191,234,290,330,310],dataArray:[],dataArray2:[]},color1=["#FF3333","#FF7744","#FFCC22","#33FF33","#33CCFF","#7744FF","#E93EFF"],color2=["#FF8888","#FFA488","#FFDD55","#66FF66","#77DDFF","#9F88FF","#E38EFF"],color3=["#FFCCCC","#FFC8B4","#FFEE99","#99FF99","#CCEEFF","#CCBBFF","#F0BBFF"],aar=[],aar2=[],barWidth=30,state.dataList.map((o,a)=>{let t={value:o,itemStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:color1[a]},{offset:.6,color:color2[a]},{offset:1,color:color3[a]}],!1)}};aar.push(Object.assign({},t))}),state.dataList.map((o,a)=>{let t={value:o,itemStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:color1[a]},{offset:.6,color:color2[a]},{offset:1,color:color3[a]}],!1),borderWidth:1,borderColor:color1[a],shadowColor:"rgba(0, 0, 0, 0.2)",shadowBlur:1}};aar2.push(Object.assign({},t))}),state.dataArray=aar,state.dataArray2=aar2,console.log(state),option={backgroundColor:"#010d3a",xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLine:{show:!1,lineStyle:{color:"#fff"}},axisLabel:{show:!0,margin:25,rotate:40,color:"white",fontSize:16},axisTick:{show:!1}},yAxis:{type:"value",axisLine:{lineStyle:{color:"#fff"}},axisLabel:{show:!1},splitLine:{show:!1,lineStyle:{color:"rgba(255,255,255,0.2)",width:2}}},tooltip:{show:!0,orient:"vertical",formatter:"{b0}: {c0}"},series:[{type:"bar",barWidth,z:1,data:state.dataArray},{z:3,type:"pictorialBar",symbolPosition:"start",data:state.dataArray,symbol:"diamond",symbolOffset:[0,"50%"],symbolSize:[barWidth,10],silent:!0},{z:3,type:"pictorialBar",symbolPosition:"end",data:state.dataArray,symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[barWidth,barWidth*.3],silent:!0}]};
