option={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:[{type:"category",data:["许厂","岱庄","亭南","唐口","新河","双欣","巴彦高勒","高家堡"],axisTick:{alignWithLabel:!0},axisLabel:{formatter:function(e){var t="",i=e.length,a=2,n=Math.ceil(i/a);if(i>a)for(var o=0;o<n;o++){var r="",l=o*a,s=l+a;o==n-1?r=e.substring(l,i):r=e.substring(l,s)+`
`,t+=r}else t=e;return t},textStyle:{color:"#28FF28",fontSize:15,fontFamily:"宋体"}}}],yAxis:[{type:"value",axisLabel:{textStyle:{color:"#28FF28",fontSize:15,fontFamily:"宋体"}}}],series:[{name:"人员总数",type:"bar",stack:"sum",barWidth:"60%",data:["564","455","323","227","436","267","345","177"],itemStyle:{normal:{color:"#FF8C00"}},label:{normal:{fontSize:15,color:"#28FF28",show:!0,position:"top"}}}]};
