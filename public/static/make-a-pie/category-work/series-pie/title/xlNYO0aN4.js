var data=333,color=getDayColor(data);function getDayColor(e){if(e<=50)return"#34e1ab";if(e<=55)return"#f8f430";if(e<=60)return"#f89e30";if(e<=65)return"#fa4b53";if(e>65)return"#c43139"}function getNightColor(e){if(e<=40)return"#34e1ab";if(e<=45)return"#f8f430";if(e<=50)return"#f89e30";if(e<=55)return"#fa4b53";if(e>55)return"#c43139"}option={title:{top:"40%",left:"center",textStyle:{color:"#fff",fontSize:18}},color:[color],series:[{type:"pie",center:["50%","50%"],radius:["48%","50%"],hoverAnimation:!1,itemStyle:{shadowColor:color,shadowBlur:20},data:[{name:"",value:data,label:{show:!0,position:"center",color,fontSize:38,fontWeight:"bold",formatter:function(e){return data}}}]}]};
