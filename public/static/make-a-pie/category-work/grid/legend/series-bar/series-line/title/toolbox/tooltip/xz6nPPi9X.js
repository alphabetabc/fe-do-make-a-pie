option={title:{text:"Annual Revenues",subtext:"",left:"left"},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["Revenue","Hold"]},xAxis:[{type:"category",data:["2017","2018","2019","2020"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"Revenue",min:0,max:15e6,interval:3e6,axisLabel:{formatter:"￥{value}"}},{type:"value",name:"Hold",min:0,max:4,interval:.8,axisLabel:{formatter:"{value}%"}}],series:[{name:"Revenue",type:"bar",data:[116e5,128e5,126e5,12e5]},{name:"Hold",type:"line",yAxisIndex:1,data:[3.8,3.7,3.6,3.7]}]};
