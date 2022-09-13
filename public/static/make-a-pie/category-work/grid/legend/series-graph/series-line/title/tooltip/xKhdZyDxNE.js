var nodesnum=360,xiadu=1,infectivity=.2,cureday=4,dierate=.2,shequsize=90,density=.35;$(`
    <div class="input-item chuan" @click="chuanbo">点击进行传播</div>
    <div class="text">传染性:0.2</div>
<input class="slider" type="range" min="0" max="0.5" value="0.2" step="0.01" style="">
<div class="textcure">潜伏期天数:4</div>
<input class="slidercure" type="range" min="2" max="30" value="4" step="1" style="">
<div class="textdie">致死率:0.2</div>
<input class="sliderdie" type="range" min="0" max="1" value="0.2" step="0.01" style="">
<div class="r0">估计R0:</div>
`).appendTo($("#chart-panel")),$(".input-item").css({position:"absolute",top:"180px",left:"10px",display:"-ms-flexbox",display:"flex","-ms-flex-wrap":"wrap","flex-wrap":"wrap","-ms-flex-align":"center","align-items":"center",width:"8rem",height:"2rem"}),$(".chuan").css({display:"-webkit-box",display:"-ms-flexbox",display:"flex","-webkit-box-pack":"center","-ms-flex-pack":"center","justify-content":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center",border:"1px solid #ced4da","border-radius":".25rem","background-color":"#e9ecef",color:"#495057","text-align":"center",cursor:"pointer"}),$(".slider").css({position:"absolute",top:"60px",left:"0.5rem",display:"-ms-flexbox",display:"flex","-ms-flex-wrap":"wrap","flex-wrap":"wrap","-ms-flex-align":"center","align-items":"center",width:"6rem",height:"2rem"}),$(".text").css({position:"absolute",top:"60px",left:"7rem",display:"-ms-flexbox",display:"flex","-ms-flex-wrap":"wrap","flex-wrap":"wrap","-ms-flex-align":"center","align-items":"center",width:"6rem",height:"2rem"}),$(".slidercure").css({position:"absolute",top:"100px",left:"0.5rem",display:"-ms-flexbox",display:"flex","-ms-flex-wrap":"wrap","flex-wrap":"wrap","-ms-flex-align":"center","align-items":"center",width:"6rem",height:"2rem"}),$(".textcure").css({position:"absolute",top:"100px",left:"7rem",display:"-ms-flexbox",display:"flex","-ms-flex-wrap":"wrap","flex-wrap":"wrap","-ms-flex-align":"center","align-items":"center",width:"10rem",height:"2rem"}),$(".sliderdie").css({position:"absolute",top:"140px",left:"0.5rem",display:"-ms-flexbox",display:"flex","-ms-flex-wrap":"wrap","flex-wrap":"wrap","-ms-flex-align":"center","align-items":"center",width:"6rem",height:"2rem"}),$(".textdie").css({position:"absolute",top:"140px",left:"7rem",display:"-ms-flexbox",display:"flex","-ms-flex-wrap":"wrap","flex-wrap":"wrap","-ms-flex-align":"center","align-items":"center",width:"10rem",height:"2rem"}),$(".r0").css({position:"absolute",top:"5px",left:"12rem",display:"-ms-flexbox",display:"flex","-ms-flex-wrap":"wrap","flex-wrap":"wrap","-ms-flex-align":"center","align-items":"center",width:"10rem",height:"2rem"});for(var nodes=[{name:"0",category:1}],nodeindexes=[],i=1;i<nodesnum;i++)nodes.push({name:i.toString(),category:1}),nodeindexes.push(i);var links=[],items=[];function shequ(e,n,o,l){for(var s=o.length,a=0;a<s;a++)for(var r=a;r<s;r++)Math.random()<l*l*a/s*r/s&&a!=r&&(e.push({source:o[a].name,target:o[r].name}),n.push(o[a].name),n.push(o[r].name));return n}for(var j=0;j<nodesnum;j+=shequsize){for(var start=Math.max(j-Math.floor(.1*shequsize),0),end=Math.min(j+shequsize+Math.floor(.1*shequsize),nodesnum),shequ1node=[],i=start;i<end;i++)shequ1node.push(nodes[i]);items=shequ(links,items,shequ1node,density)}for(var i=0;i<nodesnum;i++)items.indexOf(i.toString())==-1&&(nodeindexes.pop(i),links.push({source:i,target:nodeindexes[Math.floor(Math.random()*nodeindexes.length)]}));nodes[Math.floor(Math.random()*nodesnum)].category=0;var r0=(2*cureday*infectivity*links.length/nodes.length).toFixed(2);$(".r0").text("估计R0:"+r0),$(".slider").change(function(){infectivity=this.value,$(".text").text("传染性:"+infectivity);var e=(2*cureday*infectivity*links.length/nodes.length).toFixed(2);$(".r0").text("估计R0:"+e)}),$(".slidercure").change(function(){cureday=this.value,$(".textcure").text("潜伏期天数:"+cureday);var e=(2*cureday*infectivity*links.length/nodes.length).toFixed(2);$(".r0").text("估计R0:"+e)}),$(".sliderdie").change(function(){dierate=this.value,$(".textdie").text("致死率:"+dierate);var e=(2*cureday*infectivity*links.length/nodes.length).toFixed(2);$(".r0").text("估计R0:"+e)});function unique(e){return Array.from(new Set(e))}var viruscount=1,viruscounts=[[1,viruscount]],viruscounts_new=[[1,0]],cures=[[1,0]],dies=[[1,0]];option={title:[{text:"中二病患者数：0",subtext:"你还有"+xiadu+"次下毒机会（点击目标下毒）"},{text:`说明:
2020年的某一天
未知疾病突然出现
迅速在宅男之间传播
这一传说中的疾病被命名为:中二病
每个点表示一个宅男
点之间的连线代表宅男之间二次元的灵魂交流

参数：
传染性：每天交流传染中二病的概率
潜伏期天数：潜伏期内会传染，潜伏期结束后
隔离治疗，并判断治愈还是死亡

怎么玩:
你可以前期疯狂传染，后期调整参数防控
如何控制传播？
1.减少人与人的接触（图的边密度减少）
2.戴口罩降低传染性（有交流就传染的概率降低）
3.早发现早隔离避免潜伏期内传播（潜伏期天数减少）

实现群体免疫：
在传播到后期大部分人都治愈时（有抗体）再下毒
虽然传染性强但也传播不开了`,textStyle:{fontSize:12},top:"bottom",left:"left"}],grid:[{gridindex:1,left:"35%",right:"3%",top:"5%",bottom:"75%",containLabel:!0}],xAxis:[{name:"天",type:"value",show:!0,min:0,max:10,gridIndex:0}],yAxis:[{name:"人数",type:"value",show:!0,gridIndex:0}],tooltip:{},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",legend:[{data:["感染者","未感染","治愈","死亡"],orient:"vertical",x:"0%",y:"220px"},{data:["中二病总患者数","中二病新增患者数","中二病治愈数","中二病死亡数"],x:"70%",y:"0%"}],series:[{type:"graph",name:"宅男",layout:"force",symbolSize:12,roam:!0,top:"24%",label:{fontSize:12,show:!1},edgeSymbol:["circle","circle"],edgeSymbolSize:[4,4],edgeLabel:{fontSize:10},categories:[{name:"感染者"},{name:"未感染"},{name:"治愈"},{name:"死亡"}],data:nodes,links,lineStyle:{opacity:.9,width:1.5,curveness:0},draggable:!0,force:{repulsion:20,gravity:.12,edgeLength:1}},{xAxisIndex:0,yAxisIndex:0,name:"中二病总患者数",type:"line",showSymbol:!1,data:viruscounts,itemStyle:{normal:{color:"#C23531"}}},{xAxisIndex:0,yAxisIndex:0,name:"中二病新增患者数",type:"line",showSymbol:!1,data:viruscounts,itemStyle:{normal:{color:"#2f4554"}}},{xAxisIndex:0,yAxisIndex:0,name:"中二病治愈数",type:"line",showSymbol:!1,data:viruscounts,itemStyle:{normal:{color:"#61A0A8"}}},{xAxisIndex:0,yAxisIndex:0,name:"中二病死亡数",type:"line",showSymbol:!1,data:viruscounts,itemStyle:{normal:{color:"#D48265"}}}]},myChart.setOption(option);var t=1,score=0,gameend=0;$(".chuan").click(function(){score+=parseInt(infectivity*100);var e=[];for(eachnodeinfo in nodes)nodes[eachnodeinfo].category==0&&e.push(nodes[eachnodeinfo].name);var n=[];for(linkinfo in links)e.indexOf(links[linkinfo].source.toString())!=-1&&Math.random()<infectivity&&nodes[links[linkinfo].target].category==1&&n.push(links[linkinfo].target),e.indexOf(links[linkinfo].target.toString())!=-1&&Math.random()<infectivity&&nodes[links[linkinfo].source].category==1&&n.push(links[linkinfo].source);for(virusitem_new_id in n)virusitem_new_id=n[virusitem_new_id],e.push(virusitem_new_id.toString());e=unique(e);for(nodes_id in nodes)e.indexOf(nodes[nodes_id].name.toString())!=-1&&(nodes[nodes_id].category=0,nodes[nodes_id].infecttime||(nodes[nodes_id].infecttime=t));for(nodes_id in nodes)t-nodes[nodes_id].infecttime>cureday&nodes[nodes_id].category==0&&(Math.random()<dierate?nodes[nodes_id].category=3:nodes[nodes_id].category=2);cure=0,die=0;for(nodes_id in nodes)nodes[nodes_id].category==2&&(cure+=1),nodes[nodes_id].category==3&&(die+=1);t+=1,viruscounts.push([t,e.length]),viruscounts_new.push([t,e.length-viruscount]),cures.push([t,cure]),dies.push([t,die]),optionchange={title:[{text:"中二病患者数："+e.length,subtext:"你还有"+xiadu+"次下毒机会（点击目标下毒）"}],xAxis:[{max:2+t}],series:[{data:nodes},{data:viruscounts},{data:viruscounts_new},{data:cures},{data:dies}]},myChart.setOption(optionchange),viruscount==0&xiadu==0&gameend==0&&(alert("游戏结束，你的得分是："+(score*density*1e3/t/(cure+die)).toFixed(2)+"分"),gameend=1),viruscount=e.length}),myChart.on("click",function(e){if(e.dataType=="node"&&xiadu>0){xiadu-=1;var n=[];for(eachnodeinfo in nodes)nodes[eachnodeinfo].category==0&&n.push(nodes[eachnodeinfo].name);nodes[e.name].category=0;for(eachnodeinfo in nodes)nodes[eachnodeinfo].category==0&&n.push(nodes[eachnodeinfo].name);n=unique(n);for(nodes_id in nodes)n.indexOf(nodes[nodes_id].name.toString())!=-1&&(nodes[nodes_id].category=0,nodes[nodes_id].infecttime=t);optionchange={title:[{text:"中二病患者数："+n.length,subtext:"你还有"+xiadu+"次下毒机会（点击目标下毒）"}],xAxis:[{max:2+t}],series:[{data:nodes}]},myChart.setOption(optionchange),viruscount=n.length}});