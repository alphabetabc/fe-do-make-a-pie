option={grid:[{top:40},{top:40}],legend:{show:!1},tooltip:{trigger:"axis",formatter:(e,o)=>{const[t]=e;return`${t.seriesName} ${t.name}: ${Math.round(t.value*100)} %`},axisPointer:{show:!0,status:"shadow",z:-1,shadowStyle:{color:"#E6F7FF"},type:"shadow"}},xAxis:[{position:"bottom",type:"category",axisLine:{show:!0,lineStyle:{color:"#ECF1F6"}},axisTick:{show:!1},axisLabel:{show:!0,rotate:0,fontSize:12,color:"#3A3A3C"},splitLine:{show:!0,lineStyle:{color:["#ECF1F6","#ECF1F6"],width:0,type:"dashed"}},gridIndex:0,data:["0-3岁","4-15岁","16-30岁","31-45岁","46-60岁","61-75岁","76-90岁","91-115岁"]},{type:"category",gridIndex:1,show:!1}],yAxis:[{type:"value",position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,rotate:0,fontSize:12,color:"#6E7D9C",formatter:(e,o)=>`${e*100} %`},splitLine:{show:!0,lineStyle:{color:["#ECF1F6","#ECF1F6"],width:1,type:"solid"}},min:0,max:1,gridIndex:0},{gridIndex:1,min:0,max:1,show:!1}],series:[{name:"底部backdrop",xAxisIndex:1,yAxisIndex:1,type:"bar",data:[1,1,1,1,1,1,1,1].map(e=>({value:e,itemStyle:{color:"transparent"}})),barMaxWidth:"100%",silent:!0,z:2},{name:"xxx疾病人群感染情况",xAxisIndex:0,yAxisIndex:0,itemStyle:{color:"#43A7FF"},type:"bar",data:[.3,.4,.5,.8,.7,.7,.5,.8],barMaxWidth:"20%",z:3}]},myChart._dom.style.backgroundColor="#fff",myChart.on("click",function(e){const{dataIndex:o}=e,t=myChart.getOption(),{series:[i]}=t;i.data.forEach((a,r)=>{r===o?a.itemStyle.color="#CCEEFF":a.itemStyle.color="transparent"}),myChart.setOption(t)});