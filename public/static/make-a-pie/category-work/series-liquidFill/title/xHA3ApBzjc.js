var value=.5,value1=75.2,value2=75.2,data=[value,value,value],option={backgroundColor:"#fff",title:[{text:"当前流量剩余："+value1,left:"50%",top:"58%",textAlign:"center",textStyle:{fontSize:"20",fontWeight:"400",color:"#fff",textAlign:"center"}},{text:"M",left:"61.5%",top:"58.5%",textAlign:"center",textStyle:{fontSize:"18",fontWeight:"400",color:"#fff",textAlign:"center"}},{text:"已用流量："+value2+"M",left:"50%",top:"64%",textAlign:"center",textStyle:{fontSize:"20",fontWeight:"400",color:"#fff",textAlign:"center"}},{text:(value*100).toFixed(0),left:"47.5%",top:"30%",textAlign:"center",textStyle:{fontSize:70,color:"#fff"}},{text:"%",left:"56%",top:"34%",textAlign:"center",textStyle:{fontSize:40,color:"#fff"}}],series:[{type:"liquidFill",radius:"70%",z:6,center:["50%","50%"],amplitude:20,backgroundStyle:{borderWidth:1,color:"rgba(201,219,252, 1)"},color:[{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:1,color:"#133480"},{offset:0,color:"#5F8EE8"}],globalCoord:!1},{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:1,color:"#133480"},{offset:0,color:"#5F8EE8"}],globalCoord:!1},{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:1,color:"#5F8DE8"},{offset:0,color:"#5F8DE8"}],globalCoord:!1}],data:[value+.02,{value:value-.01,direction:"left"},value-.01],label:{normal:{formatter:""}},outline:{show:!0,itemStyle:{borderWidth:0},borderDistance:0}}]};
