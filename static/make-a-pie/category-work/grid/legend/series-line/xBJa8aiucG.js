const seriesCount=14,seriesLegendShowLimit=4,switcherText=["一键切换为清爽套装","一键切换为完全体"],getSeries=()=>{const s=[];for(let t=0;t<14;t++){const o=Array.from(new Array(7),r=>Math.round(Math.random()*100)),e=o.reduce((r,a)=>r+a),n=`序列${t+1}-${t%2?"sum":"summary"}${e}`;s.push({name:n,type:"line",smooth:!0,data:o,sum:e})}return s.push({name:switcherText[0],type:"line"}),s},getLegend=(s,t)=>{const o={},e=s.length>4,n=s.map((r,a)=>{const i=r.name;return o[i]=t?!0:a<4||a===s.length-1,{name:i}});return{type:t||(e?"scroll":"plain"),left:"2%",width:t?"auto":e?"70%":"auto",data:n,selected:o,scrollDataIndex:0}},series=getSeries(),legend=getLegend(series);option={legend,xAxis:{data:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],boundaryGap:!1},yAxis:{},series},myChart.on("legendselectchanged",s=>{const t=s.name,o=s.selected;if(switcherText[0]===t){console.log("清爽否");const e=[];series.forEach(r=>{o[r.name]&&e.push(r)}),e.push({name:switcherText[1],type:"line",data:[]});const n=getLegend(e,"plain");console.log(n,e),myChart.setOption({legend:n,series:e})}else if(switcherText[1]===t){console.log("还清爽吗");const e=legend.selected;Object.keys(e).forEach(n=>{e[n]=!!o[n]}),e[switcherText[0]]=!0,myChart.setOption({legend,series})}});
