var dataArr=80;data==null&&(dataArr=0);var colorSet={color:"#FE5452"},text,option={backgroundColor:"#fff",title:{show:!0,text:"综合评分",x:"49%",y:"55%",z:8,textAlign:"center",textStyle:{color:"#fff ",fontSize:26}},series:[{name:"内部进度条",type:"gauge",radius:"70%",splitNumber:10,axisLine:{lineStyle:{color:[[dataArr/100,colorSet.color],[1,"#FDDBDA"]],width:16}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},pointer:{show:!1}},{type:"pie",radius:["0","55%"],center:["50%","50%"],z:8,hoverAnimation:!1,data:[{name:"",value:"80",itemStyle:{normal:{color:"#FF8178"}},label:{normal:{rich:{a:{color:"#fff",align:"center",fontSize:50}},formatter:function(e){return"{a|"+e.value+"}"},position:"center",show:!0}},labelLine:{show:!1}}]}]};