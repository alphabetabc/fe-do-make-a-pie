const smoothness=function(e,a,t,n=.5){return e===void 0||t===void 0?a:((t-e)/2+e-a)*n+a},smoothness2=function(e=[],a=.5){if(e.length<=2)return e;const t=e[0],r=(e[e.length-1]-t)/(e.length-1);return e.map((o,l)=>(r*l+t-o)*a+o)},smoothness3=function(e=[],a=.5){return e.length<=2?e:e.map((t,n)=>{const r=e[n-1],o=e[n+1];return smoothness(r,t,o,a)})};var data=[5e4,5e3,500,5],data2=[5e4,5e3,500,50],originData=data.map(e=>({value:e,name:e})),originData2=data.map(e=>({value:e,name:e})),avgData=smoothness2([].concat(data,[0])).slice(0,-1).map(e=>({value:e,name:e})),avgData2=smoothness3([].concat(data,[0]),1).slice(0,-1).map(e=>({value:e,name:e}));function getBaseLog(e,a){return Math.log(a)/Math.log(e)}var series=[{name:"预期",type:"funnel",left:"10%",width:"80%",label:{formatter:"{c}"},labelLine:{show:!1},itemStyle:{opacity:.2},data:originData}];series.push({name:"预期",type:"funnel",left:"10%",width:"80%",label:{padding:[90,0,0,0],formatter:"平均0.5：{c}"},labelLine:{show:!1},itemStyle:{opacity:.5},data:avgData}),series.push({name:"预期",type:"funnel",left:"10%",width:"80%",label:{padding:[120,0,0,0],formatter:"平均2-0.5：{c}"},labelLine:{show:!1},itemStyle:{opacity:.1},data:avgData2}),console.log(series.map(e=>e.data.map(a=>a.value))),option={title:{text:"漏斗图",subtext:"纯属虚构"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"},toolbox:{feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},legend:{data:["访问","咨询","订单"]},series};