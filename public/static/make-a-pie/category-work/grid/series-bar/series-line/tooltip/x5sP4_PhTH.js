let arr=[];for(let t=0;t<10;t++)arr.push({time:t,value:(Math.random()*100).toFixed(0)});let time=[],val=[];arr.forEach(t=>{time.push(t.time),val.push(t.value)}),color=t=>["rgb(47,114,205)","rgb(144,198,163)","rgb(230,194,183)","rgb(212,130,101)","rgb(235,179,79)","rgb(169,189,209)","rgb(127,195,204)"][t.dataIndex],option={color:["#3398DB"],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},tooltip:{formatter:"{b} : {c}"},xAxis:[{type:"category",data:time,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{type:"bar",barWidth:"60%",data:val,itemStyle:{color:t=>color(t)}},{type:"line",barWidth:"60%",data:val,symbol:"circle",itemStyle:{color:"#000"}}]};