const data1=93.3,Category1="类目1",data2=115.5,Category2="类目2",data3=140.3,Category3="类目3",total=150;option={backgroundColor:"#20252E",color:[{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#FC8F0F00"},{offset:.5,color:"#FC8F0F80"},{offset:1,color:"#FDA946"}],global:!1}],tooltip:{show:!0},series:[{center:["50%","50%"],name:"基础刻度",type:"gauge",splitNumber:12,startAngle:90,endAngle:-269.9,radius:"22%",axisLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},axisTick:{show:!0,splitNumber:5,lineStyle:{color:"#FBA53F",shadowColor:"#67FFFC",shadowBlur:2},length:8},splitLine:{show:!0,length:-5,lineStyle:{color:"#FBA53F",shadowColor:"#F69829",shadowBlur:4}},detail:{show:!1}},{center:["50%","50%"],name:"分割线覆盖",type:"gauge",splitNumber:12,startAngle:90,endAngle:-269.9,radius:"22%",axisLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},axisTick:{show:!1},splitLine:{show:!0,length:13,lineStyle:{color:"#FBA53F",shadowColor:"#F69829",shadowBlur:4}},detail:{show:!1}},{type:"pie",name:"背景线A",radius:["5%","6%"],data:[100],silent:!0,label:{show:!1},itemStyle:{color:"#E5A150"}},{type:"pie",name:"背景线B",radius:["10%","11%"],data:[100],silent:!0,label:{show:!1},itemStyle:{color:"#E5A150"}},{type:"pie",name:"背景线C",radius:["15%","16%"],data:[100],silent:!0,label:{show:!1},itemStyle:{color:"#E5A150"}},{type:"pie",radius:["5%","6%"],center:["50%","50%"],label:{show:!0,formatter:"{c}",color:"#fff",fontSize:12,position:"inside"},labelLine:{show:!1},hoverOffset:2,data:[{value:140.3,name:Category3,itemStyle:{borderWidth:6,borderColor:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#FC8F0F00"},{offset:.9,color:"#FC8F0F50"},{offset:1,color:"#FDA946"}],global:!1}},tooltip:{formatter:"{b}：{c}分"}},{value:150-140.3,name:"gap",itemStyle:{color:"rgba(0, 0, 0, 0)"},label:{show:!1},tooltip:{show:!1}}]},{type:"pie",radius:["10%","11%"],center:["50%","50%"],label:{show:!0,formatter:"{c}",color:"#fff",fontSize:12,position:"inside"},labelLine:{show:!1},hoverOffset:2,data:[{value:115.5,name:Category2,itemStyle:{borderWidth:6,borderColor:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#FC8F0F00"},{offset:.9,color:"#FC8F0F50"},{offset:1,color:"#FDA946"}],global:!1}},tooltip:{formatter:"{b}：{c}分"}},{value:150-115.5,name:"gap",itemStyle:{color:"rgba(0, 0, 0, 0)"},label:{show:!1},tooltip:{show:!1}}]},{type:"pie",radius:["15%","16%"],center:["50%","50%"],label:{show:!0,formatter:"{c}",color:"#fff",fontSize:12,position:"inside"},labelLine:{show:!1},hoverOffset:2,data:[{value:93.3,name:Category1,itemStyle:{borderWidth:6,borderColor:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#FC8F0F00"},{offset:.9,color:"#FC8F0F50"},{offset:1,color:"#FDA946"}],global:!1}},tooltip:{formatter:"{b}：{c}分"}},{value:150-93.3,name:"gap",itemStyle:{color:"rgba(0, 0, 0, 0)"},label:{show:!1},tooltip:{show:!1}}]}],yAxis:[{type:"category",z:2,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,textStyle:{color:"#D8FDF9",fontSize:12}},data:[Category3,Category2,Category1]}],xAxis:[{show:!1}],grid:{top:"40%",bottom:"50%",left:"52%",containLabel:!1}};