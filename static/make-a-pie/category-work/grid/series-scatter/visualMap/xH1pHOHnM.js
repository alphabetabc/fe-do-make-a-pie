for(var data=[],data2=[],i=0;i<10;i++)data.push([Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*40)]),data2.push([Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100)]);var axisCommon={axisLabel:{textStyle:{color:"#8290a5"}},axisTick:{lineStyle:{color:"#8290a5"}},axisLine:{lineStyle:{color:"#414d5d"}},splitLine:{lineStyle:{color:"#414d5d",type:"solid"}}};option={color:["#2988b8","#6a71ba"],backgroundColor:"#3c4656",xAxis:axisCommon,yAxis:axisCommon,visualMap:{show:!1,max:100,inRange:{symbolSize:[10,40]}},series:[{type:"scatter",data},{type:"scatter",data:data2}],animationDelay:function(e){return e*50},animationEasing:"elasticOut"},myChart.clear(),setTimeout(function(){var e=myChart.getZr();myChart.off("click"),myChart.on("click",function(r){var h=myChart.getModel().getSeriesByIndex(r.seriesIndex),y=h.getData(),u=h.coordinateSystem,s=y.getItemVisual(r.dataIndex,"color"),m=y.getItemVisual(r.dataIndex,"symbolSize"),a=u.dataToPoint(r.value),n=u.dataToPoint([r.value[0],0]),l=new echarts.graphic.Line({shape:{x1:a[0],y1:a[1],x2:a[0],y2:a[1]},style:{stroke:s,opacity:.6},z:100});l.animate("shape").when(300,{y1:a[1]}).when(500,{y1:a[1]*.7+.3*n[1],y2:n[1]}).when(1e3,{y1:a[1],y2:a[1]}).done(function(){e.remove(l)}).start(function(o){var t=Math.sin(o*Math.PI)*.5;return o>=.5&&(t=1-t),t});var c=new echarts.graphic.Circle({shape:{cx:n[0],cy:n[1],r:0},style:{fill:s},z:100}),d=new echarts.graphic.Circle({shape:{cx:a[0],cy:a[1],r:m},style:{fill:s,opacity:.4}});d.animateTo({shape:{r:m*1.5},style:{opacity:0}},400,function(){e.remove(d)}),c.animate("shape").when(250,{r:6}).when(500,{r:0}).delay(500).done(function(){e.remove(c)}).start(function(o){var t=Math.sin(o*Math.PI)*.5;return o>=.5&&(t=1-t),t}),e.add(c),e.add(d),e.add(l)})});