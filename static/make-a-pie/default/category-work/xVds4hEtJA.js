var uploadedDataURL="/asset/get/s/data-1560952617745-J48vwHZ-j.csv",pi=3.141592653589793,a=6378245,ee=.006693421622965943,x_pi=3.141592653589793*3e3/180;function transformLat(e,t){var r=-100+2*e+3*t+.2*t*t+.1*e*t+.2*Math.sqrt(Math.abs(e));return r+=(20*Math.sin(6*e*pi)+20*Math.sin(2*e*pi))*2/3,r+=(20*Math.sin(t*pi)+40*Math.sin(t/3*pi))*2/3,r+=(160*Math.sin(t/12*pi)+320*Math.sin(t*pi/30))*2/3,r}function transformLon(e,t){var r=300+e+2*t+.1*e*e+.1*e*t+.1*Math.sqrt(Math.abs(e));return r+=(20*Math.sin(6*e*pi)+20*Math.sin(2*e*pi))*2/3,r+=(20*Math.sin(e*pi)+40*Math.sin(e/3*pi))*2/3,r+=(150*Math.sin(e/12*pi)+300*Math.sin(e/30*pi))*2/3,r}function wgs2gcj(e,t){var r=transformLat(t-105,e-35),i=transformLon(t-105,e-35),s=e/180*pi,n=Math.sin(s);n=1-ee*n*n;var o=Math.sqrt(n);r=r*180/(a*(1-ee)/(n*o)*pi),i=i*180/(a/o*Math.cos(s)*pi);var p=e+r,h=t+i,c=[p,h];return c}function gcj2bd(e,t){var r=t,i=e,s=Math.sqrt(r*r+i*i)+2e-5*Math.sin(i*x_pi),n=Math.atan2(i,r)+3e-6*Math.cos(r*x_pi),o=s*Math.cos(n)+.0065,p=s*Math.sin(n)+.006;return[p,o]}function wgs2bd(e,t){var r=wgs2gcj(e,t),i=gcj2bd(r[0],r[1]);return i}var convertData=function(e){var t={education:[],hospital:[],scope:[],shopping:[]},r=e.split(`
`);for(var i in r)if(!(i<1)){var s=r[i].split(",");if(s[0]){var n=wgs2bd(parseFloat(s[1]),parseFloat(s[2]));t[s[3]].push({name:s[0],value:[n[1].toFixed(4),n[0].toFixed(4),parseInt(s[4])]})}}return t},max=86029,min=1,option={tooltip:{trigger:"item"},title:{text:"厦门老人乘公交出行热门起点站热力图",subtext:"2014年5月",textStyle:{color:"blue",fontSize:30},subtextStyle:{fontSize:20},right:"10%"},bmap:{roam:!0},legend:{x:"right",y:"center",orient:"vertical",selectedMode:"single",data:["学校","医院","公园","购物"],color:["blue","green","yellow","red"]},visualMap:{show:!1,top:"top",min:0,max:5,seriesIndex:0,calculable:!0,inRange:{color:["blue","green","yellow","red"]}},series:[{name:"学校",type:"heatmap",coordinateSystem:"bmap",pointSize:5,blurSize:6},{name:"医院",type:"heatmap",coordinateSystem:"bmap",pointSize:5,blurSize:6},{name:"公园",type:"heatmap",coordinateSystem:"bmap",pointSize:5,blurSize:6},{name:"购物",type:"heatmap",coordinateSystem:"bmap",pointSize:5,blurSize:6}]};$.ajax({url:uploadedDataURL,dataType:"text",method:"GET",success:function(e){var t=convertData(e);option.series[0].data=t.education,option.series[1].data=t.hospital,option.series[2].data=t.scope,option.series[3].data=t.shopping,console.log(option.series),myChart.setOption(option);var r=myChart.getModel().getComponent("bmap").getBMap();r.disableDoubleClickZoom(),r.centerAndZoom("厦门",14)}});