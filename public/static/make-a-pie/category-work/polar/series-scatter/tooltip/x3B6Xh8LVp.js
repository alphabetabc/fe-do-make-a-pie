var data111=[];for(let e=0;e<12;e++){let a=30*e,s=80;data111.push({value:[s,a],symbolSize:[10,20],symbol:"rect",symbolRotate:-a,itemStyle:{normal:{color:"#5AD8FF"},emphasis:{shadowColor:"#5AD8FF",shadowBlur:10,scale:!1}}})}option={backgroundColor:"#02203d",tooltip:{trigger:"axis",triggerOn:"none",axisPointer:{type:"line",lineStyle:{color:"rgba(0,0,0,0)"}}},polar:{},angleAxis:{splitLine:{show:!0},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},min:0,max:360},radiusAxis:{splitLine:{show:!0},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},min:0,max:120,splitNumber:5},series:[{name:"",type:"scatter",coordinateSystem:"polar",data:data111}]};var faultByHourIndex=0;function doing(){let e=myChart.getOption();myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:faultByHourIndex}),faultByHourIndex++,faultByHourIndex>=data111.length&&(faultByHourIndex=0)}setInterval(doing,1e3);
