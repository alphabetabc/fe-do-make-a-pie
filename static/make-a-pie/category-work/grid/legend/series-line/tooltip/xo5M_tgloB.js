var xData=["2020-08-07","2020-08-08","2020-08-09","2020-08-10","2020-08-11","2020-08-12","2020-08-13","2020-08-14","2020-08-15","2020-08-16","2020-08-17","2020-08-18","2020-08-19","2020-08-20","2020-08-21","2020-08-22","2020-08-23","2020-08-24","2020-08-25","2020-08-26","2020-08-27","2020-08-28","2020-08-29","2020-08-30","2020-08-31","2020-09-01","2020-09-02","2020-09-03","2020-09-04","2020-09-05","2020-09-06"],lines=[["36.77","38.61","38.70","39.16","37.20","36.30","36.09","36.45","36.12","36.19","34.89","34.38","34.94","36.69","34.86","35.52","34.68","35.36","36.77","37.04","36.32","36.02","36.15","36.16","36.38","36.51","36.04","36.66","36.73","36.68","38.51"],["37.59","38.49","38.38","38.12","36.37","37.61","36.94","36.57","36.32","37.04","36.68","34.44","35.22","36.45","35.02","35.01","34.95","36.48","36.31","37.53","37.01","36.63","36.93","36.04","37.01","36.81","35.53","37.24","36.28","38.05","39.05"]],attrs=[{name:"预售价",unit:"元/公斤"},{name:"成交价",unit:"元/公斤"}];option={tooltip:{trigger:"axis",backgroundColor:"none",padding:5,formatter:function(o){var e="";return e="<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'><div style='text-align:center;'>"+o[0].name+"</div><div style='padding-top:5px;'><span style='display: inline-block; width: 4px; height:10px; border-radius: 5px;background-color: "+o[0].color+";'></span><span style=''> "+o[0].seriesName+": </span><span style='color:"+o[0].color+"'>"+o[0].value+"</span></span><span>"+attrs[0].unit+"</span><div style='padding-top:2px;'><span style='display: inline-block; width: 4px; height:10px; border-radius: 5px;background-color: "+o[1].color+";'></span><span style=''> "+o[1].seriesName+": </span><span style='color:"+o[1].color+"'>"+o[1].value+"</span><span>"+attrs[1].unit+"</span></div></div>",e}},grid:{left:"10%",top:"8%",right:"5%",bottom:"18%"},legend:{show:!0,icon:"roundRect",orient:"horizontal",top:"0.5%",right:"8%",itemWidth:18.5,itemHeight:6,itemGap:30,textStyle:{color:"#C9C8CD"}},xAxis:[{type:"category",data:xData,axisLabel:{show:!0,fontSize:9,textStyle:{color:"#C9C8CD"},formatter:function(o){var e="";return e+=o.substring(0,4)+`
`,e+=o.substring(5,10),e}},axisLine:{show:!1},axisTick:{show:!1},boundaryGap:!1,splitLine:{show:!0,width:.08,lineStyle:{type:"solid",color:"#03202E"}},axisPointer:{type:"shadow",z:1,shadowStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(18,155,249,0)"},{offset:1,color:"rgba(18,155,249,1)"}],global:!1},shadowColor:"rgba(0, 0, 0, 0.2)",shadowBlur:5}}}],yAxis:[{type:"value",scale:!0,axisLabel:{show:!0,textStyle:{fontSize:9,color:"#C9C8CD"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},nameTextStyle:{color:"#FFFFFF"},splitArea:{show:!1}}],series:[{name:attrs[0].name,type:"line",data:lines[0],lineStyle:{normal:{width:3.5,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#00CA98"},{offset:1,color:"#66FF66"}],global:!1},shadowColor:"#66FF66",shadowBlur:4,shadowOffsetY:3}},symbol:"emptyCircle",showSymbol:!1,itemStyle:{normal:{color:"#14CC8F",shadowColor:"#14CC8F",shadowBlur:2,borderWidth:2,borderColor:"#F8F8FF"}},smooth:!0},{name:attrs[1].name,type:"line",data:lines[1],lineStyle:{normal:{width:3.5,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#1166E7"},{offset:1,color:"#139EFD"}],global:!1},shadowColor:"#139EFD",shadowBlur:4,shadowOffsetY:3}},symbol:"emptyCircle",showSymbol:!1,itemStyle:{normal:{color:"#0099FF",shadowColor:"rgba(51,116,235, 1)",shadowBlur:2,borderWidth:2,borderColor:"#F8F8FF"}},smooth:!0}]};
