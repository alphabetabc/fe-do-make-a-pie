var color1="rgba(194,166,253,1)",color2="rgba(194,166,253,0.5)",color3="rgba(194,166,253,0.3)",textData=`网
页
平
均
首
屏
时
延`,formatterData="{d}s",data=4.1778,zhname="网页平均首屏时延",dataStyle={normal:{label:{show:!1},labelLine:{show:!1},shadowBlur:40,shadowColor:"rgba(40, 40, 40, 0.5)"}},placeHolderStyle1={normal:{color:color1,label:{show:!1},labelLine:{show:!1}},emphasis:{color:color1}},placeHolderStyle2={normal:{color:color2,label:{show:!1},labelLine:{show:!1}},emphasis:{color:color2}},placeHolderStyle3={normal:{color:color3,label:{show:!1},labelLine:{show:!1}},emphasis:{color:color3}};option={title:{text:textData,x:"5%",y:"middle",textStyle:{fontWeight:"normal",color:"#fff",fontSize:8}},color:["#eb644b","#313443","#fff"],legend:{show:!1,itemGap:5,data:["01"]},toolbox:{show:!1,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"Line 1",type:"pie",animation:!1,clockWise:!1,radius:["56%","64%"],itemStyle:dataStyle,hoverAnimation:!1,avoidLabelOverlap:!1,stillShowZeroSum:!1,silent:!0,tooltip:{show:!1},data:[{value:data,name:"02",itemStyle:placeHolderStyle2},{value:100-data,name:"invisible",itemStyle:placeHolderStyle3}]},{name:"Line 1",type:"pie",animation:!1,clockWise:!1,radius:["80%","64%"],itemStyle:dataStyle,hoverAnimation:!1,avoidLabelOverlap:!1,silent:!0,tooltip:{show:!1},data:[{value:data,name:"02",label:{normal:{formatter:formatterData,position:"center",show:!0,textStyle:{fontSize:"15",fontWeight:"normal",color:color1}}},itemStyle:placeHolderStyle1},{value:100-data,name:"invisible",itemStyle:placeHolderStyle2}]}]};
