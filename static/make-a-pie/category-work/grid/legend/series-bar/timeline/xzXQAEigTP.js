var xData=["A","B","C","D","E","F","G"],lineData=[100,100,100,100,100,100,100],lastYearData=[1,1,3,4,5,6,7],thisYearData=[7,6,5,4,3,2,1];let legend=["2017","2018"],colors=[{borderColor:"rgba(227,161,96,1)",start:"rgba(227,161,96,0.8)",end:"rgba(227,161,96,0.3)"},{borderColor:"rgba(0,222,255,1)",start:"rgba(0,222,255,0.3)",end:"rgba(0,222,255,0.8)"}];var option={baseOption:{timeline:{show:!1,top:0,data:[]},legend:{top:"5%",right:"5%",itemWidth:20,itemHeight:5,data:legend},grid:[{show:!1,top:"52%",containLabel:!0,width:"100%"},{show:!1,top:"49%",height:0,left:"11.6%",containLabel:!0,width:"100%"},{show:!1,bottom:"52%",containLabel:!0,width:"100%"}],xAxis:[{type:"category",position:"top",data:xData,axisLine:{show:!0},axisTick:{show:!1},axisLabel:{show:!1},inverse:!1},{gridIndex:1,type:"category",inverse:!1,position:"top",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,padding:[30,0,0,0],textStyle:{fontSize:20},align:"center"},data:xData.map(function(e){return{value:e,textStyle:{align:"center"}}})},{gridIndex:2,type:"category",position:"bottom",inverse:!1,data:xData,axisLine:{show:!0},axisTick:{show:!1},axisLabel:{show:!1}}],yAxis:[{type:"value",inverse:!0,position:"top",axisLine:{show:!0},axisTick:{show:!1},axisLabel:{show:!0},splitLine:{show:!0}},{gridIndex:1,show:!1},{gridIndex:2,inverse:!1,position:"bottom",axisLine:{show:!0},axisTick:{show:!1},axisLabel:{show:!0},splitLine:{show:!0}}],series:[]},options:[{series:[{name:"2017",type:"bar",barWidth:25,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:colors[0].start},{offset:1,color:colors[0].end}])}},data:lastYearData,animationEasing:"elasticOut"},{name:"2018",type:"bar",xAxisIndex:2,yAxisIndex:2,barWidth:25,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"red"},{offset:1,color:colors[1].end}])}},data:thisYearData}]}]};
