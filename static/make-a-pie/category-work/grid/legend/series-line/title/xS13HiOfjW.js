var mainData={title:"湿度实时曲线 ( % ) RH",data:[{name:"湿度1",value:[[0,70],[1,69],[2,45],[3,41],[4,68],[5,92],[6,75],[7,60],[8,55],[9,45],[10,50],[11,80],[12,83]]},{name:"湿度2",value:[[0,20],[1,25],[2,35],[3,38],[4,45],[5,50],[6,40],[7,30],[8,40],[9,60],[10,55],[11,50],[12,42]]}]};function getTitle(e){return{text:e.title,left:"1%",top:"2%",textStyle:{color:"#000",fontWeight:"400"}}}function getLegend(e){return{bottom:"1%",right:"3%",selectedMode:!1,textStyle:{color:"#000"},data:[{name:"湿度1",icon:"bar"},{name:"湿度2",icon:"bar"}]}}option={backgroundColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255, 255, 255, 0.58)"},{offset:1,color:"#fff"}]},color:["#535d90","#1d3589"],title:getTitle(mainData),legend:{bottom:"1%",right:"3%",selectedMode:!1,textStyle:{color:"#000"},data:[{name:"湿度1",icon:"bar"},{name:"湿度2",icon:"bar"}]},grid:{left:"1%",right:"1%",top:"16%",bottom:"6%",containLabel:!0},xAxis:{type:"value",maxInterval:1,z:5,splitLine:{show:!0,lineStyle:{color:"#eee"}},axisLine:{lineStyle:{color:"#888"}},axisTick:{show:!1},axisLabel:{show:!1}},yAxis:[{type:"value",z:5,axisLine:{lineStyle:{color:"#888"}},splitLine:{show:!0,lineStyle:{color:"#eee"}},axisTick:{show:!0},axisLabel:{textStyle:{color:"#333"}}}],series:[{name:"湿度1",smooth:!0,type:"line",showSymbol:!1,lineStyle:{normal:{color:"#3f4b83",opacity:0}},areaStyle:{normal:{color:"#3f4b83",opacity:.9}},data:[[0,70],[1,69],[2,45],[3,41],[4,68],[5,92],[6,75],[7,60],[8,55],[9,45],[10,50],[11,80],[12,83]]},{name:"湿度2",smooth:!0,type:"line",showSymbol:!1,lineStyle:{normal:{color:"#1d3589",opacity:0}},areaStyle:{normal:{color:"#1d3589",opacity:.9}},data:[[0,20],[1,25],[2,35],[3,38],[4,45],[5,50],[6,40],[7,30],[8,40],[9,60],[10,55],[11,50],[12,42]]}]};