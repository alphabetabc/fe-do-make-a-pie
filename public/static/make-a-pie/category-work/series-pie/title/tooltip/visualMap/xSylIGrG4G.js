option={backgroundColor:"#2c343c",title:{text:"Customized Pie",left:"center",top:20,textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},visualMap:{show:!1,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:130,name:"Planning"},{value:270,name:"真正工作"},{value:400,name:"你以为在工作实则没有的"}].sort(function(e,a){return e.value-a.value}),roseType:"radius",label:{normal:{textStyle:{color:"rgba(255, 255, 255, 0.3)"}}},labelLine:{normal:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"},smooth:.2,length:10,length2:20}},itemStyle:{normal:{color:"#c23531",shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"}},animationType:"scale",animationEasing:"elasticOut",animationDelay:function(e){return Math.random()*200}}]};