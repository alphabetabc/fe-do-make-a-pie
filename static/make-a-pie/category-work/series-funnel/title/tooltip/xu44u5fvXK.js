var datas=[{value:1.58,name:"AAA"},{value:4.62,name:"AA"},{value:24.24,name:"A"},{value:17.17,name:"BBB"},{value:10.41,name:"BB"},{value:9.1,name:"B"},{value:5.17,name:"CCC"},{value:2.59,name:"CC"},{value:25.13,name:"C"}];datas=datas.map((e,t)=>(t%2==0?e.label={position:"right"}:e.label={position:"left"},e)),console.log(datas),option={backgroundColor:"#141845",title:{text:"用户资信分布",textStyle:{color:"#fff"}},color:["#8B3DFA","#BB33FF","#F927FF","#EEE831","#96ED31","#69ED69","#0066FF","#3385FF","#00D5FF"],tooltip:{trigger:"item",formatter:"{b} : {c}%"},calculable:!0,series:[{name:" ",type:"funnel",left:"center",right:"center",top:"6%",bottom:"10%",width:"80%",min:0,max:100,minSize:"0%",maxSize:"100%",sort:"none",gap:2,orient:"vertical",labelLine:{normal:{length:100,lineStyle:{width:1,type:"solid"}}},itemStyle:{normal:{borderColor:"#fff",borderWidth:1}},label:{normal:{formatter:function(e){return e.name+" : "+e.value+"%"},position:"right"},emphasis:{textStyle:{fontSize:20}}},data:datas}]};
