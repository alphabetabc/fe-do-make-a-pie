const categroy=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];colorList=["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"];var data=[2200,1820,1910,2340,2900,3300,3100],categroyData=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],sortIndex=categroyData.map(a=>categroyData.indexOf(a));sortIndex.sort((a,t)=>data[a]-data[t]),data=sortIndex.map(a=>data[a]),categroyData=sortIndex.map(a=>categroyData[a]),option={title:{text:"简易动态数据 Demo"},xAxis:{},yAxis:{data:categroyData},series:[{type:"bar",data,itemStyle:{color:function(a){return colorList[categroy.indexOf(a.name)]}},label:{show:!0,position:"right"}}]},setInterval(function(){data=data.map(a=>a+Math.floor(Math.random()*30)-15),sortIndex.sort((a,t)=>data[a]-data[t]),data=sortIndex.map(a=>data[a]),categroyData=sortIndex.map(a=>categroyData[a]),myChart.setOption({yAxis:{data:categroyData},series:{data}})},40);
