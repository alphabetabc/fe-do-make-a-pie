const dataArr={xdata:[["01-01","01-02","01-03","01-04","01-05","01-06","01-07"],["01-08","01-09","01-10","01-11","01-12","01-13","01-14"]],result:[{name:"天河",data:[[400,435,0,340,320,270,0],[50,435,490,340,320,270,50]]},{name:"海珠",data:[[0,220,210,310,20,180,288],[1530,220,0,310,40,180,288]]},{name:"荔湾",data:[[0,120,0,280,240,180,188],[250,120,240,280,0,180,188]]}]};let a=0;const cee=[];dataArr.xdata.forEach((s,t)=>{let l=dataArr.result.reduce((e,o,r,c)=>(e[r]=dataArr.result[r].data[t].map((i,n)=>i+(e[r-1]?e[r-1][n]:0)),e),[]);cee[t]=l}),console.log("p",cee);const arr=[],color=[["#0079FA"],["#00FD9F"],["#00C2FF"]],color1=[[{offset:0,color:"#2A69FF"},{offset:.5,color:"#01C3F5"},{offset:1,color:"#2A69FF"}],[{offset:0,color:"#38D58C"},{offset:.5,color:"#44FFBA"},{offset:1,color:"#38D58C"}],[{offset:0,color:"#00C2FF"},{offset:.5,color:"#0EEBFF"},{offset:1,color:"#00C2FF"}]];console.log("dataArr",dataArr);let series;var options=[],yAxis;dataArr.xdata.forEach((s,t)=>{yAxis={inverse:!0,splitLine:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{color:new echarts.graphic.LinearGradient(0,1,1,0,[{offset:0,color:"rgba(255,255,255,0.8)"},{offset:1,color:"rgba(255,255,255,0)"}]),width:1}},axisLabel:{textStyle:{fontSize:16,color:"#fff"}},data:s},series=dataArr.result.reduce((l,e,o,r)=>(l.push({z:o+1,stack:"总量",type:"bar",name:e.name,barGap:"-100%",barWidth:15,data:dataArr.result[o].data[t],itemStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,color1[o]),opacity:1}},{z:o+10,type:"pictorialBar",symbolPosition:"end",symbol:"circle",symbolOffset:["50%",0],symbolSize:[7,15],data:cee[t][o],itemStyle:{color:function(c){return console.log("params",cee[t][o],e.data[t][c.dataIndex],c,color[o]),e.data[t][c.dataIndex]==0?"rgba(0,0,0,0)":color[o]}},tooltip:{show:!1}}),l),[]),console.log("series1",series),options.push({yAxis,series})}),console.log("options",options);const tooltip={show:!0,trigger:"axis"},legend={data:dataArr.result.map(s=>s.name),textStyle:{fontSize:14,color:"#fff"},itemWidth:25,itemHeight:15,itemGap:15,top:"5%",selectedMode:!1},grid={top:"10%",left:"10%",right:"3%",bottom:"15%"},xAxis={axisLabel:{color:"#fff",textStyle:{fontSize:"13"}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(255,255,255,0.2)"}},axisLine:{show:!1,lineStyle:{color:"#fff",width:1,opacity:.3}},axisTick:{show:!1}},timeline={axisType:"category",show:!0,autoPlay:!0,playInterval:5e3,data:["天河","海珠"]};var option={baseOption:{timeline,tooltip,xAxis,grid,legend,backgroundColor:"rgba(0, 0, 0, .8)"},options};
