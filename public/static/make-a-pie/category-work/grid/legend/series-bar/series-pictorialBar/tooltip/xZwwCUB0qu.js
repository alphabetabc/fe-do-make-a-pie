const dataArr={xdata:["01-01","01-02","01-03","01-04","01-05","01-06","01-07"],result:[{name:"天河",data:[0,435,490,340,320,270,0]},{name:"海珠",data:[150,220,210,310,0,180,288]}]},diamondData=dataArr.result.reduce((t,e,o)=>(t[o]=e.data.map((r,a)=>r+(t[o-1]?t[o-1][a]:0)),t),[]),color=[["#0079FA"],["#00FD9F"],["#00C2FF"],["#0EEBFF"]],color1=[[{offset:0,color:"#0079FA"},{offset:.5,color:"#009AFF"},{offset:1,color:"#0079FF"}],[{offset:0,color:"#00FD9F"},{offset:.5,color:"#44FFBA"},{offset:1,color:"#00FD9F"}],[{offset:0,color:"#00C2FF"},{offset:.5,color:"#0EEBFF"},{offset:1,color:"#00C2FF"}]];let series=dataArr.result.reduce((t,e,o,r)=>(t.push({z:o+1,stack:"总量",type:"bar",name:e.name,barGap:"-100%",barWidth:15,data:e.data,itemStyle:{color:new echarts.graphic.LinearGradient(0,1,1,0,color1[o]),opacity:1}},{z:o+10,type:"pictorialBar",symbolPosition:"end",symbol:"circle",symbolOffset:["50%",0],symbolSize:[7,15],data:diamondData[o],itemStyle:{color:function(a){return console.log("params",a),e.data[a.dataIndex]==0?"rgba(0,0,0,0)":new echarts.graphic.LinearGradient(0,1,1,0,color1[o])}},tooltip:{show:!1}}),t),[]);const tooltip={show:!0,trigger:"axis"},legend={data:dataArr.result.map(t=>t.name),textStyle:{fontSize:14,color:"#fff"},itemWidth:25,itemHeight:15,itemGap:15,bottom:"5%",selectedMode:!1},grid={top:"10%",left:"10%",right:"3%",bottom:"15%"},xAxis={axisLabel:{color:"#fff",textStyle:{fontSize:"13"}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(255,255,255,0.2)"}},axisLine:{show:!1,lineStyle:{color:"#fff",width:1,opacity:.3}},axisTick:{show:!1}},yAxis=[{inverse:!0,splitLine:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{color:new echarts.graphic.LinearGradient(0,1,1,0,[{offset:0,color:"rgba(255,255,255,0.8)"},{offset:1,color:"rgba(255,255,255,0)"}]),width:1}},axisLabel:{textStyle:{fontSize:16,color:"#fff"}},data:dataArr.xdata}];option={tooltip,xAxis,yAxis,series,grid,legend,backgroundColor:"rgba(0, 0, 0, .8)"};