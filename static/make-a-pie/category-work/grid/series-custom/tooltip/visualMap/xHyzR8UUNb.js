var uploadedDataURL="/asset/get/s/data-1498994055008-rJJ5SUU4W.csv",stratify=d3.stratify().parentId(function(i){return i.id.substring(0,i.id.lastIndexOf("."))});d3.csv(uploadedDataURL,function(i,x){if(i)throw i;for(var l=stratify(x).sum(function(t){return t.value}).sort(function(t,e){return e.value-t.value}),f=0,h=l.descendants().map(function(t){return f=Math.max(f,t.depth),[t.value,t.depth,t.id]}),d=[],r=0;r<=f;r++)d.push({value:r,label:"Level "+r});function v(t,e){var o=t.context;o.layout||(d3.pack().size([e.getWidth()-2,e.getHeight()-2]).padding(3)(l),o.layout={},l.descendants().forEach(function(s){o.layout[s.id]={x:s.x,y:s.y,r:s.r,isLeaf:!s.children||!s.children.length}}));var c=e.value(2),a=o.layout[c],n="",u=e.font({fontSize:12,fontFamily:"Arial"});return a.isLeaf&&a.r>10&&(n=c.slice(c.lastIndexOf(".")+1).split(/(?=[A-Z][^A-Z])/g).join(`
`),n=echarts.format.truncateText(n,a.r,u,".")),{type:"circle",shape:{cx:a.x,cy:a.y,r:a.r},z2:e.value(1)*2,style:e.style({text:n,textFont:u,textPosition:"inside"}),styleEmphasis:e.style({text:n,textPosition:"inside",textFont:u,stroke:"rgba(0,0,0,0.5)",lineWidth:3})}}var y={xAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},tooltip:{},visualMap:{type:"piecewise",bottom:40,pieces:d,dimension:1,inRange:{color:["#006edd","#e0ffff"]}},series:{type:"custom",renderItem:v,encode:{tooltip:0,itemName:2},data:h}};myChart.setOption(y)});