var itemStyle={normal:{opacity:.8,shadowBlur:10,shadowOffsetX:0,shadowOffsetY:0,shadowColor:"rgba(0, 0, 0, 0.5)"}};option={backgroundColor:"#404a59",color:["#dd4444"],legend:{y:"top",data:["形状"],textStyle:{color:"#fff",fontSize:16}},grid:{x:"10%",x2:150,y:"18%",y2:"10%"},xAxis:{type:"value",name:"装机",splitLine:{show:!1},axisLine:{lineStyle:{color:"#eee"}}},yAxis:{type:"value",max:150,name:"利用小时数",axisLine:{lineStyle:{color:"#eee"}},splitLine:{show:!1}},visualMap:[{left:"right",bottom:"10%",dimension:2,splitNumber:4,categories:[3,2.5,2,1.5],color:["#FFFFFF","#EEBCBB","#DC7573","#C23531"],textStyle:{color:"#fff"},outOfRange:{color:["#444","#444","#444","#444"]},controller:{outOfRange:{color:["#444","#444","#444","#444"]}}},{show:!1,inRange:{symbolSize:[60]},outOfRange:{symbolSize:[60]}}],series:[{name:"形状",type:"scatter",symbol:"circle",itemStyle,data:[["10",30,1.5]]},{name:"形状",type:"scatter",symbol:"rect",itemStyle,data:[["20",50,1.5]]},{name:"形状",type:"scatter",symbol:"triangle",itemStyle,data:[["30",70,2]]},{name:"形状",type:"scatter",symbol:"diamond",itemStyle,data:[["40",90,2]]},{name:"形状",type:"scatter",symbol:"roundRect",itemStyle,data:[["50",70,2.5]]},{name:"形状",type:"scatter",symbol:"pin",itemStyle,data:[["60",50,2.5]]},{name:"形状",type:"scatter",symbol:"arrow",itemStyle,data:[["70",50,3]]}]};