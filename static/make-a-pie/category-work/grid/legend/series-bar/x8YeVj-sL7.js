var xData=["创新指数数值","比上年进步","创新指数位次","指数进步位次","常住人口"],data1=[120,200,150,90,70],data2=[300,150,100,40,50],legend=["2017","2018"];let maxData=null;function getMaxData(){let e=[...data1,...data2];return e.forEach((a,t)=>{a<0&&(e[t]=-a)}),e.sort(function(a,t){return t-a}),e[0]}maxData=getMaxData(),option={legend:{data:["2017","2018"]},grid:[{show:!1,left:"3%",top:"10%",bottom:"8%",containLabel:!0,width:"40%"},{show:!1,left:"50%",top:"10%",bottom:"8%",width:"20%"},{show:!1,right:"3%",top:"10%",bottom:"8%",containLabel:!0,width:"40%"}],xAxis:[{gridIndex:0,type:"value",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},max:maxData},{gridIndex:1,show:!0},{gridIndex:2,type:"value",inverse:!1,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},max:maxData}],yAxis:[{type:"category",gridIndex:0,axisTick:{show:!1},axisLabel:{show:!1}},{gridIndex:1,type:"category",show:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,margin:-1,align:"center",textStyle:{color:"#000",align:"center"}},data:xData},{type:"category",gridIndex:2,axisTick:{show:!1},axisLabel:{show:!1}}],series:[{xAxisIndex:0,yAxisIndex:0,data:data1,type:"bar",barWidth:"20",backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"},label:{show:!0,position:"left"}},{type:"bar",xAxisIndex:1,yAxisIndex:1,itemStyle:{normal:{}},barWidth:"20"},{xAxisIndex:2,yAxisIndex:2,data:data2,type:"bar",barWidth:"20",backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"},label:{show:!0,position:"right"}}]};
