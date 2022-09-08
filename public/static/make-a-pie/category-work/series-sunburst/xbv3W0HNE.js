var cg=["汽油","汽油","柴油","柴油"],cg1=["汽油1","汽油2","柴油1","柴油2"],cd=[90,80,60,25],color=["#61A5E8","#7ECF51","#FCCE10","#223273","#12c2c2","#E16757","#9570E5","#605FF0","#F3A43B","#60C0DD","#D7504B","#C6E579","#F4E001","#F0805A","#26C0C0"];function unique(t){for(var n=[],e=0;e<t.length;e++)n.indexOf(t[e])==-1&&n.push(t[e]);return n}for(var c=[],c=unique(cg),c3=[],m=0;m<c.length;m++){te=[];for(var i=0;i<cg1.length;i++)cg[i]==c[m]&&te.push({name:cg1[i],label:{align:"left",position:"inside",formatter:`{b}
{c}`},itemStyle:{color:color[i]},value:cd[i]});c3.push({name:c[m],label:{align:"left",position:"inside",formatter:`{b}
{c}`},children:te})}option={series:{radius:["20%","90%"],type:"sunburst",sort:null,name:"销量",highlightPolicy:"none",data:c3,label:{formatter:`{b}
{c}`,fontSize:20},emphasis:{label:{formatter:`{b}
{c}`}}}};
