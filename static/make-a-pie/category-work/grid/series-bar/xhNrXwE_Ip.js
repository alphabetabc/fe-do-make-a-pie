let richGroup={offset:[10,0],formatter:e=>`{people|${e.seriesName}}{center|}{percentage|${e.value}%}`,rich:{people:{color:"#B3BFD2",fontSize:30},center:{padding:[0,46,0,23]},percentage:{color:"rgba(255,255,255,0.8)",fontSize:30}}};option={backgroundColor:"#12233D",xAxis:[{show:!1,data:[""]}],yAxis:[{show:!1,type:"value",axisTick:!1}],series:[{name:"自费",type:"bar",stack:"a",data:[40.2],barWidth:"40",label:{show:!0,...richGroup},itemStyle:{color:"#0376DA",barBorderRadius:[0,0,100,100]}},{name:"自负",type:"bar",stack:"a",data:[30.5],label:{show:!0,...richGroup},itemStyle:{color:"#079FD7"}},{name:"共付",type:"bar",stack:"a",data:[38.5],label:{show:!0,...richGroup},itemStyle:{color:"#06DAAB",barBorderRadius:[100,100,0,0]}}]};
