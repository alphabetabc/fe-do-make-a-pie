var w=document.documentElement.clientWidth,h=document.documentElement.clientHeight;h<800&&w<1600&&w>800||h>800&&h<1e3&&w>1100&&w<1600?(d="1%",e="4%",f="8%",g="6%",h="0%"):h>900&&h<1200&&w<2200&&w>1500&&(d="1%",e="4%",f="6%",g="6%",h="2%");function formatNum(a){if(a.length<=3||!/^(\+|-)?(\d+)(\.\d+)?$/.test(a))return a;var o=RegExp.$1,t=RegExp.$2,r=RegExp.$3,l=new RegExp;for(l.compile("(\\d)(\\d{3})(,|$)");l.test(t);)t=t.replace(l,"$1,$2$3");return o+""+t+r}var legendData=[],xAxisData=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],yAxisData=xAxisData,seriesName1="入库总金额",seriesName2="结算总金额",seriesName3="利润",seriesData1=["103517.10","53397.33","65152.51","77614.42","31545.76","58532","49632","12354","15832","19522","26652","45523","103517.10","53397.33","65152.51","77614.42","31545.76","58532","49632","12354","15832","19522","26652","45523"],seriesData2=["108073.78","76759.58","91730.89","101286.46","81233.99","95232","78521","32151","24581","88852","98652","105522","108073.78","76759.58","91730.89","101286.46","81233.99","95232","78521","32151","24581","48852","58652","65522"],seriesData3=["12507","6956","7103","7663","3883","12231","8965","7521","11254","22011","8865","7542","12507","6956","7103","7663","3883","12231","8965","7521","11254","22011","8865","7542"],option={backgroundColor:"rgb(255, 255, 255)",tooltip:{trigger:"axis",formatter:function(a){for(var o=a[0].name,t=0,r=a.length;t<r;t++)t==2,o+="<br/>"+a[t].seriesName+" : "+formatNum(a[t].value)+"元";return o},axisPointer:{type:"shadow",label:{backgroundColor:"#fff"}},textStyle:{color:"#fff",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}},grid:{left:d,right:e,bottom:f,top:g,padding:"0 0 10 0",containLabel:!0},legend:{data:name,bottom:h,textStyle:{color:"#4c647c",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}},xAxis:[{type:"category",boundaryGap:!0,data:xAxisData,axisLabel:{interval:0,margin:15,textStyle:{color:"#4c647c",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#4c647c",opacity:.2}},splitLine:{show:!1}}],yAxis:[{type:"value",splitNumber:5,axisLabel:{textStyle:{color:"#4c647c",fontStyle:"{value}",fontFamily:"微软雅黑",fontSize:12}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:["#000"],opacity:.06}}},{type:"value",splitNumber:5,axisLabel:{formatter:"{value}",textStyle:{color:"#4c647c",fontStyle:"{value}",fontFamily:"微软雅黑",fontSize:12}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1,lineStyle:{color:["#000"],opacity:.06}}}],series:[{name:seriesName1,type:"bar",data:seriesData1,barWidth:10,barGap:0,itemStyle:{normal:{barBorderRadius:20,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgb(254, 101, 116)"},{offset:0,color:"rgb(254, 152, 94)"}],!1)}}},{name:seriesName2,type:"bar",data:seriesData2,barWidth:10,barGap:1,itemStyle:{normal:{barBorderRadius:20,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgb(29, 141, 211)"},{offset:0,color:"rgb(56, 206, 191)"}],!1)}}},{name:seriesName3,type:"line",stack:"总量",symbol:"circle",symbolSize:10,yAxisIndex:1,smooth:!0,itemStyle:{normal:{borderColor:"#fff",borderWidth:3,color:"#ffa55b",lineStyle:{color:"#ffa55b",width:1}}},markPoint:{itemStyle:{normal:{color:"red"}}},data:seriesData3}]};
