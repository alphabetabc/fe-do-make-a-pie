let one=[],two=[],datas={xData:[],arrStar:[],arrRise:[],tooltip:[],colorSet:[]};for(let a=0;a<500;a++)one.push(Number((Math.random()*100).toFixed(2))),two.push(Number((Math.random()*100).toFixed(2)));sets(one,two);function sets(a,i){let e=JSON.parse(JSON.stringify(a)),r=JSON.parse(JSON.stringify(i));for(let t=0;t<e.length;t++){if(datas.xData.push(t),Math.abs(Number(i[t]))<Math.abs(Number(a[t]))&&(r[t]=a[t],e[t]=i[t]),datas.arrStar.length>e.length*2&&datas.arrRise.length>e.length*2&&(datas.arrStar.shift(),datas.arrRise.shift(),datas.xData.shift(),datas.tooltip.shift(),datas.colorSet.shift(),datas.xData.push(Number(datas.xData[datas.xData.length-1])+1)),datas.tooltip.push([e[t],r[t]]),e[t]<=0&&r[t]>0){datas.arrRise.push(Number(r[t])),datas.colorSet.push("#5470c6"),datas.arrStar.push(Number(e[t]));continue}if(e[t]>0&&r[t]<=0){datas.arrRise.push(Number(r[t])),datas.colorSet.push("#5470c6"),datas.arrStar.push(Number(e[t]));continue}if(e[t]>0&&r[t]>0){e[t]<r[t]?datas.arrRise.push(Number(r[t]-e[t])):datas.arrRise.push(Number(e[t]-r[t])),datas.colorSet.push("transparent"),datas.arrStar.push(Number(e[t]));continue}if(e[t]<=0&&r[t]<=0){e[t]<r[t]?datas.arrRise.push(Number(r[t]-e[t])):datas.arrRise.push(Number(e[t]-r[t])),datas.colorSet.push("transparent"),datas.arrStar.push(Number(e[t]));continue}}}option={animation:!1,title:{text:"Accumulated Waterfall Chart"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(a){let i;return a[1].value!=="-"?i=a[1]:i=a[0],i.name+"<br/>"+i.seriesName+" : "+i.value.toFixed(2)+"<br/>"+datas.tooltip[i.dataIndex][0]+" ~ "+datas.tooltip[i.dataIndex][1]}},legend:{data:["Income"],animation:!1},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",triggerEvent:!0,axisTick:{show:!0,alignWithLabel:!0,interval:"auto"},axisLabel:{interval:"auto"},axisLine:{onZero:!1},splitLine:{show:!1},data:datas.xData},yAxis:{type:"value",splitLine:{show:!0},axisLine:{onZero:!1},axisTick:{show:!0,alignWithLabel:!0}},dataZoom:[{show:!0,type:"inside",filterMode:"none",xAxisIndex:[0],start:0,end:100}],series:[{name:"Placeholder",type:"bar",stack:"Total",itemStyle:{borderColor:"transparent",color:function(a){return datas.colorSet[a.dataIndex]}},data:datas.arrStar},{name:"波动",type:"bar",stack:"Total",data:datas.arrRise,itemStyle:{borderColor:"transparent",color:"#5470c6"}}]};