var format="{c}㎡",dataStyle={normal:{formatter:format,position:"center",show:!0,textStyle:{fontSize:"24",fontWeight:"normal",color:"#fff"}}},placeHolderStyle={normal:{label:{show:!1},labelLine:{show:!1},color:"#787679",borderWidth:0},emphasis:{color:"#787679",borderWidth:0}};option={backgroundColor:"#142058",title:[{text:"全国排名：21名",x:"center",y:"center",textStyle:{fontWeight:"normal",color:"#fc002f",fontSize:20}},{text:"海南省",left:"24%",top:"75%",textAlign:"center",textStyle:{fontWeight:"normal",color:"#fff",textAlign:"center"}},{text:"全国平均水平",left:"75%",top:"75%",textAlign:"center",textStyle:{color:"#fff",fontWeight:"normal",textAlign:"center"}}],series:[{center:["25.0%","50%"],radius:["65","85"],clockWise:!1,hoverAnimation:!1,type:"pie",itemStyle:{normal:{label:{show:!0,textStyle:{fontSize:24,fontWeight:"normal"},position:"center"},labelLine:{show:!1},color:"#168df5",borderWidth:0},emphasis:{color:"#168df5",borderWidth:0}},data:[{value:.16,itemStyle:placeHolderStyle},{value:.17,label:dataStyle,name:"海南省"}]},{center:["75.0%","50%"],radius:["65","85"],clockWise:!1,hoverAnimation:!1,type:"pie",itemStyle:{normal:{label:{show:!0,textStyle:{fontSize:24,fontWeight:"normal"},position:"center"},labelLine:{show:!1},color:"#10cf55",borderWidth:0},emphasis:{color:"#10cf55",borderWidth:0}},data:[{value:25.71,itemStyle:placeHolderStyle},{value:23.88,label:dataStyle,name:"全国平均水平"}]}]};