let circularGraph={head:!0,tuglie:["校督导-在职","院督导","辅导员","教师"],data:[{name:"校督导-在职",value:29313},{name:"院督导",value:68397},{name:"辅导员",value:39084},{name:"教师",value:58626}],sum:{name:["总计"],number:0},color:["#3aa0ff","#36cbcb","#4dcb73","#975fe4"]},sum=0;circularGraph.data.map(e=>{sum+=e.value}),circularGraph.sum.number=sum,option={title:{left:"center",show:circularGraph.head},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},graphic:{type:"text",left:"center",top:"center",style:{text:circularGraph.sum.name+`
`+String(circularGraph.sum.number).replace(/(\d)(?=(?:\d{6})+$)/g,"$1."),textAlign:"center",fill:"#000",width:30,height:30,fontSize:24,fontWeight:600}},series:[{type:"pie",radius:["50%","70%"],itemStyle:{normal:{label:{show:!0,textStyle:{color:"#3c4858",fontSize:"14"},formatter:function(e){return e.name+"："+e.percent+"%"}},labelLine:{show:!0,lineStyle:{color:"#3c4858"}}},emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)",textColor:"#000"}},data:circularGraph.data}],color:circularGraph.color};
