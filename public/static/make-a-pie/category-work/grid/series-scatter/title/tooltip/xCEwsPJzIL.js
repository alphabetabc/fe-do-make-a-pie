app.title="气泡图";var data=[[-10,20,0,.75,0,0,"A000","公司一"],[6,7,-.89,0,0,0,"Z400","公司二"],[19,-20,0,0,0,-18.42,"2000","公司三"]],textStyle={color:"red",fontStyle:"normal",fontWeight:"normal",fontFamily:"sans-serif",fontSize:14};option={backgroundColor:"#fff",title:[{text:"期间：2016-12-28",x:"5%",y:0,textStyle},{text:"存在资不抵债风险",x:"73%",y:"10%",textStyle,borderWidth:"1",subtext:"存在金额不足",borderRadius:5,subtextStyle:{color:"#000000",fontStyle:"normal",fontWeight:"normal",fontFamily:"sans-serif",fontSize:14}},{text:"存在总体资金不足",x:"10%",y:"10%",textStyle,borderWidth:"1",subtext:"存在金额不足",borderRadius:5,subtextStyle:{color:"#000000",fontStyle:"normal",fontWeight:"normal",fontFamily:"sans-serif",fontSize:14}},{text:"存在速动资金不足",x:"10%",y:"80%",textStyle,borderWidth:"1",subtext:"存在金额不足",borderRadius:5,subtextStyle:{color:"#000000",fontStyle:"normal",fontWeight:"normal",fontFamily:"sans-serif",fontSize:14}},{text:"存在流动资金不足",x:"73%",y:"80%",textStyle,borderWidth:"1",subtext:"存在金额不足",borderRadius:5,subtextStyle:{color:"#000000",fontStyle:"normal",fontWeight:"normal",fontFamily:"sans-serif",fontSize:14}}],tooltip:{formatter:function(e){var t=e.value;return'<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px;"> '+t[7]+"("+t[6]+")</div>"}},xAxis:{splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},max:21,min:-21},yAxis:{splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},max:21,min:-21},series:[{name:"",data,type:"scatter",symbolSize:40}]};
