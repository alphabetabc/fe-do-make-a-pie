var colors=["orange","#5793f3","black","purple"];option={color:colors,tooltip:{trigger:"axis"},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["麦汁浓度","浊度","压差","耕刀高度"]},grid:{top:80,left:150},xAxis:[{boundaryGap:!1,splitLine:{show:!0},type:"category",data:["0","15","30","45","60","75","90","105","120","135","150","165"]}],yAxis:[{type:"value",name:`麦
汁
浓
度
%`,min:0,max:22,position:"left",offset:120,axisLine:{lineStyle:{color:colors[0]}}},{type:"value",name:`浊
度
mg/L`,min:0,max:220,position:"left",offset:80,axisLine:{lineStyle:{color:colors[1]}}},{type:"value",name:`压
差
mmWS`,min:0,max:440,position:"left",offset:40,axisLine:{lineStyle:{color:colors[2]}}},{type:"value",name:`耕
刀
高
度
mm`,min:0,max:220,position:"left",axisLine:{onZero:!0,lineStyle:{color:colors[3]}}}],series:[{name:"麦汁浓度",type:"line",symbol:"none",smooth:!0,markArea:{silent:!0,data:[[{name:"头道麦汁",xAxis:"0"},{xAxis:"60"}]]},data:[20,20,20,19,12,6,3,1,.5,.4,.3,.1]},{name:"浊度",type:"line",symbol:"none",smooth:!0,yAxisIndex:1,markArea:{silent:!0,data:[[{name:"洗槽麦汁",xAxis:"60"},{xAxis:"165"}]]},data:[90,25,23,25,22,19,22,25,17,14,16,17]},{name:"压差",type:"line",symbol:"none",smooth:!0,yAxisIndex:2,data:[0,2,25,15,42,16,60.3,22,15,26,16,300]},{name:"耕刀高度",type:"line",step:"start",symbol:"none",yAxisIndex:3,data:[200,200,150,150,120,120,130,130,150,150,120,50]}]};
