var datas={value:82,title:"分数",type:1,radiusType:1};let startAngle=180,endAngle=0;var fontColor="#00f6f7",seriesName="";let noramlSize=16,state="",center=["50%","70%"],wqradius=0,nqradius=0,kdradius;wqradius="60%",nqradius="60%",kdradius="90%";let min=0,max=100,nqColor=[[datas.value/100,"rgba(3, 169, 159,0.2)"],[1,"rgba(3, 169, 159,0)"]],wqColor="rgba(22, 138, 255, 0.9)",circleLineW=2;myChart.setOption({backgroundColor:"#000",title:{show:!0,x:"center",bottom:"22%",text:datas.title,textStyle:{fontWeight:"700",fontSize:20,color:"#fff"}},tooltip:{show:!1},series:[{type:"gauge",radius:"70%",startAngle,endAngle,center,pointer:{show:!1},title:{show:!1},axisLine:{show:!1,lineStyle:{color:"rgb(4, 145, 139)",width:35,shadowOffsetX:0,shadowOffsetY:0,opacity:1}},axisTick:{show:!0,splitNumber:5,length:8,lineStyle:{width:1,color:"#20c998"}},splitLine:{length:15,lineStyle:{width:1,color:"#20c998"}},axisLabel:{show:!1},detail:{show:0},animationDuration:4e3},{name:"白色圈刻度",type:"gauge",radius:kdradius,center,startAngle,endAngle,z:7,splitNumber:5,axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1,color:fontColor,fontSize:noramlSize,formatter:"{value}%"},pointer:{show:!1},axisLine:{show:!1},detail:{show:!1}},{name:"外层圈",type:"gauge",z:2,radius:wqradius,startAngle,endAngle,center,axisLine:{lineStyle:{color:[[1,wqColor]],width:circleLineW,opacity:1}},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},axisTick:{show:!1},detail:{show:0}},{name:"指针",type:"gauge",z:9,radius:"70%",startAngle,endAngle,center,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},min,max,pointer:{show:!0,width:4,length:"20%",offsetCenter:[0,-100]},itemStyle:{normal:{color:wqColor}},detail:{show:!0,offsetCenter:[0,-25],formatter:["{value|"+datas.value+"}"].join(`
`),rich:{value:{fontSize:30,lineHeight:10,color:fontColor,fontWeight:"700"}}},data:[datas.value]},{name:"内层盘",type:"gauge",z:6,radius:nqradius,startAngle,endAngle,center,axisLine:{lineStyle:{color:nqColor,width:95,opacity:.9}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},detail:{show:0}},{name:"内层小环",type:"gauge",z:6,radius:"30%",startAngle,endAngle,center,axisLine:{lineStyle:{color:[[1,wqColor]],width:circleLineW}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},detail:{show:0}}]});