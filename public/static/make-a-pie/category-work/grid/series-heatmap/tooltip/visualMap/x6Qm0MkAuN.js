var hotX=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,21,23,24,25],hotY=[1,2,3,4,5,6,7,8,9,10],hourData=[[0,0,1],[1,0,1],[2,0,2],[3,0,2],[4,0,1],[5,0,1],[6,0,1],[7,0,1],[8,0,1],[9,0,1],[10,0,1],[11,0,1],[12,0,1],[13,0,1],[14,0,1],[15,0,1],[16,0,1],[17,0,1],[18,0,1],[19,0,1],[20,0,1],[21,0,1],[22,0,1],[23,0,1],[24,0,1],[25,0,2],[0,1,1],[1,1,1],[2,1,2],[3,1,2],[4,1,1],[5,1,1],[6,1,1],[7,1,1],[8,1,1],[9,1,1],[10,1,1],[11,1,1],[12,1,1],[13,1,1],[14,1,1],[15,1,1],[16,1,1],[17,1,1],[18,1,1],[19,1,1],[20,1,2],[21,1,2],[22,1,1],[23,1,2],[24,1,1],[25,1,2]];option={tooltip:{show:!0},grid:{height:"70%",top:"10%"},xAxis:{type:"category",show:!1,data:hotX,splitArea:{show:!0}},yAxis:{type:"category",show:!1,inverse:!0,data:hotY,splitArea:{show:!0}},visualMap:{inRange:{color:["#fbad5a","#fb5a5a","#cd5e7e"]},show:!1,min:1,max:3,calculable:!0,orient:"horizontal",left:"center",bottom:"15%",borderColor:"#000",borderWidth:"1px"},series:[{name:"IP地址",type:"heatmap",data:hourData,label:{show:!1},itemStyle:{borderColor:"#ccc"},emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{name:"状态",type:"heatmap"}]};
