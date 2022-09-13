var totalData=[{level:"低",ageIndex:"30-39岁",value:5546},{level:"高",ageIndex:"60-69岁",value:12957},{level:"中",ageIndex:"60-69岁",value:51984},{level:"中",ageIndex:"15-19岁",value:7},{level:"低",ageIndex:"70-79岁",value:461},{level:"中",ageIndex:"70-79岁",value:38182},{level:"高",ageIndex:"15-19岁",value:3},{level:"中",ageIndex:"50-59岁",value:14993},{level:"中",ageIndex:"20-29岁",value:185},{level:"低",ageIndex:"60-69岁",value:48335},{level:"高",ageIndex:"40-49岁",value:426},{level:"高",ageIndex:"50-59岁",value:3402},{level:"中",ageIndex:"30-39岁",value:1072},{level:"低",ageIndex:"80岁以上",value:9},{level:"高",ageIndex:"20-29岁",value:29},{level:"中",ageIndex:"40-49岁",value:2126},{level:"高",ageIndex:"80岁以上",value:14304},{level:"低",ageIndex:"15-19岁",value:81},{level:"高",ageIndex:"30-39岁",value:217},{level:"低",ageIndex:"20-29岁",value:939},{level:"低",ageIndex:"50-59岁",value:47775},{level:"高",ageIndex:"70-79岁",value:12111},{level:"中",ageIndex:"80岁以上",value:17282},{level:"低",ageIndex:"40-49岁",value:8341}],orderTotalData=["高","中","低"],riskMap={high:totalData.filter(e=>e.level===orderTotalData[0]),middle:totalData.filter(e=>e.level===orderTotalData[1]),low:totalData.filter(e=>e.level===orderTotalData[2])},ageGroup=["0岁","1-4岁","5-9岁","10-14岁","15-19岁","20-29岁","30-39岁","40-49岁","50-59岁","60-69岁","70-79岁","80岁以上"],ageGroupReverse=ageGroup.slice(0).reverse(),riskAgeMap={high:[],middle:[],low:[]};ageGroupReverse.forEach(e=>{var l=0;riskMap.high.forEach(a=>{a.ageIndex===e&&(l=a.value)}),riskAgeMap.high.push(l);var r=0;riskMap.middle.forEach(a=>{a.ageIndex===e&&(r=a.value)}),riskAgeMap.middle.push(r);var v=0;riskMap.low.forEach(a=>{a.ageIndex===e&&(v=a.value)}),riskAgeMap.low.push(v)});var maxLst=[],sortDesc=function(e,l){return l-e},riskAgeMapBeforeSort=riskAgeMap;maxLst.push(riskAgeMap.high.sort(sortDesc)[0]),maxLst.push(riskAgeMap.middle.sort(sortDesc)[0]),maxLst.push(riskAgeMap.low.sort(sortDesc)[0]);for(var max=maxLst.sort(sortDesc)[0],labelData=[],indicator=[],i=0;i<ageGroup.length;++i)labelData.push({value:1,name:ageGroup[i],tooltip:{formatter:function(e){return""}}}),indicator.push({name:ageGroup[i],max});option={title:{text:"不同等级的年龄分布",left:"center",textStyle:{fontSize:18,fontWeight:700},zlevel:10},tooltip:{trigger:"item",position:["50%","20%"],formatter:e=>{var l="",r=[...e.value],v=[...ageGroupReverse];return r.length&&(l+=e.name,r.forEach((a,t)=>{l+=`<br/>${v[t]} : ${Number(a).toLocaleString()}`})),l}},legend:{data:orderTotalData,left:"left",orient:"vertical",zlevel:10,selected:{高:!0,中:!1,低:!1}},radar:{shape:"circle",scale:!0,indicator:indicator.reverse(),center:["50%","50%"],radius:"60%",startAngle:105,name:{show:!0,color:"transparent"},axisLine:{lineStyle:{color:"rgba(65, 217, 199, 1)",opacity:.2}},splitLine:{lineStyle:{color:"rgba(65, 217, 199, 1)",opacity:.2}},splitArea:{areaStyle:{color:"rgba(65, 217, 199, 0.1)",opacity:1,shadowBlur:45,shadowColor:"rgba(0,0,0,.5)",shadowOffsetX:0,shadowOffsetY:15}}},series:[{type:"radar",data:[{value:riskAgeMapBeforeSort.low,name:orderTotalData[2]},{value:riskAgeMapBeforeSort.middle,name:orderTotalData[1]},{value:riskAgeMapBeforeSort.high,name:orderTotalData[0]}],zlevel:2,z:4},{type:"pie",data:labelData,radius:["65%","85%"],zlevel:-1,name:"",itemStyle:{normal:{color:"#22C3AA",borderColor:"white"}},label:{normal:{position:"inside"}}}]};
