var data=[[0,0,59,"不及格",3],[1,60,69,"及格",15],[2,70,79,"中等",12],[3,80,89,"良好",22],[4,90,100,"优秀",7]],colorList=["#c0504d","#e46c0b","#4f81bd","#604a7b","#9bbb59","#948a54"];option={title:{text:"成绩demo",left:"center"},xAxis:{},yAxis:{},tooltip:{},series:[{type:"custom",data,renderItem:function(l,e){var t=e.value(4),a=e.coord([e.value(1),t]),r=e.size([e.value(2)-e.value(1),t]);return{type:"rect",shape:{x:a[0],y:a[1],width:r[0],height:r[1]},style:{fill:colorList[e.value(0)]}}},encode:{x:[1,2],y:[4],tooltip:4,itemName:3}}]};