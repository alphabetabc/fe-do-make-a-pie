for(var textName=`各资
源数`,dataArr=[{value:67,name:"环境资源"},{value:83,name:"安保资源"},{value:67,name:"消防资源"},{value:55,name:"监控资源"},{value:79,name:"物联网设备"},{value:19,name:"应急资源"}],total=0,j=0;j<dataArr.length;j++)total+=dataArr[j].value;var rich={pale:{color:"#CBCBCB",fontSize:25},bule:{color:"#01B8FE",fontSize:25,padding:4},hr:{padding:5}};option={backgroundColor:"#000",title:{text:textName,x:"center",y:"center",textStyle:{color:"#CFE0EA",fontSize:30,fontWeight:"normal"}},angleAxis:{interval:1,type:"category",startAngle:120,data:dataArr,z:10,axisLine:{show:!0,lineStyle:{color:"#00c7ff",width:1,type:"solid"}},axisLabel:{interval:0,show:!0,color:"#fff",margin:8,fontSize:16,formatter:function(e){for(var t=Math.round(e/total*100)+"%",a=0;a<option.series[0].data.length;a++)return"{pale|"+option.series[0].data[a].name+`}
{bule|`+t+"}{hr|}{bule|"+e+"项}"},rich},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"#00c7ff",type:"solid"}},splitArea:{areaStyle:{}}},radiusAxis:{min:0,max:100,interval:20,axisLine:{show:!1,lineStyle:{width:1,type:"solid"}},axisLabel:{formatter:"{value} %",show:!1,padding:[0,0,20,0],fontSize:16},splitLine:{lineStyle:{color:"transparent"}},axisTick:{show:!1},z:1},polar:{},series:[{type:"bar",itemStyle:{normal:{color:"#071E48",borderWidth:2,borderColor:"#00c7ff"}},label:{normal:{show:!0,formatter:function(e){console.log(e)},rich}},data:dataArr,coordinateSystem:"polar"},{type:"pie",center:["50%","50%"],radius:["15%","14.5%"],hoverAnimation:!1,data:[{name:"",value:45,z:5,labelLine:{show:!1},itemStyle:{normal:{color:"#CFE0EA"}},label:{normal:{position:"inner",show:!1}}}]}]};