option={backgroundColor:"#fff",title:{text:"企业对学历的最低要求情况----数据来自智联招聘",left:"center",top:"2%"},tooltip:{formatter:function(r){console.log(r);for(var a=r.data,t=a[a.length-1]+"<br>",n=["不限","大专","本科","硕士","博士"],e=0;e<a.length-1;e++)t+=n[e]+":"+a[e]+"<br>";return t}},legend:{data:["预算分配"],selectedMode:!1,show:!1},radar:{shape:"circle",nameGap:20,indicator:[{name:"不限",max:56e5},{name:"大专",max:56e5},{name:"本科",max:56e5},{name:"硕士",max:56e5},{name:"博士",max:56e5}]},dataset:{source:[["不限","大专","本科","硕士","博士"],[3235507,5590240,2999865,103130,9091,"预算分配"]]},series:[{type:"radar",radarIndex:0,name:"预算分配",label:{show:!0}}]};
