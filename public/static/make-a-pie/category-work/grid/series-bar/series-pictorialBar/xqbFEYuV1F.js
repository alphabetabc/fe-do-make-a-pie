var ellegalCard={nameList:["张三"],valueList:[60],colorList:["#0742B9"],colorList1:["#1BDFFC"],emue:["yellow","red","purple","green","blue"],total:100},category=ellegalCard.nameList.map((t,o)=>({value:ellegalCard.valueList[o],itemStyle:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:ellegalCard.colorList[o]},{offset:1,color:ellegalCard.colorList1[o]}])}})),totalList=[],totalBorderList=[];ellegalCard.nameList.map((t,o)=>{totalList.push({value:ellegalCard.total,itemStyle:{color:ellegalCard.colorList[o]}}),totalBorderList.push({value:ellegalCard.total,itemStyle:{borderColor:"#051C48",color:"#051C48"}})});var datas=[];category.forEach(t=>{datas.push(t.value)}),option={xAxis:{max:ellegalCard.total,splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},grid:{left:"2%",top:"0%",right:"25%",bottom:"0%"},yAxis:[{type:"category",inverse:!0,data:ellegalCard.nameList,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}}],series:[{type:"bar",barWidth:12,barGap:"20%",silent:!0,label:{normal:{formatter:t=>t.name,textStyle:{color:"#ccc",fontSize:14},position:[0,"-20px"],show:!0}},data:category,z:1,animationEasing:"elasticOut"},{type:"pictorialBar",itemStyle:{normal:{color:"#051C48"}},symbolRepeat:"fixed",symbolMargin:5,symbol:"rect",symbolClip:!1,symbolSize:[4,18],symbolPosition:"start",symbolOffset:[0,-1],symbolBoundingData:ellegalCard.total,data:[ellegalCard.total,ellegalCard.total,ellegalCard.total,ellegalCard.total,ellegalCard.total],z:2,animationEasing:"elasticOut"},{type:"pictorialBar",symbolBoundingData:ellegalCard.total,itemStyle:{normal:{color:"none"}},label:{normal:{color:"#ACEAF1",fontSize:12,formatter:t=>{console.log(t);var o;return o=`{${ellegalCard.emue[3]}|${t.data}}`,o+"  /  "+ellegalCard.total+"次"},rich:{yellow:{color:"#0A56C2",fontSize:24,fontWeight:700},red:{color:"#0ABCAF",fontSize:24,fontWeight:700},purple:{color:"#FBA957",fontSize:24,fontWeight:700},green:{color:"#9FE1F4",fontSize:24,fontWeight:700},blue:{color:"#F8F29A",fontSize:24,fontWeight:700}},position:"right",offset:[0,-3],distance:10,show:!0}},data:datas,z:4},{name:"外框",type:"bar",barGap:"-130%",data:totalBorderList,barWidth:20,itemStyle:{color:"#ccc",normal:{barBorderRadius:[5,5,5,5],borderWidth:1}},z:0}]};