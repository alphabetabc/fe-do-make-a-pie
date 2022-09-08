option={title:{text:"带阴影圆环",top:"10%",textStyle:{color:"#333333",fontWeight:500,fontSize:16}},color:["#35B0FF","#857BFF","#FF7474"],tooltip:{trigger:"item",triggerOn:"mousemove",confine:!0,backgroundColor:"rgba(51,51,51,0.9)",borderRadius:4,borderColor:"rgba(51,51,51,0.9)",formatter:e=>`
                   <div style="margin-bottom: 4px">
                        ${e.marker}${e.name}
                   </div>
                   <div style="margin-bottom: 4px">
                        人数：${e.data.value} 人
                   </div>
                   <div style="margin-bottom: 4px">
                        占比：${e.percent} %
                   </div>
                   `,textStyle:{color:"#F2F2F2",fontSize:12}},series:[{top:"10%",name:"访问来源",type:"pie",radius:["15%","50%"],avoidLabelOverlap:!1,width:"100%",label:{alignTo:"edge",formatter:e=>e.name+`
`+e.data.value+` 人
`+e.percent+"%",lineHeight:18,edgeDistance:1},labelLayout:e=>{const l=e.labelRect.x<myChart.getWidth()/2,t=e.labelLinePoints;return t[2][0]=l?e.labelRect.x:e.labelRect.x+e.labelRect.width,{labelLinePoints:t}},data:[{value:435,name:"在租"},{value:635,name:"空置"},{value:445,name:"合同纠纷"}]},{top:"10%",radius:["15%","25%"],type:"pie",emphasis:{show:!1,label:{show:!1},labelLine:{show:!1}},tooltip:{show:!1},data:[{value:1,itemStyle:{color:"rgb(51,51,51,0.2)"}}]}]};
