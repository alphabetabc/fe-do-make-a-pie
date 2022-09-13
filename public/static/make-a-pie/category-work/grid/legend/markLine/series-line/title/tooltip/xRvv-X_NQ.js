var year=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],stu=[96.3,96.4,97.5,95.6,98.1,94.8,89.6,94.1,80.1,52.4,75.8,94.7],group=[97.3,99.2,99.3,100,99.6,90.6,80,91.5,69.8,67.5,90.4,84.9];option={backgroundColor:"#fff",title:{text:"学习速度的历史轨迹",textStyle:{fontWeight:"normal",fontSize:16,color:"#333"},left:"center"},tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#999"}}},legend:{icon:"rect",itemWidth:30,itemHeight:2,itemGap:13,orient:"inside",data:["个人学习速度","整体学习速度"],right:"4%",textStyle:{fontSize:12,color:"#666"},selectedMode:!1},grid:{left:"4%",right:"14%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#333333"}},splitLine:{show:!0,lineStyle:{color:"#e4e4e4"}},axisTick:{show:!1},data:year}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{lineStyle:{color:"#333333"}},axisLabel:{margin:10,textStyle:{fontSize:14}},splitLine:{lineStyle:{color:"#e4e4e4"}}}],series:[{name:"个人学习速度",type:"line",showSymbol:!1,smooth:!1,lineStyle:{normal:{width:2}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255, 142, 9, 0.3)"},{offset:.8,color:"rgba(255, 142, 9, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"#ff8d07"}},markLine:{data:[{name:"",yAxis:80}],label:{normal:{show:!0,formatter:"个人平均学习速度"}},lineStyle:{normal:{color:"#ff8d07",width:1},emphasis:{width:1}}},data:stu},{name:"整体学习速度",type:"line",showSymbol:!1,smooth:!1,lineStyle:{normal:{width:2}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(19, 162, 252, 0.3)"},{offset:.8,color:"rgba(19, 162, 252, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"#029bfc"}},markLine:{data:[{name:"",yAxis:60}],label:{normal:{show:!0,formatter:"整体平均学习速度"}},lineStyle:{normal:{color:"#009cec",width:1},emphasis:{width:1}}},data:group}]};