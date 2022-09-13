const seriesLayoutBy="row",seriesType="scatter",baseConfig={moveSpeed:1,childThreshold:200,maxAge:200,childCost:60,illLost:30,clearCost:.05,selfRecoveryIncrease:10,balancePopulation:1e3,illPR:.3,distance:1,baseCount:200,rateA:1,rateB:1,rateC:.001};function init(l,n,e){const t=baseConfig.baseCount;let a={A:[],B:[],C:[]},o={clear:!0,ill:!1,child:0,age:0},s={clear:!1,ill:!1,child:0,age:0},i={clear:!0,ill:!1,child:0,age:0,except:{}};for(let r=0;r<t*l;r++)a.A.push(["傻瓜",Math.random()*10,Math.random()*10,100,"A"+r,Object.assign({},o)]);for(let r=0;r<t*n;r++)a.B.push(["骗子",Math.random()*10,Math.random()*10,100,"B"+r,Object.assign({},s)]);for(let r=0;r<t*e;r++)a.C.push(["斤斤计较者",Math.random()*10,Math.random()*10,100,"C"+r,Object.assign({},i)]);return a}function emulate(l){let n={A:[],B:[],C:[]},e=l.A.concat(l.B).concat(l.C);for(let t=e.length-1;t>=0;t--)e[t][1]+=(Math.random()-.5)*2*baseConfig.moveSpeed,e[t][2]+=(Math.random()-.5)*2*baseConfig.moveSpeed,e[t][1]<0?e[t][1]=0-e[t][1]:e[t][1]>10&&(e[t][1]=20-e[t][1]),e[t][2]<0?e[t][2]=0-e[t][2]:e[t][2]>10&&(e[t][2]=20-e[t][2]),Math.random()<=baseConfig.illPR&&(e[t][5].ill=!0),e[t][5].ill&&(tmpHealth=e[t][3],e[t][3]-=baseConfig.illLost),e[t][5].age<baseConfig.maxAge?e[t][5].age++:e[t][3]=0,e[t][3]<=0?e.splice(t,1):e[t][3]>baseConfig.childThreshold&&(e[t][3]-=baseConfig.childCost,e[t][5].child+=1,tmpPlan=Object.assign({},e[t][5]),tmpPlan.ill=!1,tmpPlan.child=0,tmpPlan.age=0,tmpPlan.except&&(tmpPlan.except={}),e.push([e[t][0],e[t][1],e[t][2],100,`${e[t][4]}_${e[t][5].child}`,tmpPlan]));for(let t=0;t<e.length;t++){for(let a=t+1;a<e.length;a++){let o=e[t][1]-e[a][1]>0?e[t][1]-e[a][1]:e[a][1]-e[t][1],s=e[t][2]-e[a][2]>0?e[t][2]-e[a][2]:e[a][2]-e[t][2];o+s>baseConfig.distance||(e[t][5].clear&&!(e[t][5].except&&e[t][5].except[e[a][4]]>0)?(e[a][5].ill=!1,e[t][3]-=baseConfig.clearCost):typeof e[a][5].except>"u"||(e[a][5].except[e[t][4]]=1),e[a][5].clear&&!(e[a][5].except&&e[a][5].except[e[t][4]]>0)?(e[t][5].ill=!1,e[a][3]-=baseConfig.clearCost):typeof e[t][5].except>"u"||(e[t][5].except[e[a][4]]=1))}e[t][3]+=e.length<baseConfig.balancePopulation?baseConfig.selfRecoveryIncrease:Math.round(baseConfig.selfRecoveryIncrease*baseConfig.balancePopulation/e.length),e[t][4].startsWith("A")?n.A.push(e[t]):e[t][4].startsWith("B")?n.B.push(e[t]):n.C.push(e[t])}return n}let dataAll=init(baseConfig.rateA,baseConfig.rateB,baseConfig.rateC);option={title:{show:!0,text:"仿《自私的基因》，傻瓜、斤斤计较者、骗子策略模拟",subtext:`假设有一种非常令人厌恶的蜱寄生在某种小鸟身上，而这种蜱又带有某种危险的病菌，所以必须尽早消灭这些蜱。
一般说来，小鸟用嘴梳理自己的羽毛时能够把蜱剔除掉，可是有一个鸟嘴达不到的地方——它的头顶。

A.傻瓜策略：无论如何都帮助对方清理蜱
B.骗子策略：无论如何都不帮助对方清理蜱
C.斤斤计较策略：只帮助从未欺骗过自己的小鸟清理蜱`},dataset:[{sourceHeader:!0,source:dataAll.A},{sourceHeader:!0,source:dataAll.B},{sourceHeader:!0,source:dataAll.C},{source:function(){let l=[];for(let n in dataAll)l.push([dataAll[n][0][0],dataAll[n].length]);return l}()}],grid:{top:"20%",bottom:"30%"},tooltip:{formatter:l=>l.seriesIndex===3?l.name+"："+l.data[1]:`${l.seriesName}<br />${l.data[4]}(${l.data[3]})<br />蜱：${l.data[5].ill}${typeof l.data[5].except>"u",""}`},legend:{right:"5%",top:"5%"},xAxis:{max:10},yAxis:{max:10},animation:!1,series:function(){let l=[];for(let n=0;n<3;n++)l.push({type:seriesType,datasetIndex:n,encode:{seriesName:0,x:1,y:2,value:3}});return l.push({type:"pie",datasetIndex:3,xAxisIndex:1,yAxisIndex:1,seriesLayoutBy:"column",center:["50%","85%"],startAngle:0,radius:[0,"20%"],itemStyle:{color:n=>n.name==="傻瓜"?"#5470c6":n.name==="骗子"?"#91cc75":"#fac858"},label:{formatter:"{b}：{d}%",alignTo:"edge"},labelLayout:{alignTo:"edge",draggable:!0}}),l}()};let timer=setInterval(function(){dataAll=emulate(dataAll),console.log("emulate"),myChart.setOption({dataset:[{source:dataAll.A},{source:dataAll.B},{source:dataAll.C},{source:function(){let l=[];for(let n in dataAll)dataAll[n].length>0&&l.push([dataAll[n][0][0],dataAll[n].length]);return l}()}]}),dataAll.A.length===0&&dataAll.B.length===0&&dataAll.C.length===0&&clearInterval(timer)},100);
