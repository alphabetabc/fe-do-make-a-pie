const{random,PI,cos,sin}=Math,val=random()*100,angle=PI*val/50/2,pointStart=[.5-.5*cos(angle)*sin(angle),.5+.5*cos(angle)*cos(angle)],pointEnd=[.5-.5*sin(angle),.5+.5*cos(angle)];option={title:{text:"linear 实现伪弧形渐变",left:"center",bottom:20,textStyle:{align:"center",fontSize:14,color:"#333",fontWeight:"normal"}},series:[{name:"占比",type:"pie",startAngle:90,endAngle:270,radius:["50%","60%"],avoidLabelOverlap:!1,color:"#ccc",label:{normal:{show:!0,position:"center",formatter:({data:o})=>`${o.value.toFixed(2)}%`},emphasis:{show:!0}},labelLine:{normal:{show:!1}},data:[{name:"满足率",value:100,label:{normal:{fontSize:18,color:"#000",fontWeight:"bolder"}},itemStyle:{normal:{color:{type:"linear",x:pointStart[0],y:pointStart[0],x2:pointEnd[1],y2:pointEnd[1],colorStops:[{offset:0,color:"#F47979"},{offset:.1,color:"#F9836C"},{offset:.2,color:"#FFB157"},{offset:.3,color:"#FE9858"},{offset:.4,color:"#FFE657"},{offset:.5,color:"#FFF957"},{offset:.6,color:"#FFF957"},{offset:.7,color:"#92FF58"},{offset:.8,color:"#57FF95"},{offset:.9,color:"#6AFF72"},{offset:1,color:"#57FFB7"}]},shadowColor:"rgba(34,192,245,0.8)",shadowBlur:10}}},{name:"未满足率",value:0,label:{normal:{show:!1,fontSize:0}},itemStyle:{normal:{},emphasis:{}},hoverAnimation:!1}]}]};