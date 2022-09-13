option={backgroundColor:"#0D1223",tooltip:{trigger:"item",formatter:a=>`
                ${a.name}<br/>
                销售: ${a.data.value}万元<br/>
                良品率: ${a.data.rate}%
            `},angleAxis:{type:"category",axisLine:{show:!1}},radiusAxis:{max:100,axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},polar:{radius:[0,"50%"]},series:[{type:"pie",radius:[0,"50%"],label:{color:"#09F9D0",lineHeight:24,formatter:a=>`${a.name}
销售量: ${a.data.value}人
良品率: ${a.data.rate}%`},labelLine:{length:20,lineStyle:{color:"#09F9D0"}},itemStyle:{borderWidth:2,borderColor:"#ffffff",shadowColor:"rgba(0, 0, 0, .2)",shadowBlur:6,shadowOffsetY:4},data:[{value:50,rate:50,name:"一组",itemStyle:{color:"rgba(9, 249, 208, .5)"}},{value:50,rate:50,name:"二组",itemStyle:{color:"rgba(0, 203, 205, .5)"}},{value:50,rate:50,name:"三组",itemStyle:{color:"rgba(251, 135, 33, .5)"}}]},{type:"bar",name:"一组",max:100,data:[65],barWidth:50/150*100+"%",barGap:0,itemStyle:{color:"#09F9D0",shadowColor:"#000",shadowBlur:6},coordinateSystem:"polar"},{type:"bar",name:"二组",data:[65],max:100,barWidth:50/150*100+"%",barGap:0,itemStyle:{color:"#00CBFF",shadowColor:"#000",shadowBlur:6},coordinateSystem:"polar"},{type:"bar",name:"三组",data:[65],max:100,barWidth:50/150*100+"%",barGap:0,itemStyle:{color:"#FB8721",shadowColor:"#000",shadowBlur:6},coordinateSystem:"polar"}]};
