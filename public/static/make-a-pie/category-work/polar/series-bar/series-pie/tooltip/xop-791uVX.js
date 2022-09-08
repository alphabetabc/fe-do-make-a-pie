option={tooltip:{trigger:"item",formatter:a=>`
                ${a.name}<br/>
                人数: ${a.data.value}人<br/>
                及格率: ${a.data.rate}%
            `},angleAxis:{type:"category",axisLine:{show:!1}},radiusAxis:{max:100,axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},polar:{radius:[0,"50%"]},series:[{type:"pie",radius:[0,"50%"],label:{show:!1,color:"#333",lineHeight:14,formatter:a=>`${a.name}
人数: ${a.data.value}人
及格率: ${a.data.rate}%`},labelLine:{length:20,lineStyle:{color:"#999"}},itemStyle:{borderWidth:1,borderType:"dashed",borderColor:"#c6c6c6"},data:[{value:45,rate:78,name:"一班",itemStyle:{color:"rgba(255, 198, 93, 0)"}},{value:47,rate:65,name:"二班",itemStyle:{color:"rgba(127, 229, 253, 0)"}},{value:48,rate:50,name:"三班",itemStyle:{color:"rgba(145, 205, 241, 0)"}},{value:30,rate:80,name:"四班",itemStyle:{color:"rgba(152, 234, 220, 0)"}}]},{type:"pie",radius:[0,"26%"],label:{show:!1,color:"#333",lineHeight:14,formatter:a=>`${a.name}
人数: ${a.data.value}人
及格率: ${a.data.rate}%`},itemStyle:{borderWidth:1,borderType:"dashed",borderColor:"#c6c6c6"},data:[{value:45,rate:78,name:"一班",itemStyle:{color:"rgba(255, 198, 93, 0)"}}]},{type:"pie",radius:[0,"27%"],label:{show:!1,color:"#333",lineHeight:14,formatter:a=>`${a.name}
人数: ${a.data.value}人
及格率: ${a.data.rate}%`},itemStyle:{borderWidth:1,borderType:"dashed",borderColor:"#c6c6c6"},data:[{value:45,rate:78,name:"一班",itemStyle:{color:"rgba(255, 198, 93, 0)"}}]},{type:"bar",name:"一班",max:100,data:[78],barWidth:45/170*100+"%",barGap:0,itemStyle:{color:"#ffc65d"},coordinateSystem:"polar"},{type:"bar",name:"二班",data:[65],max:100,barWidth:47/170*100+"%",barGap:0,itemStyle:{color:"#7fe5fd"},coordinateSystem:"polar"},{type:"bar",name:"三班",data:[50],max:100,barWidth:48/170*100+"%",barGap:0,itemStyle:{color:"#8db9ff"},coordinateSystem:"polar"},{type:"bar",name:"四班",data:[80],max:100,barWidth:30/170*100+"%",barGap:0,itemStyle:{color:"#a3ffc5"},coordinateSystem:"polar"}]};
