var base=+new Date(2014,9,3),oneDay=24*3600*1e3,date=[],data=[Math.random()*150],now=new Date(base);function addData(a){now=[now.getFullYear(),now.getMonth()+1,now.getDate()].join("/"),date.push(now),data.push((Math.random()-.4)*10+data[data.length-1]),a&&(date.shift(),data.shift()),now=new Date(+new Date(now)+oneDay)}for(var i=1;i<100;i++)addData();option={xAxis:{type:"category",boundaryGap:!1,data:date},yAxis:{boundaryGap:[0,"50%"],type:"value"},series:[{name:"成交",type:"line",smooth:!0,symbol:"none",stack:"a",areaStyle:{normal:{}},data}]},setInterval(function(){addData(!0),myChart.setOption({xAxis:{data:date},series:[{name:"成交",data}]})},500);
