var gauge_value=50;option={title:{show:!0,x:"center",bottom:50,text:"综合得分 "+Math.floor(gauge_value)+"%",textStyle:{fontWeight:"normal",fontSize:30,color:"#33ffff"}},tooltip:{show:!0,backgroundColor:"#101E44",textStyle:{color:"fff"},formatter:function(e){return'<em style="color:#ffffff;">'+e.value+"%</em> "}},series:[{name:"白色圈刻度",type:"gauge",radius:"80%",center:["50%","75%"],startAngle:180,endAngle:0,z:4,axisTick:{show:!1},splitLine:{length:16,lineStyle:{width:2,color:"rgba(0,0,0, 0.9)"}},axisLabel:{color:"#",fontSize:30},pointer:{show:!1},axisLine:{lineStyle:{opacity:0}},detail:{show:!1},data:[{value:0,name:""}]},{name:"灰色内圈",type:"gauge",z:2,radius:"80%",startAngle:180,endAngle:0,center:["50%","75%"],axisLine:{lineStyle:{color:[[1,"rgba(51, 255, 255, 0.9)"]],width:15,opacity:1}},splitLine:{show:!1},data:[{show:!1,value:"80"}],axisLabel:{show:!1},pointer:{show:!1},axisTick:{show:!1},detail:{show:0}},{name:"指针",type:"gauge",z:6,radius:"95%",startAngle:180,endAngle:0,center:["50%","75%"],axisLine:{lineStyle:{color:[[1,"#33ffff"]],width:0}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},data:[50],pointer:{show:!0,width:5,length:"55%"},detail:{show:0}},{name:"外层盘",type:"gauge",z:6,radius:"90%",startAngle:180,endAngle:0,center:["50%","75%"],axisLine:{lineStyle:{color:[[.5,"#33ffff"],[1,"rgba(255, 255, 255, 0.2)"]],width:5,opacity:.9}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},data:[{show:!1,value:"10"}],detail:{show:0}}]};
