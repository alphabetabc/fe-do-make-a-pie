const baifenbi=[.111,.333,.444,.222,.333,.333,.46],bgBar=[1,1,1,1,1,1,1],_baifenbi=[],colors=["#11D0A8","#FF9F01","#781414","#03A6AB","#E8B47B","#F54323","#D011C9"],city=["北京","上海","西安","广州","深圳","重庆","武汉"],richs={};city.forEach((t,e)=>{let a="a"+e;richs[a]={color:colors[e],fontSize:15}}),console.log(richs),baifenbi.forEach((t,e)=>{_baifenbi.push({name:city[e],value:t,itemStyle:{normal:{color:colors[e]}}})}),option={title:{text:"各城市占比",left:"left",top:"0%",textStyle:{fontSize:20}},grid:{left:"2%",bottom:"2%",right:"5%",top:"7%"},xAxis:{show:!1},yAxis:{type:"category",axisLabel:{show:!1},itemStyle:{},axisTick:{show:!1},axisLine:{show:!1},data:city},series:[{show:!0,type:"bar",barGap:"-100%",barCategoryGap:"50%",barWidth:30,itemStyle:{normal:{color:"rgba(14, 26, 36,1)"}},z:1,data:bgBar,label:{normal:{show:!0,position:"insideRight",formatter:function(t){const e=option.series[1].data;let a="";return e.forEach((o,r)=>{if(o.name===t.name){let s="a"+r;a+="{"+s+"| "+t.name+"  "+(baifenbi[t.dataIndex]*100).toFixed(1)+"%}"}}),a},rich:richs}}},{show:!0,type:"bar",barGap:"-100%",barCategoryGap:"50%",barWidth:30,max:1,labelLine:{show:!1},z:2,data:_baifenbi}]};
