var data=[[[-890,.31,222],[-900,.27,372],[-470,.17,1820],[-621,.12,172],[-888,.31,272],[-890,.25,322],[-770,.12,322],[-690,.25,322],[-490,.25,1222],[-610,.25,122],[-190,.25,1322],[-120,.35,122],[-390,.35,222],[-290,.25,322],[890,.25,3322],[590,.15,222],[190,.31,422],[380,.31,422],[290,.11,422],[590,.31,422],[790,.41,422],[790,.31,2422],[490,.21,1422],[390,.25,1422],[690,.29,422],[990,.33,4422],[790,.21,422],[590,.23,422],[650,.37,4422],[590,.13,422],[590,.29,4422],[690,.23,522],[490,.26,1422],[390,.2,722],[190,.19,2422],[222,.26,622],[790,.41,2422]]];option={backgroundColor:new echarts.graphic.RadialGradient(.3,.3,.8,[{offset:0,color:"#f7f8fa"},{offset:1,color:"#cdd0d5"}]),xAxis:{min:-1500,max:1500,name:"价格弹性",nameTextStyle:{padding:[200,0,0,-400]},splitLine:{lineStyle:{type:"dashed"}}},yAxis:{min:-.1,max:.7,name:"单位折扣投入",nameLocation:"middle",nameTextStyle:{padding:[0,0,30,0]},splitLine:{lineStyle:{type:"dashed"}},scale:!0},series:[{data:data[0],type:"scatter",symbolSize:function(e){return Math.sqrt(e[2])},emphasis:{label:{show:!0,formatter:function(e){return e.data[2]},position:"top"}},itemStyle:{shadowBlur:10,shadowColor:"rgba(120, 36, 50, 0.5)",shadowOffsetY:5,color:new echarts.graphic.RadialGradient(.4,.3,1,[{offset:0,color:"#7193D1"},{offset:1,color:"#7193D1"}])}}]};
