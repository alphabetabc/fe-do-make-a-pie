function getTableLine(t){for(var n=[],i=142,r=20,e=0;e<t;e++)n.push({type:"line",bottom:i-e*r,right:10,style:{fill:"#333"},shape:{x1:0,y1:0,x2:3200,y2:0}});return n}var lineList=getTableLine(6);option={title:[{text:` 
计划投入数
实际投入数
实际产出数
不良数
在制数`,bottom:78,left:10,textStyle:{lineHeight:20,fontSize:13,fontWeight:"normal",formatter:function(t){return"{table|"+t+"}"},rich:{table:{align:"center"}}}}],xAxis:{type:"category",data:["08:30","08:30","08:30","08:30","08:30","08:30","08:30"],axisTick:{length:128},axisLabel:{formatter:function(t){return"{table|"+t+`}
{table|`+t+`}
{table|`+t+`}
{table|`+t+`}
{table|`+t+`}
{table|`+t+"}"},rich:{table:{lineHeight:20,align:"center"}}}},grid:{bottom:170,left:100,right:10},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:50,end:100,bottom:0}],yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0}],graphic:lineList};
