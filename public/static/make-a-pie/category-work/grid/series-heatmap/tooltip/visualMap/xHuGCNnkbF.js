var yNames=["1月","2月","3月","4月","5月","6月"],xNames=["火炬区","南朗镇","小榄镇","民众镇","横栏镇","古镇镇","港口镇","三乡镇","坦洲镇","神湾镇"],data=[[0,0,1],[1,0,80],[2,0,1],[3,0,40],[4,0,40],[5,0,40],[6,0,40],[7,0,80],[8,0,40],[9,0,60],[0,1,80],[1,1,10],[2,1,80],[3,1,132],[4,1,60],[5,1,2],[6,1,60],[7,1,80],[8,1,60],[9,1,45],[0,2,32],[1,2,91],[2,2,120],[3,2,30],[4,2,70],[5,2,80],[6,2,80],[7,2,2],[8,2,3],[9,2,1],[0,3,47],[1,3,32],[2,3,20],[3,3,130],[4,3,60],[5,3,70],[6,3,80],[7,3,90],[8,3,110],[9,3,40],[0,4,91],[1,4,38],[2,4,2],[3,4,5],[4,4,66],[5,4,21],[6,4,60],[7,4,10],[8,4,90],[9,4,28],[0,5,22],[1,5,111],[2,5,110],[3,5,39],[4,5,40],[5,5,90],[6,5,50],[7,5,60],[8,5,2],[9,5,15]];option={tooltip:{position:"top",formatter:function(e){return e.name+yNames[e.data[1]]+"用电总量:"+e.value[2]}},grid:{height:"50%"},backgroundColor:"black",xAxis:{type:"category",data:["火炬区","南朗镇","小榄镇","民众镇","横栏镇","古镇镇","港口镇","三乡镇","坦洲镇","神湾镇"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#A3C7E7",fontSize:10},splitLine:{show:!0,lineStyle:{color:"black",width:10}}},yAxis:{type:"category",data:["1月","2月","3月","4月","5月","6月"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#A3C7E7",fontSize:10},splitLine:{show:!0,lineStyle:{color:"black",width:10}}},visualMap:{min:1,max:132,calculable:!0,orient:"horizontal",left:"center",bottom:"5%",inRange:{color:["#C0F1F4","#60BDCB","#316870","#EA7552"]},textStyle:{color:"#A3C7E7"}},series:[{name:"镇区用电总量",type:"heatmap",data,zlevel:-1}]};