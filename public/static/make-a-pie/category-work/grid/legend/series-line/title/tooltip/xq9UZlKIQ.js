function jsonp(p,e,f){window[f]=e;var o=document.createElement("script");o.src=p,o.type="text/javascript",document.getElementsByTagName("body")[0].appendChild(o),setTimeout(function(){document.body.removeChild(o)},500)}console.log("数据来源：%c https://m.look.360.cn","color:#00cc00");var jsonpURL="https://m.look.360.cn/events/feiyanTrend?sv=&version=&market=&device=2&net=4&stype=&scene=&sub_scene=&refer_scene=&refer_subscene=&f=jsonp&_=1581431223974&callback=jsonp2&callback=jsonp2";jsonp(jsonpURL,function(p){var e=p.data.timeline;console.log(e);var f=[],o=[],h=[],y=[],b=[];e.reverse();for(var i=0;i<e.length-1;i++)f.push(e[i].total.dateTime),o.push(e[i].total.diagnosed_add),h.push(e[i].total.suspected_add),y.push(e[i].total.cured_add),b.push(e[i].total.died_add);const t=p.data.total;var S=t.modifyTime,x=t.currentConfirmed,g=t.diagnosed,v=t.serious,w=t.overseasInput,z=t.suspected,I=t.cured,C=t.died;const n=p.data.newDiff;var r=n.currentConfirmed,a=n.diagnosed,s=n.serious,d=n.overseasInput,l=n.suspected,c=n.cured,u=n.died;r<0?r=r:r="+"+r,a<0?a=a:a="+"+a,s<0?s=s:s="+"+s,d<0?d=d:d="+"+d,l<0?l=l:l="+"+l,c<0?c=c:c="+"+c,u<0?u=u:u="+"+u;var _=["截止："+S+`
现有确诊: {a| `+x+"}","较昨日:{g| "+r+"}","现有疑似: {b| "+z+"}","较昨日:{h| "+l+"}","境外输入确诊: {c| "+w+"}","较昨日:{i| "+d+`}
累计确诊: {a| `+g+"}","较昨日:{g| "+a+"}","重症病例: {d| "+v+"}","较昨日:{j| "+s+"}","治愈人数: {f| "+I+"}","较昨日:{l| "+c+"}","死亡人数: {e| "+C+"}","较昨日:{k| "+u+"}"].join("  ");option={backgroundColor:"#f8f8f8",title:{text:"全国疫情新增病例趋势图",textStyle:{color:"#000",fontSize:18},itemGap:5,subtext:_,subtextStyle:{color:"#333",fontSize:14,rich:{a:{color:"#b61e33",fontSize:15},b:{color:"#f4a313",fontSize:15},c:{color:"#eb4c2c",fontSize:15},d:{color:"#e56617",fontSize:15},e:{color:"#0c2e47",fontSize:15},f:{color:"#34cbc4",fontSize:15},g:{color:"#b61e33",fontSize:12},h:{color:"#f4a313",fontSize:12},i:{color:"#eb4c2c",fontSize:12},j:{color:"#e56617",fontSize:12},k:{color:"#0c2e47",fontSize:12},l:{color:"#34cbc4",fontSize:12}}},x:"center"},tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{color:"#c9caca",width:1,type:"dotted"}},x:"left",textStyle:{fontSize:14}},grid:{top:"10%",right:"2%",bottom:"5%",left:"5%"},legend:{data:["新增确诊","新增疑似","新增治愈","新增死亡"],x:"right"},xAxis:{type:"category",axisLabel:{rotate:0,interval:0,textStyle:{color:"#333",fontSize:12},formatter:"{value}"},axisLine:{lineStyle:{color:"#ccc",width:1}},splitLine:{show:!0,lineStyle:{color:"rgba(102,102,102,.1)",width:1,type:"dashed"}},axisTick:{show:!0},data:f},yAxis:{type:"value",axisLabel:{show:!0,textStyle:{color:"#333",fontSize:12},formatter:"{value}"},splitNumber:4,axisLine:{lineStyle:{color:"#ccc",width:1}},splitLine:{show:!0,lineStyle:{color:"rgba(102,102,102,.1)",width:1,type:"dashed"}}},color:["rgb(255, 53, 55)","rgb(255, 160, 25)","rgb(17, 191, 199)","rgba(77, 80, 84, 0.7)"],series:[{name:"新增确诊",type:"line",symbol:"pin",symbolSize:12,label:{normal:{show:!0,position:"top"}},lineStyle:{normal:{width:2}},smooth:!0,data:o},{name:"新增疑似",type:"line",symbol:"pin",symbolSize:12,label:{normal:{show:!0,position:"top"}},lineStyle:{normal:{width:2}},smooth:!0,data:h},{name:"新增治愈",type:"line",symbol:"pin",symbolSize:12,label:{normal:{show:!0,position:"top"}},lineStyle:{normal:{width:2}},smooth:!0,data:y},{name:"新增死亡",type:"line",symbol:"pin",symbolSize:12,label:{normal:{show:!0,position:"top"}},lineStyle:{normal:{width:2}},smooth:!0,data:b}]},myChart.setOption(option);var m={currentIndex:-1};setInterval(function(){var j=option.series[0].data.length;myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:m.currentIndex}),m.currentIndex=(m.currentIndex+1)%j,myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:m.currentIndex}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:m.currentIndex})},3e3)},"jsonp2");
