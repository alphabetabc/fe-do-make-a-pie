var data=["实验实践场所数 ","各类型实验实践场所数 ","各类型实验实践场所面积 ","各类实验实践场所承担实验课门数"],value1=[1200,1310,1590,1390],value2=[500,580,630,760],getname=["全国均值","本校值"],color=[{type:"linear",colorStops:[{offset:0,color:"rgba(112, 243, 194, 1)"},{offset:1,color:"rgba(72, 214, 158, 1)"}]},{type:"linear",colorStops:[{offset:0,color:"rgba(76, 142, 250, 1)"},{offset:1,color:"rgba(92, 207, 255, 1)"}]}];option={grid:{left:"2%",right:"2%",top:"8%",bottom:"2%",containLabel:!0},legend:{icon:"circle",itemWidth:8,itemHeight:8,right:10},xAxis:{type:"value",axisLine:{show:!0,lineStyle:{color:"rgba(49, 194, 255, 1)"}},splitLine:{show:!1},axisLabel:{color:"rgba(202, 238, 255, 1)"}},yAxis:[{type:"category",data,axisLine:{show:!0,lineStyle:{color:"rgba(49, 194, 255, 1)"}},axisTick:{show:!1},axisLabel:{formatter:r=>{let o=r.length/8,t="";for(let e=0;e<o;e++)t+=`${r.substring(e*8,(e+1)*8)}
`;return t},color:"rgba(202, 238, 255, 1)"}}],series:[{type:"bar",data:value1,name:getname[0],barGap:"2%",itemStyle:{color:color[0],borderRadius:[0,4,4,0]}},{name:getname[1],type:"bar",data:value2,itemStyle:{color:color[1],borderRadius:[0,4,4,0]}}]};
