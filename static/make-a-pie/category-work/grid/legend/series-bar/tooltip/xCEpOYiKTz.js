option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{icon:"circle",orient:"horizontal",itemGap:40,itemWidth:14,itemHeight:14,textStyle:{fontSize:14,color:"#858585",fontWeight:400,padding:[4,0,0,0]},data:["A","B","P","E"]},color:["#7E84A3","#FF914C","#5189F8","#3FC7BB"],grid:{left:"3%",right:"0",bottom:"5%",containLabel:!1},xAxis:{type:"category",data:["1","2","3","4","5","6","7","8","9","10","11","12"],axisTick:{show:!1},axisLabel:{show:!0},axisLine:{show:!1}},yAxis:{type:"value",splitLine:{lineStyle:{color:"#F3F4F5"}}},series:[{name:"E",type:"bar",stack:"total",label:{show:!0,color:"#FFFFFF",formatter:function(e){return e.value?e.seriesName:""}},itemStyle:{borderRadius:[0,0,4,4]},barWidth:20,emphasis:{focus:"series"},data:[320,80,301,334,390,330,320,390,330,320,390,390]},{name:"P",type:"bar",stack:"total",label:{show:!0,color:"#FFFFFF",formatter:"{a}"},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210,302,301,334,390,330]},{name:"B",type:"bar",stack:"total",label:{show:!0,color:"#FFFFFF",formatter:"{a}"},emphasis:{focus:"series"},data:[18,66,191,234,290,330,310,182,191,234,290,330]},{name:"A",type:"bar",stack:"total",label:{show:!0,color:"#FFFFFF",formatter:"{a}"},itemStyle:{borderRadius:[4,4,0,0]},emphasis:{focus:"series"},data:[150,212,201,154,190,330,410,182,191,234,290,330]}]};