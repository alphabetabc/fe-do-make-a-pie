option={color:["#ffb1bc","#ff737f","#ff4f5c","#C9001B","#AE051C"],tooltip:{trigger:"axis",formatter:function(t){let r=0,e="";for(let a=0;a<t.length;a++)r+=t[a].value;for(let a=0;a<t.length;a++)e=e+'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+t[a].color+';"></span> '+t[a].seriesName+" : "+t[a].value+" ("+(t[a].value/r*100).toFixed(1)+" %)</br>";return e}},xAxis:{name:"月份",type:"category",data:["2019-01","2019-02","2019-03","2019-04"]},yAxis:{name:"張",type:"value",axisLabel:{show:!0,interval:"auto",formatter:"{value}"}},series:[{type:"bar",stack:"總量",name:"全票",barWidth:"40px",data:[30,29,31,33]},{type:"bar",stack:"總量",name:"半票",barWidth:"40px",data:[30,31,39,37]},{type:"bar",stack:"總量",name:"學生票",barWidth:"40px",data:[30,20,30,30]},{type:"bar",stack:"總量",name:"身障票",barWidth:"40px",data:[10,10,10,10]}]};