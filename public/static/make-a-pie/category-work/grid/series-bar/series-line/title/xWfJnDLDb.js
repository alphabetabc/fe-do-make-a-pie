var data={title:["总计","A型车","B型车","C型车","D型车"],plan_production:[500,300,490,333,346],actual_production:[300,400,500,300,400],attainment_rate:[60,80,90,60,70],productivity:[30,45,88,100,110]};option={title:{text:"隧道车辆占比"},grid:{bottom:150,left:80,right:80},xAxis:[{type:"category",data:data.title,axisTick:{show:!1}}],yAxis:[{type:"value",scale:!1,minInterval:1,name:"数量",axisLine:{lineStyle:{opacity:0}},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed"}},min:0,interval:200,max:1e3},{show:!1,type:"value",scale:!0,name:"百分比",splitLine:{show:!1},axisLabel:{formatter:"{value} %"}}],series:[{name:"计划数量",type:"bar",label:{show:!1,position:"top"},itemStyle:{color:"#0769a6",barBorderRadius:[5,5,0,0]},yAxisIndex:0,data:data.plan_production},{name:"实际产出",type:"bar",label:{show:!1,position:"top"},itemStyle:{color:"#02bf8a",barBorderRadius:[5,5,0,0]},yAxisIndex:0,data:data.actual_production},{name:"实际产出",type:"bar",label:{show:!1,position:"top"},itemStyle:{color:"#ffc303",barBorderRadius:[5,5,0,0]},yAxisIndex:0,data:data.actual_production},{name:"达成率",type:"line",symbol:"none",label:{show:!1,position:"top",formatter:"{c} %"},lineStyle:{color:"#02bf8a"},yAxisIndex:1,data:data.attainment_rate},{name:"生产效率",type:"line",symbol:"none",label:{show:!1,position:"top",formatter:"{c} %"},lineStyle:{color:"#ffc303"},yAxisIndex:1,data:data.productivity}]};
