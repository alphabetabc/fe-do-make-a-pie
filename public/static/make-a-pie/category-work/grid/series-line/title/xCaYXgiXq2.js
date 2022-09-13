var data={title:["总计","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],plan_production:[500,300,490,333,346,777,888,864,789,765,333,346,777,721],actual_production:[300,400,500,300,400,500,300,400,500,500,400,500,300,400],attainment_rate:[560,380,290,460,370,480,290,560,230,490,400,500,300,400],productivity:[350,425,188,700,410,312,743,621,321,142,400,500,300,400],nums:[30,45,88,100,110,70,80,90,100,100,45,88,100,110,70]};for(var pr in data)data[pr]=data[pr].slice(1,-1);function getTableLine(e){for(var t=[],o=122,i=20,a=0;a<e;a++)t.push({type:"line",bottom:o-a*i,right:40,style:{fill:"#ffff"},shape:{x1:0,y1:0,x2:3200,y2:0}});return t}var lineList=getTableLine(6);option={title:[{text:` 
住宅用地
商服用地
工矿仓储用地
其他用地
宗数`,bottom:18,left:1,textStyle:{lineHeight:20,fontSize:14,fontWeight:"normal",color:"#37474F",fontWeight:"bold",formatter:function(e){return"{table|"+e+"}"},rich:{table:{align:"center",color:"#80CBC4"}}}}],tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#283b56"}}},legend:{data:["住宅用地","商服用地","工矿仓储用地","其他用地","宗数"]},grid:{bottom:150,left:90,right:40},toolbox:{show:!0,feature:{saveAsImage:{}}},xAxis:[{type:"category",boundaryGap:!0,data:data.title,axisTick:{length:128},axisLabel:{formatter:function(e,t){return"{table|"+e+`}
{table|`+data.plan_production[t]+`}
{table|`+data.actual_production[t]+`}
{table|`+data.attainment_rate[t]+`}
{table|`+data.productivity[t]+`}
{table|`+data.nums[t]+"}"},rich:{table:{lineHeight:20,align:"center",color:"#37474F"}}},splitLine:{show:!0,lineStyle:{color:"rgba(102,102,102,.1)",width:1,type:"dashed"}}}],yAxis:[{type:"value",scale:!0,minInterval:1,name:"面积",splitLine:{show:!1},min:function(e){return Math.max(e.min-10,0)},axisLine:{lineStyle:{color:"#455A64"}}},{type:"value",scale:!0,name:"宗数",splitLine:{show:!1},axisLabel:{formatter:"{value}"},axisLine:{lineStyle:{color:"#455A64"}}}],color:["#5C6BC0","#FFCA28","#795548","#B0BEC5","#209f84"],series:[{name:"住宅用地",type:"bar",label:{show:!0,position:"top"},yAxisIndex:0,data:data.plan_production},{name:"商服用地",type:"bar",label:{show:!0,position:"top"},yAxisIndex:0,data:data.actual_production},{name:"工矿仓储用地",type:"bar",label:{show:!0,position:"top"},yAxisIndex:0,data:data.attainment_rate},{name:"其他用地",type:"bar",label:{show:!0,position:"top"},yAxisIndex:0,data:data.productivity},{name:"宗数",type:"line",label:{show:!0,position:"top"},yAxisIndex:1,data:data.nums}],graphic:lineList};