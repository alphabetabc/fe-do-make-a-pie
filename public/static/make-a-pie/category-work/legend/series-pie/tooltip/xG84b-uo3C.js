var equipment=["华为","中兴","爱立信","索尼","www.remulu.com","www.edir.cn"],project=["华为","中兴","烽火","阿尔卡特","三星","tplink","惠普","戴尔"],colorList=["#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac","#0090ff","#06d3c4","#ffbc32","#2ccc44","#ff3976","#6173d6","#914ce5","#42b1cc","#ff55ac"];option={backgroundColor:"#fff",tooltip:{formatter:function(c){return c.data.type===null?c.data.name+":"+c.value+"个":c.data.type+":"+c.value+"个"}},legend:{data:["话务","传输"]},series:[{name:"招标方式",type:"pie",radius:["40%","55%"],itemStyle:{normal:{color:function(c){return colorList[c.dataIndex]}}},label:{normal:{formatter:function(c){return c.value!=0?c.data.type+":"+c.value+"个":""},show:!0}},data:[{value:135,name:"传输",type:equipment[0]},{value:200,name:"传输",type:equipment[1]},{value:100,name:"传输",type:equipment[2]},{value:50,name:"传输",type:equipment[3]},{value:300,name:"传输",type:equipment[4]},{value:90,name:"传输",type:equipment[5]},{value:310,name:"话务",type:project[0]},{value:234,name:"话务",type:project[1]},{value:35,name:"话务",type:project[2]},{value:100,name:"话务",type:project[3]},{value:40,name:"话务",type:project[4]},{value:400,name:"话务",type:project[5]},{value:100,name:"话务",type:project[6]},{value:20,name:"话务",type:project[7]}]}]};