const list=[{value:"50",name:"华为",textStyle:{shadowBlur:4,shadowColor:"#ECEFFF",shadowOffsetY:14,color:"#73DDFF"}},{value:"30",name:"VIVO"},{value:"29",name:"OPPO"},{value:"28",name:"HONOR"},{value:"27",name:"红米"},{value:"26",name:"小米"},{value:"25",name:"美图"},{value:"24",name:"ONEPLUS"},{value:"23",name:"魅族"},{value:"22",name:"红手指"},{value:"21",name:"SAMSUNG"},{value:"20",name:"金立"},{value:"16",name:"BLACKBERRY"},{value:"15",name:"诺基亚"},{value:"14",name:"锤子"},{value:"13",name:"大疆"},{value:"12",name:"361"},{value:"11",name:"摩托罗拉"},{value:"10",name:"联想"},{value:"9",name:"玩家国度"}];option={tooltip:{show:!0,borderColor:"#fe9a8bb3",borderWidth:1,padding:[10,15,10,15],confine:!0,backgroundColor:"rgba(255, 255, 255, .9)",textStyle:{color:"hotpink",lineHeight:22},extraCssText:"box-shadow: 0 4px 20px -4px rgba(199, 206, 215, .7);border-radius: 4px;"},series:[{type:"wordCloud",shape:"pentagon",left:"center",top:"center",width:"100%",height:"100%",right:null,bottom:null,sizeRange:[14,50],rotationRange:[0,0],rotationStep:0,gridSize:25,drawOutOfBound:!1,layoutAnimation:!0,textStyle:{fontFamily:"PingFangSC-Semibold",fontWeight:600,color:function(e){return["#fe9a8bb3","#fe9a8bb3","#fe9a8b03","#9E87FFb3","#9E87FFb3","#9E87FFb3","#fe9a8bb3","#fe9a8bb3","#fe9a8bb3","#73DDFF","#58D5FF"][parseInt(Math.random()*10)]}},emphasis:{focus:"none"},data:list}]};
