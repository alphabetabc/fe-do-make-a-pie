var data=[10,20,30,40,50],titlename=["太原市民政局","太原市运输局","太原市残联","太原市报社","太原市司法局"],myColor=["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"],num=["55","66","77","88","99"];option={tooltip:{show:!0},xAxis:{show:!1},yAxis:[{show:!0,data:titlename,inverse:!0,axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#000",align:"left",margin:110,formatter:(r,a)=>{var e="";switch(r.length>10?e=r.substring(0,10)+"...":e=r,a){case 0:return`{lg0|${a+1}}   ${r}`;case 1:return`{lg1|${a+1}}  ${r}`;case 2:return`{lg2|${a+1}}   ${r} `;case 3:return`{lg3|${a+1}} ${r} `;case 4:return`{lg4|${a+1}} ${r} `}},rich:{lg0:{color:"#fff",backgroundColor:"#c03933",lineHeight:10,borderRadius:5,padding:[3,4]},lg1:{color:"#fff",backgroundColor:"#446761",lineHeight:10,borderRadius:5,padding:[3,4]},lg2:{backgroundColor:"#cf6712",color:"#fff",lineHeight:10,borderRadius:5,padding:[3,4]},lg3:{backgroundColor:"#238af1",color:"#fff",lineHeight:10,borderRadius:5,padding:[3,4]},lg4:{backgroundColor:"#6ab4e5",color:"#fff",lineHeight:10,borderRadius:5,padding:[3,4]}}}},{show:!0,inverse:!0,data:titlename,axisLabel:{textStyle:{fontSize:12,color:"#fff"}},axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1}}],series:[{name:"条",yAxisIndex:0,z:3,type:"bar",data,barWidth:"40%",itemStyle:{normal:{barBorderRadius:15,color:"rgba(129,186,229,1)"}}},{name:"框",z:2,type:"bar",yAxisIndex:1,data:[100,100,100,100,100],barWidth:"40%",itemStyle:{normal:{barBorderRadius:15,color:"#25476d"}}},{name:"背景",z:1,type:"bar",label:{show:!0,position:"right",color:"#333"},yAxisIndex:1,barGap:"-100%",data:[100,100,100,100,100],barWidth:"40%",itemStyle:{normal:{barBorderRadius:15,color:"#fff"}}}]};