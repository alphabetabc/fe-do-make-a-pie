const payload={id:"org-box-1",unit:"人",wordNum:3,data:{color:["#FF6363","#0077CC"],x:["办公室","资产部","安全部","办公室","建设部"],data:["1","6","2","1","4"],data2:[15,25,12,14,17],data3:[12,25,13,14,18],data4:[4,6,1,1,3],data5:[20,0,0,0,0]}},max=payload.max||parseInt(Math.max(...payload.data.data)*1.4,10),wordNum=payload.wordNum,formatter=(a,t)=>{if(!t)return a;let e="";const r=a.length,o=t,n=Math.ceil(r/o);if(r>o)for(let i=0;i<n;i++){let d="";const s=i*o,l=s+o;i===n-1?d=a.substring(s,r):d=a.substring(s,l)+`
`,e+=d}else e=a;return e};option={backgroundColor:"#031231",tooltip:{trigger:"axis",backgroundColor:"rgba(9, 30, 60, 0.6)",extraCssText:"box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;",borderWidth:0,confine:!1,appendToBody:!0,textStyle:{color:"#fff",fontSize:10},axisPointer:{type:"shadow"},formatter(a){var t="";for(const e in a)e===0&&(t+=a[e].name+"<br>"),t+='<div class="echarts-tip-div">',t+='<div class="left">编制：</div>',t+='<div class="right">'+payload.data.data2[a[e].dataIndex]+"</div>",t+="</div>",t+='<div class="echarts-tip-div">',t+='<div class="left">在编：</div>',t+='<div class="right">'+payload.data.data3[a[e].dataIndex]+"</div>",t+="</div>",t+='<div class="echarts-tip-div">',t+='<div class="left">借用：</div>',t+='<div class="right">'+payload.data.data4[a[e].dataIndex]+"</div>",t+="</div>",t+='<div class="echarts-tip-div">',t+='<div class="left">挂岗：</div>',t+='<div class="right">'+payload.data.data5[a[e].dataIndex]+"</div>",t+="</div>";return t}},grid:{left:"3%",right:"4%",top:25,bottom:"0",containLabel:!0},xAxis:{type:"category",axisLine:{lineStyle:{color:"#4176A3",width:1}},axisLabel:{color:"#96CBFA",fontSize:12,formatter(a){return formatter(a,wordNum)}},data:payload.data.x},yAxis:[{max,name:"单位："+payload.unit,nameTextStyle:{align:"left",fontSize:11,color:"#4176a3"},axisLine:{lineStyle:{color:"#4176A3",width:2}},splitLine:{lineStyle:{color:"#4176A356"}}},{type:"value",nameTextStyle:{color:"#4176A3",fontSize:11},position:"right",splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"#396A87",width:2}},axisLabel:{show:!0,formatter:"{value} "+payload.unit,color:"#396A87",fontSize:14}}],series:[{name:"超员比例",type:"bar",barMaxWidth:8,showBackground:!0,backgroundStyle:{borderWidth:14},data:payload.data.data,itemStyle:{borderRadius:[4,4,0,0],color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:payload.data.color[1]},{offset:0,color:payload.data.color[0]}],!1)},label:{show:!0,position:"top",distance:10,formatter:(payload.id==="org-box-2"?`{c}
`:"{c}")+payload.unit,color:"#fff"}}]};
