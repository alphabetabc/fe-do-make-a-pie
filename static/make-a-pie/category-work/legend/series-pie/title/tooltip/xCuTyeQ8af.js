const seriesData=[{value:1048,name:"A"},{value:735,name:"B"},{value:580,name:"C"},{value:484,name:"D"},{value:300,name:"E"},{value:300,name:"缺口"}];option={title:{text:"有缺口的饼图/扇环",left:"center",top:"10%"},color:["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","rgba(0,0,0,0)"],tooltip:{show:!0,trigger:"item",formatter:function(e){return e.dataIndex===seriesData.length-1?"":'<div style="display: flex; align-items: center; gap: 5px; line-height: 1rem"><div style="width: 10px; height: 10px; border-radius: 10px; background-color:'+e.color+`; fontSize: 20px"></div>${e.name}：${e.value}
      </div>`}},legend:{show:!1},series:[{name:"Access From",type:"pie",radius:"50%",data:seriesData,label:{show:!0,formatter:function(e){return e.dataIndex===seriesData.length-1?"":`${e.name}：${e.value}`}},itemStyle:{borderColor:"#fff",borderWidth:2}}]};
