let color=["#2ec7c9","#b6a2de","#5ab1ef","#F5BF3C","#DC6255"],data=[{name:"事项1",value:20},{name:"事项2",value:30},{name:"事项3",value:60},{name:"事项4",value:120},{name:"事项5",value:120}],max=Math.max(...data.map(a=>a.value)),sum=eval(data.map(a=>a.value).join("+"));option={backgroundColor:"#000",angleAxis:{show:0,clockwise:!1,max:max+max/3},radiusAxis:{type:"category",data:data.map(a=>a.name+":("+(a.value/sum*100).toFixed(1)+"%)"),z:10,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,color:"#fff",align:"left",margin:-10}},polar:{show:0,center:["50%","50%"]},series:[{type:"bar",data:data.map((a,e)=>({value:a.value,name:a.name,itemStyle:{color:color[e]}})),label:{show:!0,position:"top"},barWidth:10,coordinateSystem:"polar"}]};
