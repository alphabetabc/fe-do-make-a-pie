app.title="极坐标系下的堆叠柱状图";var getData=function(){for(var t=[],a=0;a<24;++a)t.push(Math.floor((a+10)*Math.random()));return t};option={angleAxis:{type:"category",data:function(){for(var t=[],a=0;a<24;++a)t.push(a+":00");return t}(),z:10},radiusAxis:{},polar:{},series:[{type:"bar",data:getData(),coordinateSystem:"polar",name:"A",stack:"a"},{type:"bar",data:getData(),coordinateSystem:"polar",name:"B",stack:"a"},{type:"bar",data:getData(),coordinateSystem:"polar",name:"C",stack:"a"}],legend:{show:!0,data:["A","B","C"]}};
