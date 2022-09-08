const data={title:"test",legend:["邮件营销","联盟广告","视频广告"],symbol:"%",color:["#6D83BC","#bbb","#8E96A5","#8CA6D7","#AAA38E","#786659","#939347"],yAxis:[[50,35,10,12,1],[35,55,40,18,90],[15,10,50,70,9]],xAxis:["只想要你知道","遥不可及的你","只要平凡","时间飞行","对你太想念"]};let{title,color,xAxis,symbol,yAxis,legend}=data;function utilNumDecimal(o){if(o==0)return"0.0";if(!o)return"-";if(isNaN(o))return"--";let t=(Math.round(o*10)/10).toString(),e=t.indexOf(".");for(e<0&&(e=t.length,t+=".");t.length<=e+1;)t+="0";return t}let seriesData=[];xAxis.forEach((o,l)=>{let t=legend[l];seriesData.push({name:t,type:"line",stack:"总量",symbol:"circle",symbolSize:5,label:{normal:{show:!1}},areaStyle:{normal:{}},lineStyle:{normal:{color:color[l]},borderColor:"#f0f"},itemStyle:{normal:{color:color[l]}},data:yAxis[l]})}),option={backgroundColor:"#fff",title:{show:!1,text:title,x:"4%",top:"4%",textStyle:{color:"#4D5562",fontSize:"16",fontWeight:"normal"}},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(o){let l="",t=[];for(var e of o)l=e.name.replace(/\n/g,"").concat("<br/>"),t.push(e.data==="null"||e.data===null?`<span style="height: 10px;width: 10px;display: inline-block;border-radius: 50%;background:${color[e.seriesIndex]}"></span>${e.seriesName}：无数据<br/>`:`<span style="height: 10px;width: 10px;display: inline-block;border-radius: 50%;background:${color[e.seriesIndex]}"></span>${e.seriesName}：${utilNumDecimal(e.data)}${symbol}<br/>`);return l+t.join("")}},legend:{icon:"rect",data:legend,itemWidth:10,itemHeight:10,itemGap:12,borderRadius:4,textStyle:{fontSize:12,color:"#414957"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:xAxis,axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#F1F3F5",type:"solid"}},axisLabel:{show:!0,interval:"0",textStyle:{color:"#687284",align:"center",whiteSpace:"wrap",lineHeight:12,height:50,fontSize:10}}},yAxis:{type:"value",axisLine:{show:!0,lineStyle:{color:"#F1F3F5",type:"solid"}},axisTick:{show:!1},axisLabel:{show:!0,formatter:"{value}"+symbol,textStyle:{color:"#687284"}},splitLine:{show:!1}},series:seriesData};