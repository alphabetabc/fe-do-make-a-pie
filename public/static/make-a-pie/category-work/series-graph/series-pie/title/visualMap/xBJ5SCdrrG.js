function roundDatas(l){for(var a=[],e=0;e<l;e++)a.push({name:"circle"+e});return a}option={title:{text:"测试公司",subtext:"开票：200万",top:"center",left:"center",textStyle:{fontSize:14,color:"#9474B4",fontWeight:"normal"},subtextStyle:{fontSize:14,color:"#9474B4",fontWeight:"normal"}},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",roam:!1,focusNodeAdjacency:!1,dataRange:{min:0,max:60,y:"70%",calculable:!0,show:!0,color:["#59446B","#D69BFF"]},series:[{name:"",type:"pie",startAngle:0,hoverAnimation:!1,radius:["60%","60%"],center:["50%","50%"],data:[{name:"公司A1",value:10},{name:"公司A2",value:15},{name:"公司A3",value:20},{name:"公司A4",value:25},{name:"公司A5",value:30},{name:"公司A6",value:35},{name:"公司A7",value:40},{name:"公司A8",value:45},{name:"公司A9",value:50},{name:"公司A10",value:55}],itemStyle:{normal:{color:"#000",borderWidth:5,borderColor:"rgba(0,0,0,0)",label:{show:!0,formatter:`{b}
开票：{c}万({d}%)`},labelLine:{show:!0,length:40,lineStyle:{color:"#7C9ECD"}}}}},{type:"graph",tooltip:{},ribbonType:!0,layout:"circular",hoverAnimation:!1,width:"60%",height:"60%",circular:{rotateLabel:!0},symbolSize:1,data:roundDatas(300),itemStyle:{normal:{label:{show:!1},color:"#58446C"},emphasis:{label:{show:!1}}}},{type:"graph",tooltip:{},ribbonType:!0,layout:"circular",width:"60%",height:"60%",circular:{rotateLabel:!0},symbolSize:30,label:{normal:{position:"center",formatter:`{b}
开票：{c}万`,normal:{textStyle:{fontFamily:"宋体"}}}},edgeSymbol:["circle"],edgeSymbolSize:[8,10],edgeLabel:{normal:{textStyle:{fontSize:13,fontWeight:"bold",fontFamily:"宋体"}}},itemStyle:{normal:{label:{rotate:!0,show:!1,textStyle:{color:"#9474B4"}},borderColor:"#7C9ECD",borderWidth:3},emphasis:{label:{show:!1}}},data:[{name:"公司A1",symbolSize:10,value:10},{name:"公司A2",symbolSize:15,value:15},{name:"公司A3",symbolSize:20,value:20},{name:"公司A4",symbolSize:25,value:25},{name:"公司A5",symbolSize:30,value:30},{name:"公司A6",symbolSize:35,value:35},{name:"公司A7",symbolSize:40,value:40},{name:"公司A8",symbolSize:45,value:45},{name:"公司A9",symbolSize:50,value:50},{name:"公司A10",symbolSize:55,value:55}]}]};