var YQdata=[{value:335,legendname:"种类01",name:"种类01",itemStyle:{color:"#f06acc"}},{value:310,legendname:"种类02",name:"种类02",itemStyle:{color:"#822e6b"}},{value:234,legendname:"种类03",name:"种类03",itemStyle:{color:"#f3d4a3"}},{value:154,legendname:"种类04",name:"种类04",itemStyle:{color:"#68cc6d"}},{value:335,legendname:"种类05",name:"种类05",itemStyle:{color:"#c2a597"}}],textsum=0,text=0;(function(){for(var e=0;e<YQdata.length;e++)text=YQdata[e].value,textsum+=text;return textsum})(),option={title:[{text:"合计",subtext:textsum+"个",textStyle:{fontSize:20,color:"black"},subtextStyle:{fontSize:15,color:"#8C8C8C"},textAlign:"center",x:"34.5%",y:"46%"}],tooltip:{trigger:"item",formatter:"{b}<br/>数量是：{c}<br/>占比：({d}%)"},legend:{type:"scroll",orient:"vertical",left:"70%",align:"left",top:"middle",textStyle:{color:"#8C8C8C"},height:250,formatter:function(e){for(var a=0,l=0,t=0;t<YQdata.length;t++){a+=YQdata[t].value,e==YQdata[t].name&&(l=YQdata[t].value);var r=(l/a*100).toFixed(2)}return e+"   "+r+"%   "+l+"笔"}},series:[{name:"",type:"pie",center:["35%","50%"],radius:["30%","40%"],clockwise:!1,avoidLabelOverlap:!1,label:{normal:{position:"inner",show:!1}},data:YQdata}]};
