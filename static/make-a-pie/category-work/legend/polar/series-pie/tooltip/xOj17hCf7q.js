option={backgroundColor:"#013A54",color:["#EAEA26","#906BF9","#FE5656","#01E17E","#3DD1F9","#FFAD05","#FFCC99","#4772EB"],grid:{left:-100,top:50,bottom:10,right:10,containLabel:!0},tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vartical",top:"center",right:"15",itemWidth:16,itemHeight:8,itemGap:16,textStyle:{color:"#A3E2F4",fontSize:12,fontWeight:0},data:["IDS","VPN","交换机","防火墙","WAF","堡垒机","123","223"]},polar:{},angleAxis:{interval:1,type:"category",data:[],z:10,axisLine:{show:!1,lineStyle:{color:"#0B4A6B",width:1,type:"solid"}},axisLabel:{interval:0,show:!0,color:"#0B4A6B",margin:8,fontSize:16}},radiusAxis:{min:40,max:120,interval:20,axisLine:{show:!1,lineStyle:{color:"#0B3E5E",width:1,type:"solid"}},axisLabel:{formatter:"{value} %",show:!1,padding:[0,0,20,0],color:"#0B3E5E",fontSize:16},splitLine:{lineStyle:{color:"#0B3E5E",width:2,type:"solid"}}},calculable:!0,series:[{type:"pie",radius:["5%","10%"],hoverAnimation:!1,labelLine:{normal:{show:!1,length:30,length2:55},emphasis:{show:!1}},data:[{name:"",value:0,itemStyle:{normal:{color:"#0B4A6B"}}}]},{type:"pie",radius:["90%","95%"],hoverAnimation:!1,labelLine:{normal:{show:!1,length:30,length2:55},emphasis:{show:!1}},name:"",data:[{name:"",value:0,itemStyle:{normal:{color:"#013A54"}}}]},{stack:"a",type:"pie",radius:["20%","80%"],roseType:"area",zlevel:10,label:{normal:{show:!0,formatter:"{c}",textStyle:{fontSize:12},position:"outside"},emphasis:{show:!0}},labelLine:{normal:{show:!0,length:20,length2:55},emphasis:{show:!1}},data:[{value:10,name:"IDS"},{value:5,name:"VPN"},{value:15,name:"交换机"},{value:25,name:"防火墙"},{value:20,name:"WAF"},{value:25,name:"堡垒机"},{value:33,name:"123"},{value:23,name:"124"}]}]};
