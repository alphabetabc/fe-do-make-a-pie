var uploadedDataURL="/asset/get/s/data-1637741754907-6sfhRRjiv.png";let total=60,total_add=120,sum=total+total_add,kg=.3,ljdata=total/sum*100,newdata=total_add/sum*100,max=ljdata+newdata+kg*2;var option={backgroundColor:"transparent",yAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#999"}},xAxis:{show:!1,max},grid:{top:"20",right:"10",left:"20",bottom:"0"},animationDuration:3e3,series:[{name:"框",type:"bar",barGap:"-100%",data:[max],barWidth:"30px",itemStyle:{normal:{color:"none",borderColor:"#39BFE1",borderWidth:1,barBorderRadius:0}}},{type:"bar",barWidth:"25px",barGap:"-92%",stack:"total",showBackground:!1,backgroundStyle:{color:"transparent"},label:{normal:{show:!1}},itemStyle:{normal:{color:"transparent"}},data:[kg]},{type:"bar",barWidth:"25px",barGap:"-92%",stack:"total",showBackground:!1,backgroundStyle:{color:"transparent"},label:{normal:{show:!0,position:"insideBottomRight",formatter:a=>total,distance:0,offset:[-20,-5],color:"#fff",fontSize:12}},itemStyle:{normal:{color:"#39BFE1"}},data:[ljdata]},{type:"bar",barWidth:"25px",stack:"total",showBackground:!1,backgroundStyle:{color:"transparent"},label:{normal:{show:!0,position:"insideBottomRight",formatter:"新增",distance:0,offset:[0,-21],color:"#fff",fontSize:12,padding:[12,12,12,12],backgroundColor:{image:uploadedDataURL}}},itemStyle:{normal:{color:"#FCB128"}},data:[newdata]},{type:"bar",barWidth:"25px",stack:"total",showBackground:!1,backgroundStyle:{color:"transparent"},label:{normal:{show:!0,position:"insideBottomRight",formatter:a=>total_add,distance:0,offset:[-20,-5],color:"#fff",fontSize:12}},itemStyle:{normal:{color:"transparent"}},data:[kg]}]};