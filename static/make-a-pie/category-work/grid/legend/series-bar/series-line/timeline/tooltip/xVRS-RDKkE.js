var w=document.documentElement.clientWidth,a,b;w>=1300&&w<1500||w<1300?(a=4,b=8):(a=0,b=10);function formatNum(e){if(e.length<=3||!/^(\+|-)?(\d+)(\.\d+)?$/.test(e))return e;var o=RegExp.$1,t=RegExp.$2,l=RegExp.$3,r=new RegExp;for(r.compile("(\\d)(\\d{3})(,|$)");r.test(t);)t=t.replace(r,"$1,$2$3");return o+""+t+l}for(var opts=[],yearData=["一审","执行","结案"],data=[["XX公司","XX公司","XX公司"],["XX公司","XX公司"],["XX公司","XX公司","XX公司","XX公司"]],data1=[["32.03","98","13"],["32.03","98"],["32.03","98","58","38"]],data2=[["4","1","5"],["4","1"],["4","1","5","9"]],i=0;i<yearData.length;i++)conditions=[{querycol_案件进展:yearData[i]}],opts.push({xAxis:[{type:"category",axislabel:{interval:0},data:data[i],splitLine:{show:!1}}],series:[{type:"bar",barWidth:15,yAxisIndex:0,itemStyle:{normal:{barBorderRadius:20,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgb(29, 141, 211)"},{offset:0,color:"rgb(56, 206, 191)"}],!1)}},name:"涉案金额",data:data1[i]},{type:"line",smooth:!0,symbol:"circle",yAxisIndex:1,symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:1}},itemStyle:{normal:{barBorderRadius:20,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgb(254, 101, 116)"},{offset:0,color:"rgb(254, 152, 94)"}],!1)}},name:"案件数量",data:data2[i]}]});var option={baseOption:{timeline:{axisType:"category",autoPlay:!0,playInterval:2e3,orient:"vertical",lineStyle:{color:"#4c647c"},label:{fontSize:12,textStyle:{color:"#4c647c"}},checkpointStyle:{color:"#4c647c"},left:"4%",right:"84%",top:"top",bottom:"6%",data:yearData,padding:[30,10,20,-10]},tooltip:{trigger:"axis",formatter:function(e){for(var o=e[0].name,t=0,l=e.length;t<l;t++)t==1?o+="<br/>"+e[t].seriesName+" : "+formatNum(e[t].value)+"个":o+="<br/>"+e[t].seriesName+" : "+formatNum(e[t].value)+"万元";return o},axisPointer:{type:"shadow",label:{backgroundColor:"#4c647c"}},textStyle:{color:"#fff",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}},legend:{right:"37%",top:"2%",itemWidth:18,itemHeight:10,textStyle:{color:"#4c647c",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}},calculable:!0,grid:{x:"26%",top:"14%",bottom:"2%",height:"70%",right:60,tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,formatter:function(e){return e.value.replace(`
`,"")}}}}},xAxis:[{type:"category",axisTick:{show:!1},axisLine:{lineStyle:{color:"#4c647c",opacity:.2}},axisLabel:{interval:0,textStyle:{fontSize:12}},data:opts,splitLine:{show:!1}}],yAxis:[{type:"value",axisLabel:{textStyle:{color:"#4c647c",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:["#000"],opacity:.06}}},{type:"value",splitNumber:5,axisLabel:{formatter:"{value}",textStyle:{color:"#4c647c",fontStyle:"{value}",fontFamily:"微软雅黑",fontSize:12}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1,lineStyle:{color:["#000"],opacity:.06}}}]},options:opts};
