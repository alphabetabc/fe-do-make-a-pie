var data={data:[[8,30,2825],[4,30,2825],[0,30,2825],[2,30,2825]]},size=[],series=[];for(let a=0;a<data.data.length;a++)size.push(data.data[a][2]);for(let a=0;a<data.data.length;a++)series.push({coordinateSystem:"polar",angleAxisIndex:0,radiusAxisIndex:0,type:"scatter",symbolSize:30,itemStyle:{shadowBlur:10},label:{normal:{show:!0}},data:[data.data[a]]});option={radar:{indicator:[{text:"哈哈哈"}],center:["50%","50%"],radius:["10%","100%"],startAngle:90,splitNumber:4,shape:"circle",name:{show:!1},splitArea:{areaStyle:{color:["#B8D3E4","#96C5E3","#7DB5DA","#72ACD1"]}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},color:["#E84B46","#496FA5","#4A1BE7","#1BD6E7"],polar:{},angleAxis:{show:!1,type:"value",min:0,max:360},radiusAxis:{show:!1,axisAngle:0},series};
