let dashedPic="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC",color=["#FF8700","#ffc300","#00e473","#009DFF"],chartData=[{name:"Education Quality",value:56.68,unit:"元"},{name:"International Level",value:27.11,unit:"元"},{name:"Government Expenditure On Education",value:18.3,unit:"元"},{name:"Transportation & Urbanization",value:13.32,unit:"元"}],arrName=[],arrValue=[],sum=0,pieSeries=[],lineYAxis=[];chartData.forEach((e,a)=>{arrName.push(e.name),arrValue.push(e.value),sum=sum+e.value}),chartData.forEach((e,a)=>{pieSeries.push({name:"学历",type:"pie",clockWise:!1,hoverAnimation:!1,radius:[65-a*15+"%",57-a*15+"%"],center:["30%","50%"],label:{show:!1},data:[{value:e.value,name:e.name},{value:sum-e.value,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]}),pieSeries.push({name:"",type:"pie",silent:!0,z:1,clockWise:!1,hoverAnimation:!1,radius:[65-a*15+"%",57-a*15+"%"],center:["30%","50%"],label:{show:!1},data:[{value:7.5,itemStyle:{color:"#E3F0FF"}},{value:2.5,name:"",itemStyle:{color:"rgba(0,0,0,0)"}}]}),e.percent=(e.value/sum*100).toFixed(1)+"%",lineYAxis.push({value:a,textStyle:{rich:{circle:{color:color[a],padding:[0,5]}}}})}),option={toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},backgroundColor:"#fff",color,grid:{top:"15%",bottom:"54%",left:"30%",containLabel:!1},yAxis:[{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:function(e){let a=chartData[e];return console.log(a),"{line|}{circle|●}{name|"+a.name+"}{bd||}{percent|"+a.percent+"}"},interval:0,inside:!0,textStyle:{color:"#333",fontSize:30,rich:{line:{width:170,height:10,backgroundColor:{image:dashedPic}},name:{color:"#666",fontSize:25},bd:{color:"#ccc",padding:[0,5],fontSize:25},percent:{color:"#666",fontSize:25},value:{color:"#333",fontSize:20,fontWeight:500,padding:[0,0,0,20]},unit:{fontSize:20}}},show:!0},data:lineYAxis}],xAxis:[{show:!1}],series:pieSeries};