var ckLineAll=[[.1,1],[.2,1.2],[.3,.8],[.4,1.1],[.5,2.2],[.6,2.3]],ckLine=[[.1,1],[.2,1.2],[.3,.8],[.4,1.1]],cckLineAll=[[.6,2.3],[.7,2.1],[.8,1.2],[.9,.8],[1,1.2],[1.1,2.4],[1.2,.7]],cckLine=[[.6,2.3],[.7,2.1],[.8,1.2],[.9,.8],[1,1.2]],bckLineAll=[[1.2,.7],[1.3,.2],[1.4,1.4],[1.5,2.5],[1.6,3.1]],bckLine=[[1.2,.7],[1.3,.2],[1.4,1.4],[1.5,2.5]];option={backgroundColor:"#fff",title:{text:"测试概率谱",textStyle:{fontWeight:"normal",fontSize:16,color:"#333"},left:"center",bottom:"25"},tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"rgba(255,255,255,0)"}}},grid:{left:"5%",right:"10%",bottom:"22%",top:"15%",containLabel:!0},xAxis:[{name:"测试概率",type:"value",boundaryGap:!1,axisLine:{lineStyle:{show:!0,color:"#ebebeb"}},splitLine:{show:!1,lineStyle:{color:"#ebebeb"}},nameTextStyle:{color:"#999"},axisLabel:{color:"#999",show:!0},axisTick:{show:!1}}],yAxis:[{type:"value",name:"概率密度",axisLine:{lineStyle:{color:"#ebebeb"}},axisTick:{show:!1},nameTextStyle:{color:"#cdcdcd"},splitLine:{show:!0,lineStyle:{color:"#ebebeb",type:"dotted"}},axisLabel:{textStyle:{color:"#999"}}}],series:[{name:"所有常考",type:"line",smooth:!1,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:3}},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255, 153, 153, 1)"},{offset:.8,color:"rgba(255, 153, 153, 0.5)"}])},itemStyle:{color:"rgba(255,153,153,0)"},data:ckLine},{name:"部分常考",type:"line",smooth:!1,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:3}},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255, 153, 153, 0)"},{offset:.8,color:"rgba(255, 153, 153, 0)"}])},itemStyle:{color:"rgba(255,153,153,1)",borderColor:"rgba(255,153,153,0.3)",borderWidth:12},data:ckLineAll},{name:"所有次常考",type:"line",smooth:!1,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:3}},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255, 153, 153, 1)"},{offset:.8,color:"rgba(255, 153, 153, 0.5)"}])},itemStyle:{color:"rgba(255,153,153,0)"},data:cckLine},{name:"部分次常考",type:"line",smooth:!1,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:3}},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255, 153, 153, 0)"},{offset:.8,color:"rgba(255, 153, 153, 0)"}])},itemStyle:{color:"rgba(255,153,153,1)",borderColor:"rgba(255,153,153,0.3)",borderWidth:12},data:cckLineAll},{name:"所有不常考",type:"line",smooth:!1,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:3}},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255, 153, 153, 1)"},{offset:.8,color:"rgba(255, 153, 153, 0.5)"}])},itemStyle:{color:"rgba(255,153,153,0)"},data:bckLine},{name:"部分不常考",type:"line",smooth:!1,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:3}},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255, 153, 153, 0)"},{offset:.8,color:"rgba(255, 153, 153, 0)"}])},itemStyle:{color:"rgba(255,153,153,1)",borderColor:"rgba(255,153,153,0.3)",borderWidth:12},data:bckLineAll}]};