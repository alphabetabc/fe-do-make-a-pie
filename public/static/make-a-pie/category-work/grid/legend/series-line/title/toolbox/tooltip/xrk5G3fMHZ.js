function f_dbqh(a,t){return a?(Math.pow(1+a,t)-1)/a:t}function f_debx(a,t,e){return t=t/12,e=e*12,a*t*Math.pow(1+t,e)/(Math.pow(1+t,e)-1)}var map=["首付及贷款","房价","房租"],data0=[],data1=[],data2=[],data3=[];function runData(){var a={fj_dz:.04,tz_ll:.04,fj:200,sf:.3,dk_ll:.049,dk_nx:30,zj_bl:.04,zj_dz:0,sjall:35};a.nfd=f_debx(a.fj*(1-a.sf),a.dk_ll,a.dk_nx)*12;for(var t=0;t<a.sjall;t++){var e=a.fj*Math.pow(1+a.fj_dz,t);a.zc_fd=a.nfd*(t>30?30:t),a.sy_fz=e*a.zj_bl*f_dbqh(a.zj_dz,t),data0.push(t),data1.push(~~(-a.zc_fd-a.fj*a.sf)),data2.push(~~e),data3.push(~~a.sy_fz)}}runData(),option={title:{text:"房价构成"},tooltip:{trigger:"axis"},legend:{data:["首付及贷款","房价","房租"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:data0}],yAxis:[{type:"value"}],series:[{name:"首付及贷款",type:"line",stack:"总量",areaStyle:{normal:{}},label:{normal:{show:!0,position:"top"}},data:data1},{name:"房价",type:"line",stack:"总量",areaStyle:{normal:{}},label:{normal:{show:!0,position:"top"}},data:data2},{name:"房租",type:"line",stack:"总量",areaStyle:{normal:{}},label:{normal:{show:!0,position:"top"}},data:data3}]};
