option={backgroundColor:"#000",color:"#fff",tooltip:{show:!1},grid:{left:"0%",right:"0%",bottom:"0%",top:"0%",containLabel:!0,borderWidth:"0"},title:{text:"进给倍率",bottom:"20%",left:"40%",textStyle:{fontSize:"1vw",color:"#fff"}},series:[{name:"业务指标",type:"gauge",radius:"80%",splitNumber:10,z:8,min:0,max:200,axisLine:{lineStyle:{color:[[1,"#fff"]],width:0}},axisTick:{splitNumber:5,length:15,lineStyle:{color:"#fff",width:3}},axisLabel:{formatter:function(e){switch(e=e.toFixed(),e+""){case"0":return"0";case"20":return"20";case"40":return"40";case"60":return"60";case"80":return"80";case"100":return"100";case"120":return"120";case"140":return"140";case"160":return"160";case"180":return"180";case"200":return"200"}},textStyle:{color:"#fff",fontSize:"0.8vw"}},splitLine:{show:!0,length:20,lineStyle:{color:"auto",width:5}},pointer:{show:!0,width:10,length:"80%",color:"#fff"},detail:{show:!1},title:{show:!1},data:[{value:65}]},{type:"gauge",radius:"84%",startAngle:"225",endAngle:"-45",splitNumber:"120",pointer:{show:!1},detail:{show:!1},axisLine:{show:!0,lineStyle:{color:[[1,"yellow"]],width:2,opacity:1}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}},{type:"gauge",radius:"82%",startAngle:"225",endAngle:"-45",pointer:{show:!0},data:[{name:"数值",value:99/200*100}],title:{show:!1},axisLine:{show:!0,lineStyle:{color:"#fff",width:10,shadowOffsetX:0,shadowOffsetY:0,opacity:1}},axisTick:{show:!1},splitLine:{show:!1,length:25,lineStyle:{color:"green",width:10,type:"solid"}},axisLabel:{show:!1,formatter:function(e){return e.toFixed(0)}},animationDuration:4e3},{type:"gauge",z:2,radius:"80%",startAngle:"225",endAngle:"-45",axisLine:{lineStyle:{color:[[1,"#fff"]],fontSize:40,width:1,opacity:1}},splitLine:{show:!1},axisLabel:{show:!1,formatter:function(e){return e.toFixed(0)}},pointer:{show:!1},axisTick:{show:!1},detail:{show:!1}},{type:"pie",sttartAngle:90,radius:"80%",hoverAnimation:!1,legendHoverLink:!1,lable:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1}},center:["50%","50%"],z:-10,data:[{value:100,itemStyle:{normal:{color:{type:"radial",x:.5,y:.5,r:.5,colorStops:[{offset:0,color:"#00C2EB"},{offset:.8,color:"#037495"},{offset:1,color:"#094461"}]},opacity:.5}}}]},{type:"pie",sttartAngle:90,radius:"88%",hoverAnimation:!1,legendHoverLink:!1,lable:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1}},center:["50%","50%"],z:-15,data:[{value:100,itemStyle:{color:"#333333"}}]}]};
