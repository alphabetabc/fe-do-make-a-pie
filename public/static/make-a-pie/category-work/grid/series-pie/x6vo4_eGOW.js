for(var dashedPic="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC",color=["#FEC47A","#3CA3F3","#1875F0"],getname=["西部","中部","东部"],getvalue=[2459,208,156],chartData=[],i=0;i<getname.length;i++)chartData.push({name:getname[i],value:getvalue[i]});var arrName=[],arrValue=[],sum=0,pieSeries=[],lineYAxis=[];chartData.forEach((e,a)=>{arrName.push(e.name),arrValue.push(e.value),sum=sum+e.value}),chartData.forEach((e,a)=>{pieSeries.push({name:"学历",type:"pie",startAngle:270,clockWise:!0,hoverAnimation:!1,radius:[35+a*15+"%",30+a*15+"%"],center:["50%","50%"],label:{show:!1},data:[{value:e.value,name:e.name},{value:sum-e.value,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]}),pieSeries.push({name:"",type:"pie",silent:!0,z:1,startAngle:270,clockWise:!0,hoverAnimation:!1,radius:[35+a*15+"%",30+a*15+"%"],center:["50%","50%"],label:{show:!1},data:[{value:10,itemStyle:{color:"#E3F0FF"}},{value:2,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]}),e.percent=(e.value/sum*100).toFixed(1)+"%",lineYAxis.push({value:a,textStyle:{rich:{circle:{color:color[a],padding:[0,5]}}}})}),option={backgroundColor:"#fff",color,grid:{top:"63%",bottom:"15%",left:"50%",containLabel:!1},yAxis:[{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:function(e){let a=chartData[e];return console.log(a),"{circle|●} {name|"+a.name+"}   {percent|"+a.percent+"}"},interval:0,inside:!0,textStyle:{color:"#333",fontSize:14,rich:{line:{width:170,height:10,backgroundColor:{image:dashedPic}},name:{color:"#666666",fontSize:13},percent:{color:"#333333",fontSize:16}}},show:!0},data:lineYAxis}],xAxis:[{show:!1}],series:pieSeries};
