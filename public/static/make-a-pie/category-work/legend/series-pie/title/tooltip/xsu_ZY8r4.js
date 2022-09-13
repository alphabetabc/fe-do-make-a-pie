function setSpace(e,t){const o=t-e.length;if(o<0)return"";let a="";for(let n=0;n<o;n++)a=a+"区";return a}function setNumber(e,t){return Math.round(e*100/t)<10?0:""}function setNum(e,t){const o=e.toString().length,a=t-o;if(a<0)return"";let n="";for(let r=0;r<a;r++)n=n+"0";return n}const animaton=3e3,arr=[{name:"重庆",num:30},{name:"哈尔滨",num:60},{name:"杭州",num:35},{name:"乌鲁木齐",num:39},{name:"其它",num:39}],names=arr.map(e=>e.name.length),nums=arr.map(e=>e.num.toString().length),maxLen=Math.max(...names),maxNumLen=Math.max(...nums),total=arr.reduce((e,t)=>e+t.num,0),data=arr.map(({num:e,name:t})=>({value:e,name:`${t}{a|${setSpace(t,maxLen)}}     {a|${setNumber(e,total)}}${Math.round(e*100/total)}%     {a|${setNum(e,maxNumLen)}}${e}`,legendname:t}));option={animation:!0,animationDuration:animaton,animationEasing:"quadraticOut",color:["#F7B500","#30DCD6","#F27878","#5584FF","#9F80E1","#FA6400"],tooltip:{trigger:"item",formatter:function({name:e}){return e.replace(/\{.*?\}/g,"")}},title:[{text:"总数",subtext:data.reduce((e,t)=>e+t.value,0),textStyle:{color:"black",fontSize:20},subtextStyle:{color:"black ",fontSize:20},textAlign:"center",x:"29%",y:"45%"}],grid:{bottom:150,left:100,right:"10%"},legend:{orient:"vertical",top:"middle",right:"5%",icon:"circle",textStyle:{color:"black",rich:{a:{color:"rgba(0,0,0,0)",opacity:0}}}},series:[{radius:["40%","70%"],center:["30%","50%"],type:"pie",name:"区域分布",data,label:{normal:{show:!1}}},{radius:["40%","53%"],center:["30%","50%"],type:"pie",label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1},emphasis:{show:!1}},animation:!1,tooltip:{show:!1},data:[{value:1,itemStyle:{color:"rgba(250,250,250,0.3)"}}]},{name:"外边框",type:"pie",clockWise:!1,hoverAnimation:!1,center:["30%","50%"],radius:["74%","74%"],label:{normal:{show:!1}},data:[{value:9,name:"",itemStyle:{normal:{borderWidth:2,borderColor:"#0b5263"}}}]}]};