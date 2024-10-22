(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{345:function(t,v,_){"use strict";_.r(v);var r=_(4),n=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"垃圾回收-gc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收-gc"}},[t._v("#")]),t._v(" 垃圾回收(GC)")]),t._v(" "),v("p",[v("strong",[t._v("垃圾")]),t._v("的定义:"),v("strong",[t._v("运行程序中没有任何指针指向的对象")])]),t._v(" "),v("h3",{attrs:{id:"垃圾回收相关算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收相关算法"}},[t._v("#")]),t._v(" 垃圾回收相关算法")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("垃圾标记阶段算法(对象存活判断,对象死亡定义:不再被任何存活对象继续引用时,就宣布死亡)")])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("算法名称")]),t._v(" "),v("th",[t._v("算法详情")]),t._v(" "),v("th",[t._v("优点")]),t._v(" "),v("th",[t._v("缺点")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("引用计数算法(Reference Counting)")])]),t._v(" "),v("td",[v("strong",[t._v("java并没有采用该算法")]),t._v(",对每一个对象保存一个整数的引用计数器属性,用于记录对象被引用的情况")]),t._v(" "),v("td",[t._v("实现简单,垃圾对象便于标识,判断效率高,回收没有延迟性")]),t._v(" "),v("td",[t._v("存储计数器,增加内存开销,每次赋值都需增减,增加了时间开销,无法处理"),v("strong",[t._v("循环引用")]),t._v("的情况")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("可达性分析算法(Tracing Garbage Collection 根搜索算法,追踪性垃圾收集)")])]),t._v(" "),v("td",[t._v("以根对象集合("),v("strong",[t._v("GC Roots")]),t._v(")为起点,按照从上至下的方式搜索跟对象集合所连接的目标对象是否可达,搜索所走过的路径为引用链("),v("strong",[t._v("Reference Chain")]),t._v("),如果没有任何应用链相连,则是不可达,可标记为垃圾对象")]),t._v(" "),v("td",[t._v("实现简单,垃圾对象便于标识,判断效率高,解决了循环引用")]),t._v(" "),v("td")])])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("垃圾清除阶段算法")])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("算法名称")]),t._v(" "),v("th",[t._v("算法详情")]),t._v(" "),v("th",[t._v("优点")]),t._v(" "),v("th",[t._v("缺点")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("标记-清除算法(Mark-Sweep)")])]),t._v(" "),v("td",[t._v("堆中可用内存不足,停止整个程序("),v("strong",[t._v("stop the world")]),t._v("),然后标记从引用根节点开始遍历,收集器标记所有引用的对象,在header中记录为"),v("strong",[t._v("可达对象")]),t._v(",收集器对堆内存从头到尾进行线性遍历,发现对象Header中"),v("strong",[t._v("没有标记为可达对象")]),t._v("的,将其回收")]),t._v(" "),v("td",[t._v("基础常见")]),t._v(" "),v("td",[t._v("效率不高,发生stw,内存不连续,且维护空闲列表")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("复制算法(Copying)")])]),t._v(" "),v("td",[t._v("将活着的内存空间分为两块,每次只使用其中的一块，在垃圾回收时将正在使用的内存中的对象（活着的对象）复制到未使用的内存块中,之后清除正在使用的内存块中的所有对象（活着的对象+垃圾对象）,交换两个内存的角色,最后完成垃圾回收")]),t._v(" "),v("td",[t._v("没有清除标记步奏更高效,复制对象保证空间连续性")]),t._v(" "),v("td",[t._v("需要更大的内存空间,空间浪费,G1垃圾回收器指针引用关系内存占用以及时间开销大")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("标记-压缩算法(Mark-Compact)")])]),t._v(" "),v("td",[t._v("第一阶段和标记清除算法一样,从根节点开始标记所有被引用对象,第二阶段将所有存活对象压缩到内存的一端,按顺序排放,之后清除边界外所有的空间")]),t._v(" "),v("td",[t._v("消除标记-清除算法中内存碎片的问题,消除了复制算法的内存double开销")]),t._v(" "),v("td",[t._v("效率低于复制算法,移动对象被其他引用,则还需要调整引用,stw事件")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("分代收集算法(Generational Collecting)")])]),t._v(" "),v("td",[t._v("结合分代在各个代上使用上述三种算法")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("增量收集算法(Incremental Collecting)")])]),t._v(" "),v("td",[t._v("垃圾收集线程和引用线程交替执行,每次只收集一小片区域的内存空间,接着切换到应用线程交替执行,以此反复,直到垃圾全部收集完成")]),t._v(" "),v("td",[t._v("任然是以标记-清除和复制算法为基础,清除stw事件")]),t._v(" "),v("td",[t._v("线程切换和上下文切换的消耗,系统吞吐量下降")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("分区算法(Incremental Collecting)")])]),t._v(" "),v("td",[t._v("堆空间划分为多个小块,根绝目标的停顿事件,合理的回收若干个小区间,从而减少gc的停顿")]),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"垃圾回收器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收器"}},[t._v("#")]),t._v(" 垃圾回收器")]),t._v(" "),v("p",[t._v("垃圾回收器分类")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("分类")]),t._v(" "),v("th",[t._v("详情")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("按线程分")]),t._v(" "),v("td",[v("strong",[t._v("串行垃圾回收器(Serial(新生代),Serial Old(老年代)),并行垃圾回收器(ParNew(新生代),Parallel Scavenge(新生代),Parallel Old(老年代))")])])]),t._v(" "),v("tr",[v("td",[t._v("按工作模式分")]),t._v(" "),v("td",[v("strong",[t._v("并发式垃圾回收器(CMS(老年代),G1(整堆收集器)),独占式垃圾回收器(stw)")])])]),t._v(" "),v("tr",[v("td",[t._v("按碎片处理方式分")]),t._v(" "),v("td",[v("strong",[t._v("压缩式垃圾回收器,非压缩式垃圾回收器")])])]),t._v(" "),v("tr",[v("td",[t._v("按工作的内存区间分")]),t._v(" "),v("td",[v("strong",[t._v("年轻代垃圾回收器,老年代垃圾回收器")])])])])]),t._v(" "),v("p",[t._v("经典回收器详情")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("垃圾器")]),t._v(" "),v("th",[t._v("详情")]),t._v(" "),v("th",[t._v("优势")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("Serial")])]),t._v(" "),v("td",[v("strong",[t._v("最基本历史最悠久")]),t._v("的垃圾回收器,jdk1.3之前回收"),v("strong",[t._v("新生代")]),t._v("的唯一选择,作为"),v("strong",[t._v("HotSpot")]),t._v("中"),v("strong",[t._v("client")]),t._v("模式下的"),v("strong",[t._v("默认新生代垃圾收集器")]),t._v(",采用了"),v("strong",[t._v("复制算法,串行回收和stw机制的方式执行内存回收")])]),t._v(" "),v("td",[v("strong",[t._v("单线程")]),t._v("下简单而高效")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Serial  Old")])]),t._v(" "),v("td",[v("strong",[t._v("老年代")]),t._v("垃圾回收,同样采用"),v("strong",[t._v("串行回收和stw机制")]),t._v(",回收内存算法用的是"),v("strong",[t._v("标记-压缩算法")]),t._v(","),v("strong",[t._v("client")]),t._v("模式下的"),v("strong",[t._v("默认老年代垃圾收集器")]),t._v(","),v("strong",[t._v("server")]),t._v("模式下,可与"),v("strong",[t._v("新生代的Parallel Scavenge")]),t._v("配合使用,也可作为"),v("strong",[t._v("CMS")]),t._v("收集器的后备垃圾收集方案")]),t._v(" "),v("td",[v("strong",[t._v("单线程")]),t._v("下简单而高效")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ParNew")])]),t._v(" "),v("td",[t._v("与Serial几乎没有差别,同样采用了"),v("strong",[t._v("复制算法,并行回收和stw机制的方式执行内存回收")]),t._v(" ,除了Serial,目前只有ParNew能与CMS收集器配合工作")]),t._v(" "),v("td",[v("strong",[t._v("多cpu")]),t._v("下比Serial高效")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Parallel Scavenge")])]),t._v(" "),v("td",[t._v("与ParNew几乎没有差别,同样采用了"),v("strong",[t._v("复制算法,并行回收和stw机制的方式执行内存回收")]),t._v(" ,"),v("strong",[t._v("可控制的吞吐量(吞吐量优先)")]),t._v(",自适应调节策略")]),t._v(" "),v("td",[v("strong",[t._v("多cpu")]),t._v("下比Serial高效")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Parallel Old")])]),t._v(" "),v("td",[t._v("替代"),v("strong",[t._v("Serial  Old")]),t._v("收集器,采用了"),v("strong",[t._v("标记-压缩算法,并行回收和stw机制的方式执行内存回收")])]),t._v(" "),v("td",[v("strong",[t._v("多cpu")]),t._v("下比Serial高效")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("CMS(Concurrent-Mark-Sweep)")])]),t._v(" "),v("td",[t._v("采用了"),v("strong",[t._v("标记-清除算法，真正意义的并行回收和stw机制的方式执行内存回收")])]),t._v(" "),v("td",[t._v("垃圾回收线程与用户线程同时工作，停顿时间短，响应速度块，低延迟")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("G1（Garbage First）")])]),t._v(" "),v("td",[t._v("作为jdk9 的默认垃圾回收器，取代CMS以及Parallel +Parallel Old的组合，G1将内存划分未一个个的region,内存回收以region为基本单位，region之间采用的是复制算法，整体上可看作标记压缩算法，避免内存碎片化")]),t._v(" "),v("td",[t._v("并行并发，分代收集，空间整合，可预测停顿模型，G1的内存占用以及执行负载都比CMS高，在小内存应用上CMS的表现大概率由于G1,G1在大内存应用上具有优势，平衡点在6-8G之间")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/01.backend/011.Java/01114/8.png",alt:"尚硅谷图片"}}),t._v(" "),v("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/01.backend/011.Java/01114/9.png",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);v.default=n.exports}}]);