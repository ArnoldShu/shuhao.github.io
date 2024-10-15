(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{349:function(t,_,v){"use strict";v.r(_);var r=v(4),o=Object(r.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"两阶段提交协议-2pc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#两阶段提交协议-2pc"}},[t._v("#")]),t._v(" 两阶段提交协议（2PC）")]),t._v(" "),_("p",[_("strong",[t._v("二阶段提交协议（Two-phase Commit，即2PC）"),_("strong",[t._v("是常用的")]),t._v("分布式事务")]),t._v("解决方案，它可以保证在分布式事务中，要么所有副本（备份数据）同时修改某个数值，要么都不更改（可以理解分布式事务的"),_("strong",[t._v("原子性")]),t._v("），以此来保证数据的"),_("strong",[t._v("强一致性")]),t._v("。")]),t._v(" "),_("h3",{attrs:{id:"_2pc-简单总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2pc-简单总结"}},[t._v("#")]),t._v(" "),_("strong",[t._v("2PC")]),t._v(" 简单总结")]),t._v(" "),_("ul",[_("li",[t._v("分布式系统中，每个节点仅仅知道自身节点操作状态，对其他节点的操作未可知；")]),t._v(" "),_("li",[t._v("多个节点为了保持一致性引入一个作为"),_("strong",[t._v("协调者")]),t._v("的组件来统一掌控所有节点（参与者）的操作结果并最终指示这些节点是否要把操作结果进行真正的提交（比如将更新后的数据写入磁盘等操作）；")]),t._v(" "),_("li",[t._v("参与者将操作结果通知协调者，再由协调者根据所有参与者的反馈情报决定各参与者是否要提交操作还是中止操作。")])]),t._v(" "),_("h3",{attrs:{id:"_2pc-的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2pc-的过程"}},[t._v("#")]),t._v(" 2PC 的过程")]),t._v(" "),_("p",[t._v("关于两阶段提交的过程如下图所示（图片摘至（"),_("a",{attrs:{href:"https://matt33.com/2018/07/08/distribute-system-consistency-protocol/",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式系统的一致性协议之 2PC 和 3PC"),_("OutboundLink")],1),t._v("））：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/034.distributed/0341/4.png",alt:"两阶段提交过程"}})]),t._v(" "),_("p",[t._v("顾名思义，2PC 分为两个过程：")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("准备阶段（表决阶段）")]),t._v("：此时 Coordinator （"),_("strong",[t._v("协调者")]),t._v("）向所有的参与者发送一个 vote request，参与者在收到这请求后，如果准备好了就会向 Coordinator 发送一个 "),_("code",[t._v("VOTE_COMMIT")]),t._v(" 消息作为回应，告知 Coordinator 自己已经做好了准备，否则会返回一个 "),_("code",[t._v("VOTE_ABORT")]),t._v(" 消息；")]),t._v(" "),_("li",[_("strong",[t._v("提交阶段")]),t._v("：Coordinator 收到所有参与者的表决信息，如果所有参与者一致认为可以提交事务，那么 Coordinator 就会发送 "),_("code",[t._v("GLOBAL_COMMIT")]),t._v(" 消息，否则发送 "),_("code",[t._v("GLOBAL_ABORT")]),t._v(" 消息；对于参与者而言，如果收到 "),_("code",[t._v("GLOBAL_COMMIT")]),t._v(" 消息，就会提交本地事务，否则就会取消本地事务。")])]),t._v(" "),_("h3",{attrs:{id:"_2pc-的实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2pc-的实现"}},[t._v("#")]),t._v(" 2PC 的实现")]),t._v(" "),_("p",[t._v("通用架构实现，可参考"),_("a",{attrs:{href:"https://help.aliyun.com/document_detail/132896.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式事务中的二阶段提交是什么？"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("一个**事务管理器（Transaction Manager，简称 TM）"),_("strong",[t._v("协调 1 个或多个")]),t._v("资源管理器（Resource Manager，简称 RM）**的活动，所有资源管理器向事务管理器汇报自身活动状态，由事务管理器根据各资源管理器汇报的状态（完成准备或准备失败）来决定各资源管理器是“提交”事务还是进行“回滚”操作。")]),t._v(" "),_("p",[t._v("二阶段提交的具体流程如下：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("应用程序向事务管理器提交请求，发起分布式事务；")])]),t._v(" "),_("li",[_("p",[t._v("在第一阶段，事务管理器联络所有资源管理器，通知它们准备提交事务；")])]),t._v(" "),_("li",[_("p",[t._v("各资源管理器返回完成准备（或准备失败）的消息给事务管理器（响应超时算作失败）；")])]),t._v(" "),_("li",[_("p",[t._v("在第二阶段：")]),t._v(" "),_("ul",[_("li",[t._v("如果所有资源管理器均完成准备（如图 1），则事务管理器会通知所有资源管理器执行事务提交；")]),t._v(" "),_("li",[t._v("如果任一资源管理器准备失败（如图 2 中的资源管理器 B），则事务管理器会通知所有资源管理器进行事务回滚。")])]),t._v(" "),_("p",[t._v("图1，"),_("strong",[t._v("所有资源管理器完成准备，事务管理器协调各资源管理器提交事务")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/034.distributed/0341/6.png",alt:"图1"}})]),t._v(" "),_("p",[t._v("图2，"),_("strong",[t._v("任一资源管理器准备失败，事务管理器协调各资源管理器回滚事务")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/034.distributed/0341/7.png",alt:"图2"}})]),t._v(" "),_("p",[t._v("2PC 的问题和解决方案")]),t._v(" "),_("p",[t._v("问题：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("单点故障：")]),t._v(" 两阶段提交的主要问题是它对协调者的单点故障敏感。如果协调者在提交阶段崩溃，系统可能会陷入不一致的状态。")]),t._v(" "),_("li",[_("strong",[t._v("长时间阻塞：")]),t._v(" 在一些情况下，如果有参与者无法及时响应，可能导致整个系统长时间阻塞。")]),t._v(" "),_("li",[t._v("某些极端情况（提交阶段Coordinator 和参与者都出现挂掉的情况）可能导致"),_("strong",[t._v("数据不一致")]),t._v("。")])]),t._v(" "),_("p",[t._v("解决方案：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("单点故障：")]),t._v(" 实际生产应用中，Coordinator 都会有相应的备选节点。")]),t._v(" "),_("li",[_("strong",[t._v("长时间阻塞：")]),t._v(" 在实际的应用中，这可能会导致长阻塞问题，这个问题是通过超时判断机制来解决的，但并不能完全解决同步阻塞问题。")])]),t._v(" "),_("h2",{attrs:{id:"三阶段提交协议-3pc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三阶段提交协议-3pc"}},[t._v("#")]),t._v(" 三阶段提交协议（3PC）")]),t._v(" "),_("p",[t._v("**三阶段提交协议（Three-Phase Commit，3PC）"),_("strong",[t._v("是对")]),t._v("两阶段提交协议（2PC）**的改进，旨在解决2PC的一些问题，如长时间阻塞和单点故障敏感性。3PC引入了额外的阶段以提高协议的鲁棒性。")]),t._v(" "),_("h3",{attrs:{id:"_3pc-简单总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3pc-简单总结"}},[t._v("#")]),t._v(" "),_("strong",[t._v("3PC")]),t._v(" 简单总结")]),t._v(" "),_("ul",[_("li",[t._v("三阶段提交是为了解决"),_("strong",[t._v("两阶段提交协议")]),t._v("的缺点而设计的；")]),t._v(" "),_("li",[t._v("与两阶段提交不同的是，三阶段提交是一种“"),_("strong",[t._v("非阻塞")]),t._v("”的协议。三阶段提交在两阶段提交的第一阶段与第二阶段之间插入了一个"),_("strong",[t._v("预提交")]),t._v("（preCommit），令原先在两阶段提交中，参与者在投票之后，由于协调者发生崩溃或错误，而导致参与者处于无法知晓是否提交或者中止的“不确定状态”所产生的可能相当长的延时的问题三阶段提交得以解决。")])]),t._v(" "),_("h3",{attrs:{id:"_3pc-的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3pc-的过程"}},[t._v("#")]),t._v(" 3PC 的过程")]),t._v(" "),_("p",[t._v("关于三阶段提交的过程如下图所示（图片摘至（"),_("a",{attrs:{href:"https://matt33.com/2018/07/08/distribute-system-consistency-protocol/",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式系统的一致性协议之 2PC 和 3PC"),_("OutboundLink")],1),t._v("））：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/034.distributed/0341/5.png",alt:"三阶段提交过程"}})]),t._v(" "),_("p",[t._v("顾名思义，3PC 分为三个过程：")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("准备阶段（CanCommit）")]),t._v("：此时 Coordinator （协调者）向所有的参与者发送一个 发送 "),_("strong",[t._v("CanCommit请求")]),t._v("，参与者在收到这请求后，如果准备好了就会向 Coordinator 发送一个 "),_("strong",[t._v("Yes")]),t._v(" 消息作为回应，告知 Coordinator 自己已经做好了准备，否则会返回一个 "),_("strong",[t._v("No")]),t._v(" 消息；")]),t._v(" "),_("li",[_("strong",[t._v("预提交阶段（PreCommit）")]),t._v("：\n"),_("ul",[_("li",[t._v("参与者"),_("strong",[t._v("全部返回Yes")]),t._v("，协调者发送"),_("strong",[t._v("PreCommit请求")]),t._v("，要求参与者在接收到该请求后进一步确认是否可以提交。参与者执行预提交操作，但仍然不释放锁或资源并且反馈给协调者 "),_("strong",[t._v("ACK")]),t._v(" 响应，同时等待最终指令；")]),t._v(" "),_("li",[t._v("如果任何参与者在"),_("strong",[t._v("PreCommit阶段")]),t._v("表示不可以提交，协调者发送"),_("strong",[t._v("Abort请求")]),t._v("，要求所有参与者中止事务。参与者回滚本地事务，释放锁和资源。")])])]),t._v(" "),_("li",[_("strong",[t._v("提交阶段（doCommit）")]),t._v("：\n"),_("ul",[_("li",[t._v("如果所有参与者在"),_("strong",[t._v("PreCommit阶段")]),t._v("都确认可以提交，协调者发送"),_("strong",[t._v("Commit请求")]),t._v("，要求参与者最终提交事务。参与者释放锁和资源，并将事务标记为已提交并且反馈给协调者 "),_("strong",[t._v("ACK")]),t._v(" 响应。")]),t._v(" "),_("li",[t._v("在协调者发送"),_("strong",[t._v("Commit请求")]),t._v("阶段发生故障，协调者发送Abort请求，要求所有参与者中止事务。参与者回滚本地事务，释放锁和资源并且反馈给协调者 "),_("strong",[t._v("ACK")]),t._v(" 响应。")])])])]),t._v(" "),_("h3",{attrs:{id:"_3pc-的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3pc-的问题"}},[t._v("#")]),t._v(" 3PC 的问题")]),t._v(" "),_("p",[t._v("尽管三阶段提交协议（3PC）相对于两阶段提交协议（2PC）在一些方面进行了改进，但它仍然存在一些问题，这些问题包括：")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("阻塞问题：")]),t._v(" "),_("ul",[_("li",[t._v("3PC引入了PreCommit阶段来解决2PC的长时间阻塞问题，但在一些情况下，由于网络延迟或者节点故障，仍然可能导致PreCommit阶段的长时间阻塞。")])])]),t._v(" "),_("li",[_("strong",[t._v("消息丢失：")]),t._v(" "),_("ul",[_("li",[t._v("如果在CanCommit或PreCommit阶段的消息在网络传输中丢失，协调者可能无法获得所有参与者的响应，导致决策的不确定性。")])])]),t._v(" "),_("li",[_("strong",[t._v("不一致性的可能性：")]),t._v(" "),_("ul",[_("li",[t._v("在PreCommit阶段，虽然参与者已经确认可以提交，但在Commit阶段发生故障时，可能导致一部分参与者已经提交，而另一部分未提交，从而导致数据的不一致性。")])])]),t._v(" "),_("li",[_("strong",[t._v("单点故障敏感性：")]),t._v(" "),_("ul",[_("li",[t._v("3PC虽然相对于2PC减轻了对协调者的单点故障敏感性，但仍然可能受到协调者故障的影响。如果协调者在PreCommit阶段发生故障，系统可能无法正常进入Commit或Abort阶段。")])])]),t._v(" "),_("li",[_("strong",[t._v("性能开销：")]),t._v(" "),_("ul",[_("li",[t._v("3PC引入了额外的PreCommit阶段，增加了协议的复杂性和消息交互次数，可能带来一定的性能开销。")])])]),t._v(" "),_("li",[_("strong",[t._v("无法解决网络分区：")]),t._v(" "),_("ul",[_("li",[t._v("3PC并不能完全解决网络分区问题。在网络分区的情况下，可能导致协议无法正常完成，从而影响事务的一致性。")])])]),t._v(" "),_("li",[_("strong",[t._v("难以调优：")]),t._v(" "),_("ul",[_("li",[t._v("3PC相对于2PC引入了更多的阶段，使得协议更为复杂，调优和维护难度增加。")])])])]),t._v(" "),_("p",[t._v("总体而言，尽管3PC在一些方面改进了2PC的问题，但在实际应用中，仍然需要仔细考虑协议的适用性，根据具体场景选择合适的分布式事务协议。在一些高性能、高可用性的系统中，基于"),_("strong",[t._v("BASE模型")]),t._v("的一致性策略可能更为适用。")]),t._v(" "),_("p",[t._v("参考链接")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://matt33.com/2018/07/08/distribute-system-consistency-protocol/",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式系统的一致性协议之 2PC 和 3PC"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://help.aliyun.com/document_detail/132896.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式事务中的二阶段提交是什么？"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%BA%8C%E9%98%B6%E6%AE%B5%E6%8F%90%E4%BA%A4",target:"_blank",rel:"noopener noreferrer"}},[t._v("wikipedia 二阶段提交"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("​")])])}),[],!1,null,null,null);_.default=o.exports}}]);