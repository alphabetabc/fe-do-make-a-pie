var getOffsetW=function(i,e,t,l){var s;return s==null&&i>=e&&(s=0),s==null&&(s=(t-l)/2-i/e*(t-l)/2),s},option={title:{text:"自定义渲染-容器分层展示"},tooltip:{},xAxis:{min:0,max:20,offset:20,axisLabel:{show:!1},splitLine:{show:!1},axisTick:{show:!1,length:20},axisLine:{show:!1}},yAxis:{min:0,max:10,offset:20,splitLine:{show:!1},axisTick:{show:!0,length:20},axisLine:{show:!1}},series:[{z:1,type:"custom",name:"容器",itemStyle:{color:"#eeeeee",opacity:1,borderWidth:4,borderColor:"#cccccc"},emphasis:{itemStyle:{color:"#cccccc",opacity:1,borderWidth:4,borderColor:"#000000"}},encode:{x:[0],y:[1],seriesName:[2]},data:[[20,10,"容器"]],renderItem:function(i,e){var t=20,l=2,s=10,o=getOffsetW(0,l,t,s),a=0,r=t,f=0,c=10,n=[[a+o,0],[0,2],[0,c],[r,c],[r,2],[r-o,f]].map(e.coord),p=e.style();return{type:"polygon",shape:{points:n},style:e.style(),styleEmphasis:e.styleEmphasis()}}},{z:2,type:"custom",tooltip:{formatter:function(i){return`${i.seriesName}-${i.data.toString()}`}},name:"物资",itemStyle:{color:"#000000",opacity:.5},emphasis:{itemStyle:{color:"#00ff00",opacity:.3}},encode:{x:[0],y:[1,2],seriesName:[3,4]},data:[[20,0,1.5,"分区1","#ff0000"],[20,1.5,4,"分区2","#00ff00"],[20,4,8,"分区3","#0000ff"],[20,8,9,"分区4","#ffff00"]],renderItem:function(i,e){var t=20,l=2,s=10,o=e.value(1),a=e.value(2),r=0,f=t,c=getOffsetW(o,l,t,s),n=getOffsetW(a,l,t,s),p=e.value(3),v=e.value(4),y=e.coord([t,(o+a)/2]);y[1]-=7;var m;return o<2&&a>2?m=[[r+c,o],[0,2],[r+n,a],[f-n,a],[f,2],[f-c,o]].map(e.coord):m=[[r+c,o],[r+n,a],[f-n,a],[f-c,o]].map(e.coord),{type:"group",children:[{type:"text",style:{opacity:.3,text:p,x:y[0]+25,y:y[1],textAlign:"center",font:'12px "microsoft yahei", sans-serif'},styleEmphasis:{opacity:1}},{type:"polygon",shape:{points:m},style:Object.assign({},e.style(),{fill:v,opacity:.3}),styleEmphasis:Object.assign({},e.styleEmphasis(),{fill:v,opacity:.6})}]}}}]};
