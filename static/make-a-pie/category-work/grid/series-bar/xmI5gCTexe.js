let data=[{value:120,label:"周一"},{value:142,label:"周二"},{value:110,label:"周三"},{value:132,label:"周四"}];option={grid:{top:70,left:33,right:150,bottom:15,containLabel:!0},xAxis:{type:"value",show:!1},yAxis:{show:!0,inverse:!0,type:"category",axisLine:{show:!1}},series:[{name:"label",type:"bar",barWidth:20,yAxisIndex:0,label:{show:!0,position:2,color:"#262C41",fontSize:15},data:data.map(e=>({value:0,label:{formatter(){return e.label}}}))},{name:"value",type:"bar",barWidth:20,barMinHeight:20,yAxisIndex:0,label:{show:!0,position:"right",fontSize:30,offset:[10,0],formatter({value:e}){return`${e}人`}},itemStyle:{barBorderRadius:8},data:data.map(({value:e},t)=>{let a=new echarts.graphic.LinearGradient(1,0,0,1,[{offset:1,color:"rgba(0,244,255,1)"},{offset:0,color:"rgba(0,77,167,1)"}],!1);return{value:e,label:{color:a},itemStyle:{color:a}}})}]};
