var info=[`1天<X<=3天：
亚信2个
济南分院1个
哈尔滨分院3个
`,`3天<X<=10天：
哈尔滨分院3个
济南分院2个
`,`X>10天：
哈尔滨分院3个
济南分院2个`];option={title:{text:"按解决时长展示个数",left:"center"},graphic:[{type:"group",id:"textGroup2",right:1,top:88,position:[10,0],children:[{type:"text",z:100,left:100,style:{text:[`1天<X<=3天：
亚信2个
济南分院1个
哈尔滨分院3个
`,`3天<X<=10天：
哈尔滨分院3个
济南分院2个
`,`X>10天：
哈尔滨分院3个
济南分院2个`].join(`
`),font:"16px cursive",fill:"#333"}}]}],grid:{top:"15%",right:"15%"},toolbox:{feature:{myTool1:{show:!0,title:"数据下载",icon:"path://M330.29984 95.392c0-11.744 14.912-22.048 32-22.048H687.61184c17.024 0 32 10.304 32 22.048v504.544h0.64c0 17.312 14.08 31.36 31.36 31.36v0.64h120.384l-345.696 236-345.76-236h117.76v-0.672a31.328 31.328 0 0 0 31.328-31.328h0.64V95.392z m-270.72 529.952l-0.704 1.024 449.376 306.72 0.672-1.024a30.464 30.464 0 0 0 17.376 5.952 30.464 30.464 0 0 0 17.312-5.952l0.736 1.024 449.28-306.72-0.64-1.024a30.848 30.848 0 0 0 13.984-25.408 31.36 31.36 0 0 0-31.36-31.328v-0.672h-192V95.392c0-47.456-43.072-86.048-96-86.048H362.29984c-52.928 0-96 38.592-96 86.048v472.544H76.95584v0.672a31.36 31.36 0 0 0-31.36 31.328c0 10.752 5.76 19.744 14.016 25.408zM76.95584 1014.016v0.64H975.61184v-0.64a31.36 31.36 0 1 0 0-62.656v-0.672H76.92384v0.64a31.328 31.328 0 1 0 0 62.688",onclick:function(){downloadBugOfResolutionTime()}}}},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{textStyle:{fontSize:10},top:30,left:"15%",data:["哈尔滨分院","济南分院","计费结算中心","亚信","天源迪科","浩鲸科技","研发中心本部"]},xAxis:[{type:"category",data:[1,2,3],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"个数",min:0,axisLabel:{formatter:"{value} 个"}}],series:[{name:"哈尔滨分院",type:"bar",stack:"总量",animation:!1,data:[1,2,3],label:{show:!0,position:"inside",normal:{show:!0,formatter:function(e){return e.value>0?e.value:""}}}},{name:"济南分院",type:"bar",stack:"总量",animation:!1,data:[1,2,3],label:{show:!0,position:"inside",normal:{show:!0,formatter:function(e){return e.value>0?e.value:""}}}},{name:"计费结算中心",type:"bar",stack:"总量",animation:!1,data:[1,2,3],label:{show:!0,position:"inside",normal:{show:!0,formatter:function(e){return e.value>0?e.value:""}}}},{name:"亚信",type:"bar",stack:"总量",animation:!1,data:[1,2,3],label:{show:!0,position:"inside",normal:{show:!0,formatter:function(e){return e.value>0?e.value:""}}}},{name:"天源迪科",type:"bar",stack:"总量",animation:!1,data:[1,2,3],label:{show:!0,position:"inside",normal:{show:!0,formatter:function(e){return e.value>0?e.value:""}}}},{name:"浩鲸科技",type:"bar",stack:"总量",animation:!1,data:[1,2,3],label:{show:!0,position:"inside",normal:{show:!0,formatter:function(e){return e.value>0?e.value:""}}}},{name:"研发中心本部",type:"bar",stack:"总量",animation:!1,data:[1,2,3],label:{show:!0,position:"inside",normal:{show:!0,formatter:function(e){return e.value>0?e.value:""}}}}]};
