var typeList=["TQB","SC","SUPERFUN"],biList=[50,60,90],ticket=[60,80,90],sumPeople=5e3,currency=3e3,Tickets=2e3,currencyScale=currency/sumPeople*100+"%",TicketsScale=Tickets/sumPeople*100+"%",optionText="总人次: "+sumPeople+" 币: "+currency+" "+currencyScale+" 门票: "+Tickets+" "+TicketsScale,sources=[["product","币","票"]];for(let o=0;o<typeList.length;o++){var List=[],Type=typeList[o],Bi=biList[o],Tick=ticket[o];List.push(Type,Bi,Tick),sources.push(List)}option={title:{text:optionText,left:"30%"},legend:{bottom:"bottom"},tooltip:{},dataset:{source:sources},xAxis:{type:"category",axisLabel:{tooltip:{show:!0},inside:!1,textStyle:{fontSize:14},interval:0,color:"#666"},axisTick:{show:!0},axisLine:{lineStyle:{color:"#ddd"}}},yAxis:{axisLine:{show:!1,lineStyle:{color:"#333"}}},series:[{type:"bar",barCategoryGap:"50%",itemStyle:{normal:{label:{show:!0,position:"top",color:"#666",fontSize:14},color:"#3aa1ff",opacity:1,shadowBlur:20,shadowColor:"rgba(255, 255, 255, 0.5)"}}},{type:"bar",itemStyle:{normal:{label:{show:!0,position:"top",color:"#666",fontSize:14},color:"#4ecb73",opacity:1,shadowBlur:20,shadowColor:"rgba(255, 255, 255, 0.5)"}}}]};