let val=0,pieColor="";option={tooltip:{show:!1},series:[{name:"温度",type:"gauge",radius:"90%",startAngle:225,endAngle:-115,min:0,max:500,axisLine:{show:!0,lineStyle:{width:20,shadowBlur:1,color:[[0,"#5FBD51"],[.1,"#5FBD51"],[.11,"transparent"],[.2,"#F1BE1C"],[.21,"transparent"],[.3,"#F76A2C"],[.31,"transparent"],[.4,"#E32830"],[.41,"transparent"],[.6,"#A41E60"],[.61,"transparent"],[1,"#85202F"]]}},axisTick:{show:!1},splitNumber:1e3,silent:!0,label:{normal:{position:"inner",textStyle:{color:"#fff",fontSize:18,fontWeight:"bold"}}},axisLabel:{formatter:function(e){switch(e+""){case"20":return"优";case"75":return"良";case"125":return"轻";case"175":return"中";case"250":return"重";case"360":return"严重";default:return""}},distance:0,textStyle:{fontSize:12,position:"",fontWeight:""}},splitLine:{show:!1},pointer:{width:"3%",length:"70%"},detail:{z:6,offsetCenter:[0,0],textStyle:{color:"#fff",fontSize:16}},data:[{value:10,name:""}]},{name:"1212",type:"gauge",radius:"95%",startAngle:225,endAngle:-115,min:0,max:500,z:-1,axisLine:{show:!0,lineStyle:{width:25,color:[[0,"transparent"],[.1,"rgba(249, 212, 214,.4)"],[.11,"transparent"],[.2,"rgba(249, 212, 214,.4)"],[.21,"transparent"],[.3,"rgba(249, 212, 214,.4)"],[.31,"transparent"],[.4,"rgba(249, 212, 214,.4)"],[.41,"transparent"],[.6,"rgba(249, 212, 214,.4)"],[.61,"transparent"],[1,"rgba(249, 212, 214,.4)"]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!1},detail:{show:!1},data:[{show:!1}]},{name:"",type:"pie",radius:"30%",silent:!0,z:-1,zlevel:-1,label:{normal:{show:!1}},data:[{value:1,name:"",itemStyle:{normal:{color:pieColor}}}]}]};var value=option.series[0].data[0].value;value<50?pieColor="#5FBD51":50<=value&&value<101?pieColor="#F1BE1C":101<=value&&value<151?pieColor="#F76A2C":151<=value&&value<201?pieColor="#E32830":201<=value&&value<301?pieColor="#A41E60":301<=value&&value<1e3&&(pieColor="#85202F"),option.series[2].data[0].itemStyle.normal.color=pieColor;
