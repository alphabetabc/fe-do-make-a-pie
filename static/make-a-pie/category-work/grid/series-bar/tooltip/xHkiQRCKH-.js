option={backgroundColor:"#faf6f3",animation:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:60,bottom:30},xAxis:{type:"value",position:"top",splitLine:{lineStyle:{type:"solid",color:"#cfc3bd"}}},yAxis:{splitNumber:25,type:"category",axisLine:{lineStyle:{type:"solid"}},axisLabel:{show:!0,rotate:0,textStyle:{color:"#682d19"}},axisTick:{show:!0},splitLine:{lineStyle:{type:"solid",color:"#cfc3bd"}},data:["Oct","Sep","Aug","July","June","May","Apr","Mar","Feb","Jan"]},series:[{name:"月开支",type:"bar",barGap:"-100%",label:{normal:{textStyle:{color:"#682d19"},position:"left",show:!1,formatter:"{b}"}},itemStyle:{normal:{color:"#E5F9FB",borderWidth:2,borderColor:"#1FBCD2"}},data:[1900,1029,1602,2004,1100,1800,2800,1407,2200,900]},{type:"bar",silent:!0,barGap:"-100%",data:[100,1e3,800,1070,900,300,1200,900,1200,200],itemStyle:{normal:{color:"#1FBCD2"}}}]},setTimeout(function(){var a=myChart.getModel().getComponent("xAxis").axis,i=myChart.getModel().getComponent("yAxis").axis,t=a.getGlobalExtent(),e=i.getGlobalExtent();myChart.getModel().eachSeries(function(r){var o=new echarts.graphic.Rect({shape:{x:t[0],y:e[0],width:0,height:e[1]-e[0]}});myChart.getViewOfSeriesModel(r).group.setClipPath(o),o.animateTo({shape:{width:t[1]-t[0]}},1e3,"linear")})});