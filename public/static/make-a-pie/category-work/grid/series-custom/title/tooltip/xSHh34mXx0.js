let sourceDataX=[30,40,60,20,66],sourceDataY=[10,12,16,12,6],saleName=["赵","钱","孙","李","周","吴"],data=[],baseStart=0,barGap=20,xStartMemory=0,xEndMemory=0;sourceDataX.forEach((e,t)=>{xStartMemory+=barGap+xEndMemory,data.length===0?(data.push([barGap,barGap*(t+1)+xEndMemory+e,sourceDataY[t],saleName[t]]),xEndMemory+=e):(data.push([barGap*(t+1)+xEndMemory,barGap*(t+1)+xEndMemory+e,sourceDataY[t],saleName[t]]),xEndMemory+=e)}),console.log(data);var colorList=["#466de2","#c0504d","#9bbb59","#604a7b","#948a54","#e46c0b"];data=echarts.util.map(data,function(e,t){return{value:e,itemStyle:{normal:{color:colorList[t]}}}});function renderItem(e,t){var o=t.value(2),l=t.coord([t.value(0),o]),r=t.size([t.value(1)-t.value(0),o]),a=t.style({fill:"#466de2"});return{type:"rect",shape:{x:l[0],y:l[1],width:r[0],height:r[1]},style:a}}option={title:{text:"Profit",left:"center"},tooltip:{},xAxis:[{show:!1,scale:!0},{show:!0,data:["1","2","3","4","5","6"],position:"bottom",offset:10}],yAxis:{},series:[{type:"custom",renderItem,label:{normal:{show:!0,position:"top"}},dimensions:["from","to","profit"],encode:{x:[0,1],y:2,tooltip:[0,1,2],itemName:3},data}]};
