model={yCates:["Saturday","Friday","Thursday","Wednesday","Tuesday","Monday","Sunday"],xCates:["1","2","3","4","5"],data:[[0,0,5],[0,1,7],[0,2,3],[0,3,5],[0,4,2],[1,0,1],[1,1,2],[1,2,4],[1,3,8],[1,4,2],[2,0,2],[2,1,3],[2,2,8],[2,3,6],[2,4,7],[3,0,3],[3,1,7],[3,2,5],[3,3,1],[3,4,6],[4,0,3],[4,1,2],[4,2,7],[4,3,8],[4,4,9],[5,0,2],[5,1,2],[5,2,3],[5,3,4],[5,4,7],[6,0,6],[6,1,5],[6,2,3],[6,3,1],[6,4,2]]},data=model.data.map(function(a){return[a[1],a[0],a[2]||"-"]}),option={tooltip:{position:"top"},animation:!1,grid:{height:"50%",y:"10%"},xAxis:{type:"category",data:model.xCates},yAxis:{type:"category",data:model.yCates},visualMap:{min:1,max:10,calculable:!0,orient:"horizontal",left:"center",bottom:"30%"},series:[{name:"Punch Card",type:"heatmap",data,label:{normal:{show:!0}},itemStyle:{emphasis:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};
