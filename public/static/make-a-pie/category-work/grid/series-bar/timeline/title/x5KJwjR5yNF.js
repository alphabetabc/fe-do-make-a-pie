colors=["red","orange","yellow","green","pink","blue","purple","black","gray","Indigo"],yAxisData=["分类1","分类2","分类3","分类4","分类5","分类6","分类7","分类8","分类9","分类10"],timeLineData=["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"],categoryColor={};for(var i=0;i<10;i++)categoryColor[yAxisData[i]]=colors[i];function shuffle(a){for(let o=a.length-1;o>=0;o--){let t=Math.floor(Math.random()*(o+1)),e=a[t];a[t]=a[o],a[o]=e}return a}yAxisDatas=[],yAxisDatas.push(shuffle(yAxisData));for(var i=1;i<10;i++)yAxisDatas.push(shuffle(yAxisDatas[i-1]).concat());options=[];for(var s=0;s<10;s++){for(var categoryData=yAxisDatas[s],value=[],i=0;i<10;i++)value.push(Math.round(30+Math.random()*500));value=value.sort((a,o)=>a-o);for(var datas=[],i=0;i<10;i++)datas.push({value:value[i],itemStyle:{color:categoryColor[categoryData[i]]}});options.push({yAxis:{data:categoryData},series:[{type:"bar",data:datas,itemStyle:{barBorderRadius:5},barWidth:20,label:{show:!0,position:"right"}}]})}option={baseOption:{title:{text:"测试时间轴中类目轴切换效果"},yAxis:{type:"category",data:[],axisLabel:{show:!0},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},xAxis:{axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},timeline:{show:!1,autoPlay:!0,data:timeLineData}},options};
