let value=.4,totalPercent=360,titlePercent=40,seriesData=[{value:(totalPercent-titlePercent)*value,itemStyle:{color:"#F64D0C"}},{value:(totalPercent-titlePercent)*(1-value),itemStyle:{color:"#E7E6E9"}},{value:titlePercent,itemStyle:{color:"#fff"}}];option={backgroundColor:"#fff",title:{text:`Pie percent, ${value*100}%`,left:"50%",top:"middle",textStyle:{fontSize:40}},series:{type:"pie",silent:!0,startAngle:titlePercent/totalPercent/2*360,radius:["50%","70%"],clockwise:!1,label:{show:!1,position:"center"},labelLine:{show:!1},data:seriesData}};