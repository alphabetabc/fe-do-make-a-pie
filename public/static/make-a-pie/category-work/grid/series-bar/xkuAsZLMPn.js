const COLOR=["#35a8ff","#35a8ff"];let data1=[{value:126,label:"体验中心",name:"EXPERIENCE CENTER"},{value:117,label:"推广中心",name:"PROMOTION CENTER"},{value:104,label:"展示中心",name:"EXHIBITION CCENTER"},{value:89,label:"专家公寓",name:"EXPERT APARTMENT"}];option={backgroundColor:"#000f1f",grid:{top:70,left:33,right:150,bottom:15,containLabel:!0},xAxis:{type:"value",show:!1},yAxis:{show:!0,inverse:!0,type:"category",axisLine:{show:!1}},series:[{name:"label",type:"bar",barWidth:20,yAxisIndex:0,label:{show:!0,position:[0,-10],color:"#ffffff",fontSize:15},data:data1.map(e=>({value:0,label:{formatter(){return e.label+"{a||}{d|"+e.name+"}"},rich:{a:{color:"#15c7fb",padding:[0,10]},d:{color:"#d1d1d1"}}}}))},{name:"value",type:"bar",barWidth:20,barMinHeight:20,yAxisIndex:0,label:{show:!0,position:["100%","110%"],fontSize:22,offset:[10,0],formatter({value:e}){return`${e}{s|kwh}`},rich:{s:{fontSize:22,color:"#d9d9d9"}}},itemStyle:{barBorderRadius:[0,4,4,0]},data:data1.map(({value:e},a)=>{let t=COLOR[a%COLOR.length];return{value:e,label:{color:"#ffffff"},itemStyle:{color:t}}})}]};
