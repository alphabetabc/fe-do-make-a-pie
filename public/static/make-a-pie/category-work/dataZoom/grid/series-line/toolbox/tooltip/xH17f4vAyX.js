var data=[{name:"2018-05-22",value:1},{name:"2018-05-29",value:5},{name:"2018-06-04",value:1},{name:"2018-06-11",value:1},{name:"2018-06-29",value:1}],series_data=[],xAxis_data=[];data.forEach(function(a){series_data.push(a.value),xAxis_data.push(a.name)}),option={tooltip:{trigger:"axis",axisPointer:{animation:!1}},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},axisPointer:{link:{xAxisIndex:"all"}},dataZoom:[{show:!0,realtime:!0,start:30,end:70,xAxisIndex:[0]},{type:"inside",realtime:!0,start:30,end:70,xAxisIndex:[0]}],xAxis:{name:"时间",data:xAxis_data},yAxis:{name:"总量"},series:[{type:"line",data:series_data}]};
