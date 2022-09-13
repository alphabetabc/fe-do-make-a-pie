var arr=[{name:"零食",value:3e3},{name:"化妆品",value:9300},{name:"服装",value:13200},{name:"家电",value:5600}];option={color:["#9658c3","#6c6be2","#01aebf","#18b794"],series:[{type:"pie",data:arr,label:{show:!0,formatter:function(e){return e.name+"消费"+e.value+`元

占`+e.percent+"%"}},roseType:"radius",selectedMode:"single",selectedOffset:30}]};
