for(var getname=["SCI","SSCI","EI","ISTP","AHCI","ISSHP","其他"],getvalue=[0,2700,3397,3541,2e3,2233,3397],getamount=[60.3,40,75.4,65.5,22.3,15.6,75.4],getorderCount=[0,5e3,11e3,14e3,15e3,2e4,20121],datas=[],i=0;i<getname.length;i++)datas.push({name:getname[i],value:getvalue[i],amount:getamount[i],orderCount:getorderCount[i]});let packedDatas=packDatas(datas),left=!1,top=!1,priority="top",config={ecBoxId:"chart-panel",lineColor:"#fff",L1:{time:.3,long:40},L2:{time:.3,long:40},text:{time:.5,text:"",font:"14px Arial",color:"#fff",padding:[10,10],width:120,height:60,lineHeight:24,backgroundColor:"rgba(50, 50, 50, 0.8)"}};option={grid:{top:60,bottom:40,left:50,right:30},legend:{data:["2010","2020"],type:"scroll",right:"15",top:"10",itemGap:25,itemWidth:14,itemHeight:14,textStyle:{fontSize:"13",color:"#656565"}},tooltip:{trigger:"item",triggerOn:"click",backgroundColor:"transparent",alwaysShowContent:!0,position(a){return getPosOrSize("pos",a)},formatter(a,t,e){canvasAnimation(a);let l=getPosOrSize("size");return`<canvas id="tCanvas" width="${l.width}" height="${l.height}">123</canvas>`}},xAxis:{splitLine:{show:!1},scale:!0,type:"value",name:"人均发表篇次",nameTextStyle:{color:"#666666",fontSize:13,padding:[0,0,30,-80]},axisLabel:{formatter:function(a){if(num=a,num&&num!="undefined"&&num!="null"){let t=num;return t=t.toString(),t=t.replace(/,/gi,""),t}else return num},color:"#656565",textStyle:{fontSize:13}},axisLine:{lineStyle:{color:"#333333"}},axisTick:{show:!1}},yAxis:{name:"人均发表篇次",nameTextStyle:{color:"#666666",fontSize:13,padding:[0,0,0,70]},axisLabel:{formatter:function(a){if(num=a,num&&num!="undefined"&&num!="null"){let t=num;return t=t.toString(),t=t.replace(/,/gi,""),t}else return num},color:"#656565",textStyle:{fontSize:13}},axisLine:{lineStyle:{color:"#333333"}},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(209,209,209,.25)"}}},series:[{name:"2010",symbolSize:function(a){return a[1]/5},itemStyle:{normal:{color:"#9CC8FF",borderColor:"#4B95F3",borderWidth:2}},data:packedDatas,type:"scatter"}]};const canvasAnimation=a=>{setTimeout(function(){config.text.text=`地点：${a.name}
数量：${a.value[2]}`,new myTooltip("tCanvas",config)},0)},getPosOrSize=(a,t)=>{let e=config.L1.long*Math.sin(Math.PI/4),l=e+config.L2.long+config.text.width,s=e+config.text.height/2;if(a==="size")return config.width=l,config.height=s,{width:l,height:s};{let n=document.getElementById(config.ecBoxId),o=n.offsetWidth,d=n.offsetHeight,h=t[0],r=t[1];return left=!1,h+l>=o/1.2&&(h=h-l-5,left=!0),priority==="top"?(top=!0,r=r-s-5,r<=0&&(r=t[1],top=!1),[h,r]):(top=!1,r+s>=d&&(r=r-s-5,top=!0),[h,r])}};class myTooltip{constructor(t,e){this.config=e,this.totalTime=0,this.stage=new createjs.Stage(t),this.timeline=new TimelineMax({repeat:0}),this.g=new createjs.Graphics,this.lineShape=new createjs.Shape(this.g),this.textShape=new createjs.Shape,this.stage.addChild(this.lineShape,this.textShape),this.init(),this.begin(),this.update()}init(){this.start=[0,0],left&&(this.start[0]=this.config.width),top&&(this.start[1]=this.config.height)}begin(){this.L1(),this.L2(),this.addText()}L1(){let t=this,e=t.config,l=new TimelineMax,s={s:0},n=e.L1.long*Math.sin(Math.PI/4);left?top?this.L1End=[t.start[0]-n,t.start[1]-n]:this.L1End=[t.start[0]-n,t.start[1]+n]:top?this.L1End=[n,t.start[1]-n]:this.L1End=[n,n],l.to(s,e.L1.time,{s:1,onUpdate(){let o=s.s;left?top?t.g.c().s(e.lineColor).mt(...t.start).lt(t.start[0]-n*o,t.start[1]-n*o):t.g.c().s(e.lineColor).mt(...t.start).lt(t.start[0]-n*o,t.start[1]+n*o):top?t.g.c().s(e.lineColor).mt(...t.start).lt(n*o,t.start[1]-n*o):t.g.c().s(e.lineColor).mt(...t.start).lt(n*o,n*o),t.update()}}),this.timeline.add(l,this.totalTime),this.totalTime+=e.L1.time}L2(){let t=this,e=t.config,l=new TimelineMax,s={s:0};l.to(s,e.L2.time,{s:1,onUpdate(){let n=s.s;left?t.g.c().s(e.lineColor).mt(...t.start).lt(...t.L1End).lt(t.L1End[0]-e.L2.long*n,t.L1End[1]):t.g.c().s(e.lineColor).mt(...t.start).lt(...t.L1End).lt(t.L1End[0]+e.L2.long*n,t.L1End[1]),t.update()}}),this.timeline.add(l,this.totalTime),this.totalTime+=e.L2.time}addText(){let t=this,e=t.config,l=new TimelineMax,s={s:0},n=[t.L1End[0]+e.L2.long,t.L1End[1]];left&&(n=[t.L1End[0]-e.L2.long,t.L1End[1]]),l.to(s,e.text.time,{s:1,onStart(){let o=0,d=0;left?o=n[0]-e.text.width:o=n[0],t.g.c().s(e.lineColor).mt(...t.start).lt(...t.L1End).lt(...n),t.text=new createjs.Text(e.text.text,e.text.font,e.text.color),t.text.alpha=0,t.text.lineHeight=e.text.lineHeight,t.text.x=o+e.text.padding[0],t.text.y=n[1]-e.text.height/2+e.text.padding[1],t.stage.addChild(t.text),t.textShape.graphics.c().f(e.text.backgroundColor).rr(o,n[1]-e.text.height/2,e.text.width,e.text.height,5),t.textShape.alpha=0,t.update()},onUpdate(){t.text.alpha=s.s,t.textShape.alpha=s.s,t.update()}}),this.timeline.add(l,this.totalTime)}update(){this.stage.update()}}let EC=echarts.getInstanceByDom(document.getElementById("chart-panel"));var index=0;setInterval(a=>{EC.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:index}),index++,index>=data.length&&(index=0)},3e3),window.addEventListener("resize",a=>{let t=document.getElementById("tCanvas");t&&(t.style.display="none")});function packDatas(a){return a.map(e=>{let l=e.name,s=e.orderCount,n=e.amount,o=e.value;return[s,n,l,o]})}
