var color=["#02afe7","#ffa12e","#f25185","#0bbcb7","#1a9bfc","#7049f0"],dataStyle={normal:{label:{show:!1},labelLine:{show:!1},shadowBlur:40,borderWidth:10,shadowColor:"rgba(0, 0, 0, 0)"}},placeHolderStyle={normal:{color:"transparent",label:{show:!1},labelLine:{show:!1}},emphasis:{color:"#eee"}},placeHolderStyle1={normal:{color:"#ddd",label:{show:!1},labelLine:{show:!1}},emphasis:{color:"#eee"}};option={title:{show:!1,text:"匹配度",x:"center",y:"center",textStyle:{fontWeight:"normal",fontSize:24,color:"#fff"}},tooltip:{trigger:"item",show:!0,formatter:"{b} : <br/>{d}%",backgroundColor:"rgba(0,0,0,0.1)",padding:[8,10],extraCssText:"box-shadow: 0 0 3px rgba(255, 255, 255, 0.1);"},legend:{orient:"vertical",right:"20",top:"40%",itemGap:20,data:["A业务","B业务","C业务"],textStyle:{color:"#fft"}},series:[{name:"Line 1",type:"pie",clockWise:!1,radius:[196,200],center:["30%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,label:{borderRadius:"10"},data:[{value:44,name:"A业务",itemStyle:{normal:{color:color[0]}}},{value:56,name:"",tooltip:{show:!1},itemStyle:placeHolderStyle1}]},{name:"Line 1",type:"pie",clockWise:!1,radius:[186,200],center:["30%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,label:{borderRadius:"10"},data:[{value:44,name:"A业务",itemStyle:{normal:{color:color[0]}}},{value:56,name:"",tooltip:{show:!1},itemStyle:placeHolderStyle}]},{name:"Line 2",type:"pie",clockWise:!1,radius:[156,160],center:["30%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,data:[{value:56.7,name:"B业务",itemStyle:{normal:{color:color[1]}}},{value:43.3,name:"",tooltip:{show:!1},itemStyle:placeHolderStyle1}]},{name:"Line 2",type:"pie",clockWise:!1,radius:[146,160],center:["30%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,data:[{value:56.7,name:"B业务",itemStyle:{normal:{color:color[1]}}},{value:43.3,name:"",tooltip:{show:!1},itemStyle:placeHolderStyle}]},{name:"Line 3",type:"pie",clockWise:!1,radius:[116,120],center:["30%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,data:[{value:30,name:"C业务",itemStyle:{normal:{color:color[2]}}},{value:70,name:"",tooltip:{show:!1},itemStyle:placeHolderStyle1}]},{name:"Line 3",type:"pie",clockWise:!1,radius:[106,120],center:["30%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,data:[{value:30,name:"C业务",itemStyle:{normal:{color:color[2]}}},{value:70,name:"",tooltip:{show:!1},itemStyle:placeHolderStyle}]}]};