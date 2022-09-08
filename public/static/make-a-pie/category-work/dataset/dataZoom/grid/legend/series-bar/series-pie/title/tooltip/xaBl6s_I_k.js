const source=[["出入口","入场","离场","黑名单车辆"],["A14",416,293,716],["A13",315,173,412],["A12",292,84,353],["A11",183,63,234],["A10",252,94,253],["A09",316,26,484],["A08",245,93,327],["A07",184,78,284],["A06",152,263,495],["A05",261,93,317],["A04",135,129,295],["A03",252,146,359],["A02",231,98,318],["A01",338,63,438]],colorArr=["#49CCFFee","#20D3ABee","#FDD56Aee"],colorAlpha=["#49CCFF88","#20D3AB88","#FDD56A88"],title="合计",piedata=[{name:"入场",value:1834,itemStyle:{normal:{borderWidth:5,shadowBlur:20,borderColor:colorAlpha[0],shadowColor:colorArr[0],color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:colorArr[0]},{offset:1,color:colorAlpha[0]}])}}},{name:"离场",value:325,itemStyle:{normal:{borderWidth:5,shadowBlur:20,borderColor:colorAlpha[1],shadowColor:colorArr[1],color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:colorArr[1]},{offset:1,color:colorAlpha[1]}])}}}];myChart.resize({height:320,width:1112}),option={backgroundColor:"#09252e",dataset:{source},dataZoom:[{type:"slider",yAxisIndex:0,left:"700",top:"100",zoomLock:!0,width:10,height:150,handleSize:0,showDetail:!1,start:100,end:70},{type:"inside",id:"insideY",yAxisIndex:0,start:0,end:30,zoomOnMouseWheel:!1,moveOnMouseMove:!0,moveOnMouseWheel:!0}],grid:{left:350,right:440,top:95,bottom:70},title:[{text:title,subtext:"1350",left:"155",top:"150",subtextStyle:{fontSize:14,fontWeight:"normal",color:"#fff",padding:[10,0]},textStyle:{fontSize:18,fontWeight:"bolder",color:"#fff",padding:[10,0]}}],tooltip:{show:!1,trigger:"axis",axisPointer:{type:"cross"},padding:16},legend:{show:!0,left:293,top:45,itemWidth:12,itemHeight:12,textStyle:{color:"#fff",fontWeight:"bolder"}},color:colorArr,yAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#fff",fontWeight:"bolder"}},xAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitNumber:3,axisLabel:{color:"#fff",fontWeight:"bolder"},splitLine:{lineStyle:{type:"dashed"}}},series:[{type:"bar",name:source[0][1],barWidth:20,stack:!0,encode:{y:0,x:1},itemStyle:{normal:{borderWidth:2,shadowBlur:20,borderColor:colorAlpha[0],shadowColor:colorArr[0],color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:colorArr[0]},{offset:1,color:colorAlpha[0]}])}},label:{normal:{show:!0,color:"#fff",fontWeight:"bolder"}}},{type:"bar",name:source[0][2],barWidth:20,stack:!0,encode:{y:0,x:2},itemStyle:{normal:{borderWidth:2,shadowBlur:20,borderColor:colorAlpha[1],shadowColor:colorArr[1],color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:colorArr[1]},{offset:1,color:colorAlpha[1]}])}},label:{normal:{show:!0,color:"#fff",fontWeight:"bolder"}}},{type:"pie",z:100,radius:["30%","50%"],center:[180,"55%"],data:piedata,tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}"},label:{show:!0,fontSize:12,formatter:`{b}
{c}辆`,fontWeight:"bolder",color:"#fff"}}]};