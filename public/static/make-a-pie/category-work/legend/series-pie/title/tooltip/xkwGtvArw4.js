var pieOption={title:"材料报验",data:{total:10,completed:2},color:"#43D5A0"},option={title:{text:pieOption.title,right:"32%",top:"0",textStyle:{color:pieOption.color,fontWeight:"500",fontSize:14}},tooltip:{show:!0,trigger:"item",confine:!0},legend:{data:[{name:"已完成验收总数",itemStyle:{color:pieOption.color}},{name:"总数",itemStyle:{color:"rgba(255,255,255,.65)"}}],top:"center",right:"2%",itemGap:10,orient:"lineHeight",itemWidth:8,itemHeight:8,formatter:function(e){var t=["{a|"+e+"}  |  ",e==="总数"?"{b|"+pieOption.data.total+"个}":"{b|"+pieOption.data.completed+"个}"];return t.join("")},textStyle:{color:"#eee",fontStyle:"normal",fontWeight:"normal",fontFamily:"sans-serif",fontSize:12,rich:{a:{fontSize:14,color:"rgba(255,255,255,.8)"},b:{fontSize:14,color:"#fff"}}}},series:[{type:"pie",radius:["45%","70%"],center:["50%","50%"],labelLine:{normal:{show:!1}},emphasis:{label:{show:!1,fontSize:14}},data:[{name:"总数",value:pieOption.data.total-pieOption.data.completed,showValue:pieOption.data.total,itemStyle:{normal:{color:"#4c6370"}},label:{show:!1}},{name:"已完成验收总数",showValue:pieOption.data.completed,value:pieOption.data.completed>0?pieOption.data.completed:"",itemStyle:{normal:{color:pieOption.color}},label:{show:!0,position:"center",color:pieOption.color,fontSize:12,formatter:function(e){if(!pieOption.data.completed||!pieOption.data.total)return"0%";var t=pieOption.data.completed/pieOption.data.total*100;return t.toString().indexOf(".")>0&&t.toString().indexOf(".")+2<t.toString().length?t.toFixed(2)+"%":t+"%"}}}],tooltip:{formatter:function(e){return e.name+": "+e.data.showValue}}}]};