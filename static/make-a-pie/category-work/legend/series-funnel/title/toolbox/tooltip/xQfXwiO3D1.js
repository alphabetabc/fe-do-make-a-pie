var value=[987,634,413,312,123],temp=0;option={title:{text:"流量TOP5"},tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b} : {c} MB"},toolbox:{feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},legend:{data:["TOP1","TOP2","TOP3","TOP4","TOP5"]},series:[{name:"流量",type:"funnel",left:"20%",width:"60%",label:{show:!0,color:"#000000",formatter:function(){for(var e in value)if(console.log(value[e]),e==temp)return temp++,value[e]+" MB"}},labelLine:{show:!0},itemStyle:{opacity:1},emphasis:{label:{position:"inside"}},data:[{value:100,name:"TOP1",itemStyle:{color:"#4672F7"}},{value:80,name:"TOP2",itemStyle:{color:"#4C9DFF"}},{value:60,name:"TOP3",itemStyle:{color:"#36DC88"}},{value:40,name:"TOP4",itemStyle:{color:"#FBC71B"}},{value:20,name:"TOP5",itemStyle:{color:"#F9A646"}}]}]};
