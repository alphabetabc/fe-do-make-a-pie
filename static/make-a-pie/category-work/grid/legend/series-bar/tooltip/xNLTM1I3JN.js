var list=[{name:"日巡检",color1:"#FE4664",data:[1400,1255,984,892,546,897,453,1433]},{name:"周巡检",color1:"#05CC91",data:[600,1255,784,312,566,317,823,133]},{name:"月巡检",color1:"#1C80D5",data:[600,1255,784,312,566,317,823,133]}],ser=[],town=[];list.forEach(e=>{town.push(e.name),ser.push({name:e.name,type:"bar",barGap:0,barMaxWidth:20,itemStyle:{normal:{color:e.color1}},data:e.data})}),option={color:["#ffdf25","#36a9ce","#d0e17d"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{top:"0%",left:"center",textStyle:{color:"#000",fontSize:16},icon:"path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z",itemWidth:10,itemHeight:10,itemGap:20,data:town,iconColor:"#fff"},grid:{right:"1%",top:"18%",bottom:"22%"},calculable:!0,xAxis:{type:"category",boundaryGap:!0,data:["南桥镇","奉城镇","四团镇","柘林镇","庄行镇","金汇镇","青村镇","海湾镇"],axisLabel:{interval:0,textStyle:{color:"#1C80D5",fontStyle:"normal",fontSize:16}},axisTick:{show:!1},axisLine:{lineStyle:{color:"rgba(77, 128, 254, 0.2)"}},splitLine:{show:!0,lineStyle:{color:"rgba(77, 128, 254, 0.2)"}}},yAxis:[{type:"value",splitNumber:5,axisLabel:{textStyle:{color:"#1C80D5",fontStyle:"normal",fontSize:16}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"rgba(77, 128, 254, 0.2)"}}}],series:ser};