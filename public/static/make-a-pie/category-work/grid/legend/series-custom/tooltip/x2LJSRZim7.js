var fontSize=e=>e;json=[{service:"a",low:10,high:20},{service:"b",low:5,high:90},{service:"c",low:80,high:100},{service:"d",low:50,high:60}];let data=[],categoryData=[];for(let e=0;e<json.length;e++)categoryData.push(json[e].service),data.push([json[e].service,json[e].low,json[e].high]);let renderItem=(e,t)=>{let s=t.value(0),l=t.coord([t.value(1),s]),o=t.coord([t.value(2),s]),i=t.style({stroke:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#d3d3d3"},{offset:1,color:"#27bbfe"}])}),r=t.style({fill:"#d3d3d3"}),a=t.style({fill:"#27bbfe"});return{type:"group",children:[{type:"line",shape:{y1:l[1],x1:l[0],y2:o[1],x2:o[0]},style:i},{type:"circle",shape:{cy:o[1],cx:o[0],r:fontSize(5)},style:a},{type:"circle",shape:{cy:l[1],cx:l[0],r:fontSize(5)},style:r}]}};option={backgroundColor:"#012248",color:["#d3d3d3","#27bbfe"],legend:{show:!0,icon:"circle",itemWidth:10,itemHeight:10,itemGap:9,left:"center",top:"20%",textStyle:{fontSize:fontSize(14),color:"#ffffff"},data:["low","high"]},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:e=>e[0].value[0]+"<br/>low："+e[0].value[1]+"<br/>high："+e[0].value[2]},xAxis:{axisLine:{symbol:["none","arrow"],symbolSize:[5,10],lineStyle:{color:"#00c7ff",type:"dotted"}},axisLabel:{showMinLabel:!1,showMaxLabel:!1,textStyle:{fontSize:fontSize(14),color:"#ffffff"}},splitLine:{show:!1},axisTick:{show:!1}},yAxis:{data:categoryData,axisLine:{show:!1},axisLabel:{margin:fontSize(30),textStyle:{fontSize:fontSize(14),color:"#ffffff"}},splitLine:{show:!1},axisTick:{show:!1}},grid:{top:"center",left:"center",containLabel:!0},series:[{type:"custom",name:"low",itemStyle:{normal:{borderWidth:1}},renderItem,encode:{y:0,x:[1,2]},data},{name:"high",type:"custom",show:!1}]};