var line1=["a","b","c","d"],line2=["e","f","g","h"],line3=["i","j","k","l"],ydata1=[60,40,40,15],ydata2=[15,22,33,23],ydata3=[23,52,93,85],data1=[80,50,60,30],data2=[30,14,36,13],data3=[13,33,55,93],youCol="#70fd71",oneCol="#33f8ff",twoCol="#6dd5ff",threeCol="#3385ff",oneShaw="#0191d2",twoShaw="#2082d1",threeShaw="#205fd5",backCol="#042696";option={color:["#61e15e"],backgroundColor:backCol,title:{text:"",left:"center"},grid:[{x:"5%",y:"30%",width:"30%",height:"60%"},{x:"35%",y:"30%",width:"30%",height:"60%"},{x:"65%",y:"30%",width:"30%",height:"60%"}],legend:{data:["优秀学生认知积分线"],selectedMode:!0,selected:!1,top:"20%",right:"right",textStyle:{color:"#fff"}},xAxis:[{gridIndex:0,type:"category",data:line1,name:"",nameLocation:"center",axisTick:{show:!1},axisLine:{lineStyle:{color:"#ccc"},show:!1},boundaryGap:!1,axisLabel:{color:"transparent"}},{gridIndex:1,type:"category",data:line2,name:"",nameLocation:"center",axisTick:{show:!1},axisLine:{lineStyle:{color:"#ccc"},show:!1},boundaryGap:!1,axisLabel:{color:"transparent"}},{gridIndex:2,type:"category",data:line3,name:"",nameLocation:"center",axisTick:{show:!1},axisLine:{lineStyle:{color:"#ccc"},show:!1},boundaryGap:!1,axisLabel:{color:"transparent"}}],yAxis:[{gridIndex:0,type:"value",axisLine:{lineStyle:{color:"#ccc"},show:!1},name:"认知得分(分)",splitLine:{lineStyle:{type:"dotted",color:"#e5eaef"},show:!1},axisLabel:{fontSize:14,color:"#999",show:!1},nameTextStyle:{fontSize:14,color:"#666",show:!1},min:0,max:100,show:!1},{gridIndex:1,type:"value",axisLine:{show:!1,lineStyle:{color:"#e0e7ff"}},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{lineStyle:{type:"dotted",color:"#e5eaef"},show:!1},min:0,max:100},{gridIndex:2,type:"value",axisLine:{show:!1,lineStyle:{color:"#e0e7ff"}},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{lineStyle:{type:"dotted",color:"#e5eaef"},show:!1},min:0,max:100}],series:[{name:"优秀学生认知积分线",xAxisIndex:0,yAxisIndex:0,data:ydata1,type:"line",symbol:"none",lineStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"transparent"},{offset:.1,color:youCol},{offset:1,color:youCol}]},shadowColor:"rgba(0,0,0,0.5)",shadowBlur:8,shadowOffsetY:18},smooth:!0},{xAxisIndex:0,yAxisIndex:0,data:data1,type:"line",symbol:"none",smooth:!0,lineStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"transparent"},{offset:.1,color:oneCol},{offset:1,color:oneCol}]}},areaStyle:{color:{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:backCol},{offset:1,color:oneShaw}]}}},{name:"优秀学生认知积分线",xAxisIndex:1,yAxisIndex:1,data:ydata2,type:"line",symbol:"none",lineStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:youCol},{offset:1,color:youCol}]},shadowColor:"rgba(0,0,0,0.5)",shadowBlur:8,shadowOffsetY:18},smooth:!0},{xAxisIndex:1,yAxisIndex:1,data:data2,type:"line",symbol:"none",smooth:!0,lineStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:twoCol},{offset:1,color:twoCol}]}},areaStyle:{color:{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:backCol},{offset:1,color:twoShaw}]}}},{name:"优秀学生认知积分线",xAxisIndex:2,yAxisIndex:2,data:ydata3,type:"line",symbol:"none",lineStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:youCol},{offset:.9,color:youCol},{offset:1,color:"transparent"}]},shadowColor:"rgba(0,0,0,0.5)",shadowBlur:8,shadowOffsetY:18},smooth:!0},{xAxisIndex:2,yAxisIndex:2,data:data3,type:"line",symbol:"none",smooth:!0,lineStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:threeCol},{offset:.9,color:threeCol},{offset:1,color:"transparent"}]}},areaStyle:{color:{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:backCol},{offset:1,color:threeShaw}]}}}],tooltip:[{show:!1,trigger:"axis",axisPointer:{type:"line"},formatter:"{b}:{c}<br>{b1}:{c1}"}]};
