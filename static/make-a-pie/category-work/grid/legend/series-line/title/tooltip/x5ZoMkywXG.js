const smoothness=function(n,t,e,o=.5){return n===void 0||e===void 0?t:((e-n)/2+n-t)*o+t},smoothness2=function(n=[],t=.5){if(n.length<=2)return n;const e=n[0],s=(n[n.length-1]-e)/(n.length-1);return n.map((a,i)=>(s*i+e-a)*t+a)},smoothness3=function(n=[],t=.5){return n.length<=2?n:n.map((e,o)=>{const s=n[o-1],a=n[o+1];return smoothness(s,e,a,t)})},data=[10,182,191,534,590,330,210,50,100,300,400,500,200],series=[{name:"origin",type:"line",lineStyle:{width:3},data}];series.push({name:"smooth2-1",type:"line",data:smoothness2(data,1),lineStyle:{width:1}}),series.push({name:"smooth2-0.5",type:"line",data:smoothness2(data),lineStyle:{width:1}}),series.push({name:"smooth3-0.5",type:"line",data:smoothness3(data),lineStyle:{width:1}}),series.push({name:"smooth3-1.0",type:"line",data:smoothness3(data,1),lineStyle:{width:1}}),console.log(series.map(n=>n.data)),option={title:{text:"平滑折线测试"},tooltip:{trigger:"axis"},legend:series.map(n=>({name:n.name})),xAxis:{data},yAxis:{},series};
