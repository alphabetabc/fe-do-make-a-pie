var lineData=[{name:"漕河泾",value:8.2,test:"备注1"},{name:"长桥",value:9.32,test:"备注2"},{name:"华泾",value:9.01,test:"备注3"},{name:"徐家汇",value:9.34,test:"备注4"},{name:"田林",value:2.9,test:"备注5"},{name:"凌云",value:3.3,test:"备注6"},{name:"龙华",value:3.2,test:"备注7"},{name:"康健",value:9.32,test:"备注8"},{name:"虹梅",value:9.01,test:"备注9"},{name:"枫林",value:3.34,test:"备注10"},{name:"斜土",value:1.9,test:"备注11"},{name:"湖南",value:3.3,test:"备注12"},{name:"天平",value:1.32,test:"备注13"}];option={backgroundColor:"#f8f8f8",title:{show:!1},tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{color:"#c9caca",width:1,type:"dotted"}},textStyle:{fontSize:16},formatter:function(e){console.log(e[0]);var t;return t=e[0].name+" "+e[0].value+"<br/>"+e[0].data.test,t}},grid:{top:"12%",right:"5%",bottom:"10%",left:"8%"},xAxis:{type:"category",axisLabel:{interval:0,textStyle:{color:"#333",fontSize:16},formatter:"{value}"},axisLine:{lineStyle:{color:"#ccc"}},splitLine:{show:!0,lineStyle:{color:"rgba(102,102,102,.1)",width:1,type:"dashed"}},axisTick:{show:!0},data:function(e){var t=[];return e.forEach(function(a){t.push(a.name)}),t}(lineData)},yAxis:{type:"value",name:"数量      ",nameTextStyle:{color:"#666",fontFamily:"Simsun",fontSize:14},axisLabel:{show:!0,textStyle:{color:"#333",fontSize:16},formatter:"{value}"},splitNumber:5,axisLine:{lineStyle:{color:"#ccc",width:1}},splitLine:{show:!0,lineStyle:{color:"rgba(102,102,102,.1)",width:1,type:"dashed"}}},color:["#01f274","#8b1fb5"],series:[{name:"",type:"effectScatter",symbol:"circle",symbolSize:32,label:{normal:{show:!0,position:"top",textStyle:{color:"#666",fontSize:15}}},itemStyle:{normal:{color:"#f53f75"}},lineStyle:{normal:{color:"#f53f75",width:0}},smooth:!0,markLine:{precision:0,data:[{type:"average",name:"平均值"}],lineStyle:{normal:{type:"dashed",color:"#1668ec",width:3}},label:{show:!0,formatter:"{c}",fontSize:16}},data:lineData}]},myChart.setOption(option);
