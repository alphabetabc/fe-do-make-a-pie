let xLabel=["1","2","3","4","5","6"],goToSchool=["40","60","22","85","50","40"],goOutSchool=["20","50","12","65","30","60"];option={backgroundColor:"#0e1c47",color:["#5CFFDC","#FFD24A","#FF4A4A","#4AA2FF"],tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,0.5)",borderColor:"#34CEFFBD",borderWidth:2,padding:[5,10],formatter:e=>{let t=`${e[0].name}月<br/>`;for(let o=0;o<e.length;o++)t=t+`<span style='display:inline-block;margin-right:5px;
                border-radius:10px;width:9px;height:9px;background-color:${e[o].color}'></span>
                ${e[o].seriesName}：<i style='float:right;color:#4AEFED ' >${e[o].value}件</i><br/>`;return t}},legend:{align:"left",right:"10%",top:"10%",type:"plain",textStyle:{color:"#7ec7ff",fontSize:16},itemGap:25,itemWidth:18,icon:"path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"},grid:{top:"15%",left:"10%",right:"10%",bottom:"15%"},xAxis:[{type:"category",name:"月份",nameGap:10,boundaryGap:!1,nameTextStyle:{color:"#E2E8EDE8",fontSize:15},axisLabel:{show:!0,interval:0,textStyle:{color:"#E2E8EDE8",fontSize:this.screenScale*15}},splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#379E98AB"}},axisTick:{show:!1},data:xLabel}],yAxis:[{name:"销售额",nameTextStyle:{color:"#E2E8EDE8",fontSize:16},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,textStyle:{color:"#E2E8EDE8",fontSize:15}}}],series:[{name:"食品",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,smooth:!0,lineStyle:{normal:{width:5},borderColor:"rgba(0,0,0,.4)"},itemStyle:{borderColor:"#646ace",borderWidth:2},tooltip:{show:!0},data:goToSchool},{name:"日用品",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,smooth:!0,lineStyle:{normal:{width:5},borderColor:"rgba(0,0,0,.4)"},itemStyle:{borderColor:"#646ace",borderWidth:2},tooltip:{show:!0},data:goOutSchool}]};let len=0;setInterval(()=>{len===xLabel.length&&(len=0),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:len}),len++},1e3);
