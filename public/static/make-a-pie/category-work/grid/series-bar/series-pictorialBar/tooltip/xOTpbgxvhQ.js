var xData2=["容城谷庄","雄县七间房","安新三台","雄县张岗","安新寨里"],data1=[200,100,200,200,100],data2=[300,200,300,300,400];option={backgroundColor:"#021132",tooltip:{trigger:"item"},grid:{left:100,bottom:100},xAxis:{axisTick:{show:!1},axisLine:{show:!1},axisLabel:{interval:0,textStyle:{color:"#fff",fontSize:20}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(255,255,255,0.2)"}}},yAxis:{data:xData2,splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{textStyle:{color:"#fff",fontSize:20}}},series:[{name:"",type:"pictorialBar",symbolSize:[25,45],symbolOffset:[-10,0],z:12,itemStyle:{opacity:1,color:"#FF9A22"},data:[1,1,1,1,1]},{name:"2020",type:"bar",barWidth:45,barGap:"-100%",itemStyle:{opacity:.7,color:"#FF9A22"},data:data1},{type:"bar",barWidth:45,barGap:"-100%",stack:"广告",itemStyle:{color:"transparent"},data:data1},{name:"",type:"pictorialBar",symbolSize:[25,45],symbolOffset:[10,0],z:12,symbolPosition:"end",itemStyle:{color:"#163F7A",opacity:1},data:data2},{name:"",type:"pictorialBar",symbolSize:[25,45],symbolOffset:[10,0],z:12,itemStyle:{opacity:1,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FF9A22"},{offset:1,color:"#FFD56E"}],!1)},symbolPosition:"end",data:data1},{name:"2019",type:"bar",barWidth:45,barGap:"-100%",z:0,itemStyle:{color:"#163F7A",opacity:.7},data:data2}]};