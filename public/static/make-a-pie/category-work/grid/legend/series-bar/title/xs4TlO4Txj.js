option={grid:{show:"true",borderWidth:"0",height:"80%",width:"80%",x:"12%"},title:{text:"装配线当天生产情况",left:"center",textStyle:{fontWeight:"normal",fontSize:24,color:"#fff"}},legend:{top:40,right:50,textStyle:{color:"#fff",fontSize:22},itemGap:30,itemWidth:40,itemHeight:14},backgroundColor:"#121B2C",xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,textStyle:{color:"#fff",fontWeight:"lighter",fontSize:18}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:["装配线-1","装配线-2","装配线-3","装配线-4","装配线-5","装配线-6"]},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#ffffff",fontSize:"18"},formatter:function(e){return e+" %"}},data:[80,80,80,80,80,80]}],series:[{name:"产出",type:"bar",itemStyle:{normal:{barBorderRadius:30,color:"rgb(112,182,5)"}},label:{normal:{show:!0,position:"inside",color:"black",fontSize:14}},barWidth:30,data:[800,800,800,800,800,800]},{name:"计划数",type:"bar",itemStyle:{normal:{barBorderRadius:30,color:"rgb(240,160,35)"}},label:{normal:{show:!0,padding:[0,0,0,670],color:"black",fontSize:14}},barGap:"-100%",z:0,barWidth:30,data:[1e3,1e3,1e3,1e3,1e3,1e3]}]};