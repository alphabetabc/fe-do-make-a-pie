var dataArr=328;option={backgroundColor:"#fff",tooltip:{show:!1},series:[{name:"内部进度条",type:"gauge",radius:"40%",splitNumber:10,axisLine:{lineStyle:{color:[[dataArr/1e3,"#468EFD"],[1,"#111F42"]],width:8}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},itemStyle:{show:!1},detail:{formatter:function(){return"塔米分"},offsetCenter:[0,130],textStyle:{padding:[0,0,0,0],fontSize:20,fontWeight:"700",color:"#324063"}},title:{show:!0,offsetCenter:[0,90],textStyle:{color:"#2D99FF",fontSize:40,fontWeight:700,fontFamily:"PingFangSC"}},data:[{name:dataArr,value:dataArr/10}],pointer:{show:!0,length:"75%",radius:"20%",width:10},animationDuration:4e3},{name:"外部刻度",type:"gauge",radius:"50%",min:0,max:1e3,splitNumber:10,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"rgba(0,0,0,0)"]]}},axisLabel:{show:!0,color:"#4d5bd1",distance:25,formatter:function(e){switch(e+""){case"0":return"0";case"100":return"100";case"200":return"200";case"300":return"300";case"400":return"400";case"500":return"500";case"600":return"600";case"700":return"700";case"800":return"800";case"900":return"900";case"1000":return"1000"}}},axisTick:{show:!0,splitNumber:7,lineStyle:{color:"#468EFD",width:1},length:-8},splitLine:{show:!0,length:-20,lineStyle:{color:"#468EFD"}},detail:{show:!1},pointer:{show:!1}}]};
