option={backgroundColor:"#fff",title:{x:"center",top:"30%",text:"工商用户抄表数：95%",textStyle:{color:"#333",fontSize:18}},tooltip:{show:!0,backgroundColor:"#F7F9FB",borderColor:"#92DAFF",borderWidth:"1px",textStyle:{color:"black"},formatter:function(e){return'<em style="color:'+e.color+';">影响力指数：'+e.value+"</em> "}},series:[{name:"信用分",type:"gauge",min:0,max:220,radius:"85%",axisLine:{show:!0,lineStyle:{width:10,shadowBlur:0,color:[[.181818181818182,"#00ccd0"],[.818181818181818,"#2cadff"],[1,"#e75b64"]]}},axisTick:{show:!0,splitNumber:1},splitNumber:11,splitLine:{show:!1,length:10,lineStyle:{}},axisLabel:{formatter:function(e){switch(e+""){case"20":return"较小";case"100":return"较大";case"200":return"非常大";default:return e}},textStyle:{fontSize:12,fontWeight:""}},axisTick:{length:15,lineStyle:{color:"auto"}},splitLine:{length:20,lineStyle:{color:"auto"}},data:[{value:206,name:""}]}]};