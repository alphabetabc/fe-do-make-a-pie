let bgColor="#fff",title="总量",color=["#0E7CE2","#FF8352","#E271DE","#F8456B","#00FFFF","#4AEAB0"],echartData=[{name:"A类",value:"3720"},{name:"B类",value:"2920"},{name:"C类",value:"2200"},{name:"D类",value:"1420"}],formatNumber=function(e){let t=/(?=(\B)(\d{3})+$)/g;return e.toString().replace(t,",")},total=echartData.reduce((e,t)=>e+t.value*1,0);option={backgroundColor:bgColor,color,title:[{text:"{name|"+title+`}
{val|`+formatNumber(total)+"}",top:"center",left:"center",textStyle:{rich:{name:{fontSize:14,fontWeight:"normal",color:"#666666",padding:[10,0]},val:{fontSize:32,fontWeight:"bold",color:"#333333"}}}},{text:"单位：个",top:20,left:20,textStyle:{fontSize:14,color:"#666666",fontWeight:400}}],series:[{type:"pie",radius:["45%","60%"],center:["50%","50%"],data:echartData,hoverAnimation:!1,itemStyle:{normal:{borderWidth:2}},labelLine:{normal:{length:20,length2:120,lineStyle:{color:"#e6e6e6"}}},label:{normal:{show:!1,formatter:e=>"{icon|●}{name|"+e.name+"}{value|"+formatNumber(e.value)+"}",padding:[0,-100,25,-100],rich:{icon:{fontSize:16},name:{fontSize:14,padding:[0,10,0,4],color:"#666666"},value:{fontSize:18,fontWeight:"bold",color:"#333333"}}}}}]};
