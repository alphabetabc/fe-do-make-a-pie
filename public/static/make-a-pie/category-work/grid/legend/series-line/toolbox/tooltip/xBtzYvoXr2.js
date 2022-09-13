var formulaCalcByFunc=function(a,r){var t=Math.pow(10,r);return parseInt(a*t,10)/t};function gaussFunc(a,r,t,o){return t*math.exp(-((a-r)*(a-r)/o))}function normalDistributionfun(a,r,t){return 1/(Math.sqrt(2*Math.PI)*t)*Math.exp(-1*((a-r)*(a-r))/(2*t*t))}function calcNormallineDta2(a,r){for(var t=[],o=0,e=0,v=0,h=0;h<r.length;h++)o+=r[h],r[h]>v&&(v=r[h],e=h);for(var d=0,u=0,s=!0,m=e;m<r.length;m++)if(r[m]>r[e]-r[e]/10)d+=m,u++;else{s=!1;break}for(var x=!0,g=e-1;g>=0;g--)if(r[g]>r[e]-r[e]/10)d+=g,u++;else{x=!1;break}var c;x||s?c=e:c=d/u;for(var f=0,i=0;i<r.length;i++)f+=Math.pow(i-c,2)*r[i];f/=o-1,f=Math.sqrt(f);for(var p=0;p<r.length;p++){var b=normalDistributionfun(p,c,f);t.push(Math.round(b*o*100)/100)}return t}for(var yData=[53,53,58.5,78,115,154.5,200,300.5,383.5,518,871.5,1382.5,2192.5,3340.5,5249,8979.5,15448,26225,44057.5,71392,109113,159006,224595.5,307191.5,405623,520332,646965.5,785170.5,930962.5,10785725e-1,12271795e-1,1373870,15227235e-1,16716225e-1,18128395e-1,1944963,2068185,21806045e-1,22806855e-1,23611965e-1,24171235e-1,2457786,2483891,2494890,24969435e-1,24988625e-1,25008575e-1,2500175,2501485,2499141,2492862,2478390,24598695e-1,2443707,2430140,24213455e-1,2404805,23775925e-1,2334130,2263164,21635105e-1,20310185e-1,18727395e-1,1698482,1507286,13063815e-1,11148655e-1,938499,771654.5,619227.5,488654.5,379699.5,289925.5,218837.5,165510.5,126806,97552,75560,59062,46304.5,36476,28583,22280.5,16965.5,12631.5,9265.5,6629,4548.5,3091,2102.5,1396.5,921,580,345,203.5,137,87,46,27.5,12,6],xData=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100"],datas2=[],yData2=[],yArr=[],xArr=xData.map(a=>parseInt(a)),sumFuc=(a,r)=>formulaCalcByFunc(a+r,6),len=xArr.length,ysum=yData.reduce(sumFuc,0),n=0;n<yData.length;n++){var y=yData[n]/ysum;yArr.push(y)}var avg=math.mean(yArr);function gaussFit(a,r,t){for(var o=[],e=[],v=0;v<r.length;v++)r[v]>t&&(o.push(a[v]),e.push(r[v]));for(var h=math.matrix(math.log(e)),d=h,u=math.ones([e.length,3]),s=0;s<e.length;s++)u[s][1]=o[s],u[s][2]=o[s]*o[s];for(var m=math.transpose(u),x=math.multiply(math.multiply(math.inv(math.multiply(m,u)),m),d),g=math.subset(x,math.index(2)),c=math.subset(x,math.index(1)),f=math.subset(x,math.index(0)),i=-1/g,p=i*c/2,b=math.exp(f+p*p/i),w=[],M=0;M<r.length;M++)w.push(gaussFunc(a[M],p,b,i));return w}datas2=gaussFit(xArr,yArr,avg);for(var k=0;k<datas2.length;k++){var l=datas2[k]/yArr[k],y=yData[k]*l;yData2.push(y)}var colors=["#7CCD7C","#d14a61","#675bba"];option={color:colors,tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{right:"20%"},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["原数据","正态分布"]},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},data:xData}],yAxis:[{type:"value",name:"原数据",position:"left"},{type:"value",position:"right"}],series:[{name:"原数据",type:"line",animation:!1,showSymbol:!1,itemStyle:{color:"red"},data:yData},{name:"正态分布",type:"line",smooth:!0,data:yData2}]};