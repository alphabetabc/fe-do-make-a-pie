data=[],data2=[];let maxData=0,maxData2=0,indicator=[],indicator2=[],total=0;const alarmData=[{name:"座椅",value:35},{name:"垃圾桶",value:25},{name:"路灯",value:12},{name:"公交站台",value:11},{name:"引导牌",value:10}],alarmData2=[{name:"座椅",value:20},{name:"垃圾桶",value:20},{name:"路灯",value:20},{name:"公交站台",value:20},{name:"引导牌",value:20}];alarmData.forEach(a=>{total+=a.value,data.push(a.value),a.value>maxData&&(maxData=a.value)}),alarmData2.forEach(a=>{total+=a.value,data2.push(a.value),a.value>maxData2&&(maxData2=a.value)});let mult=Math.pow(10,1);maxData=Math.ceil(maxData/mult)*mult,alarmData.forEach(a=>{indicator.push({name:a.name,max:maxData})}),alarmData2.forEach(a=>{indicator2.push({name:a.name,max:maxData})});let buildSeries=function(a){let l=a.map((e,t)=>{let r=new Array(a.length);return r.splice(t,1,e),r});return[a,...l].map((e,t)=>({type:"radar",name:"指标1",itemStyle:{color:"#37D3FF"},lineStyle:{color:t===0?"#37D3FF":"transparent"},areaStyle:{color:t===0?"#0FB7E6":"transparent",opacity:.6},tooltip:{backgroundColor:"rgba(50,50,50,0.7)",borderWidth:0,padding:[5,10],textStyle:{color:"#FFFFFF",fontFamily:"sans-serif"},confine:!0,show:t!==0,formatter:function(){return indicator[t-1].name+"<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#37D3FF'></span>报警 : "+a[t-1]}},z:t===0?1:2,data:[e]}))},buildSeries2=function(a){let l=a.map((e,t)=>{let r=new Array(a.length);return r.splice(t,1,e),r});return[a,...l].map((e,t)=>({type:"radar",name:"指标2",itemStyle:{color:"#F7DA6D"},lineStyle:{color:t===0?"#F7DA6D":"transparent"},areaStyle:{color:t===0?"#F7DA6D":"transparent",opacity:.6},tooltip:{backgroundColor:"rgba(50,50,50,0.7)",borderWidth:0,padding:[5,10],textStyle:{color:"#FFFFFF",fontFamily:"sans-serif"},confine:!0,show:t!==0,formatter:function(){return indicator2[t-1].name+"<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#F7DA6D'></span>报警 : "+a[t-1]}},z:t===0?1:2,data:[e]}))};console.log("123",buildSeries(data)),option={backgroundColor:"#313131",tooltip:{},title:{text:total,subtext:"报警总数",top:"0%",left:"center",itemGap:7,textStyle:{color:"#FEFFFF",fontSize:"24",fontFamily:"OPPOSans-M",fontWeight:"normal"},subtextStyle:{color:"rgba(255, 255, 255, 0.6)",fontSize:"12",fontFamily:"SourceHanSansCN-Normal",fontWeight:400}},radar:{center:["50%","54%"],radius:"90%",name:{textStyle:{color:"rgba(255, 255, 255, 0.7)",fontSize:"12",fontFamily:"SourceHanSansCN-Regular",fontWeight:400,padding:[-10,-12]}},splitArea:{show:!0,areaStyle:{color:["transparent"]}},splitLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"}},axisLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"}},indicator},series:[...buildSeries(data),...buildSeries2(data2)]};
