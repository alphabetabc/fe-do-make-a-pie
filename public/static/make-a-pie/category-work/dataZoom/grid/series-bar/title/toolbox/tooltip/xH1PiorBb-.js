for(var base=+new Date(2014,9,3,0),oneDay=6e5,date=[],data=[],i=0;i<144;i++){var now=new Date(base+=oneDay);date.push([now.getHours(),now.getMinutes()].join(":")),data.push(Math.floor(Math.random()*(1e3+1-400)+400))}date.unshift(0),data.unshift(500),option={color:["#6EE4C2"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},title:{text:"xx馆每日进出人次统计"},dataZoom:[{type:"inside",start:0,end:100}],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{show:!0,feature:{restore:{show:!0},magicType:{show:!0,type:["line","bar","stack","tiled"]}}},xAxis:[{name:"日期",type:"category",data:date,axisTick:{alignWithLabel:!0}}],yAxis:[{name:"进出人次",type:"value"}],series:[{name:"图书馆每日进出人次统计",type:"bar",barWidth:"60%",data}]};
