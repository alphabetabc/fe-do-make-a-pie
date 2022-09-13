var uploadedDataURL="/asset/get/s/data-1551702964926-4Wi6tEpVh.csv",pi=3.141592653589793,a=6378245,ee=.006693421622965943,x_pi=3.141592653589793*3e3/180;function transformLat(t,e){var r=-100+2*t+3*e+.2*e*e+.1*t*e+.2*Math.sqrt(Math.abs(t));return r+=(20*Math.sin(6*t*pi)+20*Math.sin(2*t*pi))*2/3,r+=(20*Math.sin(e*pi)+40*Math.sin(e/3*pi))*2/3,r+=(160*Math.sin(e/12*pi)+320*Math.sin(e*pi/30))*2/3,r}function transformLon(t,e){var r=300+t+2*e+.1*t*t+.1*t*e+.1*Math.sqrt(Math.abs(t));return r+=(20*Math.sin(6*t*pi)+20*Math.sin(2*t*pi))*2/3,r+=(20*Math.sin(t*pi)+40*Math.sin(t/3*pi))*2/3,r+=(150*Math.sin(t/12*pi)+300*Math.sin(t/30*pi))*2/3,r}function wgs2gcj(t,e){var r=transformLat(e-105,t-35),s=transformLon(e-105,t-35),n=t/180*pi,i=Math.sin(n);i=1-ee*i*i;var o=Math.sqrt(i);r=r*180/(a*(1-ee)/(i*o)*pi),s=s*180/(a/o*Math.cos(n)*pi);var c=t+r,m=e+s,h=[c,m];return h}function gcj2bd(t,e){var r=e,s=t,n=Math.sqrt(r*r+s*s)+2e-5*Math.sin(s*x_pi),i=Math.atan2(s,r)+3e-6*Math.cos(r*x_pi),o=n*Math.cos(i)+.0065,c=n*Math.sin(i)+.006;return[c,o]}function wgs2bd(t,e){var r=wgs2gcj(t,e),s=gcj2bd(r[0],r[1]);return s}var convertData=function(t){var e={education:[],hospital:[],scope:[],shopping:[]},r=t.split(`
`);for(var s in r)if(!(s<1)){var n=r[s].split(",");n[0]&&(n[0]=n[0].slice(1,n[0].length-1),n[1]=n[1].slice(1,n[1].length-1),e[n[0]].push({name:n[1],value:[parseFloat(n[4]),parseFloat(n[3]),parseInt(n[2])]}))}return console.log(e),e},max=2143,min=1,maxSize4Pin=50,minSize4Pin=10,option={bmap:{roam:!0},tooltip:{trigger:"item",formatter:function(t){console.log(t);var e="地点:"+t.name+"<br>排名:"+(t.dataIndex+1)+"<br>类型:"+t.seriesName+"<br>客流:"+t.value[2];return e}},title:{text:"老人出行POI兴趣点分析",left:"center",textStyle:{color:"#fff"}},legend:{selectedMode:"multiple",orient:"vertical",y:"center",x:"left",data:["学校","医院","公园","购物"],textStyle:{color:"black"}},color:["green","gray","red","brown"],series:[{name:"学校",type:"scatter",coordinateSystem:"bmap",data:[],symbolSize:function(t){return t[2]/100<1?5:t[2]/100>10?10:t[2]/100},symbol:"triangle",label:{normal:{formatter:"{b}",position:"right",show:!1},emphasis:{show:!0}}},{name:"医院",type:"scatter",coordinateSystem:"bmap",data:[],symbolSize:function(t){return t[2]/100<1?5:t[2]/100>10?10:t[2]/100},symbol:"diamond",label:{normal:{formatter:"{b}",position:"right",show:!1},emphasis:{show:!0}}},{name:"公园",type:"scatter",coordinateSystem:"bmap",data:[],symbolSize:function(t){return t[2]/100<20?5:t[2]/100>20?20:t[2]/100},symbol:"roundRect",label:{normal:{formatter:"{b}",position:"right",show:!1},emphasis:{show:!0}}},{name:"购物",type:"scatter",coordinateSystem:"bmap",data:[],symbol:"pin",symbolSize:function(t){return console.log(t),t[2]/100<15?15:t[2]/100>15?20:t[2]/100},label:{normal:{formatter:function(t){return t.dataIndex+1+":"+t.name},position:"right",show:!0},emphasis:{show:!0}}}]};$.ajax({url:uploadedDataURL,dataType:"text",method:"GET",success:function(t){var e=convertData(t);option.series[0].data=e.education,option.series[1].data=e.hospital,option.series[2].data=e.scope,option.series[3].data=e.shopping,myChart.setOption(option);var r=myChart.getModel().getComponent("bmap").getBMap();r.disableDoubleClickZoom(),r.centerAndZoom("厦门",13)}});