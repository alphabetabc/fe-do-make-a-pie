var data=[{value:33310.12,name:"邮件营销"},{value:234.88,name:"联盟广告"},{value:1354444444e-2,name:"视频广告"},{value:1,name:"搜索引擎"},{value:310.12,name:"测试文案1"},{value:234.33,name:"测试文案2"},{value:135.55,name:"测试文案3"},{value:1548,name:"测试文案文字超多"}],color=["#000000","#dedede","#343434","#dfdfdf"];option={title:{text:"饼图标签两端对称效果",subtext:"关键词: [饼图][环形图][引导线距离饼距离][label两端对称][label距离引导线距离]",x:"center"},series:[{type:"pie",radius:["40%","55%"],minAngle:90,label:{normal:{show:!1}},data},{name:"访问来源",type:"pie",minAngle:90,label:{normal:{alignTo:"edge",margin:90,distanceToLabelLine:0,formatter:function(e){return"{a|"+e.name+`}
{hr|}
{d|`+e.value+"}"},rich:{a:{padding:[4,10,0,10],color:"blue"},d:{padding:[0,10,4,10],color:"purple"},hr:{borderWidth:1,width:"100%",height:0,borderColor:" "}}}},labelLine:{lineStyle:{color:"blue"}},itemStyle:{opacity:0},radius:["40%","60%"],data}]};