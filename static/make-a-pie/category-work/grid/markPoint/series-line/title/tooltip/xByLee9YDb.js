option={title:{text:"指标色块分布及变化趋势趋势图"},tooltip:{trigger:"item",formatter:"{b}生产指标值 : {c}"},grid:{left:"10%",right:"10%",bottom:"20%",top:"10%",containLabel:!0},xAxis:[{name:"记录时间",type:"category",boundaryGap:!1,data:["2016-1","2016-2","2016-3","2016-4","2016-5","2016-6","2016-7"]}],yAxis:[{name:"指标数据",type:"value",splitLine:{lineStyle:{type:"dashed",color:"white"}},data:["绿灯","黄灯","红灯"]}],series:[{name:"绿灯",stack:"总量",type:"line",smooth:!0,symbolSize:0,areaStyle:{normal:{}},itemStyle:{normal:{color:"green"}},label:{normal:{show:!1}},lineStyle:{normal:{width:0}},data:[1,.9,1,1,.9,1,1]},{name:"黄灯",type:"line",smooth:!0,symbolSize:0,areaStyle:{normal:{}},stack:"总量",itemStyle:{normal:{color:"orange"}},lineStyle:{normal:{width:0}},data:[.5,.6,.4,.5,.5,.4,.4]},{name:"红灯",stack:"总量",type:"line",smooth:!0,areaStyle:{normal:{}},symbolSize:0,itemStyle:{normal:{color:"red"}},lineStyle:{normal:{width:0}},data:[.5,.5,.6,.5,.6,.6,.6]},{name:"实际1",stack:"实际1",type:"line",smooth:!0,lineStyle:{normal:{color:"white",width:2}},symbolSize:10,itemStyle:{normal:{color:"black"}},data:[.8,1,2,.8,1,1,.7],markPoint:{data:[{type:"max",name:"最大值"}],itemStyle:{normal:{color:"blue"}}}}]};
