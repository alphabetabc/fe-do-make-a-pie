option={title:{left:"center",text:"热力图"},tooltip:{position:"top"},animation:!1,grid:{height:"50%",top:"10%"},xAxis:{name:"水深",nameLocation:"middle",nameGap:30,type:"category",data:["[0, 1)","[1, 5)","[5, 10)"],splitArea:{show:!0}},yAxis:{name:"纵倾",type:"category",data:["[0, 2)","[2, 5)","[2, 10)"],splitArea:{show:!0}},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],top:"70%",start:0,end:100},{type:"slider",show:!0,yAxisIndex:[0],left:"93%",start:0,end:100},{type:"inside",xAxisIndex:[0],start:0,end:100},{type:"inside",yAxisIndex:[0],start:0,end:100}],visualMap:{min:0,max:10,calculable:!0,orient:"horizontal",left:"center",bottom:"15%"},series:[{name:"Count",type:"heatmap",data:[[0,0,5],[0,1,1],[0,2,0],[1,0,5],[1,1,1],[1,2,0],[2,0,5],[2,1,1],[2,2,0]],label:{show:!0},emphasis:{itemStyle:{shadowBlur:20,shadowColor:"rgba(0, 0, 0, 0.5)"}},itemStyle:{borderColor:"#000",borderWidth:2,borderType:"solid"}}]};
