var data=[25,25,25,25];let sumArr=[];for(var i=0;i<data.length;i++){let a=data.slice(0,i);console.log(a);let r=0;a.forEach(e=>{r+=e}),sumArr.push(r)}option={backgroundColor:"#fff",angleAxis:{max:100,show:!1},tooltip:{trigger:"item",formatter:"{c}%"},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},polar:{radius:["50%","65%"],center:["50%","50%"]},series:[{stack:"fenshu",type:"bar",roundCap:!0,barWidth:40,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(255,0,0,0)"},{offset:.05,color:"rgba(255,0,0,0)"},{offset:1,color:"rgba(255,0,0,1)"}])}},data:[{value:data[0]}],coordinateSystem:"polar",name:"A",label:{show:!0}},{stack:"fenshu",type:"bar",roundCap:!0,barWidth:40,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(82,196,26,0)"},{offset:.05,color:"rgba(82,196,26,0)"},{offset:1,color:"rgba(82,196,26,1)"}])}},data:[{value:data[1]}],coordinateSystem:"polar",name:"B",label:{show:!0}},{stack:"fenshu",type:"bar",roundCap:!0,barWidth:40,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"rgba(0,0,255,0)"},{offset:.05,color:"rgba(0,0,255,0)"},{offset:1,color:"rgba(0,0,255,1)"}])}},data:[{value:data[2]}],coordinateSystem:"polar",name:"C",label:{show:!0}},{stack:"fenshu",type:"bar",roundCap:!0,barWidth:40,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"rgba(114,46,209,0)"},{offset:.05,color:"rgba(114,46,209,0)"},{offset:1,color:"rgba(114,46,209,1)"}])}},data:[{value:data[3]}],coordinateSystem:"polar",name:"D",label:{show:!0}}]};