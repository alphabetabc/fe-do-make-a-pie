option={backgroundColor:"#0c1e55",title:{text:"大声道",x:"center",top:"20",textStyle:{color:"#ffff",fontStyle:"normal",fontWeight:"bold",fontFamily:"sans-serif",fontSize:18}},tooltip:{trigger:"axis",borderWidth:1,borderColor:"#333",backgroundColor:"rgba(255,255,255,0.9)",textStyle:{fontSize:12,color:"#333",aligin:"center"}},color:["red","#12C3C3","#FBCD14"],legend:{data:["叠翠园","北岳北"],bottom:"70",textStyle:{color:"#ffff"},icon:"circle"},dataZoom:[{type:"slider",realtime:!0,handleSize:"100%",start:0,end:50,bottom:25,textStyle:{color:"#1bb4f6"}}],grid:{left:"3%",right:"4%",bottom:"20%",height:"70%",containLabel:!0},toolbox:{show:!0,feature:{dataView:{readOnly:!0},magicType:{type:["line","bar","pie"]},restore:{},textStyle:{color:"#1bb4f6"}}},optionToContent:function(a){let i=a.xAxis[0].data,t=a.series,n='<td  style="padding: 0 10px;">时间</td>',o="";t.forEach(function(e){n+=`<td style="padding: 0 10px">${e.name}</td>`});let l=`<table border="1" style="margin-left:50px;border-collapse:collapse;font-size:24px;text-align:center;"><tbody><tr>${n} </tr>`;for(let e=0,d=i.length;e<d;e++){for(let r=0;r<t.length;r++)o+=`<td>${t[r].data[e]}</td>`;l+=`<tr><td style="padding: 0 10px">${i[e]}</td>${o}</tr>`,o=""}return l+="</tbody></table>",l},xAxis:{type:"category",boundaryGap:!1,data:["10月1日","10月2日","10月3日","10月4日","10月5日","10月6日","10月7日"],axisLine:{lineStyle:{color:"#BA55D3",width:1.5}},axisLabel:{show:!0,textStyle:{color:"#00FF00"}}},yAxis:[{name:"亿元",nameTextStyle:{color:"#ebf8ac"},type:"value",axisLine:{lineStyle:{color:"#FFFF",width:1.5}},axisLabel:{show:!0,textStyle:{color:"#00FF00"}},splitLine:{show:!0,lineStyle:{color:"#FFC125"}}},{type:"value",name:"同比",nameTextStyle:{color:"red"},position:"right",splitLine:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{color:"red",width:1.5}},axisLabel:{show:!0,formatter:"{value} %",textStyle:{color:"red"}}}],series:[{name:"叠翠园",type:"line",smooth:!0,data:[180,92,81,174,210,280,210],symbolSize:1,yAxisIndex:1,lineStyle:{width:5},label:{show:!0}},{name:"北岳北",type:"line",smooth:!0,data:[340,382,391,334,390,390,410]}]};
