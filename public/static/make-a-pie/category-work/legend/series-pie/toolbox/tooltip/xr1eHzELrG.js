var dataStyle={normal:{label:{show:!1},labelLine:{show:!1},shadowBlur:40,shadowColor:"rgba(40, 40, 40, 0.5)"}},placeHolderStyle={normal:{color:"rgba(0,0,0,0)",label:{show:!1},labelLine:{show:!1}},emphasis:{color:"rgba(0,0,0,0)"}};option={backgroundColor:"#f4f2e3",color:["#85b6b2","#6d4f8d","#cd5e7e","#e38980","#f7db88"],tooltip:{show:!0,formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{itemGap:12,data:["01","02","03","04","05","06"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"Line 1",type:"pie",clockWise:!1,radius:[180,200],itemStyle:dataStyle,hoverAnimation:!1,startAngle:0,data:[{value:30,name:"01",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"red"},{offset:1,color:"blue"}],globalCoord:!1}}}},{value:10,name:"01",itemStyle:placeHolderStyle}]}]};
