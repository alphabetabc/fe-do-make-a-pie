function setSuperimposedColor(e){let l;if(typeof e=="string")l=e;else{let o=[];if(e.length!==1){o=e.map((t,r)=>({offset:r/(e.length-1),color:t}));const F=o.map((t,r)=>[{offset:+(r/o.length).toFixed(2),color:t.color},{offset:+((r+1)/o.length).toFixed(2)-.01===.99?1:+((r+1)/o.length).toFixed(2)-.01,color:t.color}]);o=[],F.forEach(t=>{t.forEach(r=>{o.push(r)})})}else o=[{offset:0,color:e[0]},{offset:1,color:e[0]}];l=new echarts.graphic.LinearGradient(0,1,0,0,o,!1)}return l}const source=[{value:220,color:["red","blue","#15DFBE"]},{value:182,color:["#D90FA4"]},{value:191,color:"#D90FA4"},{value:234,color:["red","#FFCC00"]},{value:290,color:["#FF0000","#FF7F00","#FFFF00","#00FF00","#00FFFF","#0000FF","#8B00FF"]},{value:330,color:["red"]},{value:310,color:["red"]}],data=source.map(({value:e,color:l})=>({value:e,itemStyle:{color:setSuperimposedColor(l),barBorderRadius:2}}));option={title:{text:"Awesome Chart"},xAxis:{data:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},yAxis:{},series:[{type:"bar",data}]};
