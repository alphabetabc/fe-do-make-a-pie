var option={title:{text:"",subtext:"",x:"center"},tooltip:{trigger:"axis",axisPointer:{animation:!1},formatter:function(e){return e[0].axisValueLabel+'<br><span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: '+e[0].color+'"></span>'+e[0].seriesName+": "+e[0].value+'万<br><span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: '+e[1].color+'"></span>'+e[1].seriesName+": "+e[1].value+"万小时"}},color:["#fbad0b","#0696ff","#4ecb73"],axisPointer:{link:{xAxisIndex:"all"}},grid:[{left:"9%",right:"4%",top:"30",height:"60"},{left:"9%",right:"4%",top:"140",height:"60"},{left:"9%",right:"4%",top:"250",height:"60"}],xAxis:[{type:"category",boundaryGap:!0,axisLine:{onZero:!0,lineStyle:{color:"#888888"}},data:["8月","9月","10月","11月","12月","1月"],axisLabel:{textStyle:{color:"#888888",fontSize:"10"}}},{gridIndex:1,type:"category",boundaryGap:!0,axisLine:{onZero:!0,lineStyle:{color:"#888888"}},data:["8月","9月","10月","11月","12月","1月"]},{gridIndex:2,type:"category",boundaryGap:!0,axisLine:{onZero:!1,lineStyle:{color:"#888888"}},position:"bottom",data:["8月","9月","10月","11月","12月","1月"],axisLabel:{textStyle:{color:"#888888",fontSize:"10"}}}],yAxis:[{name:"",type:"value",nameTextStyle:{color:"#888888",fontSize:10},splitLine:{lineStyle:{type:"dashed",color:"#e6e6e6"}},axisLine:{onZero:!1,lineStyle:{color:"#888888"}},axisLabel:{textStyle:{color:"#888888",fontSize:"10"}}},{gridIndex:1,name:"",type:"value",nameTextStyle:{color:"#888888",fontSize:10},splitLine:{lineStyle:{type:"dashed",color:"#e6e6e6"}},axisLine:{onZero:!1,lineStyle:{color:"#888888"}},axisLabel:{textStyle:{color:"#888888",fontSize:"10"}}},{gridIndex:2,name:"",type:"value",nameTextStyle:{color:"#888888",fontSize:10},inverse:!1,splitLine:{lineStyle:{type:"dashed",color:"#e6e6e6"}},axisLine:{onZero:!1,lineStyle:{color:"#888888"}},axisLabel:{textStyle:{color:"#888888",fontSize:"10"}}}],series:[{name:"新增收入",type:"line",data:[60,30,80,40,50,30],areaStyle:{normal:{color:"#F8E7C5",opacity:.51}}},{name:"ARPU值",type:"line",xAxisIndex:1,yAxisIndex:1,data:[60,30,80,40,50,30]},{name:"新增用户",type:"bar",xAxisIndex:2,barWidth:"20",yAxisIndex:2,data:[60,30,80,40,50,30]}]};