var data=[128,64,32,16,8];option={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"horizontal",x:"center",width:"80%",icon:"circle",data:["Chrome","Firefox","Safari","IE9+","IE8-"]},calculable:!1,series:function(){for(var a=[],e=0;e<30;e++)a.push({name:"浏览器（数据纯属虚构）",type:"pie",hoverAnimation:!1,startAngle:90+e*2,itemStyle:{normal:{label:{show:e>28,formatter:"{d}%"},labelLine:{show:e>28,length:35}}},radius:[e*6+60,e*6+64],data:[{value:data[0],name:"Chrome"},{value:data[1],name:"Firefox"},{value:data[2],name:"Safari"},{value:data[3],name:"IE9+"},{value:data[4],name:"IE8-"}]});return a}()};
