const payload={id:"right-center",title:["高级技师","技师"],lengend:["高级技师","技师"],data:{0:{total:"183",pass:"41",notpass:142,ratio:"22.4"},1:{total:"149",pass:"73",notpass:76,ratio:"48.99"}}},scale=1,list=[],title=[];Object.keys(payload.data).forEach(e=>{title.push(payload.lengend[e]),list.push([{name:"通过",value:payload.data[e].pass,unit:"人",selected:!0},{name:"未通过",value:payload.data[e].notpass,unit:"人"}])}),option={color:["rgba(14, 117, 223, 1)","rgba(222, 118, 42, 1)"],legend:{show:!0,itemWidth:10,itemHeight:3,bottom:"6%",textStyle:{color:"#fff"}},tooltip:{backgroundColor:"rgba(9, 30, 60, 0.6)",extraCssText:"box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;",borderWidth:0,confine:!1,appendToBody:!0,textStyle:{color:"#fff",fontSize:10},axisPointer:{type:"shadow"},shadowStyle:{color:"rgba(157, 168, 245, 0.1)"},formatter(e){const a=parseInt(e.seriesIndex/2,10);var i=['<h5 class="echarts-tip-h5">'+payload.title[a]+"</h5>"];let t="";return t+='<div class="echarts-tip-div">',t+='<div class="left">申报人数：</div>',t+='<div class="right">'+payload.data[a].total+"</div>",t+="</div>",t+='<div class="echarts-tip-div">',t+='<div class="left">通过人数：</div>',t+='<div class="right">'+payload.data[a].pass+"</div>",t+="</div>",t+='<div class="echarts-tip-div">',t+='<div class="left">通过率：</div>',t+='<div class="right">'+payload.data[a].ratio+"%</div>",t+="</div>",i.push(t),i.join("")}},title:[{text:title[0],left:"24%",bottom:"16%",textAlign:"center",textStyle:{fontWeight:"normal",fontSize:"12",color:"#AAAFC8",textAlign:"center"}},{text:title[1],left:"75%",bottom:"16%",textAlign:"center",textStyle:{color:"#AAAFC8",fontWeight:"normal",fontSize:"12",textAlign:"center"}}],series:[{name:"",type:"gauge",splitNumber:24,radius:"76%",center:["25%","40%"],startAngle:0,endAngle:359.9999,axisLine:{show:!1},axisTick:{show:!0,lineStyle:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(232, 102, 15, 0.6)"},{offset:1,color:"rgba(15, 101, 231, 0.6)"}]),width:1.5,shadowBlur:1,shadowColor:"rgba(232, 102, 15, 0.6)"},length:10,splitNumber:3},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!1}},{name:"123",type:"pie",radius:["0","53%"],center:["25%","40%"],selectedMode:"single",selectedOffset:10,labelLine:{length:25,length2:15,lineStyle:{type:"dashed"}},label:{show:!0,position:"inside",formatter:e=>{const a=e.data.unit||"";return"{a|"+e.value+a+`
`+e.percent+"%}"},rich:{a:{color:"#ffffff",fontSize:14*scale,height:16*scale,align:"center"}}},data:list[0]},{name:"",type:"gauge",splitNumber:24,radius:"76%",center:["75%","40%"],startAngle:0,endAngle:359.9999,axisLine:{show:!1},axisTick:{show:!0,lineStyle:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(232, 102, 15, 0.6)"},{offset:1,color:"rgba(15, 101, 231, 0.6)"}]),width:1.5,shadowBlur:1,shadowColor:"rgba(232, 102, 15, 0.6)"},length:10,splitNumber:3},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!1}},{name:" 456",type:"pie",radius:["0","53%"],center:["75%","40%"],selectedMode:"single",selectedOffset:10,labelLine:{length:25,length2:15,lineStyle:{type:"dashed"}},label:{show:!0,position:"inside",formatter:e=>{const a=e.data.unit||"";return"{a|"+e.value+a+`
`+e.percent+"%}"},rich:{a:{color:"#ffffff",fontSize:14*scale,height:16*scale,align:"center"}}},data:list[1]}]};