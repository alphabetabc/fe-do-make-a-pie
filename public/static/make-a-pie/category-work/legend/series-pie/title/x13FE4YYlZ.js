option={color:["#FFA620","#FD4144","#24FEB4","#2DB8FB","#9E43DE","#FFF049","#FC6060"],title:{text:"自动",textStyle:{fontSize:14,color:"#fff"},top:"bottom",left:"100"},legend:{show:!0,left:"center",top:"bottom",textStyle:{color:"#fff",fontSize:20},data:["火灾","电气","可燃气体","消防电源"]},series:[{name:"访问来源",type:"pie",center:["50%","50%"],radius:["50%","75%"],avoidLabelOverlap:!1,hoverOffset:24,label:{show:!1,position:"center"},emphasis:{label:{show:!0,color:"#fff",fontSize:36,formatter:`{b}

{d}%`}},labelLine:{show:!0},data:[{name:"火灾",value:34},{name:"电气",value:89},{name:"可燃气体",value:57},{name:"消防电源",value:100}]}]};var currentIndex=-1;console.log(option);let myChart=echarts.getInstanceByDom(document.getElementById("chart-panel"));var dataLen=option.series[0].data.length;setInterval(()=>{console.log(123),myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:currentIndex}),currentIndex=(currentIndex+1)%dataLen,myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:currentIndex}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:currentIndex})},3e3);
