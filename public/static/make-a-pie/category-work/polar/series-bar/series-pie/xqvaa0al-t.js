let getValue=["5000","2000","3000","4000"],colorList=["#ffc65d","#7fe5fd","#8db9ff","#a3ffc5"],sum=0;getValue.map(a=>{sum+=Number(a)});let seriesData=getValue.map((a,e)=>({value:a,itemStyle:{color:"transparent"},labelLine:{length2:0,length:0},label:{show:!0,formatter:t=>`{pd20|${t.value}}`,rich:{pd20:{padding:[4,5,8,5],backgroundColor:colorList[e],color:"#666"}}}}));option={angleAxis:{type:"category",axisLine:{show:!1}},radiusAxis:{max:100,axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},polar:{radius:["20%","50%"]},series:[{type:"pie",data:seriesData,radius:["20%","50%"],silent:!0},{type:"bar",name:"一班",max:100,data:[90],barWidth:Number(getValue[0])/sum*100+"%",barGap:0,itemStyle:{color:colorList[0]},coordinateSystem:"polar"},{type:"bar",name:"二班",data:[80],max:100,barWidth:Number(getValue[1])/sum*100+"%",barGap:0,itemStyle:{color:colorList[1]},coordinateSystem:"polar"},{type:"bar",name:"三班",data:[60],max:100,barWidth:Number(getValue[2])/sum*100+"%",barGap:0,itemStyle:{color:colorList[2]},coordinateSystem:"polar"},{type:"bar",name:"四班",data:[40],max:100,barWidth:Number(getValue[3])/sum*100+"%",barGap:0,itemStyle:{color:colorList[3]},coordinateSystem:"polar"}]};