var auditDataArr=[42,48,79,52,0],color=["#6a6edc","#ac64cf","#3cb7fd","#13cdc7","#f2a230"],dataStyle={normal:{label:{show:!1},labelLine:{show:!1},shadowBlur:40,borderWidth:10,shadowColor:"rgba(0, 0, 0, 0)"}},placeHolderStyle={normal:{color:"#eff3ff",label:{show:!1},labelLine:{show:!1}},emphasis:{color:"#eee"}},placeHolderStyle1={normal:{color:"transparent",label:{show:!1},labelLine:{show:!1}},emphasis:{color:"#eee"}},option={backgroundColor:"#fff",title:{show:!1,text:"匹配度",x:"center",y:"center",textStyle:{fontWeight:"normal",fontSize:24,color:"#fff"}},tooltip:{trigger:"item",show:!0,formatter:"{b} : <br/>{d}%",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:[8,10],extraCssText:"box-shadow: 0 0 3px rgba(255, 255, 255, 0.1);"},series:[{name:"Line 1",type:"pie",clockWise:!1,radius:[113,123],center:["50%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,label:{borderRadius:"10"},data:[{value:auditDataArr[0],name:"不完整",itemStyle:{normal:{color:color[0]}}},{value:100-auditDataArr[0],name:"",tooltip:{show:!1},itemStyle:placeHolderStyle1}]},{name:"Line 1",type:"pie",clockWise:!1,radius:[113,123],center:["50%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,label:{borderRadius:"10"},data:[{value:auditDataArr[0],name:"不完整",itemStyle:{normal:{color:color[0]}}},{value:100-auditDataArr[0],name:"",tooltip:{show:!1},itemStyle:placeHolderStyle}]},{name:"Line 2",type:"pie",clockWise:!1,radius:[90,100],center:["50%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,data:[{value:auditDataArr[1],name:"不规范",itemStyle:{normal:{color:color[1]}}},{value:100-auditDataArr[1],name:"",tooltip:{show:!1},itemStyle:placeHolderStyle1}]},{name:"Line 2",type:"pie",clockWise:!1,radius:[90,100],center:["50%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,data:[{value:auditDataArr[1],name:"不规范",itemStyle:{normal:{color:color[1]}}},{value:100-auditDataArr[1],name:"",tooltip:{show:!1},itemStyle:placeHolderStyle}]},{name:"Line 3",type:"pie",clockWise:!1,radius:[70,79],center:["50%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,data:[{value:auditDataArr[2],name:"无上级关联",itemStyle:{normal:{color:color[2]}}},{value:100-auditDataArr[2],name:"",tooltip:{show:!1},itemStyle:placeHolderStyle1}]},{name:"Line 3",type:"pie",clockWise:!1,radius:[70,79],center:["50%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,data:[{value:auditDataArr[2],name:"无上级关联",itemStyle:{normal:{color:color[2]}}},{value:100-auditDataArr[2],name:"",tooltip:{show:!1},itemStyle:placeHolderStyle}]},{name:"Line 3",type:"pie",clockWise:!1,radius:[52,59],center:["50%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,data:[{value:auditDataArr[3],name:"无下级关联",itemStyle:{normal:{color:color[3]}}},{value:100-auditDataArr[3],name:"",tooltip:{show:!1},itemStyle:placeHolderStyle1}]},{name:"Line 3",type:"pie",clockWise:!1,radius:[52,59],center:["50%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,data:[{value:auditDataArr[3],name:"无下级关联",itemStyle:{normal:{color:color[3]}}},{value:100-auditDataArr[3],name:"",tooltip:{show:!1},itemStyle:placeHolderStyle}]},{name:"Line 3",type:"pie",clockWise:!1,radius:[31,37],center:["50%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,data:[{value:auditDataArr[4],name:"正常",itemStyle:{normal:{color:color[4]}}},{value:100-auditDataArr[4],name:"",tooltip:{show:!1},itemStyle:placeHolderStyle1}]},{name:"Line 3",type:"pie",clockWise:!1,radius:[31,37],center:["50%","50%"],itemStyle:dataStyle,hoverAnimation:!1,startAngle:90,data:[{value:auditDataArr[4],name:"正常",itemStyle:{normal:{color:color[4]}}},{value:100-auditDataArr[4],name:"",tooltip:{show:!1},itemStyle:placeHolderStyle}]}]};