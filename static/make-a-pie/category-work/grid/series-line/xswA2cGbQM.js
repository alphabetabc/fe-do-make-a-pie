let value=[150,230,224,218,135,147,260],min=Math.min(...value),max=Math.max(...value);console.log(min,max),option={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line",symbol:function(e,o){return console.log(o),e==min||e==max?"circle":"none"},itemStyle:{normal:{color:"red",borderColor:"red",lineStyle:{color:"#ff9c35"}}}}]};
