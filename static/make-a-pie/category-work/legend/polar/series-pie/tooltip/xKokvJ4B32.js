for(var data=[{value:10,name:"IDS"},{value:5,name:"VPN"},{value:50,name:"交换机"}],a=0,i=0;i<data.length;i++)a+=data[i].value;data.push({value:a,name:"__other",itemStyle:{normal:{color:"rgba(0,0,0,0)"}}});for(var data1=[{name:"",value:0,itemStyle:{normal:{color:"#49d9fe"}}}],b=0,i=0;i<data1.length;i++)b+=data1[i].value;data1.push({value:b,name:"__other",itemStyle:{normal:{color:"rgba(0,0,0,0)"}}});for(var data2=[{name:"",value:0,itemStyle:{normal:{color:"#49d9fe"}}}],b=0,i=0;i<data2.length;i++)b+=data2[i].value;data2.push({value:b,name:"__other",itemStyle:{normal:{color:"rgba(0,0,0,0)"}}}),option={backgroundColor:"#0B1837",color:["#f0b96c","#06dbd7","#8cd2b4"],grid:{left:-100,top:50,bottom:10,right:10,containLabel:!0},tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vartical",top:"center",right:"15",itemWidth:16,itemHeight:8,itemGap:16,textStyle:{color:"#A3E2F4",fontSize:12,fontWeight:0},data:["A","B","C"]},polar:{},angleAxis:{interval:1,type:"category",data:[],z:10,axisLine:{show:!1,lineStyle:{color:"#0B4A6B",width:1,type:"solid"}},axisLabel:{interval:0,show:!0,color:"#0B4A6B",margin:8,fontSize:16}},radiusAxis:{axisLine:{show:!1},axisLabel:{show:!1}},calculable:!1,series:[{type:"pie",startAngle:-180,radius:["5%","10%"],hoverAnimation:!1,labelLine:{normal:{show:!1,length:30,length2:55},emphasis:{show:!1}},data:data1},{type:"pie",startAngle:-180,radius:["90%","95%"],hoverAnimation:!1,labelLine:{normal:{show:!1,length:30,length2:55},emphasis:{show:!1}},name:"",data:data2},{stack:"a",type:"pie",startAngle:-180,radius:["20%","80%"],zlevel:10,label:{normal:{show:!1,formatter:"{c}",textStyle:{fontSize:12},position:"outside"},emphasis:{show:!0}},labelLine:{normal:{show:!1,length:20,length2:55},emphasis:{show:!1}},data}]};