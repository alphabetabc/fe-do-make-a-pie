var barOption=null,barWidth=null,barSpace=null;function getBarOption(){for(var a=myChart.getZr().storage._displayList,r=[],e=[],t=0;t<a.length;t++)a[t].type==="rect"&&a[t].shape.x>0&&(r.push(a[t]),e.push(a[t].shape.x).toFixed(2));var i=r[2].shape.width;e=e.sort((n,l)=>n-l);for(var s=[],t=0;t<e.length-1;t++){var o=(e[t+1]-e[t]-i).toFixed(2);s.indexOf(o)===-1&&s.push(o)}return[i,parseInt(s[0])]}function setBarOption(){barOption=getBarOption(),barWidth=barOption[0],barSpace=barOption[1]}option={legend:{},roam:!0,tooltip:{trigger:"axis",position:(a,r,e,t)=>{var i=100;return x=r[0].data[0],y=Math.max.apply(null,r[0].data.slice(1)),idx=r[0].data.slice(1).indexOf(y),a=myChart.convertToPixel({gridIndex:0},[x,y]),a[0]=a[0]-1.5*barWidth-barSpace+idx*(barWidth+barSpace),a[1]-=i,a}},dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",43.3,85.8,93.7],["Milk Tea",83.1,73.4,55.1],["Cheese Cocoa",86.4,65.2,82.5],["Walnut Brownie",72.4,80,39.1]]},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]},setTimeout(()=>{setBarOption()},500);