const data2=[{value:-18,symbol:"rectangle"},{value:-29,symbol:"diamond"},{value:-12,symbol:"triangle"},{value:3,symbol:"rectangle"},{value:17,symbol:"diamond"},{value:-2,symbol:"triangle"},{value:18,symbol:"rectangle"},{value:8,symbol:"rectangle"},{value:28,symbol:"diamond"},{value:-8,symbol:"rectangle"}],yAxis=["2021-10-12","2021-10-13","2021-10-14","2021-10-15","2021-10-16","2021-10-17","2021-10-18","2021-10-19","2021-10-20","2021-10-21"];option={grid:{right:100},tooltip:{trigger:"axis"},yAxis:{position:"right",type:"category",axisLabel:{show:!1},axisLine:{show:!0},axisTick:{show:!1},splitLine:{show:!1},data:yAxis},xAxis:{name:"权重",type:"value",min:e=>-Math.max(Math.abs(e.max),Math.abs(e.min))*1.5,max:e=>Math.max(Math.abs(e.max),Math.abs(e.min))*1.5,splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#333"}}},dataZoom:[{type:"inside"},{handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",right:25,yAxisIndex:0,handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}],series:[{data:data2.map(e=>e.value),type:"line",symbol:"none",symbolSize:12,smooth:!0},{data:data2.map(({symbol:e})=>({value:0})),type:"line",symbol:"rectangle",symbolSize:[10,1],itemStyle:{color:"#666"},lineStyle:{opacity:0},label:{show:!0,position:"left",verticalAlign:"middle",formatter:function(e){return console.log(e),e.name}},emphasis:{scale:!1},smooth:!0}]};