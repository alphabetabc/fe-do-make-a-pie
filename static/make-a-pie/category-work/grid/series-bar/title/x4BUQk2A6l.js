let data1=[];for(let t=0;t<27;t++)data1.push([Math.floor(Math.random()*1e3),String.fromCodePoint(65+t)]);data1.sort(function(t,e){return e[0]-t[0]}),option={title:{text:"动态追加数据的柱图"},xAxis:{},yAxis:{type:"category"},series:[{type:"bar",label:{show:!0,position:"right"},data:[]}]};let interval=setInterval(function(){if(data1.length===0)return clearInterval(interval);option.series[0].data.push(data1.pop()),myChart.setOption(option)},1e3);
