function renderItem(s,e){let t=e.coord([e.value(0),e.value(1)]),l=e.size([0,e.value(1)])[1],r=e.size([0,1])[0]*.3;return{type:"group",children:[{type:"rect",shape:{x:t[0]-r/2,y:t[1],width:r,height:l},style:e.style({fill:"#37d5ee"})}]}}option={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[100,100,100,100,100,100,80],type:"custom",renderItem}]};