var data={title:["总计","北京","上海","浙江","深圳","广东","宁波","云南","江苏","湖南","其他"],plan_production:[500,300,490,333,346,777,888,864,789,765,500],actual_production:[300,400,500,300,400,500,300,400,500,500,500],attainment_rate:[60,80,90,60,70,80,90,60,70,90,500],productivity_1:[30,45,88,100,110,70,80,90,100,100,500],productivity_2:[30,45,88,100,110,70,80,90,100,100,500],productivity_3:[30,45,88,100,110,70,80,90,100,100,500],productivity_4:[30,45,88,100,110,70,80,90,100,100,500]};for(var pr in data)data[pr]=data[pr].slice(1,-1);function getTableLine(a){for(var i=[],t=180,e=20,n=0;n<a;n++)i.push({type:"line",bottom:t-n*e,right:80,style:{fill:"#333"},shape:{x1:0,y1:0,x2:3200,y2:0}});return i}var lineList=getTableLine(8);option={color:["#4472c4","#ed7d31","#ffc000","#5b9bd5","#","70ad47","#264478","#a5a5a5"],title:[{text:` 
其他
停业转型
立案侦查
失联跑路
僵尸企业
清盘推出
拟停业`,bottom:35,left:10,textStyle:{lineHeight:20,fontSize:13,fontWeight:"normal",formatter:function(a){return"{table|"+a+"}"},rich:{table:{align:"center"}}}}],tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#283b56"}}},legend:{data:["其他","停业转型","立案侦查","失联跑路","僵尸企业","清盘推出","拟停业"]},grid:{bottom:210,left:80,right:80},xAxis:[{type:"category",boundaryGap:!0,data:data.title,axisTick:{length:170},axisLabel:{formatter:function(a,i){for(var t=0,e=0;e<data.title.length;e++)a==data.title[e]&&(t=e);return"{table|"+a+`}
{table|`+data.plan_production[t]+`}
{table|`+data.actual_production[t]+`}
{table|`+data.attainment_rate[t]+`}
{table|`+data.productivity_1[t]+`}
{table|`+data.productivity_2[t]+`}
{table|`+data.productivity_3[t]+`}
{table|`+data.productivity_4[t]+"}"},rich:{table:{lineHeight:20,align:"center"}}}}],yAxis:[{type:"value",scale:!0,minInterval:1,name:"数量",axisLine:{show:!1},splitLine:{show:!0,color:"#333"},min:function(a){return Math.max(a.min-20,0)}}],series:[{name:"其他",stack:"aa",type:"bar",barWidth:"40px",label:{show:!0,position:"top"},yAxisIndex:0,data:data.plan_production},{name:"停业转型",stack:"aa",type:"bar",label:{show:!0,position:"top"},yAxisIndex:0,data:data.actual_production},{name:"立案侦查",stack:"aa",type:"bar",label:{show:!0,position:"top"},yAxisIndex:0,data:data.attainment_rate},{name:"失联跑路",type:"bar",stack:"aa",label:{show:!0,position:"top"},yAxisIndex:0,data:data.productivity_1},{name:"僵尸企业",type:"bar",stack:"aa",label:{show:!0,position:"top"},yAxisIndex:0,data:data.productivity_2},{name:"清盘推出",type:"bar",stack:"aa",label:{show:!0,position:"top"},yAxisIndex:0,data:data.productivity_3},{name:"拟停业",type:"bar",stack:"aa",label:{show:!0,position:"top"},yAxisIndex:0,data:data.productivity_4}],graphic:lineList};
