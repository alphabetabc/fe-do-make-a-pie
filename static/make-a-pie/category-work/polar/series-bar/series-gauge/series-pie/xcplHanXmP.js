var getmax=100,getvalue=80;option={angleAxis:{show:!1,max:getmax*360/270,type:"value",startAngle:225,splitLine:{show:!1}},barMaxWidth:20,radiusAxis:{show:!1,type:"category"},polar:{center:["50%","50%"],radius:"120%"},series:[{type:"bar",barGap:"-100%",coordinateSystem:"polar",roundCap:!0,radius:"55%",center:["50%","50%"],z:3,label:{show:!1},labelLine:{show:!1},data:[{value:getvalue}],color:[{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"#F4F5FD"},{offset:.5,color:"#AECFE9"},{offset:1,color:"#7083DB"}]}]},{type:"pie",radius:"53%",center:["50%","50%"],avoidLabelOverlap:!1,z:4,hoverAnimation:!1,label:{show:!1},labelLine:{show:!1},data:[{value:1}],itemStyle:{color:"#ffffff"}},{type:"pie",radius:"65%",center:["50%","50%"],data:[{value:getvalue,itemStyle:{color:"rgba(112, 131, 219, 0.07)"}}],barGap:"-100%",coordinateSystem:"polar",roundCap:!0,z:3},{type:"bar",data:[{value:100,itemStyle:{color:"#7083DB",opacity:.1,borderWidth:0}}],barGap:"-100%",coordinateSystem:"polar",roundCap:!0,z:1},{type:"gauge",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLabel:{show:!1},pointer:{icon:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAEXCAYAAAHw1DBCAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABF6ADAAQAAAABAAABFwAAAACC6bTtAABAAElEQVR4Aey9C3hdx1kuPDPrvq/S3pJsKXbsOI6bSE6a1DS9QBsVcqAppadwjgPldujfUy7llsLfGw3IOim0Pb3w0z6nPC0P/PAcoBDBKZdCgL88yC20QOsmJJaSOK7jWyRb21vSvq77zP/O2tqSLMu25FiOtj1jb621Zs2aNfPOt7755ptvviFEBYWAQmATIfCpTwnrahSHXY1MZu8k8dXI56rkIYSgVyWjzZTJVapRG5kkO3GlFdSv9EH5nGyeB8cI6/7SoYT27r9f8MnJUXHgwAFZoHUX6oqRwQtZf/+bteeqhtkTh/oc3u54NRByX0DIYHTgAOWywOsJ2noSt9NKRD5/JKvT6chBXDaMM1mPkZTd1aW5sy8IwzjEh4eHxPj4+LrQuZJPm46haW4DImGOZ+PY7Xvk4Zcd++T77/xW3Ih6s1kz5zh3WYODI0C9TUvtalz6uO7CoHnomTNH9dmwkhKu6P7Ir37HE+1X/I/3DT3RtDLdLvOdv508boh14ULIugtDyH3MdWNTM/oypuYU2gVpH/vz9k0k0nM7C5H5htFxkMHa0VlnYWTGfczV6hYPGtmR991zsF2Iptei15975+DfEi3IEL9pDyPtetBZV2FaGc+wwCeG6Wh2uyDv/tBR8sGPH2tfkjgKnNAXBiEz68p/XYmTt+3YSUyd0eHX9r9s8e0rTt7xo3f8ACEBq+R2r4t1rJvpFWqROBMF8fiXp56671V9STF+8+Hd5xXn9z9/9E8Nk4Rz1aMg4W3n3bvUxbqQoajnYavCcz29XkQytYtlHFFaqTSj4DX92XX15uuCUb4cnJ6RHcdNc/pUtpm+qUvEXveH3j34b/Lepz43+brqfFSKGZkjuZP1iS+5/tjYg2su0LoLIz/VAwfGtVzOMk5Vtzv5wmzKa1BTjwJqU3xjXaIZus969+74MW//fsIppWvmNldQGECA7mA/uPDWM4/pRatPc+Y9zXWrtL8/jg4fvj1+3et2R+stiET2ygojn8Sz6KPI6Cihg4OtfMbQTwwNTaLXHgEaa0eklZ36qxBQCCgEFAIKAYWAQuClQ+ChR55bszR3qVKuSyC/VEZX454qzMVQvArICMjCMvu1D/AvVpgrF8jlCOHBMTY01EvntJvC7vgFjK2H+YEDUn12ZcL4lSGDgjyKoUr6Ta9EAZwUw+Cgub0fWqzj5qOPSjXLlaF0JYVJCnL69NfMneXjmTA0uz+JsTY7NVckOT31NcTv3z92JfmuX1kkx0pf+cpR3TO1lB+kCm9/523vkDTwvode8UnPrxb67EF76+syulRAXow2Lha/7gfeMD6uFYtla9YlOYvRnlt3ZH5VZt6VN79fo0GfP/N8nswWMJdwn8x7XTS5vsJg0L/zINGDrrTjRFbXyPte+S/La/mh9939L4ERdhW3OHahsE2TKK4nrKswYoSQofQdGgt56r77+l7ZftGX/73SPiXv/LE7/huZN1OnT0+aD+JrW7yxhpN1JR4dHWdxfFonPLK/6zX9n5X5SxXaF/6hlBzl9c7tmYciFlhB6mZNfvYybq1hXYWRmXqeRi1iLub/o2/duni+eBI0WRfpWrxc68m61GiDg8PiG7VnY3PKjdov2Lc3Q/btPV+NRqxM4JaPin377l8X0awLmcn9RKRO1WO9y2mMfuzQvnaBlh9HP/bEPdzwm1u23B5MTq5vMmNdhTlAiejvJ6F7ut4gTXLu1z76+N3LC/LII0fu1oPZufgMaT6TPhuNjKyvMOtqJtnnTE8fiJvNH/EIqRCn1wo+8JEnbiGE6zZhEbFDr1HmruM4rjM9GK9HhSYrte5ZlfHxfyJvelOB33zzF+PBHW/0ny/9e+B4TpMUgFbXTc1STgTZ+stjTDGsi15kYdb16ckH2kFO80gV2sTgGN1P9pMx/BuaVCq0Nj7qqBBQCCgEFAIKAYWAQkAhoBC4DAJXS3t7mdes6fa6hm9ryvEKE332s9LSZvOETQPM9E9uIitVtM+mAeYAXb+l40bS16YBZiMreSV5v8TAQJkPHYbUYySqayho5VFey9+Csv+K9SNXAkj7mZfgpRKEUbx3hEibqC/NHWLW4TyrFXXaxSK3i+vO8ePjZOfONIwye/nEREk8+uh+WI/JIq9f69Su6HqP1xQYSQ0TE4N0aEiq7F7JenvTeqn0gk4ysW6aeVqq8BmHzW01LT0mWjEiNzWjyulK3HjGjO6/fx9vWbVdG4CuETBtKpGTK8d1x3mNccZIG0VSdrzYNwnn9v94z6u/CapIjGdHP/zUHZFOQ57PNgu1c+FM7PnbnG8PZmeTnutFTfCtlXKuAY/B7OX+B/GeEVavn8LM0932dFTPpONGPorjIjUyfY+899WTbVBkwUc+cOfTOo+2mOdqvfPcyuetfOrpxlMpsoNAUz2JqTR8UwkPWms1159uoymGyQUQ0Onj0zlklMO0EzTOOBHpyUKcSz/y0NC/Qm1+SU34r3380Kt9L6ymjLjh5bbX7Jlj4QQpBWSCxGNj+8GHNobvbCQw9IBs1VEpKx0yPc+0Mhkv02AsbWm0a+S9r/jaWtvx1z7+5KtNzqoxadSIkW1OpV0PUzjh9PQ+TANc+bz5pd6/YcBIUocFLvvKmYzupHeZei1MsSDK6QbLjjx016GVhZKzicvDSjP0X/vEE/diynyO2eWGWTEbhULR/8rW3dGj67R3Xv6OS51vKI+ZnOylxewdNHXK1Uw/1PRIGIV8KruyQCtBWXlfXr/1/h2v4lHVoA0bfGYLez6y2dDk+IY17IYCk1TwxHFi27Eg1OI+up/Z+bixsuKSOj74szuSaMtkZCW1yBv/5++f/4amdcVGPgfT/HmSTxYwrMzp6l1vGDBSIBscLGEasI+f07ZFfsRCxlOuG1TdmZL3Byur0NNtJIB85L27Vt4irhsdMiK9nuazPin70cnmSYDTlwh/FyS+ShEbRoqt8h1gjz46QjGVrdXTTxoZOuvo6W4ravpp4tHUyK+88vHL1eO9H/vXfZafrwla8ozUroYTNsLTp48FZ848EMFGaMMk4g0GBqMdMOEHH8RCxvsPsYHpacO1bYNxy6TFHj2ohrgwDSx7MkjA9ZBgPYupccNkEefNmISOF1o09KqRr7skDLZsCaLnv8DPnNkKUOQwISn+uienL9cY8v6GfUrtl8vp/TG07MA0Zt8H3+zPdXc369Ovq5rTzYp2bmbWgmTicv8M5/yFSHdPR7w+5XrWGaL1n7Hpc3N+D50vk2K92fwD7/S2rwXF4s+HUn5ZMBvYEFBk2TecYtoAtY4tQ0JpESCv5SByEj1Lf3+WTk87i2WZ6ncFQYcux0dti4GRkRGxkRRyfjmvOTArX9++XmlLuIjRhlFE+83qqBBQCCgEFAIKAYWAQkAhoBBQCCgEFAIKAYWAQkAhoBBQCCgEFAIKgWuGwEMfOvrUgc9Opa7ZCy/zog2fV7rM+5duC7G3UmpcYAWxlODanm0eYFBvTFouzptcWxgufNumAgbF2zTl2TQFkW0GelEUcyHxyhi4sdwkYdMUZAEPRTGrEwbdNA21aQoigcJSAkUxSxTTWkwhHeDAyAgNlVg+vOQAvYQUswSIXHSBZSiEsZb9DACS9CPBeckAeglejAqj3gekO5GJMSy4kB6Bhskcey5kjE3no1tvJmScyFUn0kvvtTYYalPyNacYSQwHRkcTN8VDQ/tpuexqx8m4nogw4DHHsQiDkBI8p+2n4+OEtayvJAVdW+q5lhQjF22Rlrs4AFI4CoNom+WtqkZik1Uq8NdDaCmfF7vJbIA1Ai4vFGbiw4f7+MDAvlj6DVqwu2s36oYeryHFYPUaKEVSQqHwac06eUy/RfeMik9MnxBLELleIqYmqVm+WbcKhbz+9ZOavndv4sO+TTnXrCGv1Yuwqi1hpqwASjkJUHpue6XuVZ+2YMlqGVFWc23teTiPq1Tm3bu1uBYL+Eg3QxeY9UWFwolwdtaB0fNBrFUawXe1MStOlpPgNaIYQcbHR7FfyCGagNJT1ONzR2wSW7ZtGjaz/fRH3ncbef9P78gb1E/D9tehwrTT6YJp20Ds+TvZ4GAfVseNLLiPXF6FjTnfcIqRBtCSgQIUbXq6qNk2tzztjBXO9zs0N5fSTccZeeiO8/Qwox97el/M674FM/nIrPg2z7qeR0Jy375g4jNjYiPXKbVh3nCKGQVfkdTi+3m867heyZzTm1wzae5siuqavRIUWbCR99xxSKO64xnYR6PZZ1Z4WieDN7PCU0fh8G9/m2o2tFE3GBgB12eDdM/b3kxnrYrmebphNYTDDMN2zLzzo2/Zub/dQiuPP/fOoV9FH55uOk2HOsLMNwz98GwFq+EmmXTN2BICVz519a43EphkGfHQ5H6619/H3GPEsIs5I2JdBotJKnbd9J7d+Q9crCrFbvMtzOCOJRybew2nUnrCHsBGNISkEu+wbevyiz3/YuM3DphErB9B+Sax6Oo0CxxHCzVh6OG8Q7lm/+oHXvHlyxX+Vx+6+581Gju2sMww6DG8vhRWsVS1/jdnE6l5YdhwuWyu6P6GASNlFqw5J4WCSbeGJ/Qeo4bVab7JLNO48/auNW8h85YHbhomBjVjzTJy85HuWynN/2o+oZorqvEaH9owYJKV+GOEZrGRlhA2C3NdWpyyDE4t6wffsuPPV5bP8zk5uMzda/v+PXcWPxzTyKJG1aw7tl6Mdfb88yU2hYUZCVFu0FAB3+zGBbmyhPRnGbGKVA/qGvG5btq+3G7svLB8TeRfwP3sJz+4W+p/F8Or7urd+W/fPPlMEHkG6en283mT3k72YWsYUKUcZ2zAMGrDKEaOnLE+mpGoxnx3RqsHkRYYQv/Au+8ZX6zxRU5+6dfPX1H7vf/ppkfRkTFdT1Ey77J62sAynkmAInnYxoSNAobCOSkZQpmb9SoNAg2ViJgGr61XXg2LxfVYC/x5jfEaK4N3XXlel39yQz+lla/XNANkf/mw/02tLcBWppSOH8xsgQeaJVyMnDYybBTFCLiyhZcBSB1uTmSJw7VYi93YXxUYuZzYtlpFwXiJvPYVuQvrHII7d6eiwOIi3YxEcTZYNa8LH7yymA2jGIjusuCc9B/ipJniTqPBsQI0nj7b/N3+Lal3rCzuh9+za2XU4nXTjb4GZGPiRTwXO/yZhisGiCz6KH4ji+mu5slGUcxCocdB+0VOtIg3KYuiOO3/9h8d/1/rrcAnPj7xs5FI+0FkxEFgx+mKpJZBLtWeG9EjyfJtIDD4lLAgXW4fmO5qYi/QZmSnnEDj8+Gvf/LJ16wVnD/6sxNvolbsiQoJBPUizyuJW27phVZrvJ2FpMyrHjYMGKlQkv6y5VaGjWN3xZUXUkHEz/qh310TLKp88nee+fbL1ebzf/XsA0ePl07FbuAG+bMYn/Mgl7sJSqvdYL3DC4vRL5fLld3fMGBkcSSpD0zXRLn8mHBursVeORsaBgv9euQ1ZmuVD37syX1wT/D1lUUPAv7cw7/++CuPPNc86UVWMzAMX8vs8k9iI1xdX9hQNOEvG6fJ21BZQA7yDhxobVx45gzRT/r/oGf0e42g+SxGhbrVSBEjh3FQ4Bs6eCv+R9QwrWSVvkezQcbkfiV2Q23W9u3t5ZCUiNyKAD+oOCV/Wcd2kCvBv9z1hlIMGCO+/1EitymwrEM80zBjYj4RmaHlk3TZSwvmeudoMxR+I+J6Tdh2tYnzkJsNO6M1o4zvFvlut2o/E5LUTgAyHEm+lTDdFyMrXg4V3N9gipElWJpgwwXDZ4VdVB6gjvMvhgtiqGBb3TzB9sNmMylLEKSE0WfG9kwsZgbnI+v07niu+rtiJ7lPAoOe6NpMo2wwxUhgQDVJlUflBS8Wnbj/zYdix9kS7Ngx7OXJTNB0PN8KoOMNTF/DebExDSbr+n2TJMpXq/FOMhLJmckWKDKbjQ/XgGKWV2LJt0Pbr4NUHwxMH0M55MiKwNGXKw5BNT4wUBPys4EGcBkgG8dsl5dSnl8Diln+SpqYH8qWl3u+y09j7kvHOECCp5DB5NfdvY/P3X8Mcsowl939EpVcO1Bkia8xxSwHafEcZVgpoyXFWhm5+IA6UQgoBBQCCgGFgEJAIaAQUAgoBBQCCgGFgEJAIaAQUAgoBBQCCgGFgEJAIaAQUAgoBBQCCgGFgEJAIaAQUAgoBBQCCgGFgEJAIaAQUAgoBG4gBDaD1fOmgvvRR4X21WePYhUHTMIp+ffffPi2V22qAr7EhbnG6wde4tqu4fWTRO7g3gpwkJRvn6tjCwFFMCsooX9uaZEHOIziwCvwUQSzApDubumbcDEofBahaJ0oQFYAMrl/icMIubJVhfMQUARzHhxwoUvpIocBtSh8VuCjAFkByPJL6RJh+bU6V1/QpWkA3twvneDGu6sAuUSbq1HSheBsmAezC1+1mWPawu1o0gUJvuApgcldNA7gJx2CybDYQ92wrhQWEWgBcl3/Xagrxj5o7pavUlnfkaTS0g1ou/YDd94dJbQhyNTUU0/cLOMXXPgtJBlNXG0tPpCcXFvHJO2yXuvjYp2v9Yuv3ftabnuWv+/BB1uySak0nrhdftuRLPy6Sjc+MgyReWZg5wM5NcDO5GN/hzyXrn327NkHUhsnn/nMMI4yPJj8ffTRR5OR1ZKInGS1kCZJct38uY4JptXNtLnJxMQgLZUm6fDwfaTl58mRO9CQM2dM+nxUYvlqGd6X+9GwA2R+pt5IWpiys/A+d2umEYpcbouoViNRKOwUz5HHyF6rj09P7xPIA4QxBhdtLd9Q8rkW4VyfHOc6JRjpgLAlj8guRzoE6+0dp0fASQ4fzjP9lhIbiGus0TApPDRqpHsXOeed1XK5PMnncqQy3QT1JBzmXLFr9vbAzgivFAvbj4XrxuLmm2+On28+LjKN747LZSKKxUkQzUzCZQYHh+FniyzzoZWQ0HXDba5DglnyHNfe2KsfnuMkoRSL2AKDlFkZ+zuk7F7qWAVqumfgsjzQAr2ipRo6i3KMVqvdp6R/Zd/ns93kzN0kZfDI0uMg5EI0TW7ZvTGpwuOu80Lcyxp8SsvyfDUfT03BnfCiN7pJkXi3XGI51wXRXEcE0+qCJGeR3c/+/fulJ09sePaYdsstXSzu2cVKocaCU3WtzzxlzNRTOk3prEgaumdlmOW5OjE1hu0f6Mgv3/m0bGcZPvzpyaGm24x1noJD3JiHcYRtSFgkXC3KbNMjCv+f8yfO8p4eHjUWOc4Yuqr9seQ0Mo+XymOffPfVDtcJwSwJtq0dYcYxFC5hi68M5JMuZoRcD9y0RnMmy8fzOsFeRZ5r6cRKM1vEeiDqpobw8C/d/UemQVsOLJchjVH23CMf/vp3BoRGTI9APLmQ+DOR0b/Fh7vY2J8rw+GyGVedRnxzlx0X/HwsvTgfgYzTCxlnCIRzAC4hlymOO5bbXAcE05JXJiYmUJf9RHKWr3zlqK7rJaZpNZbJ5DWSy+roQnR4i9ZSwjM9k5o6EwZjuhZyYt60xS781I/e9g/LaGTV03/8ysyPHfy3U89pQvPBa8LQ1PwIHCfDRWjGpl+tYq9C24nTu7LxyZ4tUbE+Jvrn5kR390/ytlwjM8YOhfLQkUTT6QSDTXEEdCpyI1KC3RQxTIZvZLIjxUgTe23GDrMat2s1/oxJhY8f9iuwtuk8LDlaJmVAIaOP/Nydf61ptFe24FoC3hePfPw/7gsZ90RTwLk9jUxS9OzUiSjiXb7vmNhhrhHV4MK8j+yMyuVI+HsrfK772IJD2ZHECS3IRhHMWgC/Smlan+gCsUA3gs0UpWA7w17xijvozMwLxhzP6bZhacSJ9HDKt2gftqfCtpPUt0zb1JyIi9Toe+/60pWW5w8/f+T7v3WqfoaENIo594Wd8gTzAuwlHKX1ajAzuz3s6j0e9et17vu3L3RRNdE78RnsojskrtWOlldav4s916EcRgq4o9J3P7YxHqTd9+9iA9MO4lIsjU3czp3L6I5zxgpAMClwlorZbdq8aWN7FPRJpvXf99/64zfflPrpi4Gy1vhaLfzKJz/5zV+JLcMNaOwZzAHRaJFhYXOFmoCTcw+Css/lLhJVODeX+46AE4Jg2sPuRfg7htsslnitIG2CdIvd0EJZsMmU3OkYMgt0K9q53TrLv2AyO2cSznXKbVMPXSe2LEujwnj4F4f+Cl1Q8SrWI3549KvfGXdnGymNe0EURiIqeiLrBaKMvVhANIZTCFN9VlioPS3uvPOBuFSSPtEhCB9oyzGd0z114Gy1lFmglBuRm+2MyS1s6W1kN8mnd9LeQpo5jgfxpJsZgaEZITYGYVWDGLpuBKE58kt7v3yViUXSnfahkdcetCNq8Qq1qGeZAfdMc65pRHqk2WakFUSd1c8d0bDBMj14cIwle/rhQamFlr9OCh3HYdp7HQ+CWCYne7GPuqvdsrWLnXm+oKdcyCzpqulg5OPyyCaGoQc8tm2qOQ//8p1fxuDkkrPzMXS1//dvHF21/T72gVuJLnfgu0T4tQ8//loNo6eARh4zb2rovBIS6kdETwflai3yiR5ZhXy8F0PuL2F3hSHsvDCCrWtag6bO4DIdyGHaLbYfU8lZWsRXG5+osZQzTyukyYjwWTWMtYhhS7cIO9oyW/vFn9rz0csRy4HfOn5RYpFvfM+Hv0Ue/sTz7Zevehx5391/RVIZvFHXiGjqxNZRnhwzzTpN2TodwFRVcfY0Jjodun/VHDZ/5CW/uE1Y/OQTl10RAXeZGyjRAfJKUuJPskJzN/XNgBKhMyo0ZhHsDK0RjcdNI5e1Xne5ulRqydq1SyZrXGbjSY3RnrzDUrOChUGzohOfRdg/lhMuxeFuSqImq+QCEeknwB1nUJeRDuuQOtxEM1HJ7mi1sefJXVsbCUFBRUfjOEx+b37jjnsuSQVX+eaDb92x3yApYiJfPWY0DH1ar80mnLxZn0P5tuPObVf5rdcuuw7uklqbtZITGExnctjYLSdMMy0C0xY6lCyRBg0bdrX9u/Hp/1gLnHJD16Hb0hdNuueWFJFpLheeP1l9nMckeTexdG4YHOVywEnmsbFsKPLVo4I899zlstm09zutS5IsnMqdfeWWZd39u0TBj4Slv4z7qQYTjRSv0SrXjUzs6yzWQ878ME6ModbSAv/9B6U9zIsLf/+1c/9BeENYtAirPewYjJ2HQS/xzAvY6BGzVpkM9MLFHZicHJRD644LHcdhZJ8jzSUHsaGd3I10Fts2NxrHxenTZ4Xvz8L8ADONZhhDdxZp2J0UskT0yCeO3HstWmb0N7/xKi3AdpaUB4SEkmAiwvyI1lLc7DfiOB4EAQ1zab03llD96LUo1lV9R8cRTGJri01IMckIohlOhMZqd79I3WrHzvZGbNlW3GRe5FaqkVerR4LqQUjD4Fc+fujVVxW5FZk98okn7iUx82BqE5AgE+hmLTaiIDYxLTk/X+KcwWYmH6G8Y2QahC7pRQ6pW9nIz6AzQueUdAnPFZpeacqACUcyw3K53TB+esHwrH7N1kOD8CpMGaiJFa9mzCJLTja+/g27dt3/qsKfLWX34s4OT1be84W/O/6PntcImZHyIwOz141myAayXtXD7HWE2Wu/GTcas9jdssR7e3t5qVRCdwQDK2xo3Xp7Z+hgZFk7kWBQ7CV7XWnQ3X3/5zCX1E2PH+9lO3dmQTwRjKJCLZc1mYhSerNOTCMtDA36mYDDKIGlDRI0zV9+6OUfz6SNyw65W4269DcIxLMjH/3GjzGNhJq0ueJBGBkFX/jVKDT0WHPqoRVvD52cH8OenPfEOexjvzOeniYCVoCYS5LboLYVdjJfRTBL6G7MWYvQoVc/gGmCiUEYeEMvsweKPGtvnt2CeaWqtVsjcYV5DVPLiRN6XcDCztHRfq4RpXu0OHANaPVhD1U3DCPDuMsxs831//q921+/pce5yzRZESaZ85VKNPHFv33+y/ONqEko1DrQB2IX8tinkJF0C5rcJhc+jYxuEvoVL/bsYmwGbtyjGbDAu+s8m1+5q/Kjj+5PbH87Sbu7vAk7lMO0q9C2322ZZUoDqha3+Q5aKAzSKDrNjlarWtZ2tcB0NFAFlHo+Y9zRDbQ3BFNc60zXM1oUNUEJshlNksIx1kKqYWiuxYZoxgKjHoPHuis8HLVYjw3TiIMzFcxAW9w0/RhTSLGdbsYE9r2k5PLjpMZ3Dvbx+3oH+Wcw2UjGxsgiscjityhmoUtq12fzHzucYBKAod3F4jScyklJae4wNNSLSckjlOzbRw5/FasEwHGWrxLo3rWLVMrn9MDEtLWZp4E3pxkGlGxBBoo2kIThJbiEhp00KEw8RQDdjimPUq9idceERZxUZzhWHQhRcHgKpplkusilwVSxGOC5QT6ONUy9F2xPLsvcOV1QgvCyP9cDwSxUpyXXoI+iBzCVDcNr+VFDBU/o1NQhalkzWDVwllYqL6P5vEnTaYNCEKWO04+lJhp17QpWEWjwUdZFPK+2iEsFuXt2DAKYJ13aNk5my4T0Znm9GUE5V+D5bqxVqkXiK1sD0T3nCoKN7AcGpgUKwDGYS8KBxIwhyTIhwIUCd+RhEZiOLP3qhUadWsth5e2W+ebYwioCacIpVzHKlY4wuMJCtjIWsskJQbJjp7xFKnPTVCrv2+HUwkm+2o/GPk4KhW1YyPYcJhF3iCnoUwgBgUzvERMLnKSVfGEp7SK6nctR2ji0j4tVakdch8fzCEjWr911tetaKvVSMgyVmvxzkSC7lyTg0NtbSkY6rYiWPqUlkrRjrh8CadeofbwRCKZd14XjQte10Dm0+4ilxfkrki9cLinZWhErCERGtrNaeEIdFAIKAYWAQkAhoBBQCCgEFAIKAYWAQkAhoBBQCCgEFAIKAYWAQkAhoBBQCCgEFAIKAYWAQkAhoBBQCCgEFAIKAYWAQkAhoBBQCCgEFAIKAYWAQkAhoBBQCCgEFAIKAYWAQkAhoBBQCCgEFAIKAYWAQkAhoBBQCCgEFAIKAYWAQkAhoBBQCCgEFAIKAYWAQkAhoBBQCCgEFAIKAYWAQkAhoBBQCCgEOgKBG9Bj96Xb5d0fPrFLRMG3KKV/g91e33zp1DfWXewwpsJ5CETB0/JaCPG958WrC6KIZQURwKG/3ENchVUQUMSyCigqanUEFLGsjouKXQUBRSyrgKKiVkdAEcvquKjYVRBQxLIKKCpqdQQUsayOi4pdBQFFLKuAoqJWR0ARy+q4qNhVEFDEsgooKmp1BBSxrI6Lil0FAUUsq4CiolZHQBHLSlzo9bsp+MqqrvdaEcsKxEAqanPwFZi0LxWxtJFYOGJ/ekUsKzBpXypiaSOhjpdFQBELAS9Z/uMwewJvkb/z4pM05Ia2LFTEct73NCpFluR/i1pGb2jiOA8aXNyAxLKMkwhB21xEHg8cSAARFCQif/J6+f2E5SznQki2EtDr+fpGqizq2mIaskFHRyXXGFls24mJsQSLm+68uwm6MSUZTD35hN5OMDS0P+mY8GQSNTIyIqluGblc/0PupL5tQK7fY2uMs9DaIBRCE+LYvz+p8tDkeILD1FSWOttzNdCUJYnFPVU1Bwb24bHxJN3g4LAYGxtrPZMQzyiRRCMjJCdaoJz2a2TEdRWu826o1eUkXclCs7UIRZLCflLqHafdc59j/f1ZXJfYwIBDGaEJx5B8Ql4TMgmM+pI0vUhfKvUmz05MSIKbwHkryHdIzoWwGCcvrqdw3Vas1UitnkI2ZLvbkY0sGcokuMkUiGRg2qHHj/87CGIn/u8kXXo8S7hw5PNdXE+O5fJO5PAYKRbrOO7nbU4zMVESsnsaGVmgkgTN5E9CNa0yXD9/k5pdP9VZXpOW8NoiEkImJgbp0FAvCOQI6ryPSCIpFEw6m9VpZU6n+epZSvoHSKXUOAdBNiES3XYzmUaIhp8muVxRVKv9OB8n5fIWsXdvH5+eronBwRK6JkLaRLPQHSliWd4Um/wcelhBDiwIsVI+kYQiu5tpyUnIDOvOWVSLa4xs2UoyNZ2SUo25tk79sGsKD6dk/bYYla5UKi9mZ8uk6XSJlDst6vVAZDIBiCEDDtPHp6ZcMTAgiWZYTE6ShMu0CEbmcH0JvdcpZxH0wIFR1G0EAigh+PLpHGSTw4e/k9WKOu3O6XQgnmWNhqu5rk4dR6MVYrL8NkKqZ82TgvO0BKanm/cEdgaEUSWkluLzlePktsHhKOsR8eTZfyDnGnvibPnpZVymRTCSTGTXdL1xmcWhoazg9RYkRxkdlQLpMBkc7Ka33babzM5+kdWnTMp7dzDXzVDa1WAVq5vaXkkzm1kCQklgkP1IvVLRM9zlpE5IYM4w29oV144d0kpeJJq927jZKLNi0UF35NCpqUX05KPXZbjORkNLox/JVWTXIwkFvIVNTvYyEIo2Q3YxrYfprmlp+fw5vcewNMd9AX+bRuCWLclRJEeQv5TtmwGpWNyeM4mT1qko6xWe1iu5rJ6t2doAqbFKbnfSrcmR09TUIToxCH0NuFkiK7XIRmZ5XYTrpiJoDWhjW60jh8eDg4R+ae4QG+jG8HcyhY+izBwno7nockjcw3z3KcPSi1oYhBpxNGbUIs2zukgQhU/90ju3Z7pzBnnktyZvtUmWhzEyducJKbLIqAYxISG3+raFtFri2awTl0rgPjuKnJxogi3N4HdQCtQYKU2KAwdGUKjrQ3a5jjiLSL5m+UW3tbHW4RlGJmdYDjIK6b0ZnMVgfn3WIJVJMw4yBmnOmYYmDCPwDGJS0zbK9pveUDRv2mKTlKORkXcP/gERZRscxTYylmH4wgizxGgWHd1vzBtmj6OVSkd0x/G0/uAwK5cH8fGV2NTUmzE8lwo/CC4J/bY4Xqezl+uIWFpNIRVlpdIkxcgEMgohlYpFp2Io1uIKq+7QUV8j+Rm65CQa07RYI8KA7Obp3/c9t7z8u769YLYb1ba073jH2+94kBq4L1ykMXU6J/RUmeuBbmhe09cIuZu47hY6He2C/EIwHL+H7tsn9TjXn3IOlb0eQkuncvDgMAiF0HvvlV94k7l9AyzShJaxKprXSGld8XGDW0K3TN2IQ0s3qW6GoARBG2ZPby791jfe/Pcr0chljDc0wuhvTk9Vm6HwMXLKETPl0PBcmZF8hteaVeKRGpiPIH7XORJXHVG/GfNK+kly8uYBMvln0MwMg3D+CTknQ/mVb+ic606XWZLyS1mlLae0vugxcI9elk4HGudy1GNpvnnKyDg9erMR60aka5FTt6BUMQm4Bgd/+dB77/n6pZrtkU9M3Ms5DWPuxhgTRxHP+rZfjdBfBSSvR6TZF5HKs5BX9KhSCUR0yzwvzjpxW8srJyA7XX4BqJ0cpEDQklXacoqszfHjvahXnUFdwlzT1WqkrEeBrYWVpoHOw5CEojPTiLNpcJqU8Wu/9PIvXA6Fh39p8MuxiQlGw9Hls1TM2l7e1HWtARmookuBeZ5YjAw6bPtrXkPI7geQZYlJ2UXqepbkl87tnjqcWJaauCWnjENLe4ju3LmT1OtQ5c/arFJxWWA2KXV0JmWUSNPxT8opPthLaPz023b+uKkzqOMuHeBjzn7PO277qCEE5BcOgkE+IfJxdeaIHMsIk1Eo9pyaRqvONIW4BN3OUCK7SKXgpXPvjLudTCyLhkvyqx0evg+Il5jvz0D3oVPWm8ZQ+VaazxRZEUPkXOgatpVFQ+t63ARXMVPGri3Z4ratqZ9da1NlM8Z9r3t1z8vjKAaH0fXQC01PZPUw5IZwbD2f0Zl7ytXKh07qs6cOaWfOmJiLOgRhezzRv7TmqSQ37MzQwRrcVvcjYZ8YHISpwS5qHd6GLxiq/F2zLJ6ymZd5Qg98zUjZtl5PZzU7PmdSgdEyRsFxtWH/xC/e+zfrbbbhb9/yOwf/eeo+ElGRTqc4FxXD4xZG2JwY+SgmuR6eSgeiOT+tVYxAWM/Nkym/jw8lLxpJVEFQ+LU5TUdRTqdyloSrSI6SzCZP9iamBlKdL3Uq1ryreaajGXqPRp0ci2qGlqbCwHAFnIVC0CDm+9/zis+sl1Da6R9+z91/EfsNi0euRXzLhNhkxhnoYIIGtMDPGqx8Tqez/WwAE5XF4h104H5odzGJKbW7S9ylo+gkqXqnDp0hQkiF/DAplYZoX99OaGx7aSbzNc00YyjFNN0XkU451zkUacLGiCfkZkB9S9OJ8Z2v2bp39y25d7Qbf71HBglo2/b8/MQz809HAZGzSbCto5zijWa2K479GvG6u7h/1sNg6y5ejr9BzpXOkqHSJF41IsbH228cbZ90xLFDuyH5VY6Cq4wllmvyqyWTNTlUxgiIg1veBAX7WaaHTCMa1SKh6Qbhupa2Nd+L9Ne9dsvnXmzr3LYr9xD3oy+EBokMqnPBhEYiiL0QfAPRLbpEk9kFV+zadZqeOfOAKBJJKL3Ja1ta3WT+SXZHHcNiOrMbSuAdIXJYOjw8nBgyVWCfkkptg9JsC5VDZZLKsbpmaGAsuokRTAjBljRD8wPvuuNjL5ZQ2s9/8P3fNmZDqccjiLtN/EJhRJWalk5p0BjP657VQydLR7Xno68xaWiVdEULhuGtPDqGTpLidhqxyC/x/Fm5+zBFiIaQhkylksmmYKNiGfMabdTBNXnrF+i6gZFu39ZUHqqVV7Ub+8UedY32ve5VWwaJIfQGfpoTa5GW0SogUqOrn/puoJHYYfn0Tkp2706IWhK4VCDK34t9/7V+vtNklgTgRF4ZGSa9mH/RXzjE4tI5Zob92jwE24xhMM3O6jyGQGtrhsUiPYJMSwU3f/ldtz+GZ69qnW/ZmX3L+FfP/r7OmCBciwONcr2O1SQBE7ofcVcU+ZxRJzXjKLF7bVGanED3+XXS1zdEWrLL6LVu8yt+X4dxFsm2W6x7YmyMSmv7bmmCQIYTccC2YX5AdGYYlBoapZYZsYAwxpmv3XtP1y0glMVJwitGbJUHf+QHdr0RnR1jsQZFXQSVH5R1xGd1/ByvSnfU52h+rkyPT0rD8KXQll2WYjb32XmF39xFXV46yCv4d+RIFsKjSXO504kNrd1Xp2ahQUMtRHega6QqZ4uhbGXEeOC7t/3h8hwudf7Usw3y2MFZ8uQzjUslW7z3sltzD3PPNTioRWqHbYuxENrdTMpg0lxTzkqTaZftJDuJlFvkcpJl0xMg8M4IHTUaan+J6O+TpRzl8lPQY9wJq/wsdc/2UodITlLRbJszD0IKoTBBiCJt723FnrU0x9jflshXv1m5IOkr78qRH35L3wXxyyP+81t2v/Yv//r4eBxxzQ+FxvRMZAgXdOqy+XzAzGBAhAajsF4gR4aHMRcgJ6FHQSiyVp1BLx3KWZY3E2zTpmusexfi0h4L8hnqoa18P2Jx5EExF7P/8tbtv3f+Exde/b9/dmZVQpEpv/5klXz289MXPrQs5u478h8JScxIELOUY9E4amih4VGSwfojpCvitz1JL8mlM0MHE8swEJczuzuJ/Oa9JubxEMzAg/0AoxpklpiblIQMBgj0kpwljAS6HFhlXyI8860G8Xyo3y4eqJyMhm0VCCZiUBlTQ09TE5OYlqdRuYpAksv09CQdRh7Sjq7TQkcSi+zv5QSdBLtSmaZNx6CWVaNB4NIwBLHoEGXBXSi4yhvfePPdl2uUP/nizOWSJPf/6C/PXjLdT/3QrT8KyyjCbLxag4FUyGjo56nv1xNiqcqFbOeFkfOuNvtFJxHLEtCLn+Vu4LsdZo1V3MsTEzKBYaTRUBgf40fQLdw1mP/5yzXCM99qXi5Jcv9y6Qa2pN4ZCo+F4CxxFFADxCLL5JvdKEs3qacNWi6coOS+Nb1u0yXqJGI5D7yk55dGIy1BgPhefZGYIj2gcRyiSzCIZel3nPfgKhcwLVgl9sIorAC5MHJZDMgTbzQWY8LIpyG43WJEciIL3ZmhY4nlasL9PfcV1pTdG1+/tnQyM2tNOXZWouuWWDTNaGnv1tAeL789vYZUhLzyruya0i1PZJjOmsux/LnNeN6xxHJIovkcfqcIgcW9sLAmOUDDhNLusSFEjIVhsZ9oZqK1AP/xD0j55+Lhf77/1ovfXHYnhgNDSag+4mAYsUAoWCtN5kjikeE5FPrgsgc66LSTiGXpCx1rI3wUJ6CWMiG2z4UZclggyQbCRDBs2AjReL0efaWd+lJHTSME+ziDe+TOS/aKoWwSb8iR72UCCKWkSSJ1YRBH4WUhleeBxUHI8WLZi8Udi+eXyW7T3b60xLbpinthgfJ56TNFuoFrhcC0BQugHsPXrUe++LfHy5/7rtdteUP7/uWOUlN7OW3txfI4fqrxOyQMCaiD6w1X6GlTGHUQSiCfOIafg98uedGRoZM4yyLA0nHOwLT09dYK9XQk/JTkLGiYUpPYtM5N4nHTtKKD/zL9rXa6jT7+4Z9+6y8NvFOHFU2keyIKG8IKuMjnHY511qICh0Dnl2H0/MtNftVRxCI7gqXOYBxuux4XhQLUr2fPkLm5OVI20fX0RZw4BuwpU3Hs1kTM43i+Gv3lRrdDEPBvEbn2TIfRNqPJ1DOhFvf9tDjjg4h7HZ6H56j+fleMk3Eyhn+dFjqKWBJKSajl/C8yHhjkojcDg0p8xk2Tu27EoyiKRdaKsOA9+ujvPP3IRjfMh//XUz9MQgtv1WLic45JTS7lJwsCiwN/LjNYV4vlb1D3gyOO4xS00vJ0uUT+G13GF5t/ZxHLstpKt1z9/bvA1ltDopQXC8uXIyIugu48lpiCp8AYCdZystH4t05Uf33Z41f1dL4S/AVpyokj2G4H0n5bT4RbSkOcz5Nms0v09e/i5fI2lHcc7z54Vd9/rTLrWGKRbHx6T03Mbq2LfNUX9WYk7LQTGykzNuan4UcD45KARSbWJRvoHv74z058odkMv3G1gcUQ/cxvfXbi17GCOiS0ERE/iJqMgbFV4hr8uNj2OZFKTYsdZpEXi9IXHey0eqXvlrYT5s4x2O4cHthq5aS8Fy6En4QPlpwWhg1dCBgc8UC3dDCUYN6iZi5ZbkqFZ/N0yhj9maG/wbzRpY1T1khRKIc/8snHv10TBIQSQmBJ+xleCWPLDqnWjII4G/aa85HvW7Gu93LLqvDu7mN8cnIyIZpOWyjfaZxFgrzg2G90sUmnIDRWq5EosRN8lk5zK/BiPyrHqd6bsBweA1f8k0MUNheGH/rkUw9UqsFjiw9f4QnsZSZ/5aP//u1GZAQkhDugMBtgkVJYznYHdZdFVN8RFTSf9/bujqVL1OegjJOuUCcnpd/ckeR3ha9+yR7rNM6yAFTLH8uDDxJY9I/TPW87gqWr25mud8F2pcZ64DPOM9Oa4TIj1LuwCB6W/liJqNnEcLFkQ7rwue+1vXu+6/UDf3IlyP/H4flf+PMvnvpqjFXOWA8LM18aeT7W3MewSLAaYaa7K3LPQbDNevGO1GBUqx2FoLsbXIWAq4wuEoqcF1+5WOFKynOtnulopdzQEBHwf4IlFntgitYnyoVBTqLTxNtWjd1jNmbzTjLCYRSV2hqFlXPUM3PEjptYoij0g18tHfmnQ6VX/cj37XzDHbvzvwHAL8tlT027n/idP3j2T2ONxSa3IpOj4+Mwn4nqcYY6Mc30RE1ejEjtHHc8U9S10+JECS51BwMxNXeI3A9nzeeH81e1nH9v8111KGfBIBrTPgcWPCklC+O/tItZVh42uVIvX2ZNOBsM4MTHMWc0K4jgZNABH3BhJZVhiVswATEiCmBRAMs2rACIMXT6jtf27dp7e/frHJPdBG7BAo+fefa58le/9OVTz2iaFcOFZcSgt4GXdjhSaMY6tyCrwGUhpJNUJhvVm3oku8Cm48S96BIb8JNbhp9cHwvjpWNlrELgS/5xJTEoYrlGn0SrK5Ivkwu2pHfKSSwNweJnOB3cDwI4hF+k23YvnRdwM+lPGJneAab7FY00G3pdy2rU5LolYAIpbWabHNKNXM0BwynYwsRxBAMqiMuYX5JD4RjnAYVXSprHxCRmgQItMowwblA/ElC+icYsz5KuyNl+Mi7N2jzTA0L55tMCfnIxfF/mvVLuItLqf2TRE0FXnnRCuCzr7YRKyHXPCzu7kKm5XaJcfkzsgKvRGeJC4MXw1X9cGKYe15tHeAVcoJovhgIcQQSQN0ITESyE3jf0qR+ABANN130tpflY1+GHuHb1IKQMaakR6JBLRBAmhEJcP9Ln9DjTkGrbrqjpNGL31E1xPJXl5VoEz9sP8Anog8D5EqKQgm1n4Ll6KTuYWLDVCzqc9kcq5ZfB0nAyZyQ3YaihsV65Y2ckuwOsR494pSdqlG8P000sUayejnNWKrShD5F6ESJ9wwUeCAU+kvGv4Qbw0yMCkA7Mv82gAULyAgujHUwTWixM9doBljqGtQyLLOuW0HXduEuqbRlS7tjHb7mlF/7kAjE9LTnHGBnav39Jr9IqsCSajiOcTpVZ2qTfKv+C/CJ9tUh3YdILlNzU4bAPGWb2NJVesBd99WMzB8cqYh2yp2XhqSnA6kVSm8UqxgxtNgLmQB6NYPQtXxAa9oLJA9yxR9LkIeJmT3csTSEoC/l8FdMLvR6vg7L69Don0xload0FGWUfOMqYGMJQWea1JKt0lpwiy94OnU4sC/WAU2I0SVvglU5+2h6256aP0fTxBtu5cxhpD4OTZtj27QaIysb5LjIvalhjxKht1qkVQALB0o02OPIYBCkBny9Jg1tOX0wq88SFfYqTmhH1LnQ55wr8NGxqtuqv4eS5T2Ny886WjIKuRxLKEpHI3DqXUGTpO7gbksVvBzQCmvgALuVPBjgrSLqkIWwmZZp3xoXC02jwvTyXs+JTp+zY82oxpTO8m7mRaZ+NXedMnM8XoxztOu+XzWsRL/bgp8F16Vl0aWbUM7AtqvuSUBqYST4qturz/MzWSXCU10IYPghCBaGg65HlaPU6kv7Oo0F5q+NC59dgEfIWd5GXLQ4DF2IYIbX3P2x1S3DPjgD/tHTHjp3kBFyo16s300xjFmuPqrSIdYOtZSUylTTOnsU+Q7mk0VOZUPTrWQyHt+D6FKl294sC5KJZyCb9/YPiEDkEfU9N6n0W5ZMlrrIIc5KXzL0Tw2ItOrHwq5R5oT6tXVbbPlDkojTpF0V6jexf2MlMbvsi/brIPKRcQ0A8lblpuj3JtPX3lDTZXAjSFiWxncEstzSjleaRcpohIRCMeBJBNpFPRpMn5Mhngat0NIG06y+P1xuxLKvbkh5GRi4RztIeiTK+vQ2e1K1KApJxy4M0VpLXiYE4/sjdWCEPJXFy5rslwF5AIO0srhtCkRW6AJx2La+T40L9WpymXSfpvUCOnFrX2IUV80tkWHp5wZ9Vg7RtQ0j+HFwwMWjNHLd1Jy0uIhN1thAra3Cx0NFzQxer1Fri2/Yksovq7QWngAsM/L9IGCYT0rRtQm6c2VastbjJRR64LqOvd86yotHkvj8LAR3E8j6i5SulffPCY5uDtO8s4yTtqOXZteOuq+MSeNdVtdZVmQUMLtfWi1BdLuG6Xq4SKwQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAgoBhYBCQCGgEFAIKAQUAi8VAvSlerF6b2ch8OijQvvasaO3W0JvfOQDtxzvrNKr0r4UCCjm8lKg3mHvfPeHjv5/Qoj7lxebUvobv/nw7g8uj1PnCoHlCLDlF+pcIbASgU99SlgrGYtMg7jvX5lWXSsEliOgmMtyNNT5BQjMbiXigkhEUEqU1LsaMCpuEQHFXBahUCfrQUAIsBcVFAKXQEAxl0uAo24R0j+nJBdFB1eGgGIuV4bbDfPU9J7VmcsNA4Cq6BUjoJjLFUN3Yzw4WFqduQihdC43BgVceS0Vc7ly7G7oJ5VC94Zu/jVVXjGXNcF04yaa3H8RyYUIpdC9ccliTTVXzGVNMN24iUZg0nLj1l7V/MUgoJjLi0HvBngWlrirMheILUpyuQHa/8VUUTGXF4Pejf2sYi43dvtftvaKuVwWIpVgNQQwWaSYy2rAqLhFBBRzWYRCnVwUgYsMjS6aXt1QCAABxVwUGVwWAWhdLtC7KJ3LZWG74RMo5nLDk8CVAaCM6K4MtxvpKcVcbqTWvsK6wqLlQslFrYq+QjRvnMcUc7lx2vqKa0rhvOWKH1YP3rAIKOZywzb98opLa9uL/3jiG0r+WfpxfvH0rbwSOxg5o6RmlZZDfQOdq4a/IRpbMoJVwoI8sppYMjo6uvjMvPbDHgZGxvIcKCMv5KM/vlnGjYyMrJbFYvLVJ60Xs5fpLvn8YkbqpKMQOK+FO6rkqrAXQ2BZm7a+2eWDmuVMA2zhgjwmJsaWPd+6fdOddzeRk5lcte8KMjX11BMJc1meydDQ/lUYxehikjYjamdzXp6ti1WeX3xcnXQQAnoHlVUVdYMQWMlQSqXJhW//vuSNA1KyWOWTL5V6z+MRvb3Dop3X6kxmgyqgst2UCJxHHJuyhKpQa0RgYeizjAksOyWjoy3dR/vjTzLdv38x76HJ8RW0MAzR5FAS52zLV8Ff7CTxQipG2XTj5PwOGTcwsG/hVeNJkvafwcHhJH5sbKwdRZaYzuhiXFuakRFLQ6jzirO8KovPqZPNjcB5Lbi5i6pKdyECS7qU9tBntWHPxAShy/gImUwYCZhHf4t57CP7yPR0S1opl0+0aOK22xZfp1fovCC8xVwWYhlhZ3bmxc52oufkCf4Ui8ECI5gg/f27kvPp6QuZz/j4QdLbO5jcbzOckZEl+WiJyciMF8lUMRkJR4eExVbrkPKqYi7zo7IaQ5mYGFxs0/1tjgIBZXJ8QTI5eBAzhIMJjuXyPQtpd5Na8Xhy3qhM023y7vbthCQnOH/OKwsunOShhT+UsbP5nvldhEyTSuNufPSnkjv5av8iAyiXdy6cP7bw1FGyd6+FySc8Nb1HtCUbQlqSjRRwLs1oVl+hvZC5OmwyBJTOZZM1yNUoTktnch8klFZuU5+DhLIvm1xYhXuplElmZ8/S227bLWZnj9NK7mvUrJoJc+nRai2GE88S4m1JnomEDyaR8IRWhvgrOKckcsCodhG/epSk0oUFRlJOjlNThKTTOs5PkXz+DhyPk0LhAeH7j7GtW7eKPXuGxcGDUiQZR269C/m2hlELF+rQ4Qi0CKnDK3GDFL/VVm1xBZU+sDhdPELauhQprbSHPf0Lwx4MS+hxchyMYCdpgJFsI5BKELSeWcQRkqnNUsc2aA/Oj5Rc5nh1vKuL2PbNwvOqtKpnTnNO0jJtO2DYUsrH9T22nUvSyOMcmSM3pSIBtoQwSxw3TBhNqWTzTKaI82nEvxlc6jiO46Rc3pLc9/2+hHMNDNQWpRkwxuQeEmKqu3W+Yqi0eF+mUWHzIaCYy+Zrk4uUqKVfOXBgdFmbjSRpBwfH6ORka+amv/8I7kOLso+Qr341nzCPbFanJ06Uk/N0ehttNMoUCg/injyp+Q4klXwXWEkX8bwa1j+7SJcjVtCgJCOzz5KqR49zIdJSzmi/HNb/5yxWT8ZXlsmTD920YxEEAzivEg/nth8LaRP6HgAAJ5lJREFU18+Jm1JcuG4sMpmCeL45naSNtQIYyikyh2FUtvy0KBZ3iP7+QXHo0KGkTlJJPDjYYiqK0SSQdNyfNq10XMFvjAKvprBtfd9SUhkaak8FD0N52lLOHj6cZ1IXOzt7mu7YsZPMzU3TqTjNGLcYgWhCj9QZ6e4mDiQSr69AbY9Rws8yIsosCDRK0luIGbg0MDLUDHAPoRqyIzicJ7ngeraQat4l71NqJpKHYQrRbMwQw3REGMbCx4+QOvGCO2PL4sIDo+kiTxDXzQrHqcWElDB08kSj58dwfpyUa5EozrYUwlNTbsKEpDQzMVhKzof2w4YG014yHFhuuLck0iTpkgTqz0uOgNK5vORNsLYCtKeSMURIwtiYHP60ziVj6e526JkzJ2ixWKTPPz8NprCbnDs3CSlkK+kFY5kVBnNOgaHs6AVDqVOf29SeOa1hUIRMODOMIpUmuKHPtVAnNPabNKwxahg+FTqGNBiOdeV08gs/sZ18/q/PkqPHmyTyXSM0LOHQOGEuos5FmBsQoesSoZs8wpokw9wm7IwHSYiLXLYpqrVd3MlzUtDyzHX7RSpVIGfPPYlyEHILpBm90FbuTGCoR8AcJ+nQgsJnEBrfSTLSYiCLQ0L55NIQKrlSfzYFAkpy2RTNcF4hFttk+XrBNnPBUCG5D8ZC21PJlj/DirN3IH4nMvoiGEo/JIIyhj95zbZr1LN6knueJz3iPqmHkFBMA7+uLTTQXZpqBCyqRpqu+7SuFageBTTSKY4tkcCl1uM//l+2Zu+6vaUUlqU9NxvE//CPU9/21Ldm6zG4iKab+Oh9YvsRD3VLGDoXusFFFFkiMMM4DB1hhFzU6nPctGJheMXYxtBJDpcKezzuet2C6N280ohFvjsS5AQkmbKUXo5ievtOSDYyHATDaU9fT7aYDGIPHFhgOETNJiUwbZI/CaFukrKoYiQILA2FlutX2lPMLYUtGMx9hJSfeizp8fXnu1g+35rtIb03s2Z9lqYcjc7P6sy2GM2JJguMWU0OeyLd1IyQ0dCg1AjrmqExxKXgVIEx4kdgTBGLNUo1/HT8fuKH9jyw46b0xy/WONVa+L8/9ttPfVjejzUwGdcQOo6QfSDNcI73CT0Gc4GEY0TQzWRyEWk0iQmFTABphnQ5nJwOuAtGU6AeZyyL586QRuO7W0OlZDr7MTCYHUIOleQwSb5rYqIkVk5bL42OZArFaCQKL2VQzOWlRP+8d7eYCj7LxdCWVs7Xr5TAAIYwrXuCkt0PkNmzxykJoE+J5ljTnqP0iM18MBbbkozkqJGRqhLRDZ1KjiUMpVrTPBIyHUzFt7K6RfDPrLM4cjVimoTUDD0Ag7nnrnzfD7zplv8NltO3WKCLn4TfeLL0M1/4+xcOmRhXMU0XXGdgDpzjVPiBDoah8yj2RCYO4giSTmDYYTpd4GFYExWtEFk2dDIzYDbzx4llZUUNOplUOhCZHHQw03t5oYBZqK2BmJpr6WKOwDCvd0HhO7Qws3RAlq9tiHc+p1mG6sUroe5cXQQUc7m6eK43t0X8lw+B2pk8+GDLDWmpNE7f9jY5C0TI4cM+mMtu9OQOzeUsWk3sU6S9iclsu0LPeo5mm3Iq2WeZlAmGAillztSiyEiGPUZa14gXMk0yF7CAOIaEwjgkIMY0nMc4/+Wf2fswJKG3tsux1iMkkad/+/cPv71aF4HnScUsmEsM7mKBz8WSbcbco05EiMEzsVToQi+DoVOdaZGBoRKpO9xytsauL0ShdwZDpViks5Hoie9KpJgaFL6zCwrfcTLI28yFLCwvkJKMmrZea2ttfLpF4t74V6k3rILAIv7LmUtbYlmuX5FK2+npY7Rc3g+lLaQVspOkd/2D1qhhOBRvY3azSKVOxTefMto6lXyuSyNinrnNLPO8FBhQyOxsU/dFBOYC/cssNWMtoiSFsZPO2BvuLb7sDa/d+ruMUmuVsq456tjx+ujvPfrcF0XEOWdCpKgVcTlUCmPuExZZ1OBR4xx0LpBmoqZI9Q4EzUaD+HZ3bEV2LKUYf2ZW2PY52NBkMUWtR9PThFQqgZjLPyuyhS3Ct/r4wHTLLqa9dqk1TBpNyrmkh5GXaoi05sa7igkXifsq5qmyWjMCF+pXJiYm0CatBYXn61eOarVZnXbnpmke0kodCtsMFLaurVPHKkJn0mS1qsssw4IU4jMqAjATWzc0B/k19QgSidSlSFWr1KsQEbNQ18FSTKr5sfbL7xr8aCajv37NRb9MwjDkp37vz4+//cxUvUGiOCJUS3QwhLIojiGaMCOIYmkfwzFvRaMQ+pjQ0OMUpBg5fV3RuiILdjIefv3bG3Fb4UtMnxe27BTk6GOYbt+B5zGlhPkwWZxBTFlPTrZcPrQlGBkPNioPMiC9CtcKgUXUr9UL1XsSBBLcV5NW5CLDoaHxhXZZqV8hlDTH9WbdgMJWp25zDxgLpBXjjEYrFT2EojbtcJ24YB6Wxjxi6jqYiw45hfgeDib1oNqlegzGw5jlCeN7/tNN99z7bb3/D0qVKIevdvuceqH5md/+4+f/WKdQ7mLRAA3CkBgaj6FtMRYYTuRaoRwqCZvzLGaWKO3iVJuNEoUvg8K3CoUvZpWE8DjvbfDlepjnsFjS31tJmIuUZBZtYiZbs0lyxfUSb1ESzNVu30vlp+xcLoXOht27sANtm++XYBg3lVjZEmId9sFkpB0K9CvPfI0SSCyO00+JO09t0Usr3rTGOMOgI9CClM7SOvQrPtFoGn7ihMbSpq75PixuMX/DbE0LAx9yQWRAcAFzEewXfm7o1/NZ474NqyYy3n5T6l0HHrrj+z79e8++Y26+6WJFEtFjwjWKdUdCKnqxSCkL+18wHyOGiBNAcKEVGABbmHGKuOn5NMjfwruxHtLzy/Ske5Y1I1NYOTwvZ8Zv2ykGsKJbWvdi5LQsjC6et5XkYDILTDu5dWEjLD6hTq4GAsvBvhr5qTzWhEBrONSeapZDodLQUNIWtf5+Kl0gzEG/shWrlovF0xBKLOrnT2sZKabMppgDqcWzdGrrzCCZDDG8UBMNLgc5tM582MJpCXPRI9OQMz+2VN/iF5GYYUhi3X1n38Bb37Tj9xijqTUV9yoleuLJ8q/8n78/9WWsUxKYrvJbQyUBdUwQRhgqEWpj+OREUeQKLcbCpMTy1+I+xkdZOWVdS3HXx/Jsj4up/nSUXmYTUyi4woIepu3eARIgpqrJooJXVmHZ8EheKuYiUdjAoCSXDQR3RdaLjLzdk46OjiwkGSPDCyuD+9EdT0871CpnwFj0ZEYIsyp4NsNs0UfPOoHGzO7WGiCBKegqpqBDE0OaDMQWTDGnMBskbVbAYIIo0GFFR3kUGiT2DPAe+o6f2PvftvWn3rGibNfk8u67ir9x667cv37s00+838AgB3PWmAUSPG5AftEoGI4kR/BGaWTne+AGHpfSC5HRc/OYYmexQ+zYxeWt88fAMGETcw42MWRPLFd3lwszzO8/lAyRSqRGMEQiDz4ol0kMLTCSNvKyuovNIS9U2AAEFMIbAOrqWbaVt6P0wIFWirZhnHQXuedt2aQtBsBYCgWTzkJ5299fZtUq9CspnZ48aWuOw2gmU9brAtPRsKolTkEnosYiLYvRDkzezJBZPISxCpgLGEyoUxPuXxiLObQtzHrPL+z9nGWyW1cv37WLxc4BzT/9wtEff3pybgYz4nGs2b5hapha8mJXKlcsjad4EewlhrLXRI1qMQz+RCAntGk+8mB8t8V2Y8+LsEapSxhGGmMpDLf0bXx2tm25OwgmMw5ju+FEgpH3L6LklbeUFCNRuMpBMZerDOhFs4NWIbk3SuiBhUTLp5rhzgnSBqxuwViKWMVMyE6ySzur1bC+B8IHPXxqxmDEZdktBsMIiFHuM6NCjGQ2yGrqzTAwUppFAw6GAuYip5YxJsJ5zO68q/em73/jwO9D53CeN7mFYrxkhycOlx9+9LGT/6xHJNA0K4YVTExCqRTSOLVQ+gADKDAYmrKCCLNJRiSVvSwKsArbOwcmhKGSAwZT3+XE5Ky0EG7w6PnWzFFLyXuIHIFTql5Y88pKPvro/kSqkedLSt7kSjEXCcNVDglBX+U8VXbrQECuEZKm/IlzODgwqGWhY5nDcCh9mrYZS6lUZXZPnQZmEyb9oUbrkFyaGvPljJCNI5S3Fn5SiQvhBYMNjhv4Yfp5/3/e8V0/8MDAn2w2xiIhuntv8UMP/cTtP0d0ykIR6MSAxIVfaNoMIgyGeoxBPw2eGia/ptCZSBnM8CMtf3OeOLBCllPxbPo4azZmaaNaTnRUclX4QPcxMGj4nVDhJUNA6Vw2FvqWtIJ3tLvG0Yu8r3ymtTaoO9pNtXiWVUuzcMe0Dcy/zjx8RLYbaTRlUhMfFoERnGQknpHTdPCaOILtCvP12MVQKZfTNAw05Af7zh/c8XNbtzgPXuSVmyK6r9f5r+//2b0v+8gnvv7ziXLFckTsg3nmMJPEY6hbOK1LnZJmYGwXiVALNdK1hfvzc6BdhwfBnMgX5GJGTEExn1Y0+KHJ6qRwBrNssw552337RKnl1XPRSflCxdtNsilwuB4LsUj812PlXvo6tfUscuXuaAtrDPwnxlp7A72rt5ceOZKFu4RjcJewH3qW45RAzyLdRzpYJ+SeSmsWGAscF6DHjvQQPlZIqWlCl0KNKNKiLt+Imy4SmLptZ7UQhnGaF1vShP+hnxp6X6Fgfe9Lj8HaSuAH/NhHPj3xdmlwF2ssNiIRcF0qfDkGgCLAYiRMh0WxLpcNYO46iEqt2aScxa1zZiwXPjpZDI90l+e6A1Gd9EUZM0jF2TqYSGuotNpiR1k6uVZ8baVUqdaDgJJc1oPWi0o7kjwt/44tWOAeOSJN+h3q+xmazR6nUTRN42oarhJqTNguJTnGhAkHTjxiIYWRW1xlUdoDM8FQCGuXHcxHhxFsWgw5QwSjkTjUoAHV3/OTQ4/ks9brX1Rxr/HDUDTv+uAvDv3Jpz7z+I80GlHg21rM8MkHkFzAWrXACWkEkx3dTyNW2twNwAo5JsE5qGfyN8ckJUh5usyKZAZLNbO8SqSjcKnnfRy7HLTWZZXGp6HgHVuo2Xmbt7U7WTyjwtVCQDGXq4XkGvPBOphFl5TwxEbJIFwhnYGSIAnb8dfAiucaaTZ7McLxSDUGk+EuDV34ZBEBjaHLxQwQfCJg+U8DwyMobA0sWpTDIEsz6M+/fc/I1WQsp6Z98ncHZ8mzx5pQrV747UF1DDs2h3zP6wvklm0vTl8MO53+X3jXPX/00U/8xw9hGRSDukWY4COEBkzDkkdNx9Sz1YUlSi41dU8a2lETyt1KZYrlSYpjewLRbFbBsEtMrkMqwr8MVpCj0HLyWoYafqXkTP3ZeATaHHvj33QDvgGmHIv4Li1GXGIu5fJTGrkNK5xnYYE7aNGpEzXoYHewAoZBHtxPmuacEcCpUwqKzCBoGJhsZVrKMnxMM2tRE1172oC5KwzjhEEC1/yZ/2vw7f1bXrwNSxAK8tnPT5FjJ9sf5dob7+YBm/zMjwwQ+JFZ+0MrUjaa0b998reeejdU0pg98nkMgzu5HolxjAj1POaTXDi6k+ILfMZQi9eabpTNOXyepnhcibjjnBXzGCel4a4h0nv5Xqu1PODz57lpGE04pVoesAL8q3ipJJerCObasmotSmyl3UakzDILtWV6Ti5EhHk/hBcRdWOtIdy0RFW4mWTYkUx6qU3L1X0sThwUYBEihkZx4EvjFiR09R/6/l3fdTUYy1e/WSVjfzuztqqskurklEc+8LFj5C3395A3vLprlRSXj0qn9Ff99E/d8Quf/r2nP8VTFjFgsKuZNvdDCsVuhDVKkdBtjIk8DHsEHE+ZmH83Y7oFuxjM23Dq4GZJqh9uxhvbSXX2KJ0mfQmTH0bqBd0u3GWqsNEIKOay0Qgv5N9eOwTlItYOtQzmrHJ+6e0D2JE5miNOQ6MN/TTzXbnC2SYhnGXDlxv1YAxHwEp0aSwnGQvWOGtgOjBCo3ra0m7f0/3epcyu7OybE/UXxViWv/WvvnQukV5ec09uefT/3961xsZxXec7szP7fpBLLinqRdqRVZi02iSCBVQ/IgI1XCCpkRYNAwdG26BF4v4w0KIp+i+l9atA+qdAERQF+khRpAWi+F8BGSnqUFFqNanVOrXExLQii3qQEtdLch+c3Zndmdvv3JnZXUo0Q4pcmoTPlWZndmb2zuzH3bPnnHvu9215u5CPv/iZM0MXZ/7rwRzS1JogHog0QsEmVajoool0LkInbKe1ZmtNc5CKEnZEsxEfinoV6SnMYkLlL9qjsZzaPa0e+aF3CDy+79q7e/pY9Exzh+iNEkt/GSqHi7ffBT3limZZmLQXNIdY+ImSUn2JkM+IU04jimIx+oJFhYepRpRz+YMvjX0FuY9U+LrHXX/vsq849Livf/h1//7DlYd3bev52WeH/0hH2ZyImshE4e2BhtO21xQNJ8DASDSyLEl0OZwWNmqAoIiiJFKE6BfkBaqLjeKR3BVazqFU8RFNbHUWP/QAAfZcegAqumwbiHb3YTS0zh8/gcP0JzCEVfsfrV43UUMLf17tQ5rWhKaQpF9nJHAdR/1S47cbFR1+azYb+HHQ9aHB5G8Fu3a0qllhzzvqpv3i6pqqym8/3+4GaCU+ffbM4Oilt4vvYZIj3njLc12KjSBPgMI6w8TMaM3DpCTkp1D+Yjf7wXJFBtgTVqKhQdNAc1dAg1edV3+PAVDXcds7BNhz2Tus21eiulGMEYEuAAv9stIgUdBI4dCG9AcSuOsMVMsgRn6MFuHLFS4o/hdnzhw+CvPToeUPO3qM9cRTO3Z+1l11N/o78UT/0+S30D9qmM8A1l+YX9dBOGTDq8NCHh4WOv5oI3AJaFq47SUCbFz2Eu1duFYkYiK76S/UXaHfGNiFblUXX/zckMj3+V/infaZTRvipc8P77QbkYjrpDK7aSMRtiiWTU/ig3uOAIdFew751i9IXxqU+WNEG2TXREFgw/XHz4EGDQ8U+AvNEuJBsVHceo+bn4lZPOLrr4xC9GxJ/Pgnlc1P3uToJ59Oi9/77UObnLH1Q2uN1lIEEgIIhUD80pI2uGAoeMPwEYxJJ4yLYtqATTUxQUvW+2WthrDMvYNE+aq/d5nCUG57hQAbl71Cuus6pIZMqc5D7+GB/I4y8pInsviymCIus1LGDWk3dAnyWRz0EzggfsLxiFRxgdqL7w3szpV3KnefPyfnTVMbDXbvePWlF4bEi1guziyLN95c2bB47uGLYDBHfOZMTryAIWjKEu1Wm7mycMWFkoAbbcCokDFB5zbGhCC6JsCvKxKGdEDuLTIUMFXEqoC6I86rpUyZFijYEZgGUNqtu+F+toMAG5ftoLX1c/GhVq3zNbsQ7FHJlmAbaoJC3MWCLAL5H/BERH4FqoUD0PrBlwe0skjoYgF5NRjzMQQtkG9B3570UOuBElVQCHja/SXru8eOpL6GV+9aoxv/7GReLdQpkR/cutcQy6tNAbJKkYSaSX/OFGNH4vAidu2y6zoqV5zv3V6yV3XQ7tJblR4mLxpxTD6CdlEy7kFIAHcV85xmSRLfbsyBguO6HvwnJKi2wW7e1WME2Lj0GOCw+1AdEBwuGA/FsoAl5o8q5XIjspaaQzkYWmHQy7c8VOi6Mr5WQ6mGI/rMDPSX4d5ohkhms67VcjEfWBeOhMwQRpP+9ts3vvPnf3LqxaihH6EuetGI2+7JY3G19KL/Dfp0X3/jzl/ptgO96TikSUAsYYDkG9TeZFxRQIc1Vei6XhoGJgsiby03ABrMkkzA8C5kET5FhuVKpSrGujofH58MDM35YO9011He3E0EOKG7m2g+1Bf9+ofLQ4fE4cOn5cDACYkPO9QEQTI9mvFIYRDq8aS+Du/FlTZyLhKqhKvwYMzsoGukUy4CAvx6J91WJOlGBUrjG6uo/fe8/7j0wSu4RicJ8fAFD9jzuZvVr/9srlLEgLzSPMIUB1+5ER4cxoq8prkGDWoPSxXJ3BQ0jtKyLG4Jq7EkLZT/p342LHOVlsyUjsKYXMe7p2UGC7mQoRuJTW49Q4A9l55B+2Ed0we7EBwsoqhLSbMiOupD4ZeDiXcNsaIdUfVhKEf1QO9IGkTSSAyq8Eg4DXxZKFRC/gWMbTTDBjOHvbfeLt6rrdU//4UXjr+GqhgarT2w7SezH3zttYu3L8GGgNFFeFHdJsoaL1aHp7KGeUXwWJx4HyZExJUcLIVE5XJZ1LUMaC9NWRjJeAv3EWHCaAMEiKqVaS3+dRG8ugEqE8GaV71DgI1L77D13Zaw/1d9N3xqaloG6qNwUK7KxUU/NKpAOwOBj4ikqp7uYWQoUdHk2lFoPqel8AzZaqFyV1LRWIxmR+sQF9PB260j8aIbelRCoMN7+9oHi+Vy67O//9KTr6Gu7PEm9oT3+9Gs5ZW3Sl++eOnuT0Urhmw2ZXo8zzITLvG5COJz0aoIhTJetFyTzVQTs6ZxSGQ9TSNVAEsuIYmbhHBALteCQaGclgPC89PKuIiZGd+Bwd7p70z7+9T7JP+S224jwMZltxH9Bf2RibkeuOUTJwuSUi+ivwbmNHyXKkQRMID8C75IkaYWT6G83QUTXdKV+kol0jSzXs7ETGEyMvgC1UQClNVgOorUMWPYQYF8zLt9r1x+9RtvPf/HL5/603x//IvU/UFodbv1f9/81o0/XKt4deGhjsdw4JPBuCCnIq04ZhLBergYiIaOAXJPnh11MWM66on4ihTOLbzFligUDC9rn3D7wVhXJeF66EqPjNRhwGcUBIVCEWTd63hc1H48dBmacBevd4oAG5edIrjp67t/EV9tnzkx5X/AxylCWsSUl5On5Tv3b0Ty+aMykzG8eaekjxzOyMWrJYjLG7LxoKaljx5pkVyrBXaoKA3DmgiVMPHIMBJaRIMRAmeJBslnEzER6lj1b/7D7DeOHc783Utf+MTfY2b1sfbF99kGxD7ql3+0+JXLV0rvwnrAcDQ86Ld5TYdGwihha4D/qgZN6ZhsGlHPjIFtbq2K+UQZjFA35aqdkH1iFaz/WehKP4nX2NIwKBz6a7xTqrWhQX+ArFqn/J9Q4tZbBBjiPcIXlXDqSiGvCz3ZiP1fiCU9m0XogzkBg4OmHpJ0v1OBBBEmKsaX5sHxQpUkET0pa/hxaELqPa27EG4VEkTWiKEglwrCF01raBJbUW3iicTQbz5/7C9jMX3fpBqgE1288t+lP3vjBwuzStpVSYuAtQVi9TFYT9DZQCCNwiLDS8dR6U/s/64DoXoU/oPSsnIXiZaA/T8VsP9HwP7/fsD+/4ySeL0qTp48KYtFn/1/NpB4JexZqJ5Q6G1j49JbfLt6D4mjzrd1i8bHpxX+pACwMHJVbZNuERkYIcZQCDaHCpJDwoJuUeZ2HbpFmMh4dEgXq0t6NJoDy6NnNImZzsrozUozYpq21koicCACb0xojErbaGLWtJAZ3TRjKBdp6C//7okvHzmcfhk31qPqlK63vMFmpeq8/o//8vO/KNXqa6E4PZSj0SBOD2FaofW1WhgZIntC4vQiieRty3HNaEVGW31uLFkAf7cn8+B1IYmjdDovbdtWo2Tb0y3qvjnm0O1GY7e21Qd6tzrjfjZDIDQuCPCDCD/0YojrZQIa0fTqEXC9EK9uqTSvVQee1vqzi5DMiGqHC1WQdpvacnFETyD8Iaa6rJyH55JGf2RkWhGSc63X0zrI6zDJkQToVzFRKIaC1joOeVAF0DQ3jqCDymkdV//crx/59Kmnc6+Av/bUZne+k2PwOBbn71l/80/fnX/dc1GzgkQtVRY7TsWLwitpQSEtEsk2YzHkmTQL6ovLstn0ZPL4CDRegRRk3qoPVj1immtgeJ4WjBrJ6vGEm7RaMp1FUeHiAIbzkWM55MiFFRTYoR1GEheeIZLnF8TEREeUPnwviB6Dv0K4h9e7jQAbl91G9MP762AdWJdXz59X+9ZpRS8EWtEr0Io+5GtFKy+mdjkihofBYz+q1xOQGgHvy7ws6HFb13JpS0/JD0CFCTKpbDRStxzkYqAb7bgwOEkN4ZDuNl2oMsK4RIwIRMhwXbBdC6hIg/qb1ALI0zn1VHbo7LMjv4bK22dhgz61HY4YvKUmlBCvVyqNt96dq37/+/9ZnKOwhgyJ2YSYItag0ZN1jPgIxxFJI9OECpoUcRiV8hqGlGOo5Ym4Tp/pRluYU2VVwDwHQ4JaFlGLtOIIhRrJlgSjpUym+2X5RtbN5Y7KfJ6SsTfEIRiWFRiWcGRoY63o7j8OG5duNHqx3fnA96J37rMbgQ7WDxkXOun6+HhwfEpMBIRGpRIJgz0lSIx+dHQMQ9eG5iIPA3EAzYIKozZXIf1kjDlbejq9pIzLihNHeISEBYxLsm5BnB5eTCrvezIwLqK+Ah+H0pkWwqaEjmJ+SNTHMLAd0zwiZmqS0TFhajStaSKkQvPcFs4PZksHKx3D43RMNSrPR8FNxDUkrBUo8kzZgDFxPVTVujTyA9o8GBIyNJjWgCJAAADlRIPCHhKbT7Y88lIkdKGjLRMhTk0UE3k3irQKeSrD9s8lPDKcYHmFQtzLght3cfE3PMwZUvcwMHBBrRcWnpTPPXcaeRoihfKPTU/7a9pH77rT2Lh0sOjN1jq4e3MJ7vVRBPwQKbAx6nAnRBLa1JT/itnCjLYAXaPTpzEG8mZOJ/3oLMKkCsKkWq2k6QV4MXXQUscL0D7qFw0LXx/3bcOGBxMzwW8i+3Wn2UAAYMBIZPBttkGTmYf3QmsNdJouNAQwBwG8vLGohXPAcod6WLp6BAbIJWMTbNOamqsMjb8Nns3AwCTwhXYE1IYQoKHID56JHU0izElhvw0pIjIuMZBlezK9toKwByM/8FLMppRNVB/LetkzTbg1MDSx+BNuI+7J+NJNWY9nJFUrJ44bLs29qqGC2Y1kvBxqgvLVn2KoeRTXp7I4X5dIiEuQDiGBNPDldIVC7Q/5eusS3Lv/Xvhx9xFo4777XXOPvxiBTh6mLZqmXjStHmk0yadlnEQuxk/4XruW00mutNvQpFKmVvSqehKFd/V7v6SRYD0RPtpRSghnRWwAzzH+4tjg440gNwPaTDI0YtlE+GRDErUf1+sTJoiXSOFRTaQEo5vv4dAzzDMGORNWotXCmhpKcgzyQNAa+GcoCgQ8QXm+YcQw94coIlZFEwYlm027dQyVG604uMfhmdAkKqvVDntizRNIBUlVvr9aviVi8FKqMChJK4/+72P2N4nK3xFPgMmfalfomhhrUx6KyquEdUM0xH/eP7reY/FvGUeC1/rn8GNvEWij3tvLcO8fgkAH/8AJoE//+XYuZlwrFmdxzjkxOTmpuiAjQ57MzZsdlcZy2dDWcg9UX79SSOg1cPEODg6KubmarkaYcijW7esTjTpE7a1ixHZ0LQO1U1mFtj0ahVGWJKYYGAw1zA0jAiJsxd2LEhqzCqND7JHUqKQmaHWaggwjksgPe6Ju4bVxWbd8fgPySMiYRM2ETEH+A84Kcifwb6JUil8V5XtQSowhjxJvyUNYGkl4KfBKapm7OP5ApG/+DsKjW6qEf3n5W1o+PyxjsSEvzKnMqHuYEQVMRJwIQiDaFRqV9U4Kh0AKrj1+4CK6PQZ8u5crFMjNL1JNjGpTU6flzMyMVihMycuXb1AII6sDt7Aaw3lj4n3rn7VhfVjeubOAL+Qv49c9LerlVQ2zhbVEoyoexAbcuFPTGss58YlBHcczsA+g1FTD15SJCZi+NUxpooI8OCBCeUJYU6PnQVN+VyKJfQ5CIJteK4l60oRBSSLFLJqwJk1bLA/m3RgmFopkRTSKUUwy7JPDwzAsjZaMI5fTyIDDgYTLjkM0sp6RucJJKW7OiBImHZZKN5BzSsFjqYmFhSHx3HO+9xFWOfuTEIM4MrwxXu8LBDq/nPvidj7ONxGESDARYQtHk/zn02pFoRJtdNfGkJLABFh5afg6TACToRHiGryREVGrmVo6DckN1arKQ8nnB8S9ezpCqIoWHyGiKsrZlGlkSZ0XA4+vfz5sR7SzHe7rXjsODEfQYhjViScyap6UWF0V9WRW9iNvonQAsJYnkZ/BxO8api8kU+vDnhXkUjJVmhOESRCH/lf64kKzeHZOhUAqpzIe5FRmO2X87K0E4O+zVfsDtM/u62N8O508THeGoGNofCNDAF0PDE04ukT7RpQuMuIm/L/2JhXj+Y1UHcngUEI4ZARfcJfVcWttWUtbpvos1JMVtcacYpDkDagX1+uB3AmlZshKhGu/azDt52AQ/HAokfCNA9FMohhQnVGrOSh2G8DzRVHOfhLrOyJXsTGMfFS+9x4MyYCfRxkZGZdXxVX1GqpTIYoE4l+hWhVq3fOCQoNC+zshUHDrtJPzKz4KH+Hjur/GR3gffOmNEej6++C7hhakZtR2Z4TpQpCbEcjNnMOxSXUcqRrVRiB439/v6yTdv/8p1SfpJeXzkxhxuaV0k/wzMQXp2B1sHhNrFT+HQ/sh19ZppHxCDdN11KRL/1n7MVUeVjdKNSiUM/GbvyZjsrz8Q5U/OXt2yFNmBA+dPMpMcD5WM5cwEXH9yA8dJPlVWncMinqm9tEWt/2DAOdc9s/f4rHvhH7RUeWrXo9f+k4/GL6lNvVVytNg6gDa7Oy34a2oBA68hou0j76YWDAERQmV939VbTqCalv8dgurMX+zPQeQ9j3cMqUxuVK9pWUyYypX0jn+jtqENrZ45pmzqlT/36qBZ/LVSdnv3zoGlSdxXuClCN+I+H2c91f8eKAQaH+ADtRdf6xvthM2dXsxISShNxM+pzWqVdu1M/T8YdXBhTCUwjFEU6otKkXIieDZ5iuiNQjP8IMaPGtvwPMB614Y4oTnXehig5to5086RiT0UOj8jpey7uPavmbYJ6/3FwLr/lr769b4braAQNffz/+ubWRwqJ9weBuBxSPddnSscSgYePFX2x+F6TYaof3ozpXgTh65/saGpPs0HkruRuOgbHd9OA/KLfN9bh2BjpfTfk3X733XZvtwxwi1d21ro9tQbPTCjhfSfXTdx3Cj2+o+mbcPCALr/qoH5J75NreMwPaNy5a7fswT2bg8JnAH8GVsXA7gH60Ht9z1Odip49DVVedGd9pppyfeYgQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoARYAQYAUaAEWAEGAFGgBFgBBgBRoAR2BcI/D9Pwed/Qo5LxwAAAABJRU5ErkJggg==",length:120,width:120,offsetCenter:[0,"-45%"],itemStyle:{color:"auto"}},detail:{formatter:function(A){return`线索完成度
`+getvalue+"%"},color:"#404447",fontSize:22,offsetCenter:[0,10]},data:[{value:getvalue}],z:5},{name:"外部刻度",type:"gauge",radius:"75%",min:0,max:100,splitNumber:10,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"rgba(0,0,0,0)"]]}},axisLabel:{show:!1,color:"#4d5bd1",distance:25},axisTick:{show:!0,splitNumber:7,lineStyle:{color:"#7083DB",opacity:.6,width:2},length:-8},splitLine:{show:!1,length:-20,lineStyle:{color:"#C7CBCF"}},detail:{show:!1}}]};
