var valueProccess=50;colors=["#389af4","#dfeaff"],option={xAxis:[{type:"category",show:!1,data:["2019","2020"]}],yAxis:{type:"value",show:!1},series:[{name:"",type:"pie",clockWise:!1,radius:[120,150],itemStyle:{normal:{color:colors[0],shadowColor:colors[0],shadowBlur:0,label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,data:[{value:valueProccess,label:{normal:{formatter:function(e){return e.value+"%"},position:"center",show:!0,textStyle:{fontSize:"20",fontWeight:"bold",color:colors[0]}}}},{value:100-valueProccess,name:"invisible",itemStyle:{normal:{color:colors[1]},emphasis:{color:colors[1]}}}]},{name:"直接访问",type:"bar",barWidth:"10%",data:[{name:"低能见度1",value:"70",itemStyle:{color:"#1F78B4"}},{name:"低能见度2",value:"50",itemStyle:{color:"#A6CEE3"}}]}]};
