var data=[{name:"本周事件数量",value:120},{name:"本周变更数量",value:10},{name:"本周问题数量",value:5}].sort((e,a)=>a.value-e.value),lines=[35,-100,-150],colorList=[["#00ffb4","#00f0ff"],["#00f0ff","#0060ff"],["#00f0ff","#ffd200"]];data=data.map((e,a)=>({name:e.name,value:Math.log(e.value),val:e.value,itemStyle:{borderColor:"#000",borderWidth:3,color:{type:"line",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:colorList[a][0]},{offset:1,color:colorList[a][1]}]}},labelLine:{length:lines[a],length2:0,lineStyle:{color:"#fff"}}}));var option={backgroundColor:"#000",series:[{type:"pie",roseType:"area",clockwise:!1,startAngle:-30,data,label:{fontSize:16,color:"#fff",align:"center",formatter:function(e){return"{a|"+e.data.val+`}
`+e.name},rich:{a:{align:"center",fontSize:16,color:"#ffcc44"}}}}]};
