option={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},dataZoom:{show:!1,type:"slider",startValue:0,endValue:3},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar",barWidth:40}]},setInterval(()=>{let t=option.xAxis.data[0],a=option.series[0].data[0];option.xAxis.data.shift(),option.xAxis.data.push(t),option.series[0].data.shift(),option.series[0].data.push(a),myChart.setOption(option)},2100);
