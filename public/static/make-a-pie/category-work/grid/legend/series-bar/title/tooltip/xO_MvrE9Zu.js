const backgroundColor="#101736",color=["#3ba272","#91cc75","#fac858","#ee6666","#73c0de"],title={show:!0,text:"搜索引擎",textStyle:{color:"#fff",fontSize:16},padding:0,top:35,left:40},legend={show:!0,orient:"horizontal",icon:"circle",padding:0,top:35,right:40,itemWidth:14,itemHeight:14,itemGap:21,textStyle:{fontSize:14,color:"#00E4FF"}},tooltip={show:!0,trigger:"axis",axisPointer:{type:"shadow"}},originData=[{name:"百度",data:[620,732,701,734,1090,1130,1120]},{name:"谷歌",data:[120,132,101,134,290,230,220]},{name:"必应",data:[60,72,71,74,190,130,110]},{name:"其他",data:[62,82,91,84,109,110,120]}],commonSeriesFn=e=>({type:"bar",barWidth:"40%",stack:"total",emphasis:{focus:"series",itemStyle:{shadowColor:"rgba(0, 0, 0, 0.5)",shadowBlur:8,shadowOffsetX:2,shadowOffsetY:2}},showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, .2)"}}),series=originData.map((e,t)=>({...e,...commonSeriesFn(t)}));option={backgroundColor,color,title,legend,tooltip,grid:{top:"15%",left:"3%",right:"4%",bottom:"10%",containLabel:!0},xAxis:{type:"value",axisLine:{show:!0},axisTick:{show:!1},splitLine:{show:!1}},yAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},data:["周一","周二","周三","周四","周五","周六","周天"]},series};const animation=(e=3e3)=>{let t=-1;const o=option.series[0].data.length;setInterval(()=>{t=(t+1)%o,myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:t}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t})},e)};