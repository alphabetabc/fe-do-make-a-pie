function randomData(){return now=new Date(+now+oneDay),value=value+Math.random()*21-10,{name:now.toString(),value:[[now.getFullYear(),now.getMonth()+1,now.getDate()].join("/"),Math.round(value)]}}for(var data=[],now=+new Date(1997,9,3),oneDay=24*3600*1e3,value=Math.random()*1e3,i=0;i<1e3;i++)data.push(randomData());console.log(data),option={title:{text:"动态数据 + 时间坐标轴"},tooltip:{trigger:"axis",formatter:function(e){e=e[0];var t=new Date(e.name);return t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate()+" : "+e.value[1]},axisPointer:{animation:!1}},xAxis:{type:"time",splitLine:{show:!1},axisLabel:{formatter:function(e,t){var a=new Date(e),n=[a.getMonth()+1,a.getDate()];return n.join("/")}}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1}},series:[{name:"模拟数据",type:"line",showSymbol:!1,hoverAnimation:!1,data}]};
