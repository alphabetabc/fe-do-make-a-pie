var sum=5432,num=578,v=num/sum*100;function toDecimal2(r){var t=parseFloat(r);if(isNaN(t))return!1;var n=Math.round(r*100)/100,a=n.toString(),e=a.indexOf(".");for(e<0&&(e=a.length,a+=".");a.length<=e+2;)a+="0";return a}var f=toDecimal2(v);option={backgroundColor:"#ffffff",title:{text:"检查企业违规率"},tooltip:{formatter:"{a} <br/>{b} = {c}%"},series:[{name:"违规率计算公式=（企业违规数/检查数）*100%",type:"gauge",startAngle:180,endAngle:0,min:0,max:100,radius:"80%",center:["50%","65%"],axisLine:{show:!0,lineStyle:{width:30,shadowBlur:0,color:[[.3,"#C23531"],[.7,"#63869e"],[1,"#91c7a1"]]}},itemStyle:{normal:{shadowBlur:10}},detail:{formatter:"{value}%"},data:[{value:f,name:"违规率"}]}]};
