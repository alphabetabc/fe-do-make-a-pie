let data2=[{name:"total",color:"gray",spin:-1,data:[[-1.8444,-2.389968],[-.3729,-1.280568],[-3.4784,1.049232],[-1.9137,4.044732]]}],symbolSize=1,series=[],color=[],xw=24,yh=10;data2[0].data.forEach(e=>{let i=e[0];return e=[e[1],i],console.log(e),e}),console.log(data2[0].data),data2.forEach((e,i)=>{color.includes(e.color)||color.push(e.color);let t={name:e.name,type:"line",smooth:!0,yAxisIndex:2,xAxisIndex:2,symbolSize,lineStyle:{color:e.color},data:e.data,areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"blue"},{offset:1,color:"red"}])},markLine:{symbol:"none",label:{show:!0},lineStyle:{type:"solid",color:"#53A58A",width:1.5},data:[{xAxis:"5.35"}]}};series.push(t)}),option={title:{text:"y轴放大"},dataZoom:[{type:"inside",yAxisIndex:0}],xAxis:[{data:[""],show:!1,name:"x1",gridIndex:0,axisLine:{show:!1}},{data:[""],show:!1,name:"x2",gridIndex:0,axisLine:{show:!1}},{type:"value",name:"E-Ef (eV)",nameLocation:"middle",nameTextStyle:{fontSize:18,fontFamily:"Times New Roman"},nameGap:25,boundaryGap:!0,splitLine:{show:!1},min:-(xw/2),max:xw/2,position:"bottom",splitArea:{interval:2,show:!1},axisLine:{fontSize:18,show:!0,lineStyle:{type:"dashed"}},axisTick:{length:6,show:!0,lineStyle:{},inside:!0},minorTick:{show:!0,length:3,splitNumber:2,lineStyle:{}},axisLabel:{fontWeight:700,color:"#000000"}},{min:-(xw/2),max:xw/2,position:"top",axisTick:{length:6,show:!0,inside:!0,lineStyle:{}},minorTick:{show:!0,length:3,splitNumber:2,lineStyle:{}},axisLabel:{show:!1},splitLine:{show:!1}}],yAxis:[{data:[""],show:!0,name:"y0",gridIndex:0,axisLine:{show:!0}},{data:[""],show:!1,name:"y1",gridIndex:0,axisLine:{show:!0}},{type:"value",name:"Density of states",position:"left",nameLocation:"middle",nameTextStyle:{fontSize:18,fontFamily:"Times New Roman"},nameGap:35,axisLine:{lineStyle:{type:"dashed"}},min:-(yh/2),max:yh/2,axisTick:{show:!0,inside:!0,length:6,lineStyle:{}},minorTick:{show:!0,length:3,splitNumber:2,lineStyle:{}},splitLine:{show:!1},axisLabel:{inside:!1,formatter:`{value}
`,fontWeight:700,color:"#000000"}},{type:"value",position:"right",name:"y4",min:-(yh/2),max:yh/2,axisTick:{inside:!0,length:6,show:!0,lineStyle:{}},minorTick:{show:!0,length:3,splitNumber:2,lineStyle:{}},axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{type:"dashed"}}}],series};
