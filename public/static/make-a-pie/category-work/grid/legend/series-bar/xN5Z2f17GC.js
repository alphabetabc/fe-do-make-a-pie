for(var xArr=["一","二","三","四","五"],yArr=[100,200,300,400,500],series=[],i=0;i<xArr.length;i++)series.push({name:xArr[i],type:"bar",barWidth:16,barGap:"-100%",data:[[xArr[i],yArr[i],yArr[i]]]});option={legend:{left:"left",top:"30",data:xArr},grid:{x:60,y:100,x2:40,y2:35},xAxis:{data:xArr,z:10},yAxis:{name:"人"},color:["#F75647","#43C17E","#F9CB44","#F75647","#FC9827","#7E5CCA"],series};