let val=parseInt(30),number=val%5==0?0:5-val%5,valnumber=(val+number)/100,interval=[.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1];colordatas=interval.map(e=>(console.log(e,valnumber),[e,e<=valnumber?"aqua":"#0068bd"])),option={backgroundColor:"#38445E",series:[{name:"",type:"gauge",radius:"80%",center:["50%","50%"],startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:0,color:colordatas,shadowColor:"rgba(0, 252, 255, 0.5)",shadowBlur:10}},axisTick:{show:!0,lineStyle:{color:"auto",width:2},length:6,splitNumber:5},splitLine:{show:!0,length:6,lineStyle:{color:"auto"}},pointer:{show:0,length:"70%",width:2},detail:{show:0}}]};