for(var dataAxis=["点","击","柱","子","或","者","两","指","在","触","屏","上","滑","动","能","够","自","动","缩","放"],data=[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220],yMax=500,dataShadow=[],i=0;i<data.length;i++)dataShadow.push(yMax);option={backgroundColor:"#020a1d",title:{text:"特性示例：渐变色 阴影 点击缩放",subtext:"Feature Sample: Gradient Color, Shadow, Click Zoom"},xAxis:{data:dataAxis,axisLabel:{show:!1,inside:!0,textStyle:{color:"#fff"}},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,textStyle:{color:"#999"}},splitLine:{show:!1}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{normal:{color:"rgba(0,0,0,0.05)"}},barGap:"-100%",barCategoryGap:"50%",data:dataShadow,animation:!1},{type:"bar",itemStyle:{normal:{borderWidth:"3",borderTopColor:"rgba(0,157,197,0.5)",barBorderRadius:[10,10,0,0],color:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#00ccff"},{offset:.2,color:"#026082"},{offset:.5,color:"#023550"},{offset:.8,color:"#026082"},{offset:1,color:"#00ccff"}])},emphasis:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"red"},{offset:.5,color:"#02314b"},{offset:1,color:"#00ccff"}])}},data}]};var zoomSize=6;myChart.on("click",function(a){console.log(dataAxis[Math.max(a.dataIndex-zoomSize/2,0)]),myChart.dispatchAction({type:"dataZoom",startValue:dataAxis[Math.max(a.dataIndex-zoomSize/2,0)],endValue:dataAxis[Math.min(a.dataIndex+zoomSize/2,data.length-1)]})});
