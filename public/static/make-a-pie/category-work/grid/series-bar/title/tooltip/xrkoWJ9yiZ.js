option={title:{text:"time bar chart"},tooltip:{trigger:"item",formatter:function(a){let{name:n,value:o,color:p,seriesName:l}=a;console.log(a);let s=`${n}</br>`,m=o;return l==="平均访问时长"&&(m=function(u){if(isNaN(parseFloat(u)))return"-";let r=Math.ceil(u),e,t,i;return e=t=i=0,i=r%60,r/60>=1&&(t=parseInt(r%3600/60)),t&&(e=parseInt(r/3600)),(e<10?"0"+e:e)+":"+(t<10?"0"+t:t)+":"+(i<10?"0"+i:i)}(o)),s+=`<span style="display: inline-block;margin: 5px;width: 4px;height: 4px; background: ${p}"></span>${l} : ${m}`,s}},xAxis:{data:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},yAxis:{type:"value",axisLabel:{formatter:function(a,n){return Math.ceil(a/60)+"分钟"}}},series:[{name:"平均访问时长",type:"bar",data:[220,182,191,234,290,330,310]}]};
