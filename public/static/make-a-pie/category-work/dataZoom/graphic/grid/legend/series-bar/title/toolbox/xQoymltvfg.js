let dataArr=[{测试1:24,测试2:12,测试3:67,测试4:54,测试5:23,测试6:56,Title:"表头1"},{测试1:24,测试2:78,测试3:24,测试4:22,测试5:24,测试6:56,Title:"表头2"},{测试1:24,测试2:12,测试3:78,测试4:66,测试5:87,测试6:56,Title:"表头3"},{测试1:24,测试2:54,测试3:35,测试4:75,测试5:54,测试6:56,Title:"表头4"},{测试1:24,测试2:87,测试3:25,测试4:57,测试5:24,测试6:56,Title:"表头5"},{测试1:24,测试2:75,测试3:24,测试4:35,测试5:24,测试6:56,Title:"表头6"},{测试1:24,测试2:77,测试3:57,测试4:85,测试5:24,测试6:56,Title:"表头7"},{测试1:24,测试2:7,测试3:75,测试4:12,测试5:24,测试6:56,Title:"表头8"}],tableHead=[];for(var e=0;e<dataArr.length;e++)tableHead.push(dataArr[e].Title);let totalArr=[];var letftTitle=["测试1","测试2","测试3","测试4"];function SeriesData(){let r=[];for(var t=0;t<letftTitle.length;t++){let n=[];for(var l=0;l<tableHead.length;l++){let i=dataArr.find(o=>o.Title==tableHead[l]);if(Object.keys(i).find(o=>o==letftTitle[t])){let o=i[Object.keys(i).find(h=>h==letftTitle[t])];n.push(o)}}totalArr.push(n);let a={name:letftTitle[t],type:"bar",label:{show:!0,position:"top"},yAxisIndex:0,data:n};r.push(a)}return r}function fucIcon(){let r={};for(var t=0;t<letftTitle.length;t++)r[t]={fontSize:20,color:color[t]};return r}function ForName(r){let t="";for(var l=0;l<r.length;l++)t+="{"+l+"|●}"+r[l]+`
`;return t}function getTableLine(r){for(var t=[],l=letftTitle.length*30+65,n=30,a=0;a<r;a++)t.push({type:"line",bottom:l-a*n,right:80,style:{fill:"#333"},shape:{x1:0,y1:0,x2:2e3,y2:0}});return t}var lineList=getTableLine(letftTitle.length+1);function DrawTable(r){let t="";t+="{table|"+r+`}
{table|`;for(let l=0;l<totalArr.length;l++)t+=totalArr[l][l]+`}
{table|`;return t+="}",t}let color=["#5470c6","#fac858","#73c0de","#ee6666","#3ba272","#fc8452","#9a60b4","#ea7ccc"];option={color,legend:{orient:"horizontal",top:10,data:letftTitle},title:[{text:ForName(letftTitle),bottom:45-letftTitle.length,left:0,textStyle:{lineHeight:30,fontSize:13,fontWeight:"normal",formatter:function(r){return"{table|"+r+"}"},rich:fucIcon()}}],grid:{bottom:letftTitle.length*30+100,left:100,right:80,top:50},toolbox:{show:!0,feature:{saveAsImage:{}}},dataZoom:{show:!0,realtime:!0,start:0,end:50},xAxis:[{type:"category",boundaryGap:!0,data:tableHead,axisTick:{length:letftTitle.length*30+35},axisLabel:{formatter:function(r,t){for(var l=0,n=0;n<tableHead.length;n++)r==tableHead[n]&&(l=n);return DrawTable(r)},rich:{table:{height:30,lineHeight:30,align:"center",verticalAlign:"bottom"}}}}],yAxis:[{type:"value",scale:!0,minInterval:1,splitLine:{show:!1},min:function(r){return Math.max(r.min-10,0)}}],series:SeriesData(),graphic:lineList};