var img=[];img[0]="data:image/png;base64,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ayA3LjAuMS02IFExNiB4ODZfNjQgMjAxNi0wOS0xNyBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZ93ZpU4AAABjdEVYdHN2Zzpjb21tZW50ACBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIM5IkAsAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADUwNH/1x/UAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTI1qTXFvAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNDk4OTE0NTE4hF+WHgAAABJ0RVh0VGh1bWI6OlNpemUAMTAuN0tCtWFELQAAAF90RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2hvbWUvd3d3cm9vdC9zaXRlL3d3dy5lYXN5aWNvbi5uZXQvY2RuLWltZy5lYXN5aWNvbi5jbi9zcmMvMTIwOTQvMTIwOTQ4Ny5wbmfTi8hDAAAAAElFTkSuQmCC",img[1]="data:image/png;base64,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",img[2]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAB2CAQAAACq/FNEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAEYAAABGAOJAJ8AAAAAHdElNRQfhBwEVCC9itQ84AAAPa0lEQVR42u2ceXiU1b3HPzOTSTJJyGQhG5CQEBYJi8JFCWBRruASrNIHN6o+Xn30or1UfVrEx9pWrdaN1lrtrb1aodRKUStSXFC0XDcQlEXQIAQCWchK9skkmcks9w+GM+86WzIJyeX3/pGT857znnO+c87v/LZz4CydpbN0lv4fkyGMsolkko4VK6nEYsQE9NJGLTVU4xjwvmeSy2iyiMOIBw9ubLRgo4UmmvD2HwBWxlHEZM5jKlbiiSFG8tZDD83s4BN2U0b7AAw8llxmMJsFFJKIWdaXXlx0coKvKKWUMupx962xfB5gJ8248QZ9WtjBTxkT1cEncSkbqKQ3hP7YKWMt84mPfPBPcQRPCE35HzeH+T3FURl8Niv4mI6w+uOllc1cFklzC/g0zKb8zwmeYjrGfhz8SP6DzyLuTyP3k6D9YT0eUMx6ChR5buzY6KAVJz1048TACFLJJoNE1RdqeY41nOyHwZu5mJ9zoQpQFy3U0Uw7TkzEYyGWEaSQxAjiVGV/yy9xhgpABpuYK/7zYudrtnGQSk7SiR03bjx4ARNxpJHPDEqYp0DZzT6e4fU+sqHxPMgSUmR5Xo7zFjsoow47LrwYMGDCiIUEUslhAsUsIFPCru1cz7uhNnohnZIJ1MYjZAatY2URz/CdYvJ18BwTIh58IrfyjWpNb+RWCoPWNXE5X8tqvibbMQLSHGySih7qeYxzQqo5jqc5qujyLi6NiB/k8Qecsi+1s5nLiA2hbho38IVir/irbPsOSEm8quL+lTxKTki1C3mKVsUGqcuEAvwIu2Xf8PAhC0Pa0uIo4VMciv4f4/xwmk9nOV8qPuFhH6sYFUJtM/PZKMPfyV/ID7l1E7dTJWv7CHcyMqSaV/Am7apd4PfMCEvqBSCfRzis2lI+52bSQ6idzH1UyGpuZXpI7SbxC9lu380GZoZQL4Y5/IkWRX/beJ1Lwh/8aSrgWRoUn3TxMVdgEWUMZFDMpeSpas9im2wpHQxBRErhz7gkdWr5kaStU5TIPBZSKNvsJrBaNXgH2ygJnfXp4TqDP6gmVQdvczFmMriBNeynjR5KWaCqPZInsUvqlXNlwNZGsUEG2XYuUP16aaylk24qeZf7KcLMaJ7kmGqu7uJaUvs2eD8Il/N32c7gxUs9b7OHHknOyxpTLZblVEvKHGWJbjtjeE1S0s06xmmUWiLjLhW8yx7V4L/inpC4VRgUxzV8QndAkfMDlQR2ii7jiKRUNSWapbLYKFv5q0nWLHdXEMH3GI9HSyWzcj1fBlCP9ACAGbJNrYaLVSVSZcO3cY/u2g0EQCOr+yB4hUSjuIv9ugDoCynn8r8ydjhH9jaZP0qAbeLOAKLTnTqtt/A852OK7vBPUSGPCnmvXCL+fhaQ6Uxjp6S722Rywc8kFodOlgdsfZUo2cBeH4u18Q8u71f9MyhN5RnWsZJ87hYd6mE9xQFmwTSZZL9e6JDX0CRy7dwX4Fccw084LplxOSzlv1nHtZGbPfpCp3j+bYqJ+D9M0q1RLBGtnPwUA1Ak0R56+bXu8JO5g1IZB3rbJ91HLOb0DxVSqliN5TypuYEB/ICTolwzi0jlXUnNFzQsCwAWbmKbbMv14mHV4A7cT1fzucpKt48fae7EBlZIBvIRT0lW/wfkatSIZyHrFYP3UsXjWAd74H6ysoJDMhHWi5vdXMcIjQG9ICnlkswbta5g5FzWquyALbzC1P7peF9Wj4k4EkjAgpUEYhhNCUsULNDBdp7nHVyy3Cw2qbQCG7fwliJvEj9mKdmK3H28zn4cOGnHhgM7PVrGrmgBEEMehUxgPLlkkkIyZuIwY8CJh3QNFtbGO6zhMxkIV7CWLFmpl/gveiX/5/NDbqRIowdtOIjHgAsnTrpppZUTVHCUI5TTESkUwcnCNG7hzxwPIhBrPW2sZqoM7tUKjpEveTeSm3WFLf3HRTNbuZ8FZPT/4NNYxlYawvQSyJ8TPC5hixM5JOHnd4n8OL7PdoUpLLynk/08yqT+E4tG8wBfRvCrqx8PX7NSGFjvEHB+6PvNjFzOxrBdH9pPFWuYH3yJBytgZQl36pgx3HTRSQ82unDhxUQcSVhIICmAXOblU17kn9jJ4i8swkQNt/M+BmZyKzcEsDb10o0NBza6RXsjsJBIoo4S1shfWcvByAGYzBMsVtlSHZykgjK+4CBNdNGDEzdejMQQTxxWspnNVPIZQ5omFC5+wdN4GMkScnibA3iYyZuaVkMPbdRTxVF2UE4LPfTgwAMYMBNPHCmMYT5FjGO0hgJdzs95KzLf9TLKVWymlMdZTCFJQeeOCSsTuIz72UqbaoJWqpTWh1VlnBzkdyxjJlm6arafYslmDit4T2W46eIFxY4TAsWySqKgnBI+3uBGxkYApJVi7uUtamUrNBAAXezkN1ylYWUMTiO4iKc5qABhMxPD+UgcP5MxvW7eY3EfjYtmZvEMB+jBi4OHVPJCsU/Lq+MfXK9whYVP4/kNJ2QQfB46BCbuk7kVylmmUFGMnMdyFukoLoEoi+9zD1cQC8SQTB7jyPBN8CKWcxtTwwbawDn8J1cqNAMD09gkE863h+qZuE62EW3kXFWJO6jFjZ3fRaCFWyiihBX8ljf4gmNUc4D3eZEHWcZcMiKQTRdTgZtuXlMpRyncJzOVr9OxMspoKgdEBTdrNNxho4RZw87SkIaczRQWchuPsI6PqdERczx0sI+NPMs9/IALGIs1BANXGu/76jv4oeqtgZuok4xnZbDPmVgj6dB6TcTulSiw7+jMgVjSKGQe1/IwH/AdDWEKUr20UcEuXuJ2FjGNHBJ05sZdkt7s01TAr5FYII4GMNYAMFdS+ENNmXqSzAVhk8wBE0nkUsIq/sg77KUam0JBjuzpoZFDfMwrPMYtTCFNonGmsENS0q1jTVwpsVa8LJdr5EJOHHcLF2Q1j2nGdyyVRY4k8RMaSSaPAvIYQzbZYbDGXkwhSOxxZJDh++XcNNJALVUcp4oqvifzGhq5lS1Uqb7wJ6Zzsy9dwmS+0WuqSLJeHtIsMVnlLnXToXJFB3oc1PEtH/IyD/IrIbS0s4WdHKctDDXIjU2j5Qc0+11MsyjxY32sbxHqSR1TZG/MpJDPbF6JaBJLzWWrmUCmj3M8JHI/IplkxnI+V7OSTRygFntIwXnK5zBXc45owd9/vxXqX1IpQ74EZgpGs4VDGLCQwjmcSwFjGUUmKSSJspVkBxRQ3XTRSinfcJQp3O37cgsbOOIrYeF7ovSXdAAdVALwPCNII4dc8pjALEaRFCQuZD+5pAEwkQ2000Q9VVRyiL000kUvr3Kjzzw3k0L2aAGQwTxfyouZhykgl2yyNE2PJ7iXlaL8aeqlkXpqqaKCSmqop5FO4FkJsN+K0lki0sfl7xAADhw0UQaAiUyyyPFxmVM9UtoZ7fyS67jR91888WT5ZrCTBhqooRKbMJvFS+vLAThtkzVwE4FpM5tw8BxjcdFBiw/vMvbQQKfMtAUFwiXuYYtEL8sXloFmDum25KaOOr4GwIiFFIqYTgFjySGTFOLp5m9swcUSDfYbSy65zJLledGJI56n0qP0nm989tuJLOYSisjCEkCCWyxYVR2TJfl3iO9tDjuCCMykMo45XMlcLEAsT4QUQOuli4u0Z0BMwCgqDzaOUEEVR9jmm55lvr+BaYZYv0eoluSPF6k9dIUNQC+ttHJM/O/kCXYznTzymEhWqBqFdMgN1CvUBTvtnKTOt+tWcpjWsMMeTRIL/i46RTqJab6Ul/Kwh69FHbzJm0ACBRSSRz5jGU02qSTJxmmULgHpi0P8il+Tgp0WGqjmADuppYXOPp0FSBaav533JPkZYqPtls2LvlMXpZQCYCKBFDKZQjEFZJOBFdiqP29NTOYippNDYr/ZVGcL4fqYzMBxgbAT1cs4Q7QojjTGM5c5cv1GvurdfMd3/dzwbCFcV9EsybcKUcUWTWeGIAcOWjiqzI5+SIHf9HUMuyQ/Q7CpVglnGHCKNgBmiRVRzuqsou2uyD17Zz4ACcK16VVoaX5ZvbOv53rOZACSBQfo4oTsjV8ctSl8x8MKgFQx0BNUyN74xdZuPMMXgDQx0BrqZW/82t0g/v7RB2CkGGiDQpzy6w4hHnEcmgBkCLtui2Ki+/8b0Oi+gQbAb6VtUrzxq8zmwQxziy4AsRLDWrPinV8o6j+x+4wDIEbi7VcqvH7pb0Toh5mGGgBmIe64VMequ0XKMnxnQLwworpVANgF908Mwfs/RAEwi9M+HpW83yTYYEoEXuYhAoBJbIIelbzfIQBIGL4AGMX3XSqrUqvYB5JCOoY3JAEwixnQqwKgjRZfKj4agY1nGgBuha8AmoSL0szo4QpAjPi+mgc4JOapSEKvhgQARgkAapW3UqSmS3yOwwyAQDpfpeAL00M8lz7kAAhMNcIanKZ5UmQYACB1Q6o1vgYafSlLtA87DhYAbgGAUaOlNomRbCBcI4MCwGnWZ9QIeHPylQSAQTn3F20AXGLzM2l6az/C5kuNHyw2GF0AegUAMZohLseFoXSsxt0DwwAA/xLQBqCJw76UKUrXbw0yAH7xx6Rp9XFyQKSnDc4xyGjPgNM2f4NO1O8eoSMURnQ64AwHwCkMX0YdLr/TF8oA6fzbcATgtCnUpHGEFqCWL0RProkgVOoMB8BvBdADAHYJYWlWGFctDREAPBLbr57hc49wmWSGd9nVUACgV6Ly6tn9jrPblzJQoroyaYgD4Oa4SKfplLGzQYhLCxUh2kMeAGgVKf1dfqeQB9O4cLgB0C5EoQRdF2gle0X6kpBuCxxCALQIQSdd1wPoYKuA6YKBlgaiDUCXkAWTA/y2/xTR4plcN7wAaBcbYbouG4RqPhHpfw/h/tIhBECHAGBMQOv/VrFUJiku2RriAPQIB5gl4Hng7ez0peK4fSCN5NEGoFM4wMwBp/ZJXhUi8XzOGz4A9ArTtyHIifBtIpAymauGDwBOGkQ68A2Px9gi0kvFYYohD4BXEhwV+FpcNy8JsMZx7XABAGpEKivo2b/PRfqq8C+9OFMBqBI2gfQgsUC9vEibLz1VnPUd8jSZGt/RmLKgtn8zr4vDbd8OTNRA9GdAk9gIk8kghtgAj5tNIphqss7ds/1M0Q9R7BQWn3ReoDVIWGwCLh+nMHIv2/rpQN2gkpG/RXx1woMD0b1ok0eyD4RLF0U/hHIgAiQORVxzUM+S9B9l80ZE1/DVBrmIvV9oYCL1M7kk7LuhXOxj7/CYAWfpLJ2ls3TG0v8Bbda+iDRxx8IAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDctMDFUMjE6MDg6NDcrMDg6MDBQgD4SAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA3LTAxVDIxOjA4OjQ3KzA4OjAwId2GrgAAAE10RVh0c29mdHdhcmUASW1hZ2VNYWdpY2sgNy4wLjEtNiBRMTYgeDg2XzY0IDIwMTYtMDktMTcgaHR0cDovL3d3dy5pbWFnZW1hZ2ljay5vcmfd2aVOAAAAY3RFWHRzdmc6Y29tbWVudAAgR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICDOSJALAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA1MDUI8vdjAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADU0NxFhAxYAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTQ5ODkxNDUyNz/N2EwAAAASdEVYdFRodW1iOjpTaXplADE0LjNLQkfoSjEAAABfdEVYdFRodW1iOjpVUkkAZmlsZTovLy9ob21lL3d3d3Jvb3Qvc2l0ZS93d3cuZWFzeWljb24ubmV0L2Nkbi1pbWcuZWFzeWljb24uY24vc3JjLzEyMDk1LzEyMDk1MDEucG5ny3ltvwAAAABJRU5ErkJggg==";var dataInfo=[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"}],dataInfoIcon=dataInfo.map(function(A,Q){return{value:A.value,name:A.name,label:{normal:{backgroundColor:{image:img[Q]}}}}});option={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:["直接访问","邮件营销","联盟广告"]},series:[{name:"访问来源",type:"pie",radius:["30%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,formatter:function(A){return"{a|}"},position:"inside",width:30,height:30,rich:{}},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!0}},data:dataInfoIcon},{name:"图标",type:"pie",radius:["30%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,align:"right"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!0}},data:dataInfo}]};
