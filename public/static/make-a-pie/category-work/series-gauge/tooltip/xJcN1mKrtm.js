option={backgroundColor:"#313b5a",tooltip:{show:!0,formatter:"{a} <br/>{b} : {c}℃",backgroundColor:"rgba(50,50,50,0.7)",trigger:"item",borderColor:"#333",borderWidth:0,padding:0},grid:{right:120,left:1050,top:100,bottom:170,borderWidth:1},xAxis:{show:!1,type:"category",data:["Mon"]},yAxis:{show:!1,type:"value"},series:[{name:"压力",type:"gauge",radius:"80%",min:0,max:1e3,splitNumber:10,startAngle:225,endAngle:-45,data:[{value:255,name:"压力(Pa)"}],legend:{padding:0,margin:0},detail:{formatter:"{value} Pa",textStyle:{fontSize:16}},title:{show:!0,color:"#fff",fontSize:14},axisLine:{lineStyle:{width:20,color:[[.2,"#32d3eb"],[.4,"#60acfc"],[.6,"#5bc49f"],[.8,"#feb64d"],[1,"#ff7b7b"]]}}},{type:"bar",showBackground:!0,barWidth:20,data:[16],backgroundStyle:{color:"rgba(220, 220, 220, 0.3)"},itemStyle:{normal:{color:"#5bc49f",label:{show:!0,position:"top",textStyle:{color:"#fff",fontSize:16},formatter:function(e){return`${e.value}℃`}}}}},{name:"辅助",type:"bar",stack:"总量",data:[100],itemStyle:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{itemStyle:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}}}]};
