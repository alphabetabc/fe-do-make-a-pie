var xData=function(){var o=["新福利","溢通公司","南沙巴士","从化分公司","花都恒通","二巴一分","二巴二分","番禺片区","佛广集团","客运旅包"];return o}();option={backgroundColor:"RGBA(7, 28, 51, 1)",legend:{data:["有事","无事","上期有事","上期无事","事故频率","上期事故频率"],left:"15%",top:20,itemWidth:60,itemHeight:30,type:"plain",textStyle:{color:"RGBA(154, 209, 253, 1)"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{borderWidth:0,top:110,bottom:95,textStyle:{color:"#fff"}},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"rgba(255,255,255,.5)"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0,color:"rgba(255,255,255,0.7)",fontSize:18},data:xData}],yAxis:[{type:"value",splitLine:{show:!0,lineStyle:{type:"dashed",color:"RGBA(3, 75, 97, 1)"}},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,color:"rgba(255,255,255,0.5)",fontSize:20},splitArea:{show:!1}},{type:"value",splitLine:{show:!1},min:0,axisLabel:{interval:0,color:"rgba(255,255,255,0.5)",fontSize:20}}],series:[{name:"有事",type:"bar",stack:"1",barMaxWidth:35,barGap:"10%",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(48, 112, 255, 0.6)"},{offset:1,color:"rgba(48, 112, 255, 0.15)"}],global:!1},opacity:1}},data:[16,11,8,14,17,16,11,8,14,17]},{name:"无事",type:"bar",stack:"1",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 215, 255, 0.7)"},{offset:1,color:"rgba(0, 215, 255, 0.1)"}],global:!1},opacity:.9,barBorderRadius:0}},data:[9,7,3,2,6,9,7,3,2,6]},{name:"上期有事",type:"bar",stack:"2",barMaxWidth:35,barGap:"10%",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(186,5,255, 0.6)"},{offset:1,color:"rgba(186,5,255, 0.15)"}],global:!1},opacity:1}},data:[13,19,6,12,15,13,19,6,12,15]},{name:"上期无事",type:"bar",stack:"2",barMaxWidth:35,barGap:"10%",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(237,1,125, 0.6)"},{offset:1,color:"rgba(237,1,125, 0.15)"}],global:!1},opacity:1}},data:[13,19,6,12,15,13,19,6,12,15]},{name:"事故频率",type:"line",yAxisIndex:1,symbolSize:10,symbol:"emptyCircle",itemStyle:{normal:{color:"rgba(192, 0, 255, 1)",barBorderRadius:"100%"},borderWidth:5},lineStyle:{normal:{width:3,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(192, 0, 255, 0.5)"},{offset:1,color:"rgba(192, 0, 255, 0.5)"}],global:!1}}},data:[25,20,16,10,5,25,20,16,10,5]},{name:"上期事故频率",type:"line",symbolSize:10,yAxisIndex:1,symbol:"emptyCircle",itemStyle:{normal:{color:"rgba(0, 255, 180, 1)",barBorderRadius:"100%"},borderWidth:5},lineStyle:{normal:{width:3,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 255, 180, 0.5)"},{offset:1,color:"rgba(0, 255, 180, 0.5)"}],global:!1}}},data:[25,15,26,9,17,25,15,26,9,17]}]};