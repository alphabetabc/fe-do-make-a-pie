var attr={name:"智能环空设备",unit:"台"},xData=["2020-08-07","2020-08-08","2020-08-09","2020-08-10","2020-08-11","2020-08-12","2020-08-13","2020-08-14","2020-08-15","2020-08-16","2020-08-17"],lines=[[400,400,300,300,300,400,400,400,350,548,590]],option={backgroundColor:"#060B1C",tooltip:{trigger:"item",backgroundColor:"none",padding:5,formatter:function(o){var e="<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'><div style='text-align:center;'>"+o.name+"</div><div style='padding-top:5px;'>";return e+="<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:"+o.color.colorStops[0].color+";'></span><span style=''> "+o.seriesName+": </span><span style='color:"+o.color.colorStops[0].color+"'>"+o.value+"</span></span><span>"+attr.unit+"</span></br>",e+="</div>",e}},grid:{left:"10%",top:"8%",right:"5%",bottom:"19%"},legend:{show:!1},xAxis:[{type:"category",data:xData,axisLabel:{show:!0,fontSize:9,textStyle:{color:"#C9C8CD"},formatter:function(o){var e="";return e+=o.substring(0,4)+`
`,e+=o.substring(5,10),e}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,width:.08,lineStyle:{type:"solid",color:"#03202E"}},axisPointer:{show:!1,type:"shadow"}}],yAxis:[{type:"value",axisLabel:{show:!0,textStyle:{fontSize:9,color:"#C9C8CD"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},nameTextStyle:{color:"#FFFFFF"},splitArea:{show:!1}}],series:[{name:attr.name,type:"bar",xAxisIndex:0,yAxisIndex:0,itemStyle:{barBorderRadius:50,normal:{barBorderRadius:50,color:function(o){return colors=["#33ffff","#17a1e5"],new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:colors[0]},{offset:1,color:colors[1]}])}},emphasis:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#F4CA1B"},{offset:1,color:"#E29400"}])}},zlevel:11,data:lines[0]}]};
