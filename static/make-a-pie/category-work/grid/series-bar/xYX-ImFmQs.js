const hexToRgba=(e,a)=>{let t="";return/^#[\da-f]{6}$/i.test(e)&&(t=`rgba(${parseInt("0x"+e.slice(1,3))},${parseInt("0x"+e.slice(3,5))},${parseInt("0x"+e.slice(5,7))},${a})`),t};let xData=["模型NAME1","模型NAME2","模型NAME3","模型NAME4"],yData=[4757,3254,2454,2011,1654],max=Math.max(...yData),labelColor=["#FD5360","#FF962B","#FFAA00"],emptyData=yData.map((e,a)=>{let t=a>2?"#2C6CD1":labelColor[a];return{value:max,label:{formatter:"{a|"+e+"}",position:"right",distance:20,rich:{a:{color:t,borderColor:t,borderWidth:1,borderType:"dashed",padding:[0,0,2,0],width:60,height:18,align:"center",verticalAlign:"middle",backgroundColor:hexToRgba(t,.05)}}}}}),xDataFormat=xData.map((e,a)=>{let t=a>2?"#2C6CD1":labelColor[a];return{value:e,textStyle:{rich:{a:{color:t,width:20,height:20,align:"center",verticalAlign:"middle",backgroundColor:"#fff",borderRadius:10,borderColor:hexToRgba(t,.2),borderWidth:1,shadowColor:hexToRgba(t,.1),shadowBlur:5},b:{padding:[0,5]},value:{color:"#2C6CD1"}}}}});xData.reverse(),xDataFormat.reverse(),yData.reverse(),emptyData.reverse(),option={backgroundColor:"#fff",grid:{top:"5%",left:"1%",right:"15%",bottom:"3%",containLabel:!0},xAxis:[{type:"value",splitLine:{show:!0,lineStyle:{width:0,color:"#C7DEFF"}},max:function(e){return e.max},axisLine:{lineStyle:{width:2,color:"#C7DEFF"}},axisLabel:{color:"#2C6CD1"},axisTick:{show:!1}}],yAxis:[{type:"category",name:"",axisTick:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{width:2,color:"#C7DEFF"}},axisLabel:{formatter:function(e){return" {b|}{value|"+e+"}"}},data:xDataFormat},{type:"category",name:"",axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},axisLine:{show:!1},data:xData}],series:[{type:"bar",barWidth:40,yAxisIndex:1,itemStyle:{normal:{color:"rgba(225,225,225,0.4)"},emphasis:{color:"rgba(225,225,225,0.4)"}},label:{show:!0,position:"right",formatter:function(e){console.log(e)}},data:emptyData},{type:"bar",barWidth:40,zlevel:1,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#3B6ECA"},{offset:1,color:"#C2E0FC"}],!1)}},data:yData}]};
