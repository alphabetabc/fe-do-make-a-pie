var option={backgroundColor:"#223C8B",title:{show:!0,text:".分环节损耗分析",x:"left",textStyle:{fontSize:"120%",color:"#BCC5E3"}},tooltip:{trigger:"axis",formatter:"{b}<br />{a0}: {c0}<br />{a1}: {c1}",axisPointer:{type:"shadow",label:{backgroundColor:"#6a7985"}},textStyle:{color:"#BCC5E3",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}},grid:{left:"1%",right:"4%",bottom:"6%",top:"10%",containLabel:!0},legend:{right:"5%",top:0,data:[{name:"油站入库量"},{name:"油站保管量"}],textStyle:{color:"#a8aab0",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:"70%"}},xAxis:[{type:"category",boundaryGap:!0,data:["武汉","襄阳","宜昌","荆州","黄冈","孝感","江汉","咸宁","黄石","荆门","十堰","恩施"],axisLabel:{interval:0,textStyle:{color:"#078ceb",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:"70%"}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#BCC5E3",opacity:.2}},splitLine:{show:!1}}],yAxis:[{type:"value",splitNumber:5,axisLabel:{textStyle:{color:"#a8aab0",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}},axisLine:{lineStyle:{color:"#BCC5E3",opacity:.2}},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:["#BCC5E3"],opacity:.06}}}],series:[{name:"油站入库量",type:"bar",data:[160,100,30,20,30,10,35,40,90,20,15,10],barMaxWidth:"20px",barGap:0,label:{normal:{show:!0,position:"top",textStyle:{color:"#a8aab0",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}}},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(162, 239, 110, 1)"},{offset:1,color:"rgba(162, 239, 110, 0.3)"}]),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}}},{name:"油站保管量",type:"bar",data:[70,180,200,50,20,15,20,48,30,35,85,200],barMaxWidth:"20px",barGap:.2,label:{normal:{show:!0,position:"top",textStyle:{color:"#a8aab0",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}}},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(71, 137, 247, 1)"},{offset:1,color:"rgba(71, 137, 247, 0.3)"}]),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}}}]};