option={color:["#35a2ff"],title:{text:"类型分布",left:"7%",top:"2%",textStyle:{fontWeight:600,fontSize:14,lineHeight:26}},tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,0.8)",padding:10,textStyle:{fontSize:12},axisPointer:{show:!1,lineStyle:{color:"#e1e3e4"}},extraCssText:"border-radius:0;",formatter:"类型分布：{b}<br/>事件数量：{c}"},grid:{top:"20%",left:"8%",right:"4%",bottom:"9%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!0,offset:5,axisLine:{show:!0,lineStyle:{color:"#E1E3E4"}},axisLabel:{textStyle:{color:"#3E4956"},formatter:function(e){var o="",i=e.length,t=7,s=Math.ceil(i/t);if(i>t)for(var r=0;r<s;r++){var a="",l=r*t,n=l+t;r==s-1?a=e.substring(l,i):a=e.substring(l,n)+`
`,o+=a}else o=e;return o}},axisTick:{show:!1},data:["A1-1:自然人身份标识","A1-1:自然人身份标识","A1-1:自然人身份标识","A1-1:自然人身份标识","A1-1:自然人身份标识"]}],yAxis:[{type:"value",splitNumber:4,splitLine:{show:!0,lineStyle:{color:"#E1E3E4"}},axisLine:{show:!1},axisTick:{show:!1}}],series:[{type:"bar",barWidth:"30%",label:{normal:{show:!1}},data:[30,17,43,35,47]}]};