const res=[{label:"男",value:370},{label:"女",value:263}],border="data:image/png;base64,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",man="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAByCAMAAADzq6aiAAABpFBMVEUAAAAA//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A///ZqXRjAAAAi3RSTlMAAQIDBAYICQoMDQ4RExQWGBkaGxweHyAmJyksLTU4OTo7PD5AQkZHTk9QUVJTVFVYWVpgZGhqa21ucXJzdHZ5fX+AgYKDhoeIi5CRk5WWmZqbn6ChoqOlpqeoqaqsrrW2t7i5uru8vcPFx8jQ0tTX293e4OHi4+Tl5+jr7e7v8PHy8/T2+fr7/P3+d8xxFQAAAmtJREFUaN7t2vlb0zAYB/AAm1zeyKGIByKiQ9zwxgMRhifMCYooh4qgzrMw2awKKhZs80+7jbqkkGzpm/mDz/N+f1rfJZ9nT9ulTVNCiqfu0nTSspJPL9eRUmTnyBp1s/Zgt753/BvlshzS9c7a1BP7nJ53coOXEbt0vPoluinfGzTAJ1SQCbi31xaB9j4weJMKcwsMvhODH6BetS0GnRog2Ewl2Q8ED8vAQ0CwRQa2AMFdMnAP9Kh8EXtLZVBwQgxOgc/DTjF4CgwGDJE3H4D/mbtEoNb4NbbZG9MaYCtfbfQSVXpDdvW013tWq3tRKe/5wbifV8pLcB3dfv3jOmf07wBdRyIDsdH4bZZYLPZ8cXU1NZP5cIeV46P3Brrri2ll4YRDfcR5Eym4ExpeU99JNMq9ps8UELNZ5m01KCjJbRJwhALzUDJA21DQOSgE71Na2p9owMGUELRYA2u2qG7Mcu0dIcifCaSvGNhHTG4LQQQRRBBBBBFEEEG/4C/2/aIKuMDd/gnBt6zBSxXwBdt4LwSjrEGPCniBbdwQPxtdzu/CWhWwJp2fU0qepHb+dvdIO1EBSZt7U2xHZDOfjtxMauEoUQNJW+64mCcKTODDg9FQkKiCJBiKDobVpvhqoI/8Y3AlnclKCcHhbGkYQQQRRBBBBBFEEMH/Brzm6T2ULd3VAs97ekezpX5P6aJP8ICnd+79iw5PqdXvYtk8v1ybu9Gv/MqVPlX4Xes6zfXuXS9d5Upn/K+ePc53nnNXVwNz+dIkYDmuYshdPxvf8rdU5b6Z4cSDoBXC1kcpy5w6xpfaJ00rPX6kQKc/RsXweS7aQLIAAAAASUVORK5CYII=",woman="data:image/png;base64,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",color=["#00FFFF","rgba(196,36,255,1)"],data=[];for(let A=0;A<res.length;A++)data.push({value:res[A].value,name:res[A].label,itemStyle:{normal:{borderWidth:5,shadowBlur:20,borderColor:color[A],shadowColor:color[A]}}},{value:res[0].value/10,name:"",itemStyle:{normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}}});option={backgroundColor:"#030c3b",color,graphic:{elements:[{type:"image",z:3,style:{image:border,width:300,height:300},left:"center",top:"center",position:[100,100]},{type:"image",z:3,style:{image:man,width:85,height:120},left:"36%",top:"center"},{type:"image",z:3,style:{image:woman,width:85,height:120},right:"36%",top:"center"}]},tooltip:{show:!1},toolbox:{show:!1},series:[{name:"",type:"pie",clockWise:!1,radius:[175,180],hoverAnimation:!1,itemStyle:{normal:{label:{show:!0,fontSize:24,formatter(A){return A.name?A.name+`
`+A.value+"人":""}},labelLine:{width:4,length:30,length2:50,show:!0,color:"#00ffff"}}},data}]};
