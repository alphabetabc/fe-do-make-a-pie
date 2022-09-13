var hours=["","-50","-45","-40","-35","-30","-25","-20","-15","-10","-5","0","5","10",""],days=["","12h","24h","36h","48h","60h",""],data=[[2.5,0,5],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[3.5,6,18],[0,7,0],[0,8,2],[0,9,3],[0,10,2],[0,11,3],[0,12,5],[0,13,19],[0,14,6],[1,0,0],[1,1,1],[1,2,0],[1,3,0],[1,4,1],[1,5,0],[1,6,0],[1,7,0],[1,8,3],[1,9,1],[1,10,1],[1,11,4],[1,12,2],[1,13,5],[1,14,6],[2,0,0],[2,1,1],[2,2,0],[2,3,2],[2,4,0],[2,5,1],[2,6,1],[2,7,4],[2,8,1],[2,9,3],[2,10,10],[3,11,32],[2,12,1],[2,13,3],[2,14,5],[3,0,0],[3,1,0],[3,2,0],[3,3,3],[3,4,3],[3,5,4],[3,6,3],[3,7,3],[3,8,3],[3,9,0],[3,10,1],[3,11,0],[3,12,2],[3,13,1],[3,14,0],[4,0,0],[4,1,0],[4,2,0],[4,3,4],[4,4,3],[4,5,6],[4,6,2],[4,7,2],[4,8,5],[4,9,0],[4,10,0],[4,11,1],[4,12,1],[4,13,0],[4,14,0],[5,0,0],[5,1,0],[5,2,0],[5,3,2],[5,4,0],[5,5,1],[5,6,2],[5,7,3],[5,8,3],[5,9,1],[5,10,2],[5,11,0],[5,12,0],[5,13,1],[5,14,1],[6,0,0],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,7],[6,8,4],[6,9,4],[6,10,5],[6,11,1],[6,12,1],[6,13,2],[6,14,2]];data=data.map(function(t){return[t[1],t[0],t[2]]}),option={title:{text:"在不同保温范围和保温时间下的冷藏箱数量统计图",link:"https://github.com/pissang/echarts-next/graphs/punch-card"},legend:{data:["冷藏箱的数量"],left:"1000"},tooltip:{position:"top",formatter:function(t){return"在"+hours[t.value[0]]+"摄氏度，"+days[t.value[1]]+"小时"+t.value[2]+"个冷藏箱"}},grid:{left:2,bottom:10,right:10,containLabel:!0},xAxis:{type:"category",data:hours,boundaryGap:!1,center:["60%","60%"],splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:days,center:["60%","60%"],axisLine:{show:!1}},series:[{name:"冷藏箱的数量",type:"scatter",symbolSize:function(t){return t[2]*4.2},data,animationDelay:function(t){return t*5}}]};