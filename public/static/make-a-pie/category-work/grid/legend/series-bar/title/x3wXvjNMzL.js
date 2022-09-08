let color=["#83a1c5","#45d7ff","#286eff","#0130fd","#b98c3e","#ec5a26"],legend=[["{w|睡意}","{w|视觉疲劳}","{w|脑力疲劳}"],["{w|思维活动}","{w|情绪波动}","{w|脑力负荷}"]],data={people:["艇员1","艇员2","艇员3","艇员4","艇员5","艇员6"],sleep:["1","4","7","10","13","16"],visual:["4","7","10","13","16","19"],mental:["7","10","13","16","19","22"],thought:["10","13","16","19","22","25"],mood:["13","16","19","22","25","28"],mentalLoad:["16","19","22","25","28","31"]},max=0;function getMax(){let t=Math.max(...data.sleep),e=Math.max(...data.visual),a=Math.max(...data.mental),o=Math.max(...data.thought),l=Math.max(...data.mood),r=Math.max(...data.mentalLoad),i=t>e?t:e>a?e:a>o?a:o>l?o:l>r?l:r;return i=Math.floor(i*1.2),i}max=getMax();function getBg(){let t=[];for(let e=0;e<data.sleep.length;e++)t.push(Math.floor(max*1.2));return t}option={backgroundColor:"#031930",title:{text:`成员试试动态总览
(每10分钟累计发生次数)`,textStyle:{color:"#82a1c4",lineHeight:28},textAlign:"center",left:"50%",top:40},legend:[{data:legend[0],orient:"horizontal",itemWidth:10,itemHeight:10,textStyle:{color:"#82a1c4",rich:{w:{width:48}}},top:"6%",left:"70%",selectedMode:!1},{data:legend[1],orient:"horizontal",itemWidth:10,itemHeight:10,textStyle:{color:"#82a1c4",rich:{w:{width:48}}},top:"8%",left:"70%",selectedMode:!1}],grid:{top:"14%"},xAxis:[{type:"category",axisLine:{show:!0,lineStyle:{color:"#015092"}},axisTick:{show:!1},axisLabel:{show:!0,color:"#82a1c4"},splitLine:{show:!0,lineStyle:{color:"#015092",opacity:.6,type:"dotted"}},data:data.people},{show:!1,type:"category",data:data.people}],yAxis:{type:"value",axisLine:{lineStyle:{show:!0,color:"#015092"}},axisTick:{show:!1},axisLabel:{show:!0,color:"#82a1c4"},splitLine:{show:!0,lineStyle:{color:"#015092",opacity:1,type:"dotted"}},max:40>max?40:max},series:[{name:legend[0][0],type:"bar",data:data.sleep,itemStyle:{barBorderRadius:[20,20,0,0]},barWidth:12,silent:!0,xAxisIndex:0},{name:legend[0][1],type:"bar",data:data.visual,itemStyle:{barBorderRadius:[20,20,0,0]},barWidth:12,silent:!0,xAxisIndex:0},{name:legend[0][2],type:"bar",data:data.mental,itemStyle:{barBorderRadius:[20,20,0,0]},barWidth:12,silent:!0,xAxisIndex:0},{name:legend[1][0],type:"bar",data:data.thought,itemStyle:{barBorderRadius:[20,20,0,0]},barWidth:12,silent:!0,xAxisIndex:0},{name:legend[1][1],type:"bar",data:data.mood,itemStyle:{barBorderRadius:[20,20,0,0]},barWidth:12,silent:!0,xAxisIndex:0},{name:legend[1][2],type:"bar",data:data.mentalLoad,itemStyle:{barBorderRadius:[20,20,0,0]},barWidth:12,silent:!0,xAxisIndex:0},{type:"bar",data:getBg(),itemStyle:{color:"#03203d"},barWidth:120,zlevel:-1,silent:!0,xAxisIndex:1}],color};function vdata(){for(let t=0;t<data.people.length;t++)data.sleep[t]=Math.floor(Math.random()*40+1),data.visual[t]=Math.floor(Math.random()*40+1),data.mental[t]=Math.floor(Math.random()*40+1),data.thought[t]=Math.floor(Math.random()*40+1),data.mood[t]=Math.floor(Math.random()*40+1),data.mentalLoad[t]=Math.floor(Math.random()*40+1);option.series[0].data=data.sleep,option.series[1].data=data.visual,option.series[2].data=data.mental,option.series[3].data=data.thought,option.series[4].data=data.mood,option.series[5].data=data.mentalLoad,max=getMax(),option.yAxis.max=40>max?40:max,option.series[6].data=getBg(),myChart.setOption(option,!0)}setInterval(function(){vdata()},2e3);