app.title="堆叠条形图",option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["重点国家","敏感国家","全部国家"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:["嘉定","金山","黄埔","静安","闵行","青浦","浦东"]},series:[{name:"重点国家",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[2,3,4,5,6,7,9]},{name:"敏感国家",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[5,2,3,4,5,7,9]},{name:"全部国家",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[22,34,45,55,66,77,88]}]};
