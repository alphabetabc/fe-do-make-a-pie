var xData2=["容城谷庄","雄县七间房","安新三台","雄县张岗","安新寨里","ewewe"],data1=[30,20,30,20,20,40];option={grid:{left:100,bottom:100},xAxis:{data:xData2,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{interval:0,textStyle:{color:"red",fontSize:20},margin:20}},yAxis:{splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{textStyle:{color:"red",fontSize:20}}},series:[{name:"",type:"bar",barWidth:45,barGap:"-100%",itemStyle:{opacity:.5,color:"red"},data:data1},{name:"2019",type:"bar",barWidth:45,barGap:"-100%",z:0,label:{formatter:({dataIndex:a})=>data1[a],show:!0,position:"top",distance:10,color:"red"},itemStyle:{color:"transparent"},data:[100,100,100,100,100,100]}]};
