var name=["女性","男性"],option={backgroundColor:"#000",tooltip:{trigger:"item",axisPointer:{type:"line"},textStyle:{fontSize:14},formatter:e=>(console.log(e.value),e.value+"%")},legend:{left:"center",top:"5%",show:!0,type:"scroll",data:name,itemWidth:20,itemHeight:15,itemGap:80,textStyle:{fontSize:20,color:"#fff",fontFamily:"Microsoft YaHei"}},grid:[{left:"10%",right:"53%",top:60,bottom:"30"},{left:"47%",right:"10%",top:60,bottom:"30"},{left:"0%",right:"0%",top:0,bottom:"0"}],xAxis:[{type:"value",gridIndex:0,inverse:!0,axisLine:{show:!1,lineStyle:{width:1,type:"solid",color:"red"}},splitLine:{show:!1,lineStyle:{type:"dotted",color:"#ccc",width:1}},axisTick:{show:!1,lineStyle:{width:1,type:"solid",color:"#fff"}},axisLabel:{show:!1,fontFamily:"Microsoft YaHei",fontSize:20,color:"fff",interval:"auto",rotate:"0"},data:[]},{type:"value",gridIndex:1,inverse:!1,axisLine:{show:!1,lineStyle:{width:1,type:"solid",color:"red"}},splitLine:{show:!1,lineStyle:{type:"dotted",color:"red",width:1}},axisTick:{show:!1,lineStyle:{width:1,type:"solid",color:"red"}},axisLabel:{show:!1,fontFamily:"Microsoft YaHei",fontSize:12,color:"#fff",interval:"auto",rotate:"0"},data:[]},{type:"value",gridIndex:2,inverse:!1,axisLine:{show:!1,lineStyle:{width:1,type:"solid",color:"red"}},splitLine:{show:!1,lineStyle:{type:"dotted",color:"#ccc",width:1}},axisTick:{show:!1,lineStyle:{width:1,type:"solid",color:"red"}},axisLabel:{show:!1,fontFamily:"Microsoft YaHei",fontSize:12,color:"red",interval:"auto",rotate:"0"},data:[]}],yAxis:[{type:"category",axisLine:{show:!1,lineStyle:{width:1,type:"solid",color:"red"}},splitLine:{show:!1,lineStyle:{type:"dotted",color:"#ccc",width:1}},axisTick:{show:!1,lineStyle:{width:1,type:"solid",color:"#888888"}},axisLabel:{show:!0,fontFamily:"SourceHanSansCN-Regular",fontSize:14,color:"#ffff",interval:"auto",margin:"-10"},data:["20岁以下","20-30岁","30-40岁","40-50岁","50-60岁","60岁以上"],position:"right"},{type:"category",gridIndex:1,axisLine:{show:!1,lineStyle:{width:1,type:"solid",color:"#888888"}},splitLine:{show:!1,lineStyle:{type:"dotted",color:"#ccc",width:1}},axisTick:{show:!1,lineStyle:{width:1,type:"solid",color:"#888888"}},axisLabel:{show:!1,fontFamily:"Microsoft YaHei",fontSize:12,color:"#fff",interval:"auto"},data:[]},{type:"category",gridIndex:2,axisLine:{show:!1,lineStyle:{width:1,type:"solid",color:"#888888"}},splitLine:{show:!1,lineStyle:{type:"dotted",color:"#ccc",width:1}},axisTick:{show:!0,lineStyle:{width:1,type:"solid",color:"#888888"}},axisLabel:{show:!1,fontFamily:"Microsoft YaHei",fontSize:10,color:"#777575",interval:"auto"}}],series:[{colId:"col402utokg",name:name[0],type:"bar",data:[423,556,456,418,566,122],barWidth:15,color:"#e75647",xAxisIndex:0,yAxisIndex:0,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#f24f02"},{offset:.5,color:"#e75647"},{offset:1,color:"rgba(43,163,205,0)"}])}},label:{position:"right",fontFamily:"Microsoft YaHei",show:!1,fontSize:20,color:"#fff"}},{colId:"col3kkgr6h9",name:name[1],type:"bar",data:[323,556,456,408,566,456],barWidth:15,color:"#01b3e0",xAxisIndex:1,yAxisIndex:1,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#1bc3f3"},{offset:1,color:"rgba(140,113,246,0)"}])}}}]};
