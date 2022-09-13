option={backgroundColor:"#404A59",color:["#ffd285","#ff733f","#ec4863","#ffc0a9"],title:[{text:"分娩—黑白胎统计报表",left:"40%",top:"6%",textStyle:{color:"#fff"}}],tooltip:{},legend:{x:"30%",bottom:"1%",data:["白胎数","黑胎数","死仔总数","产仔总数"],textStyle:{color:"#fff"}},radar:{indicator:[{name:"白胎比例 ",max:65},{name:"黑胎比例",max:16},{name:"死胎比例",max:30}],center:["83%","65%"],radius:80},grid:{left:"10%",right:"32%",top:"16%",bottom:"6%",containLabel:!0},toolbox:{show:!1,feature:{saveAsImage:{}}},xAxis:{type:"category",axisLine:{lineStyle:{color:"#c0576d"}},axisTick:{show:!1},axisLabel:{textStyle:{color:"#fff"}},boundaryGap:!0,data:["2017/7","2017/8","2017/9","2017/10","2017/11","2017/12","2018/1"]},yAxis:{axisLine:{lineStyle:{color:"#c0576d"}},splitLine:{show:!0,lineStyle:{color:"#c0576d"}},axisTick:{show:!1},axisLabel:{textStyle:{color:"#fff"}},type:"value"},series:[{name:"白胎数",smooth:!0,type:"bar",symbolSize:8,data:[90,50,39,50,120,82,80]},{name:"黑胎数",smooth:!0,type:"bar",symbolSize:8,data:[70,50,50,87,90,80,70]},{name:"死仔总数",smooth:!0,type:"bar",symbolSize:8,data:[20,10,20,12,15,20,30]},{name:"产仔总数",smooth:!0,type:"bar",symbolSize:8,data:[290,200,210,132,115,200,190]},{type:"pie",center:["83%","20%"],radius:["15%","20%"],tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},label:{normal:{position:"center"}},data:[{value:335,name:"白胎比例 ",itemStyle:{normal:{color:"#ffd285"}},label:{normal:{formatter:"{d} %",textStyle:{color:"#ffd285",fontSize:20}}}},{value:100,tooltip:{show:!1},itemStyle:{normal:{color:"#404A59"}},label:{normal:{textStyle:{color:"#ffd285"},formatter:`
白胎比例 `}}}]},{type:"radar",center:["83%","85%"],tooltip:{},data:[{value:[43,10,28,35,50,19],name:"比例"}]}]};
