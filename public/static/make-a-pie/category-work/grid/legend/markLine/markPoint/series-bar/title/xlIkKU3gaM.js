let data=[{haltCountMonthGoal:80,monthHaltCount:40,name:"A",todayHaltCount:5},{haltCountMonthGoal:50,monthHaltCount:50,name:"C",todayHaltCount:10}];data=data.reverse();const[a,b]=data,max=Math.max(a.haltCountMonthGoal,b.haltCountMonthGoal),markPointData=[{name:"日累计",value:b.todayHaltCount,xAxis:b.monthHaltCount>=b.haltCountMonthGoal?max:(b.monthHaltCount+b.todayHaltCount)*(max/b.haltCountMonthGoal),yAxis:1},{name:"日累计",value:a.todayHaltCount,xAxis:a.monthHaltCount>=a.haltCountMonthGoal?max:(a.monthHaltCount+a.todayHaltCount)*(max/a.haltCountMonthGoal),yAxis:0}];let markPointRectData=JSON.parse(JSON.stringify(markPointData));markPointRectData.map(t=>{t.xAxis-t.value>=max&&(t.xAxis-=t.value*2);let o=t.xAxis/max;o<.1?t.xAxis+=max*.08:o>.9&&(t.xAxis-=max*.08)});let markLineData=[[{x:"2",y:"76.5%",lineStyle:{width:40,color:"#ff001c"}},{x:"80%",y:"76.5%"}],[{x:"15",y:"38.4%",lineStyle:{width:40,color:"#ff001c"}},{x:"525",y:"38.4%"}]],monthCount=data.map((t,o)=>{const n=markLineData.length===2;return t.monthHaltCount>=t.haltCountMonthGoal?(markLineData[n?o:0][1].x-=5.1,max-t.todayHaltCount*(max/t.haltCountMonthGoal)):(markLineData.splice(n?o:0,1),t.monthHaltCount/t.haltCountMonthGoal*max)});option={color:["#5095f3","#000f84","#bbdaf7"],title:{text:"停机次数",textStyle:{fontFamily:"PingFang SC Bold",fontSize:30,fontWeight:"lighter"},left:12,top:15},legend:{textStyle:{fontFamily:"PingFang SC Regular",fontSize:100/4},right:15,top:66/4,itemHeight:96/4,itemWidth:96/4,itemGap:76/4,data:[{name:"日累计",icon:"rect"},{name:"月累计",icon:"rect"},{name:"月目标",icon:"rect"}]},grid:{top:60,left:15,right:15,bottom:-10,containLabel:!0},xAxis:{show:!1,type:"value",max},yAxis:{type:"category",axisLabel:{show:!1},data:data.map(t=>t.name),splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},series:[{name:"月累计",type:"bar",barWidth:160/4,stack:"count",label:{show:!0,position:"insideLeft",fontFamily:"PingFang SC Regular",fontSize:18,offset:[0,-40],color:"#333",formatter:t=>"{letter|"+t.name+"}组 月累计停机次数 {number|"+(t.dataIndex===0?a:b).monthHaltCount+"}次",rich:{letter:{fontFamily:"PingFang SC Regular",color:"#333",fontSize:30,verticalAlign:"top"},number:{fontFamily:"PingFang SC Regular",color:"#333",fontSize:30,verticalAlign:"top",lineHeight:36}}},markLine:{symbol:"none",lineStyle:{type:"solid"},silent:!0,label:{position:"middle",color:"#fff",fontFamily:"PingFang SC Regular",fontSize:18,height:30,lineHeight:40,verticalAlign:"middle",formatter:t=>{const{haltCountMonthGoal:o,monthHaltCount:n}=data[t.dataIndex],e=n-o;return e===0?"已触及月目标":e>0?"已超出月目标停机次数{number|"+e+"}次":""},rich:{number:{fontFamily:"PingFang SC Regular",fontSize:27,color:"#fff",verticalAlign:"middle",lineHeight:27}}},data:markLineData},data:monthCount},{name:"日累计",type:"bar",barWidth:160/4,barGap:"0%",stack:"count",label:{normal:{show:!1,position:"top",fontFamily:"PingFang SC Regular",fontSize:120/4,color:"#333"}},data:data.map(t=>t.todayHaltCount*(max/t.haltCountMonthGoal)),markPoint:{symbol:"arrow",symbolSize:15,symbolOffset:[0,20],data:markPointData,label:{show:!1}}},{name:"月目标",type:"bar",barWidth:160/4,stack:"count",label:{show:!0,position:"insideRight",offset:[0,-40],fontFamily:"PingFang SC Regular",fontSize:18,color:"#333",formatter:t=>"月目标停机次数 {number|"+(t.dataIndex===0?a:b).haltCountMonthGoal+"}次",rich:{number:{fontFamily:"PingFang SC Regular",color:"#333",fontSize:30,verticalAlign:"top",lineHeight:36}}},data:data.map(t=>t.monthHaltCount>=t.haltCountMonthGoal?0:max-t.monthHaltCount/t.haltCountMonthGoal*max-t.todayHaltCount*(max/t.haltCountMonthGoal)),markPoint:{symbol:"rect",symbolSize:[100,30],symbolOffset:[0,45],data:markPointRectData,itemStyle:{color:"#000f84"},label:{fontFamily:"PingFang SC Regular",fontSize:15,formatter:t=>"今日已停 "+(t.dataIndex===0?b:a).todayHaltCount+"次",offset:[0,0]}}}]};