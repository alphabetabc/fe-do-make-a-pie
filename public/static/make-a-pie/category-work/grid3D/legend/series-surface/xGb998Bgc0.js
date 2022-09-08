function getParametricEquation(n,h,a,c,i,u){let m=(n+h)/2,l=n*Math.PI*2,f=h*Math.PI*2,t=m*Math.PI*2;a=!1,i=typeof i<"u"?i:1/3;let e=a?Math.sin(t)*.1:0,s=a?Math.cos(t)*.1:0,M=c?1.05:1;return{u:{min:-Math.PI,max:Math.PI*3,step:Math.PI/32},v:{min:0,max:Math.PI*2,step:Math.PI/20},x:function(o,r){return o<l?e+Math.cos(l)*(1+Math.cos(r)*i)*M:o>f?e+Math.cos(f)*(1+Math.cos(r)*i)*M:e+Math.cos(o)*(1+Math.cos(r)*i)*M},y:function(o,r){return o<l?s+Math.sin(l)*(1+Math.cos(r)*i)*M:o>f?s+Math.sin(f)*(1+Math.cos(r)*i)*M:s+Math.sin(o)*(1+Math.cos(r)*i)*M},z:function(o,r){return o<-Math.PI*.5?Math.sin(o):o>Math.PI*2.5?Math.sin(o)*u*.1:Math.sin(r)>0?1*u*.1:-1}}}function getPie3D(n,h){let a=[],c=0,i=0,u=0,m=[],l=typeof h<"u"?(1-h)/(1+h):1/3;for(let t=0;t<n.length;t++){c+=n[t].value;let e={name:typeof n[t].name>"u"?`series${t}`:n[t].name,type:"surface",parametric:!0,wireframe:{show:!1},pieData:n[t],pieStatus:{selected:!1,hovered:!1,k:1/10}};if(typeof n[t].itemStyle<"u"){let s={};typeof n[t].itemStyle.color<"u"&&(s.color=n[t].itemStyle.color),typeof n[t].itemStyle.opacity<"u"&&(s.opacity=n[t].itemStyle.opacity),e.itemStyle=s}a.push(e)}for(let t=0;t<a.length;t++)u=i+a[t].pieData.value,a[t].pieData.startRatio=i/c,a[t].pieData.endRatio=u/c,a[t].parametricEquation=getParametricEquation(a[t].pieData.startRatio,a[t].pieData.endRatio,!1,!1,l,a[t].pieData.value),i=u,m.push(a[t].name);return a.push({name:"mouseoutSeries",type:"surface",parametric:!0,wireframe:{show:!1},itemStyle:{opacity:.1,color:"#E1E8EC"},parametricEquation:{u:{min:0,max:Math.PI*2,step:Math.PI/20},v:{min:0,max:Math.PI,step:Math.PI/20},x:function(t,e){return(Math.sin(e)*Math.sin(t)+Math.sin(t))/Math.PI*2},y:function(t,e){return(Math.sin(e)*Math.cos(t)+Math.cos(t))/Math.PI*2},z:function(t,e){return Math.cos(e)>0?-.5:-5}}}),a.push({name:"mouseoutSeries",type:"surface",parametric:!0,wireframe:{show:!1},itemStyle:{opacity:.1,color:"#E1E8EC"},parametricEquation:{u:{min:0,max:Math.PI*2,step:Math.PI/20},v:{min:0,max:Math.PI,step:Math.PI/20},x:function(t,e){return(Math.sin(e)*Math.sin(t)+Math.sin(t))/Math.PI*2},y:function(t,e){return(Math.sin(e)*Math.cos(t)+Math.cos(t))/Math.PI*2},z:function(t,e){return Math.cos(e)>0?-5:-7}}}),a.push({name:"mouseoutSeries",type:"surface",parametric:!0,wireframe:{show:!1},itemStyle:{opacity:.1,color:"#E1E8EC"},parametricEquation:{u:{min:0,max:Math.PI*2,step:Math.PI/20},v:{min:0,max:Math.PI,step:Math.PI/20},x:function(t,e){return(Math.sin(e)*Math.sin(t)+Math.sin(t))/Math.PI*2.2},y:function(t,e){return(Math.sin(e)*Math.cos(t)+Math.cos(t))/Math.PI*2.2},z:function(t,e){return Math.cos(e)>0,-7}}}),{legend:{left:"50%",top:"center",textStyle:{fontSize:8},data:m,formatter:t=>t},xAxis3D:{},yAxis3D:{},zAxis3D:{},grid3D:{viewControl:{autoRotate:!0},left:"left",width:"50%",show:!1,boxHeight:10},series:a}}option=getPie3D([{name:"性能测试",value:134,itemStyle:{color:"#99D3F3"}},{name:"安全功能",value:156,itemStyle:{color:"#007AFF"}},{name:"功能测试",value:57,itemStyle:{color:"#2563AE"}},{name:"易用性测试",value:51,itemStyle:{color:"#1F9AA7"}},{name:"代码安全",value:11,itemStyle:{color:"#F5B64C"}}],.8);
