var data=[132,324,327,452],data1=[10,20,30,40,50],data2=["","","","",50,60],data3=["","","","",50,70],dataX=["01","01","02","01","01","02"],dataArr=[{type:"max",name:"最大值"},{coord:[4,50]}];option={xAxis:{type:"category",data:[0,1,2,3,4,5]},yAxis:[{type:"value"},{type:"value",position:"right",splitLine:{show:!1},axisLabel:{show:!0,formatter:"{value}"}}],grid:{right:"25%",bottom:"10%"},series:[{name:"直接访问",type:"bar",barWidth:"40",yAxisIndex:1,data},{markPoint:{symbol:"pin",position:"top",symbolSize:[60,50],data:dataArr,label:{offset:[0,0],color:"#fff",formatter:["555"].join(`
`)},symbolOffset:[0,"-30%"],itemStyle:{color:"#5e80f3"}},data:data1,type:"line",z:999999,smooth:!1,symbol:"emptyCircle",symbolSize:10,showSymbol:!0,itemStyle:{normal:{label:{show:!1},color:"#25a4fb",lineStyle:{color:"#25a4fb"}}}},{name:"",type:"line",smooth:!0,symbol:"emptyCircle",symbolSize:10,itemStyle:{normal:{label:{show:!1},color:"#ffa422",lineStyle:{width:2,color:"#fa5900",type:"dashed"}}},markPoint:{symbol:"pin",position:"top",symbolSize:[60,50],data:[{type:"max",name:"最大值"}],symbolOffset:[0,"-30%"],itemStyle:{color:"#fa5900"}},data:data3},{name:"",type:"line",smooth:!0,symbol:"emptyCircle",symbolSize:10,itemStyle:{normal:{label:{show:!1},color:"#ffa422",lineStyle:{width:2,color:"green",type:"dashed"}}},markPoint:{symbol:"image://img/lp.png",position:"bottom",symbolSize:[60,50],data:[{type:"max",name:"最大值"}],symbolOffset:[0,"60%"],label:{offset:[0,6],color:"#ffffff"},itemStyle:{fontWeight:500,border:0}},data:data2}]};
