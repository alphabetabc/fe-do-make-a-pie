let xData=[2017,2018,2019,2020,2021],yData1=[5e3,8e3,10500,13500,17e3],yData2=[15e3,16e3,18e3,20500,22e3],lineData1=[38,28,50,37,63],lineData2=[62,57,79,62,95];option={legend:{right:30,top:0},grid:{left:"3%",right:"3%",top:"7%",bottom:"5%",containLabel:!0},xAxis:{data:xData,axisTick:{show:!1},axisLine:{lineStyle:{color:"#31C2FF"}},axisLabel:{color:"#CAEEFF",fontSize:12}},yAxis:[{type:"value",name:"单位：人",nameTextStyle:{color:"#CAEEFF",fontSize:12},axisLine:{show:!0,lineStyle:{color:"#31C2FF"}},axisLabel:{color:"#CAEEFF",fontSize:12},splitLine:{lineStyle:{color:"#31C2FF",opacity:.2}}},{type:"value",max:100,min:0,splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#31C2FF"}},axisLabel:{color:"#CAEEFF",fontSize:12,formatter:e=>(console.log(e),`${e}%`)}}],series:[{name:"专任教师数量（人）",type:"bar",barGap:"-100%",itemStyle:{color:"#06CA70",borderRadius:[4,4,0,0]},z:3,data:yData1},{name:"近五年新增教师",type:"bar",itemStyle:{color:"#008AFF",borderRadius:[4,4,0,0]},data:yData2},{name:"专任教师中硕博占比",type:"line",data:lineData1,itemStyle:{color:"#867DFF"},yAxisIndex:1,symbolSize:10},{name:"具有高级职称的专任教师比例（%）",type:"line",data:lineData2,itemStyle:{color:"#FB6A66"},yAxisIndex:1,symbolSize:10}]};
