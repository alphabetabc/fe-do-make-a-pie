function randomData(){now=new Date(+now+oneDay),value=parseInt(Math.random()*(70-30+1)+30);var e=now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes(),t=now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds();return{name:now.toString(),value:[[now.getFullYear(),now.getMonth(),now.getDate()].join("/")+" "+[now.getHours(),e,t].join(":"),value]}}for(var data=[],data_test,now=new Date,oneDay=1e3,value=100,i=0;i<200;i++)data.push(randomData());option={title:{text:"心电图测试",top:15,left:"center",textStyle:{color:"rgb(153, 153, 153)",fontSize:22,fontWeight:500}},animation:!1,grid:{show:!1,containLabel:!1,top:200,right:1,bottom:400,left:1},xAxis:{interval:1e3,type:"time",show:!1,axisLine:{show:!0},axisTick:{show:!1},splitLine:{lineStyle:{color:["rgb(253, 207, 225)","rgb(253, 234, 237)","rgb(253, 234, 237)","rgb(253, 234, 237)","rgb(253, 234, 237)"],type:"solid",width:1}}},yAxis:{type:"value",interval:2,z:2,min:0,max:100,boundaryGap:[0,"100%"],axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:["rgb(253, 207, 225)","rgb(253, 234, 237)","rgb(253, 234, 237)","rgb(253, 234, 237)","rgb(253, 234, 237)"],type:"solid"}}},series:[{name:"模拟数据",type:"line",smooth:!0,showSymbol:!1,hoverAnimation:!1,z:5,data,lineStyle:{width:1,color:"#000000"}}]},setInterval(function(){data.shift(),data_test=randomData(),data.push(data_test),myChart.setOption({series:[{data}]})},1e3);