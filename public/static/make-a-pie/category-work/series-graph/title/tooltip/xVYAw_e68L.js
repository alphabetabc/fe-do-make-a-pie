var colorArr=["#177fff","#3397ff","#7bc2ff","#c7ced7"],widthArr=[8,7,5,3],symbolSizeArr=[[0,25],[0,20],[0,16],[0,14]],data=[{name:"导航",x:250,y:270},{name:"IVR",x:800,y:290},{name:"呼入",x:550,y:100},{name:"专席",x:550,y:500},{name:"前台",x:550,y:300}],link=[{source:"呼入",target:"导航",value:"3000",label:{show:!0,color:"#2083ff"},symbolSize:symbolSizeArr[0],lineStyle:{width:widthArr[0],curveness:0,color:colorArr[0]}},{source:"呼入",target:"前台",value:"471",label:{show:!0,color:"#2083ff"},symbolSize:symbolSizeArr[2],lineStyle:{width:widthArr[2],curveness:0,color:colorArr[1]}},{source:"呼入",target:"IVR",value:"0",label:{show:!0,color:"#333"},symbolSize:symbolSizeArr[3],lineStyle:{width:widthArr[3],curveness:0,color:colorArr[3]}},{source:"IVR",target:"前台",value:"0",label:{show:!0,color:"#333"},symbolSize:symbolSizeArr[3],lineStyle:{width:widthArr[3],curveness:0,color:colorArr[3]}},{source:"IVR",target:"专席",value:"0",label:{show:!0,color:"#333"},symbolSize:symbolSizeArr[3],lineStyle:{width:widthArr[3],curveness:0,color:colorArr[3]}},{source:"前台",target:"专席",value:"2000",label:{show:!0,color:"#2083ff"},symbolSize:symbolSizeArr[1],lineStyle:{width:widthArr[1],curveness:0,color:colorArr[1]}},{source:"导航",target:"前台",value:"500",label:{show:!0,color:"#2083ff"},symbolSize:symbolSizeArr[1],lineStyle:{width:widthArr[1],curveness:0,color:colorArr[1]}},{source:"导航",target:"专席",value:"500",label:{show:!0,color:"#2083ff"},symbolSize:symbolSizeArr[2],lineStyle:{width:widthArr[2],curveness:0,color:colorArr[2]}}],option={title:{show:!1,text:"Basic Graph"},tooltip:{},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"none",symbolSize:50,roam:!0,label:{show:!0},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,10],edgeLabel:{normal:{show:!0,position:"middle",textStyle:{fontSize:14},formatter:"{c}"}},data,links:link,lineStyle:{opacity:.9,width:2,curveness:0}}]};