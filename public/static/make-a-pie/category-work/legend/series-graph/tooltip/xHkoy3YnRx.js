for(var categories=[{name:"家人",itemStyle:{normal:{color:"#009800"}}},{name:"朋友",itemStyle:{normal:{color:"#4592FF"}}},{name:"同事",itemStyle:{normal:{color:"red"}}}],legend=["家人","朋友","同事"],peoples=[],linkes=[],i=0;i<10;i++)peoples.push({name:i,draggable:!0,displayname:"people"+i,category:Math.floor(Math.random()*3)});for(var i=0;i<10;i++)linkes.push({source:i,target:Math.floor(Math.random()*10),value:legend[Math.floor(Math.random()*3)],lineStyle:{normal:{color:"#38f",curveness:Math.random()*1}},label:{normal:{textStyle:{color:"#07ac72",fontSize:12}}}});var option={tooltip:{show:!0,formatter:function(e){return e.data.displayname}},legend:{x:"center",data:legend,tooltip:{show:!0}},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",series:[{categories,type:"graph",layout:"force",symbol:"circle",symbolSize:30,roam:!0,edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,10],focusNodeAdjacency:!0,edgeLabel:{normal:{show:!0,textStyle:{fontSize:20},formatter:"{c}"}},lineStyle:{normal:{opacity:1,width:2,curveness:0}},label:{normal:{show:!0,formatter:function(e){return e.data.displayname},textStyle:{color:"#333",fontFamily:"微软雅黑",fontSize:12}}},force:{repulsion:500},data:peoples,links:linkes}]};myChart.on("click",function(e){e.dataType==="node"&&alert(e.data.displayname)});
