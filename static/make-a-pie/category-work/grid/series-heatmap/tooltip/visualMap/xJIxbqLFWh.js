var hours=["0","1"],days=["1","0"],data=[[0,0,2755],[0,1,28139],[1,0,10937],[1,1,1119]],min=0,max=10;data.forEach(a=>{min=Math.min(min,a[2]),max=Math.max(max,a[2])}),max*=1.1,option={grid:{height:"50%",width:"50%"},xAxis:{type:"category",name:"实际值",nameLocation:"center",data:hours,axisLine:{show:!1},axisTick:{show:!1}},yAxis:{type:"category",name:"预测值",nameLocation:"center",data:days,axisLine:{show:!1},axisTick:{show:!1}},visualMap:{min,max,right:"10%",top:"center",itemHeight:"100%",inRange:{color:["#F8FAFB","#DCE3EC","#D2DCE7","#5075A1"]}},series:[{name:"Punch Card",type:"heatmap",data,label:{show:!0},emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};