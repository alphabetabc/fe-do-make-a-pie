var dataSource=[],dataSource2=[],xAxisFlag="",index=0,option={title:{text:"ECharts"},tooltip:{show:!0,trigger:"axis",backgroundColor:["skyblue"],textStyle:{color:["#003"]}},legend:{data:["销量"]},dataZoom:[{show:!0,realtime:!0,start:20,end:80},{type:"inside",realtime:!0,start:20,end:80}],xAxis:{data:["0","1","2","3","4","5"],boundaryGap:!1},yAxis:{},toolbox:{show:!0,feature:{mark:!0,dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"折线A",type:"line",data:[5,20,36,10,10,20],showSymbol:!1,markLine:{silent:!0,lineStyle:{normal:{type:"solid"}},data:[]},markPoint:{data:[]}},{name:"折线B",type:"line",data:[15,22,10,30,20,40],showSymbol:!1},{name:"折线C",type:"line",data:[21,14,16,21,12,16],showSymbol:!1},{name:"折线D",type:"line",data:[25,8,12,30,26,22],showSymbol:!1}]};myChart.setOption(option),myChart.on("click",function(s){dataIndex=s.dataIndex;var t=option.xAxis.data[dataIndex];if(option.series[0].markLine.data.length==0){var a="";a+=t;for(var e=0;e<option.series.length;e++)a+=`
`+option.series[e].name+"："+option.series[e].data[dataIndex];var r={type:"average",xAxis:t,label:{}},i={xAxis:dataIndex,yAxis:s.data,symbol:"circle",symbolSize:1,label:{show:!0,formatter:a,position:[10,10]}};dataSource2.push(i),dataSource.push(r),option.series[0].markPoint.data=dataSource2,option.series[0].markLine.data=dataSource,myChart.setOption(option)}else{for(var e=0;e<option.series[0].markLine.data.length;e++){var o=option.series[0].markLine.data[e].xAxis;if(o==t){index=e,console.log("值相等");break}else index=-1,console.log("值不相等")}if(index==-1){var a="",t=option.xAxis.data[dataIndex];a+=t;for(var e=0;e<option.series.length;e++)a+=`
`+option.series[e].name+"："+option.series[e].data[dataIndex];var r={type:"average",xAxis:t,label:{}},i={xAxis:dataIndex,yAxis:s.data,symbol:"circle",symbolSize:1,label:{show:!0,formatter:a,position:[10,10]}};dataSource.push(r),dataSource2.push(i),option.series[0].markPoint.data=dataSource2,option.series[0].markLine.data=dataSource,myChart.setOption(option)}else console.log("剔除相等值"),option.series[0].markPoint.data.splice(index,1),option.series[0].markLine.data.splice(index,1),myChart.setOption(option)}});
