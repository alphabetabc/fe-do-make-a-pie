let dashedPic="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC",color=["#FF8700","#ffc300","#00e473","#009DFF"],chartData=[{name:"正常",value:14350,unit:"个"},{name:"报警",value:289,unit:"个"},{name:"故障",value:239,unit:"个"},{name:"离线",value:5037,unit:"个"}],arrName=[],arrValue=[],sum=0,pieSeries=[],lineYAxis=[];chartData.forEach((a,e)=>{arrName.push(a.name),arrValue.push(a.value),sum=sum+a.value}),chartData.forEach((a,e)=>{pieSeries.push({name:"设备",type:"pie",clockWise:!1,hoverAnimation:!1,radius:[65-e*15+"%",57-e*15+"%"],center:["30%","50%"],label:{show:!1},data:[{value:a.value,name:a.name},{value:sum-a.value,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]}),pieSeries.push({name:"",type:"pie",silent:!0,z:1,clockWise:!1,hoverAnimation:!1,radius:[65-e*15+"%",57-e*15+"%"],center:["30%","50%"],label:{show:!1},data:[{value:7.5,itemStyle:{color:"#E3F0FF"}},{value:2.5,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]}),a.percent=(a.value/sum*100).toFixed(1)+"%",lineYAxis.push({value:e,textStyle:{rich:{circle:{color:color[e],padding:[0,5]}}}})}),option={backgroundColor:"#fff",color,grid:{top:"15%",bottom:"54%",left:"30%",containLabel:!1},yAxis:[{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:function(a){let e=chartData[a];return console.log(e),"{line|}{circle|●}{name|"+e.name+"}{bd||}{percent|"+e.percent+"}{value|"+e.value+"}{unit|个}"},interval:0,inside:!0,textStyle:{color:"#333",fontSize:14,rich:{line:{width:170,height:10,backgroundColor:{image:dashedPic}},name:{color:"#666",fontSize:14},bd:{color:"#ccc",padding:[0,5],fontSize:14},percent:{color:"#333",fontSize:14},value:{color:"#333",fontSize:16,fontWeight:500,padding:[0,0,0,20]},unit:{fontSize:14}}},show:!0},data:lineYAxis}],xAxis:[{show:!1}],series:pieSeries};