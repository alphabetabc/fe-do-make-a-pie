function productHandleTextForLong(r,e=!1,s=`
`){let t=r;var u="",n=20;!e&&t.length>n*2-3&&(t=t.substring(0,n*2-3)+"...");var i=t.length,l=Math.ceil(i/n);if(l>1){for(var a=0;a<l;a++){var o="",b=a*n,p=b+n;o=t.substring(b,p)+s,u+=o}return`${u}`}else return t+s}option={grid:{left:"20%"},tooltip:{formatter:function(r){let e=productHandleTextForLong(r.name,!0,"<br/>");return e+=`
            &nbsp;&nbsp;&nbsp;${r.value[1]}元&nbsp;&nbsp;&nbsp;${r.value[2]}%<br/>
            &nbsp;&nbsp;&nbsp;${r.value[3]}单<br/>
            `,e}},dataset:{dimensions:["product-product","value"],source:[["倍健康重大疾病保险(2019版）",63440,1.31,15],["康乐一生重疾保险",64198.76,1.32,14],["国华财富增值终身寿险（万能型）A 款（2015） 0＜期交保费≤10000",75e3,1.55,9],["君康颐养金生养老年金保险",76e3,1.57,5],["长生长生福重大疾病保险",86663,1.79,11],["优康保终身重大疾病保险",90975,1.87,23],["君康尊享金生年金保险",1e5,2.06,1],["信泰健康无忧重大疾病保险 -- 信泰健康无忧重大疾病保险信泰健康无忧重大疾病保险信泰健康无忧重大疾病保险信泰健康无忧重大疾病保险",123467,2.54,19],["君康多倍宝（至尊版）重大疾病保险 君康多倍宝（至尊版）重大疾病保险君康多倍宝（至尊版）重大疾病保险",333141.4,6.86,65],["长生福多寿年金保险",3170806,65.32,18]]},xAxis:{type:"value"},yAxis:{type:"category",axisLabel:{interval:0,formatter:function(r){let e=productHandleTextForLong(r);return e.indexOf(`
`)>0&&(e=`
${e}`),e}}},series:[{type:"bar",barMaxWidth:"30px",barGap:"15%",barCategoryGap:"20%",label:{show:!0,position:"right"}}]};
