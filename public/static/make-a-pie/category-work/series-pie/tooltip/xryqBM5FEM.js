option={tooltip:{trigger:"item",formatter:function(e,n,t){return e.name+" 累计注册 "+e.data.value+" 个,占比 "+e.percent+"%"}},series:[{name:"服务分组大类",type:"pie",selectedMode:"single",radius:[0,"50%"],label:{normal:{position:"inner",formatter:function(e,n,t){return e.name+`

`+e.percent+"%"}}},labelLine:{normal:{show:!1}},color:["#005ca5","#00d3ff"],data:[{name:"邮件分类",value:"20"},{name:"直达分类",value:"60"}]},{name:"分组小类",type:"pie",radius:["57%","70%"],label:{normal:{position:"inner",formatter:function(e,n,t){return e.name+`

`+e.percent+"%"}}},color:["#00d3ff","#005ca5"],data:[{name:"直达",value:"60"},{name:"邮件营销",value:"20"}]}]};
