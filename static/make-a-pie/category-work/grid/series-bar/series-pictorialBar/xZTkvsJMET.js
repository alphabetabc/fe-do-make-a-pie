var category=[{name:"林地侵占",value:3},{name:"草地侵占",value:6},{name:"水体侵占",value:7},{name:"建筑物侵占",value:10},{name:"其他",value:12}],total=0;category.forEach(a=>{total+=a.value}),total=15;var totalList=[],datas=[];category.forEach(a=>{datas.push(a.value),totalList.push(total)}),option={xAxis:{max:total,splitLine:{show:!1},axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},grid:{left:95,top:5,right:65,bottom:5,containLabel:!0},yAxis:[{type:"category",inverse:!0,data:category,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}}],series:[{type:"bar",barWidth:16,silent:!0,itemStyle:{normal:{color:"#009cd6"}},label:{normal:{formatter:"{b}",textStyle:{color:"#6f7178",fontSize:14},position:"left",distance:10,show:!0}},data:category,z:1,animationEasing:"elasticOut"},{type:"pictorialBar",itemStyle:{normal:{color:"#fff"}},symbolRepeat:"fixed",symbolMargin:2,symbol:"rect",symbolClip:!0,symbolSize:[3,16],symbolPosition:"start",symbolOffset:[1,-1],symbolBoundingData:this.total,data:totalList,z:2,animationEasing:"elasticOut"},{type:"pictorialBar",symbolBoundingData:total,itemStyle:{normal:{color:"none"}},label:{normal:{formatter:a=>{var t;return t="{f| "+a.data+"}",t},rich:{f:{color:"#009cd6",fontSize:16}},position:"right",distance:5,show:!0}},data:datas,z:0},{name:"外框",type:"bar",barGap:"-111%",data:totalList,barWidth:20,itemStyle:{normal:{color:"transparent",barBorderColor:"#009cd6",barBorderWidth:1}},z:3}]};
