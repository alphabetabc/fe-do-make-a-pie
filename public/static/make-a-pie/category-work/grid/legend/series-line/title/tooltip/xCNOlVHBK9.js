var data=[],now=+new Date+288e5,AngleX=Math.random()*120-60,AngleY=Math.random()*120-60;function randomData(){return now=new Date(+now+200),AngleX+=Math.random()*8-4,AngleY+=Math.random()*8-4,{name:now.toString()+AngleX+AngleY,value:[now.valueOf(),Math.round(AngleX),Math.round(AngleY)]}}for(var i=0;i<100;i++)data.push(randomData());function parseData(a){return[new Date(a.value[0]).toLocaleTimeString().match(/\d{1,2}:\d{1,2}:\d{1,2}/)[0]+":"+new Date(a.value[0]).getMilliseconds(),a.value[1],a.value[2]]}var data0=[],data1=[],data2=[];for(i=0;i<100;i++)_temp=parseData(data[i]),data0.push(_temp[0]),data1.push(_temp[1]),data2.push(_temp[2]);option={title:{text:"Dynamic Date"},legend:{},tooltip:{trigger:"axis",formatter:{},axisPointer:{animation:!1}},xAxis:{type:"category",splitLine:{show:!0},data:data0},yAxis:{name:"Angle",type:"value",min:-90,max:90,splitLine:{show:!0}},series:[{name:"AngleX",type:"line",showSymbol:!1,hoverAnimation:!1,data:data1},{name:"AngleY",type:"line",hoverAnimation:!1,data:data2}],animation:!0},setInterval(function(){for(var a=0;a<1;a++)data.shift(),data.push(randomData()),_temp=parseData(data[data.length-1]),data0.shift(),data0.push(_temp[0]),data1.shift(),data1.push(_temp[1]),data2.shift(),data2.push(_temp[2]);myChart.setOption({xAxis:{data:data0},series:[{data:data1},{data:data2}]})},200);
