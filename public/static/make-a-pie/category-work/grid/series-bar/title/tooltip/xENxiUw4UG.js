option={title:{text:"Awesome Chart"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){var t=e[1];return t.name+"<br/>"+t.seriesName+" : "+t.value}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",splitLine:{show:!1},axisLabel:{show:!0,interval:0},axisTick:{alignWithLabel:!0},data:["Total","Rent","Utilities","Transportation","Meals","Other"]},yAxis:{type:"value",splitLine:{show:!0,lineStyle:{type:"dashed"}}},series:[{name:"背景",type:"bar",label:{show:!0,position:"top",color:"#333"},barGap:"-100%",itemStyle:{normal:{color:"transparent"}},data:[300,1200,1400,1700,2900]},{name:"Placeholder",type:"bar",stack:"Total",itemStyle:{borderColor:"transparent",color:"transparent"},emphasis:{itemStyle:{borderColor:"transparent",color:"transparent"}},data:[0,300,1200,1400,1700,0]},{name:"Life Cost",type:"bar",stack:"Total",label:{show:!0,position:"inside",color:"#fff"},itemStyle:{color:"#F35875",barBorderRadius:6},data:[300,900,200,300,1200,{value:2900,itemStyle:{color:"#F5A21D "}}]}]};
