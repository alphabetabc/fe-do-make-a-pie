var value="4.3",subtext="样本量：2233",max=5;option={title:{show:!0,text:value||"仪表盘",subtext,subtextStyle:{align:"center"},left:400,bottom:10,textStyle:{color:"#414957",fontSize:24,align:"center",fontFamily:'"Microsoft Yahei","微软雅黑"'}},angleAxis:{axisLine:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},axisTick:{show:!1},min:0,max:6.666,startAngle:225},radiusAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},data:["a","b","c"],z:10},polar:{radius:"105%"},series:[{type:"bar",data:[,,value],z:1,coordinateSystem:"polar",barMaxWidth:24.2,name:"警告事件",roundCap:!0,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#FFC4C4"},{offset:1,color:"#DE585D"}]),barGap:"-100%"},{type:"bar",data:[,,],z:2,coordinateSystem:"polar",barMaxWidth:24.2,name:"警告事件",roundCap:!0,color:"#f00",barGap:"-100%"},{type:"bar",data:[,,max],z:0,silent:!0,coordinateSystem:"polar",barMaxWidth:24.2,name:"C",roundCap:!0,color:"#F1F3F5",barGap:"-100%"},{type:"pie",labelLine:{show:!1},z:1,radius:14,data:[{value:5,itemStyle:{color:"rgba(108,116,132,0.15)"}}]},{type:"pie",labelLine:{show:!1},z:10,radius:3,data:[{value:100,itemStyle:{color:"#fff"}}]},{type:"gauge",radius:"75%",splitNumber:4,max:5,detail:{show:!1},axisLine:{lineStyle:{color:[[0,"#DE585D"],[1,"#DE585D"]],width:25,opacity:0}},data:[{name:"",value}],splitLine:{length:12,lineStyle:{width:2,color:"#c4c6cc"}},axisTick:{show:!0,lineStyle:{color:"#c4c6cc",width:2},length:5,splitNumber:6},axisLabel:{show:!1,color:"#333",fontSize:18},pointer:{show:!0,length:"70%",itemStyle:{color:"#DE585D"}}},{type:"pie",radius:["88%","82%"],hoverAnimation:!1,startAngle:225,endAngle:0,data:[{name:"",value:value/5,label:{show:!1},labelLine:{show:!1},itemStyle:{color:"rgba(0,0,0,0)"}},{name:"",value:0,label:{position:"inside",backgroundColor:"#fff",borderRadius:7,padding:3,borderWidth:0,borderColor:"#fff"}},{name:"",value:1.33-value/5,label:{show:!1},labelLine:{show:!1},itemStyle:{color:"rgba(255,255,255,0)"}}]}],tooltip:{show:!1}};
