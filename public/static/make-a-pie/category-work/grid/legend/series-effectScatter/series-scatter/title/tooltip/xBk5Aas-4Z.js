var uploadedDataURL="/asset/get/s/data-1522024906757-SymAbpBqz.json";app.title="笛卡尔坐标系上的热力图";for(var time=[],year=2012;year<=2018;year++)for(var month=1;month<=12;month++)time.push(year+"."+month);var branches=[],repoData=[],tagData=[],whereWeAre=[];function getReleases(){$.get(uploadedDataURL,function(e){e=JSON.parse(e);var t={};e.map(function(f){var a=releaseInfo(f);a!==!1&&(t.hasOwnProperty(a.branch)||(t[a.branch]={}),t[a.branch].hasOwnProperty(a.time)||(t[a.branch][a.time]=[]),t[a.branch][a.time].push(a))}),branches=_.keys(t).sort(),console.log(branches),console.log(time);for(var r in time){var i=time[r];for(var s in branches){var o=branches[s];if(!(o<"1.9")&&t[o].hasOwnProperty(i)){var l=t[o][i].length;if(l==1){var n=t[o][i][0];n.isTag?n.name=="2.2.3"?whereWeAre.push([parseInt(r),parseInt(s),1,n.name]):tagData.push([parseInt(r),parseInt(s),1,n.name]):n.name=="2.3.12"?whereWeAre.push([parseInt(r),parseInt(s),1,n.name]):repoData.push([parseInt(r),parseInt(s),1,n.name])}else repoData.push([parseInt(r),parseInt(s),t[o][i].length,""])}}}console.log(JSON.stringify(repoData)),myChart.setOption(option)})}getReleases();function releaseInfo(e){var t=e[1].match(/^(\d+\.\d+)\./),r=new Date(Date.parse(e[0]));return t?{branch:t[1],name:e[1],date:e[0],time:r.getFullYear()+"."+(r.getMonth()+1),isTag:e[2]=="tag"}:!1}var now=new Date;option={title:{text:"TGraph Development among the Releases of Neo4j",subtext:"Data from Github "+now.getFullYear()+"."+(now.getMonth()+1),link:"https://github.com/neo4j/neo4j/releases"},color:["#40c1BE","#fec42c","#dd4444"],legend:{data:["Release","Tag","We Are Here"],left:"right"},tooltip:{position:"top",formatter:function(e){return e.value[2]==1?"Releases: "+e.value[3]+" at "+time[e.value[0]]:e.value[2]+" releases in "+branches[e.value[1]]+" on "+time[e.value[0]]}},grid:{left:2,bottom:10,right:10,containLabel:!0},xAxis:{type:"category",data:time,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:branches,axisLine:{show:!0}},series:[{name:"Release",type:"scatter",symbolSize:function(e){return e[2]?e[2]*4+8:0},showEffectOn:"click",rippleEffect:{brushType:"stroke"},data:repoData},{name:"Tag",type:"scatter",symbolSize:function(e){return e[2]?e[2]*4+8:0},rippleEffect:{brushType:"stroke"},showEffectOn:"click",data:tagData},{name:"We Are Here",type:"effectScatter",symbolSize:function(e){return e[2]?e[2]*4+8:0},showEffectOn:"click",itemStyle:{normal:{shadowBlur:6,shadowColor:"#333"}},zlevel:1,data:whereWeAre}]};