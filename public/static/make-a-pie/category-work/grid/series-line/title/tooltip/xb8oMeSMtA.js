var data=[120,132,101,134,90,230,1e5],sum=function(a){var n=0;return a.forEach(r=>{n+=r}),n},avg=function(a){return Math.round(sum(a)/a.length)},rateCache={},findInCache=function(a){for(var n in rateCache){var r=rateCache[n];if(r&&r.out===a)return r}return null},convertData=function(a,n){var r=a>n*2;return r?(rateCache["rc_"+a]={avg:n,orign:a,out:n*2},n*2):a},newData=[],max=Math.max.apply(null,data),min=Math.min.apply(null,[1,4,6,1e3]),avgArray=[];data.forEach(a=>{a===max||a===min||avgArray.push(a)});var arrayAvgMax=Math.max.apply(null,avgArray),arrayAvg=avg(avgArray);data.forEach(a=>{newData.push(convertData(a,arrayAvg))});var newDataMax=Math.max.apply(null,newData);option={title:{text:"折线图"},tooltip:{trigger:"axis",formatter:function(a){var n=a[0].axisValueLabel,r=[];return r.push("<div>"),r.push("<div>"),r.push("<div>"),r.push(n),r.push("</div>"),r.push("<div>"),a.forEach(u=>{var t=u.value,v=findInCache(t);v&&(t=v.orign),r.push("<div>"),r.push(u.marker),r.push(u.seriesName),r.push(":"),r.push(t),r.push("</div>")}),r.push("</div>"),r.push("</div>"),r.join("")}},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value",max:newDataMax,axisLabel:{formatter:function(a,n){return a>=newDataMax?max:a}}},series:[{name:"邮件营销",type:"line",stack:"总量",data:newData}]};