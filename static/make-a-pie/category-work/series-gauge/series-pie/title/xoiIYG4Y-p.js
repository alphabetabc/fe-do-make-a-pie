let dataArr=40,per=dataArr/100;var option={backgroundColor:"#FFFFFF",title:{show:!0,text:"中风险",x:"50%",y:"52%",z:10,textAlign:"center",textStyle:{color:"#8C8C8C",fontSize:14,fontWeight:"normal"}},series:[{name:"内部（环形）进度条",type:"gauge",radius:"28%",splitNumber:10,axisLine:{roundCap:!0,lineStyle:{color:[[0,"#3EC47C"],[.28,"#3EC47C"],[per,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(62,196,124,1)"},{offset:1,color:`rgba(255,110,0,${per})`}])]],width:14}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},pointer:{show:!1}},{name:"外部刻度",type:"gauge",radius:"31.8%",min:0,max:100,splitNumber:10,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:2,color:[[1,"#FFFFFF"]]}},axisLabel:{show:!0,color:"#595959",distance:-16,formatter:function(e){switch(e+""){case"0":return"0";case"10":return"10";case"20":return"20";case"30":return"30";case"40":return"40";case"50":return"50";case"60":return"60";case"70":return"70";case"80":return"80";case"90":return"90";case"100":return"100"}}},axisTick:{show:!0,splitNumber:7,lineStyle:{color:"#D8D8D8",width:2},length:-5},splitLine:{show:!0,length:-10,lineStyle:{color:"#D8D8D8"}},detail:{show:!1},pointer:{show:!1}},{type:"pie",radius:["0","15%"],center:["50%","50%"],z:8,hoverAnimation:!1,data:[{name:"负面风险指数",value:Number(dataArr).toFixed(2),itemStyle:{normal:{color:"#fff",shadowColor:"0px 12px 24px 0px rgba(5,235,230,0.12)"}},label:{normal:{formatter:function(e){return e.value},color:"#FF6E00",fontSize:34,fontWeight:"bold",position:"center",show:!0}},labelLine:{show:!1}}]},{type:"pie",radius:"25%",startAngle:220,endAngle:-40,hoverAnimation:!1,center:["50%","50%"],avoidLabelOverlap:!1,label:{show:!1},labelLine:{show:!1},data:[{value:1,itemStyle:{normal:{color:"#f5f9ff"},emphasis:{color:"#f5f9ff"}}}]}]};
