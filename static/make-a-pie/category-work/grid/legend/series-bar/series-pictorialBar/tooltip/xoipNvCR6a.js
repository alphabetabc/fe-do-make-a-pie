const dataArr={xdata:["站前1标","站前2标","站前3标","站前4标","站前5标","站前6标"],result:[{name:"桥架机",data:[320,435,490,340,320,270]},{name:"运粮车",data:[150,220,210,310,140,180]},{name:"轮胎及履带式起重机",data:[250,120,240,280,240,180]},{name:"长螺旋粘机",data:[180,420,370,250,210,180]}]},diamondData=dataArr.result.reduce((o,e,t)=>(o[t]=e.data.map((l,s)=>l+(o[t-1]?o[t-1][s]:0)),o),[]),color=[[{offset:0,color:"#7297FF"},{offset:.5,color:"#7297FF"},{offset:.5,color:"#364BEC"},{offset:1,color:"#364BEC"}],[{offset:0,color:"#00C4FF"},{offset:.5,color:"#00C4FF"},{offset:.5,color:"#0091FF"},{offset:1,color:"#0091FF"}],[{offset:0,color:"#79EDDC"},{offset:.5,color:"#79EDDC"},{offset:.5,color:"#44D7B6"},{offset:1,color:"#44D7B6"}],[{offset:0,color:"#FCDB00"},{offset:.5,color:"#FCDB00"},{offset:.5,color:"#F7B500"},{offset:1,color:"#F7B500"}],[{offset:0,color:"#FA6400"},{offset:.5,color:"#FA6400"},{offset:.5,color:"#FD9D00"},{offset:1,color:"#FD9D00"}],[{offset:0,color:"#D72552"},{offset:.5,color:"#D72552"},{offset:.5,color:"#F572A4"},{offset:1,color:"#F572A4"}],[{offset:0,color:"#B620E0"},{offset:.5,color:"#B620E0"},{offset:.5,color:"#EC66FF"},{offset:1,color:"#EC66FF"}],[{offset:0,color:"#6236FF"},{offset:.5,color:"#6236FF"},{offset:.5,color:"#9B66FF"},{offset:1,color:"#9B66FF"}]];let series=dataArr.result.reduce((o,e,t,l)=>(o.push({z:t+1,stack:"总量",type:"bar",name:e.name,barGap:"-100%",barWidth:30,data:e.data,itemStyle:{color:{type:"linear",x:0,x2:1,y:0,y2:0,colorStops:color[t]}}},{z:t+10,type:"pictorialBar",symbolPosition:"end",symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[30,10],data:diamondData[t],itemStyle:{color:{type:"linear",x:0,x2:1,y:0,y2:0,colorStops:color[t]}},tooltip:{show:!1}}),o.length===l.length*2&&o.push({z:l.length*2,type:"pictorialBar",symbolPosition:"start",data:dataArr.result[0].data,symbol:"diamond",symbolOffset:["0%","50%"],symbolSize:[30,10],itemStyle:{color:{type:"linear",x:0,x2:1,y:0,y2:0,colorStops:color[0]}},tooltip:{show:!1}}),o),[]);const tooltip={trigger:"axis"},legend={data:dataArr.result.map(o=>o.name),textStyle:{fontSize:14,color:"#333333"},itemWidth:25,itemHeight:15,itemGap:15,bottom:"5%"},grid={top:"10%",left:"10%",right:"3%",bottom:"15%"},xAxis={axisTick:{show:!0},axisLine:{lineStyle:{color:"rgba(0,0,0, .2)"}},axisLabel:{textStyle:{fontSize:12,color:"#333333"}},data:dataArr.xdata},yAxis=[{splitLine:{lineStyle:{color:"rgba(0,0,0, .2)"}},axisLine:{show:!1},axisLabel:{textStyle:{fontSize:16,color:"#3333333"}}}];option={tooltip,xAxis,yAxis,series,grid,legend,backgroundColor:"#fff"};
