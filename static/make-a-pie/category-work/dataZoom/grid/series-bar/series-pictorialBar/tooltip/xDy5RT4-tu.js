let backgroundColor="rgba(0,0,0,1)",chartData=[[0,20,333,0],["AAA","BBB","CCC","DDD"]],getmydmc=chartData[1],getmyd=chartData[0],getmydzd=[],big=0;getmyd.forEach(e=>{e===void 0||e===""||e===0?big=100:big<Number(e)&&(big=Number(e))});for(let e=0;e<getmyd.length;e++)getmydzd.push(big*4);function calMax(e){let o=0;return e.forEach(a=>{a.forEach(t=>{t===void 0||t===""||t===0?o==100:o<Number(t)&&(o=Number(t))})}),Math.ceil(o/9.5)*10}const max=Math.ceil(calMax([getmyd])/10)*10;option={backgroundColor,grid:{left:"10%",right:"10%",bottom:"0%",top:"5%"},tooltip:{formatter:e=>{if(e.name!=="")return e.name+" : "+getmyd[e.dataIndex]},textStyle:{align:"left"}},xAxis:[{type:"value",axisLabel:{show:!1,color:"#fff",formatter:function(e){return e+""},textStyle:{fontSize:"13"}},min:0,max,interval:max/5,splitNumber:5,splitLine:{show:!1,lineStyle:{color:"#fff"}},axisLine:{show:!1,lineStyle:{color:"#fff",width:1,opacity:.3}},axisTick:{show:!1}},{type:"value",axisLabel:{show:!1},min:0,max,interval:max/10,splitNumber:10,splitLine:{show:!1,lineStyle:{type:"dashed",color:"#D8D8D8"}},axisLine:{show:!1,lineStyle:{color:"#fff"}},axisTick:{show:!1}}],yAxis:[{inverse:!1,data:getmydmc,axisLabel:{padding:[0,0,20,-10],inside:!0,textStyle:{fontSize:14,fontFamily:"PingFang SC",fontWeight:400,color:"#d2d2d2",align:"left",textShadowColor:"#00d6ff",textShadowOffsetX:0,textShadowOffsetY:0,textShadowBlur:5},formatter:`{value}
{a|占位}`,rich:{a:{color:"transparent",lineHeight:30,fontFamily:"digital",fontSize:14}}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},{gridIndex:0,splitLine:"none",axisTick:"none",axisLine:"none",data:getmyd,inverse:!1,axisLabel:{show:!0,verticalAlign:"bottom",align:"right",padding:[0,10,18,0],textStyle:{color:"#fff",fontSize:"14"},formatter:function(e){return"{x|"+e+"}"},rich:{y:{color:"#3dffef",fontFamily:"Orbitron",fontSize:14},x:{color:"#3dffef",fontFamily:"Orbitron",fontSize:14}}}}],dataZoom:[{type:"inside",show:!0,height:15,start:1,end:100,orient:"vertical",zlevel:66}],series:[{name:"值",type:"bar",padding:10,xAxisIndex:0,label:{show:!1,position:"right",textStyle:{color:"#fff",fontSize:14}},itemStyle:{normal:{borderRadius:0,color:{colorStops:[{offset:0,color:"#46B7ED"},{offset:1,color:"#48EDD3"}]}}},barWidth:18,data:getmyd,z:0},{type:"pictorialBar",symbolRotate:"-25",itemStyle:{normal:{color:"rgba(1, 12, 38, 0.4)"}},symbolRepeat:"fixed",symbolMargin:6,symbol:"rect",symbolClip:!0,symbolSize:[5,22],symbolPosition:"start",symbolOffset:[0,-2],data:getmyd,z:66,animationEasing:"elasticOut"},{name:"背景",type:"bar",barWidth:24,barGap:"-118%",data:getmydzd,itemStyle:{normal:{color:"rgba(5,59,113,0.7)",borderRadius:0,borderColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#015EFE"},{offset:1,color:"#10C2E8"}],!1)}},z:-1},{type:"pictorialBar",name:"左内边框",symbol:"rect",symbolSize:[3,22],symbolOffset:[0,-2],animation:!1,itemStyle:{normal:{color:"rgba(5,59,113,1)"},opacity:1},z:99,data:new Array(getmyd.length).fill(1)}]};