let title="11个",colorList=["#5a91fb","#5ad9a7","#5c7091","#f7bd16","#e86452","#6ec9eb","#955eb9","#ff9944","#1e9593","#ff99c3","#81511c","#7d0022","#556fb5","#009944","#0068b7"],seriesData=[{name:"片区1",value:"7"},{name:"片区2",value:"9"},{name:"片区3",value:"5"},{name:"片区4",value:"5"},{name:"片区5",value:"5"},{name:"片区6",value:"5"}],outRadius=["20%","60%"],innerRadius=["62%","64%"],length=10,length2=25,outCenter=["40%","50%"],innerCenter=["40%","50%"];option={backgroundColor:"#000",title:{text:title,left:"center",top:"49%",textStyle:{fontSize:14,color:"#fff",fontWeight:"400"}},color:colorList,tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},calculable:!0,series:[{name:"外圆",type:"pie",selectedMode:"single",radius:outRadius,center:outCenter,label:{normal:{show:!0,position:"inner",formatter:"{c}",textStyle:{color:"white",fontSize:12,fontWeight:"bold"}}},labelLine:{normal:{length,length2,smooth:!0,lineStyle:{width:2}}},data:seriesData},{name:"内圆",type:"pie",radius:innerRadius,center:innerCenter,label:{normal:{textStyle:{fontSize:14},formatter:e=>`${e.name}
${Math.round(e.percent)}%`}},labelLine:{normal:{smooth:!0,lineStyle:{width:2}}},itemStyle:{normal:{shadowBlur:30,shadowColor:"rgba(0, 0, 0, 0.4)"}},data:seriesData}]};
