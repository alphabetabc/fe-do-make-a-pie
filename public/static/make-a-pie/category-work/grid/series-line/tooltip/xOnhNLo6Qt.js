let dataArray={xData:["0101","0102","0103","0104","0105","0106"],yData:[356,567,532,666,612,612]},tooltip={trigger:"axis"},grid={left:"2%",right:"12%",top:"8%",bottom:"22%"},xAxis={type:"category",name:"日期",nameLocation:"end",nameTextStyle:{color:"#fff",fontSize:12,padding:[0,0,0,-10]},data:dataArray.xData,axisLine:{lineStyle:{color:"rgba(255,255,255, .2)"}},axisLabel:{textStyle:{fontSize:16,color:"#fff"}}},yAxis={max:e=>e.max+200,type:"value",scale:!0,splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,.05)"}},axisLine:{show:!1},axisLabel:{show:!1}},series=[{name:"可用房间",type:"line",symbol:"circle",areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#2fffa4"},{offset:.4,color:"#b0ffdc"},{offset:1,color:"transparent"}])},lineStyle:{color:{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"#2fffa4"},{offset:1,color:"#2fffa4"}],global:!1}},itemStyle:{color:{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"#2fffa4"},{offset:1,color:"#2fffa4"}],global:!1}},label:{show:!0,position:"top",formatter:e=>`${e.value}间`,textStyle:{color:"#2fffa4",fontSize:16}},data:dataArray.yData}];option={tooltip,grid,xAxis,yAxis,series,backgroundColor:"rgba(0, 0, 0, .8)"};