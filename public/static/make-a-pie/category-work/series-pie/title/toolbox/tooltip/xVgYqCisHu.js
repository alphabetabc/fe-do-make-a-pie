var dataStyle={normal:{label:{show:!1},labelLine:{show:!1},shadowBlur:40,shadowColor:"rgba(40, 40, 40, 0.5)"}},placeHolderStyle={normal:{color:"#014589",label:{show:!1},labelLine:{show:!1}},emphasis:{color:"#014589"}};option={backgroundColor:"black",title:{text:"50%",x:"center",y:"center",textStyle:{fontWeight:"normal",color:"#fff",fontSize:35}},tooltip:{show:!1},toolbox:{show:!1},series:[{name:"Pie1",type:"pie",clockWise:!1,radius:[70,85],itemStyle:dataStyle,hoverAnimation:!1,center:["25%","50%"],data:[{value:33,label:{normal:{formatter:"{d}%",position:"center",show:!0,textStyle:{fontSize:"35",fontWeight:"normal",color:"#fff"}}},itemStyle:{normal:{color:"#12CFB2",shadowBlur:10}}},{value:67,name:"invisible",itemStyle:placeHolderStyle}]},{name:"Pie2",type:"pie",clockWise:!1,radius:[70,85],itemStyle:dataStyle,hoverAnimation:!1,center:["50%","50%"],data:[{value:40,itemStyle:{normal:{color:"#603CF9",shadowColor:"#b697cd",shadowBlur:10}}},{value:60,name:"invisible",itemStyle:placeHolderStyle}]},{name:"Pie3",type:"pie",clockWise:!1,radius:[70,85],itemStyle:dataStyle,hoverAnimation:!1,center:["75%","50%"],data:[{value:75,label:{normal:{formatter:"{d}%",position:"center",show:!0,textStyle:{fontSize:"35",fontWeight:"normal",color:"#fff"}}},itemStyle:{normal:{color:"#A01EA2",shadowColor:"#a6f08f",shadowBlur:10}}},{value:25,name:"invisible",itemStyle:placeHolderStyle}]}]};