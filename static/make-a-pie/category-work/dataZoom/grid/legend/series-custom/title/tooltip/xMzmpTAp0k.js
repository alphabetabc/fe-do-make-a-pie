for(var categoryData=[],errorData=[],barData=[],dataCount=100,i=0;i<dataCount;i++){var val=Math.random()*1e3;categoryData.push("category"+i),errorData.push([i,echarts.number.round(Math.max(0,val-Math.random()*100)),echarts.number.round(val+Math.random()*80)]),barData.push(echarts.number.round(val,2))}option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},title:{text:"Error bar chart"},legend:{data:["bar","error"]},dataZoom:[{type:"slider",start:50,end:70},{type:"inside",start:50,end:70}],xAxis:{data:categoryData},yAxis:{},series:[{type:"custom",name:"error",itemStyle:{borderWidth:1.5},renderItem:function(n,r){var a=r.value(0),e=r.coord([a,r.value(1)]),t=r.coord([a,r.value(2)]),o=r.size([1,0])[0]*.1,s=r.style({stroke:r.visual("color"),fill:r.visual("color")});return{type:"group",children:[{type:"circle",transition:["shape"],shape:{cx:e[0],cy:e[1],r:o},style:{stroke:"red",fill:"red"}},{type:"circle",transition:["shape"],shape:{cx:t[0],cy:t[1],r:o},style:{stroke:"green",fill:"green"}},{type:"line",transition:["shape"],shape:{x1:e[0],y1:e[1],x2:t[0],y2:t[1]},style:s}]}},encode:{x:0,y:[1,2]},data:errorData,z:100}]};