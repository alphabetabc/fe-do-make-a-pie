var value=80,titleText="成套:"+value+"个/7万㎡";option={backgroundColor:"#010d13",tooltip:{show:!1},legend:{show:!1},toolbox:{show:!1},title:[{text:"成套",x:"60%",y:"46%",textStyle:{color:"#fff",fontSize:40,fontWeight:"400"}},{text:titleText,top:"40%",left:"60%",textStyle:{color:"#73d2f1",fontSize:40,fontWeight:"400"}}],series:[{name:"",type:"pie",startAngle:180,radius:[0,95],center:["50%","50%"],hoverAnimation:!1,itemStyle:{normal:{label:{show:!1}}},data:[{value,name:"A",itemStyle:{normal:{color:"red"}}},{value:100-value,name:"B",itemStyle:{normal:{color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}}}]},{name:"",type:"pie",startAngle:271,radius:[115,125],center:["50%","50%"],hoverAnimation:!1,itemStyle:{normal:{label:{show:!1}}},data:[{value:2,name:"A",itemStyle:{normal:{color:"#73d2f1"}}},{value:5,name:"B",itemStyle:{normal:{color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}}},{value:85,name:"A",itemStyle:{normal:{color:"#73d2f1"}}},{value:5,name:"B",itemStyle:{normal:{color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}}}]}]};