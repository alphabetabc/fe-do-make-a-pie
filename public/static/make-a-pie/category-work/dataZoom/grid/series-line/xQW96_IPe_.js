let dataList=[{date:"2022-01-22",type:0},{date:"2022-01-23",type:-1},{date:"2022-01-24",type:2},{date:"2022-01-25",type:2},{date:"2022-01-26",type:0},{date:"2022-01-27",type:-1},{date:"2022-01-28",type:2},{date:"2022-01-29",type:-1}],datapush=[{date:"2022-01-13",type:-1},{date:"2022-01-14",type:-1},{date:"2022-01-15",type:-1},{date:"2022-01-16",type:1},{date:"2022-01-17",type:-1},{date:"2022-01-18",type:-1},{date:"2022-01-19",type:-1},{date:"2022-01-20",type:-1},{date:"2022-01-21",type:-1}],arrdate=[],arrtype=[];dataList.map(e=>{arrdate.push(e.date),arrtype.push(e.type)}),option={xAxis:{type:"category",data:arrdate,show:!1},dataZoom:[{show:!0,realtime:!0,start:0,end:100,xAxisIndex:[0,1]},{type:"inside",realtime:!0,start:0,end:100,xAxisIndex:[0,1]}],yAxis:{type:"value",show:!1},series:[{data:arrtype,smooth:!0,type:"line",itemStyle:{normal:{label:{show:!0,color:"#999",fontStyle:"normal",fontWeight:"normal",fontSize:10},lineStyle:{color:"#989898",width:1,type:"solid"},color:e=>{if(arrtype[e.dataIndex]===-1)return"red";if(arrtype[e.dataIndex]===0)return"pink";if(arrtype[e.dataIndex]===1)return"#000";if(arrtype[e.dataIndex]===2)return"green"}}}}]},myChart.on("datazoom",function(e){});