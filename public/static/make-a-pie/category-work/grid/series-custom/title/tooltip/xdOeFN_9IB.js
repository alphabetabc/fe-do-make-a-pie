var data=[[10,16,.3,"A"],[16,18,.15,"B"],[18,26,.12,"C"],[26,32,.22,"D"],[32,56,.077,"E"],[56,62,.17,"F"]],colorList=["#4f81bd","#c0504d","#9bbb59","#604a7b","#948a54","#e46c0b"];data=echarts.util.map(data,function(t,e){return{value:t,itemStyle:{normal:{color:colorList[e]}}}});function renderItem(t,e){var r=e.value(2),o=e.coord([e.value(0),r]),a=e.size([e.value(1)-e.value(0),r]),l=e.style();return{type:"rect",shape:{x:o[0],y:o[1],width:a[0],height:a[1]},style:l}}option={title:{text:"利润池",left:"center"},tooltip:{},xAxis:{scale:!0,show:!0},yAxis:{},series:[{type:"custom",renderItem,label:{normal:{show:!0,formatter:function(t){return t.data.value[3]+":"+t.data.value[2]*100+"%"},color:"#000000",position:"top"}},dimensions:["from","to","profit"],encode:{x:[0,1],y:2,tooltip:[0,1,2],itemName:3},data}]};
