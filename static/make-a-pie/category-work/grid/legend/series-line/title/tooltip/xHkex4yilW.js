var defaultFontSize=14,defaultTextColor="#636c72",defaultGlobalColor=["#5d9cec","#62c87f","#f15755","#fc863f","#7053b6"],defaultFontFamily="microsoft yahei",defaultBackgroundColor="#fff",defaultShadowColor="rgba(204, 214, 235, 0.247059)";option={title:{text:"访问人数（page/index）",top:10,left:"center",textStyle:{fontSize:18,fontWeight:400}},backgroundColor:defaultBackgroundColor,color:defaultGlobalColor,textStyle:{color:defaultTextColor,fontSize:defaultFontSize},legend:{bottom:0,left:"center",width:500,itemWidth:14,itemHeight:14,itemBorderRadius:8,textStyle:{},data:["直接访问","必应访问","微博访问","知乎访问","百度访问"]},tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:defaultShadowColor}}},grid:{top:60,right:10,bottom:40,left:10,containLabel:!0},xAxis:[{type:"category",data:["2017-05-01","2017-05-02","2017-05-03","2017-05-04","2017-05-06","2017-05-07","2017-05-08"],axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:"#6a7791"}},axisLabel:{textStyle:{color:defaultTextColor,fontSize:defaultFontSize}}}],yAxis:[{type:"value",nameTextStyle:{},nameGap:15,axisTick:{show:!1},axisLine:{show:!1},splitLine:{lineStyle:{color:"#eae9e9"}},axisLabel:{textStyle:{color:defaultTextColor,fontSize:defaultFontSize}}}],series:[{name:"直接访问",type:"line",data:[10,52,200,334,390,330,220]},{name:"必应访问",type:"line",data:[22,112,230,334,340,350,320]},{name:"微博访问",type:"line",data:[22,82,230,234,350,350,320]},{name:"知乎访问",type:"line",data:[22,32,230,534,360,350,320]},{name:"百度访问",type:"line",data:[22,32,230,334,370,350,320]}]};
