let data=[["正常请求次数","满请求次数","错误请求次数"],[200,400,700]];option={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],title:{text:"",top:"center",left:"center",textStyle:{color:"#f00",fontSize:24}},legend:{top:"center",right:"10%",orient:"vertical",icon:"circle",itemGap:18,formatter:t=>{var e=data[0].indexOf(t);return`${data[1][e]}
${t}`},textStyle:{lineHeight:20}},tooltip:{},dataset:{source:data},xAxis:{type:"category",show:!1},yAxis:{show:!1},series:[{type:"pie",label:{formatter:"{d}%"},seriesLayoutBy:"row",radius:["25%","30%"],center:["50%","50%"]}]};let dat=option.dataset.source[1],col=option.color,_t=0;option.title.text=dat[0],option.title.textStyle.color=col[0],setInterval(()=>{myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:_t%dat.length}),_t++,option.title.text=dat[_t%dat.length],option.title.textStyle.color=col[_t%dat.length],myChart.setOption(option),myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:_t%dat.length})},3e3);
