const startAlpha=1,endAlpha=1,color=[{r:252,g:208,b:149},{r:152,g:246,b:246},{r:195,g:248,b:181},{r:238,g:186,b:255},{r:240,g:108,b:162},{r:103,g:186,b:243}],color1=[{r:143,g:89,b:43},{r:98,g:182,b:182},{r:108,g:208,b:89},{r:131,g:87,b:157},{r:190,g:48,b:117},{r:73,g:56,b:126}];function getCoordinates(t,o){const r=[Math.sin(t),-Math.cos(t),Math.sin(o),-Math.cos(o)],e=r[2]-r[0],n=r[3]-r[1];return getLocation(e,n)}function getLocation(t,o){const r=t/o,e=Math.abs(r)<1,n=e?r:1/r,c=n>0?1:-1,a=t>0?1:-1,s=e?c*a:a,l=[.5-s*n/2,.5+s*n/2],i=s>0?[0,1]:[1,0],g=[...l,...i],b=e?["x","x2","y","y2"]:["y","y2","x","x2"];let u={};return b.forEach((d,f)=>{u[d]=g[f]}),u}function setGradientColorInItemSyle(t,o,r,e,n){for(let c=0;c<t.length;c++){const a=o[c],s=r[c],l=t[c]._startArc,i=t[c]._endArc,g=getCoordinates(l,i);t[c].itemStyle={color:{...g,type:"linear",global:!1,colorStops:[{offset:0,color:`rgba(${a.r}, ${a.g}, ${a.b}, ${e})`},{offset:1,color:`rgba(${s.r}, ${s.g}, ${s.b}, ${n})`}]}}}return t}const dataArr=[{value:10,name:"问题1",_startArc:0,_endArc:1},{value:20,name:"问题2",_startArc:0,_endArc:1},{value:30,name:"问题3",_startArc:0,_endArc:1},{value:40,name:"问题4",_startArc:0,_endArc:1},{value:50,name:"问题5",_startArc:0,_endArc:1},{value:60,name:"问题6",_startArc:0,_endArc:1}];option={tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},backgroundColor:"rgba(73,129,173,.2)",legend:{orient:"vertical",x:"70%",y:"center",itemWidth:30,itemHeight:10,formatter:function(t){const o=option.series[0].data,r=o.reduce((e,n)=>e+n.value,0);for(let e=0;e<option.series[0].data.length;e++)if(t==o[e].name)return t+"   "+(o[e].value/r*100).toFixed(1)+"%"},textStyle:{color:"#FFFFFF",fontSize:18,lineHeight:20}},title:{x:"30%",y:"center",text:`每日问题
发现情况`,textStyle:{color:"#FFFFFF",fontSize:30,lineHeight:40}},series:[{name:"",type:"pie",radius:["55%","70%"],center:["35%","50%"],data:setGradientColorInItemSyle(dataArr,color,color1,1,1),itemStyle:{normal:{label:{show:!1,formatter:"{c} ({d}%)"}},labelLine:{show:!0}}}]};