(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{348:function(t,v,_){"use strict";_.r(v);var r=_(4),a=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"cap定理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cap定理"}},[t._v("#")]),t._v(" CAP定理")]),t._v(" "),v("p",[t._v("在理论计算机科学中，"),v("strong",[t._v("CAP定理（CAP theorem）")]),t._v("，又被称作"),v("strong",[t._v("布鲁尔定理（Brewer's theorem")]),t._v("），这个定理起源于加州大学柏克莱分校（University of California, Berkeley）的计算机科学家"),v("strong",[t._v("埃里克·布鲁尔")]),t._v("在2000年的分布式计算原理研讨会（PODC）上提出的一个猜想。在2002年，麻省理工学院（MIT）的"),v("strong",[t._v("赛斯·吉尔伯特")]),t._v("和南希·林奇发表了布鲁尔猜想的证明，使之成为一个定理。它指出对于一个分布式计算系统来说，不可能同时满足以下三点：")]),t._v(" "),v("h3",{attrs:{id:"一致性-consistency"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一致性-consistency"}},[t._v("#")]),t._v(" 一致性（Consistency）")]),t._v(" "),v("p",[t._v("所有节点在同一时间具有相同的数据视图。在分布式系 统中，如果一个节点对数据进行了修改，那么其他节点读取数据时应该能够立即看到这个修改（强一致性）。")]),t._v(" "),v("p",[t._v("而在分布式系统中"),v("strong",[t._v("一致性")]),t._v("又有如下模型分类：")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("强一致性")])]),t._v(" "),v("p",[t._v("当更新操作完成之后，任何多个后续进程或者线程的访问都会返回最新的更新过的值，直到这个数据被其他数据更新为止。")]),t._v(" "),v("p",[t._v("但是这种实现对性能影响较大，因为这意味着，只要上次的操作没有处理完，就不能让用户读取数据（同步阻塞）。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("弱一致性")])]),t._v(" "),v("p",[t._v("系统并不保证进程或者线程的访问都会返回最新更新过的值。系统在数据写入成功之后，不承诺立即可以读到最新写入的值，也不会具体的承诺多久之后可以读到。但会尽可能保证在某个时间级别（比如秒级别）之后，可以让数据达到一致性状态。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("最终一致性")])]),t._v(" "),v("p",[t._v("最终一致性也是弱一致性的一种，它无法保证数据更新后，所有后续的访问都能看到最新数值，而是需要一个时间，在这个时间之后可以保证这一点，而在这个时间内，数据也许是不一致的，这个系统无法保证强一致性的时间片段被称为："),v("strong",[t._v("不一致窗口")]),t._v("。不一致窗口的时间长短取决于很多因素，比如备份数据的个数、网络传输延迟速度、系统负载等。")]),t._v(" "),v("p",[t._v("最终一致性在实际应用中又有多种变种（参考："),v("a",{attrs:{href:"https://matt33.com/2018/07/08/distribute-system-consistency-protocol/#CAP-%E7%90%86%E8%AE%BA",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式系统的一致性协议之 2PC 和 3PC"),v("OutboundLink")],1),t._v("）：")]),t._v(" "),v("ul",[v("li",[t._v("因果一致性")]),t._v(" "),v("li",[t._v("读你所写一致性")]),t._v(" "),v("li",[t._v("会话一致性")]),t._v(" "),v("li",[t._v("单调读一致性")]),t._v(" "),v("li",[t._v("单调写一致性")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/034.distributed/0341/2.jpg",alt:"一致性模型关系"}})]),t._v(" "),v("h3",{attrs:{id:"可用性-availability"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可用性-availability"}},[t._v("#")]),t._v(" 可用性（Availability）")]),t._v(" "),v("p",[t._v("每个非故障节点在有限时间内能够返回合理的响应。即系统对于用户的请求能够保证在有限时间内得到响应，不会因为某个节点故障而导致整个系统不可用。")]),t._v(" "),v("h3",{attrs:{id:"分区容错性-partition-tolerance"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分区容错性-partition-tolerance"}},[t._v("#")]),t._v(" 分区容错性（Partition Tolerance）")]),t._v(" "),v("p",[t._v("即使系统出现网络分区（节点之间无法直接通信），系统仍然能够继续工作。分区容错性是"),v("strong",[t._v("分布式系统必须具备的基本特性")]),t._v("，因为在真实的网络环境中，节点之间的通信可能会失败。我们需要知道**分区（Partition）**这个概念（各个节点之间可能由于网络故障或其他原因导致无法直接通信的情况）。")]),t._v(" "),v("h3",{attrs:{id:"白话cap理论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#白话cap理论"}},[t._v("#")]),t._v(" 白话CAP理论")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("假设现在我们拥有一个"),v("strong",[t._v("分布式系统")]),t._v("（指由多台计算机通过网络连接，协同工作来完成一个共同的任务的系统）；")])]),t._v(" "),v("li",[v("p",[t._v("计算机被称为"),v("strong",[t._v("节点")]),t._v("（nodes），它们可以位于同一地点或全球范围内的不同地方并且网络相互连通，但是由于"),v("strong",[t._v("分区")]),t._v("的缘故导致互相无法协同对外提供服务，会出现如下情况：")]),t._v(" "),v("ul",[v("li",[t._v("部分节点不可用，部分节点可用，可用节点任然能正常接收外部请求，但是由于分布式系统是由多个节点协同完成一个任务，可能刚好可用节点的调用了一个不可用的节点，就会导致系统超时或者抛出不可预见的异常，导致系统不可用，所以这种情况就需要**可用性（Availability）**的理论支持，有了理论我们就需要根据这个理论做一些增强系统可用性的操作例如：\n"),v("ul",[v("li",[v("strong",[t._v("系统设计层面")]),t._v(" "),v("ul",[v("li",[t._v("负载均衡")]),t._v(" "),v("li",[t._v("自动化故障检测和恢复")]),t._v(" "),v("li",[t._v("容器化和微服务")]),t._v(" "),v("li",[t._v("服务降级")])])]),t._v(" "),v("li",[v("strong",[t._v("系统运维层面")]),t._v(" "),v("ul",[v("li",[t._v("灰度发布")]),t._v(" "),v("li",[t._v("监控和警报系统")]),t._v(" "),v("li",[t._v("冗余和备份")]),t._v(" "),v("li",[t._v("网络优化")]),t._v(" "),v("li",[t._v("容灾计划")])])])])]),t._v(" "),v("li",[t._v("当可用节点在进行业务数据的存储操作时只存在了当前节点，由于分区缘故导致其他其他可用节点无法访问到当前节点的数据这将是一个灾难，所以分布式系统中必定会将数据分布式存储（将数据分布式地存储在多个节点上的一种方式）数据在不同节点相互拷贝备份使其具备"),v("strong",[t._v("一致性（Consistency）")]),t._v("，分区会导致不同节点访问同一份数据会出现不一致的情况；")])]),t._v(" "),v("p",[t._v("从上述描述我们可以看出，不管怎么样分布式系统"),v("strong",[t._v("分区容错性（Partition Tolerance）是必不可少的")]),t._v("，而由于如果需要更高的"),v("strong",[t._v("可用性（Availability）")]),t._v("，我们需要在有限时间内能够返回合理的响应，如果这个合理的响应返回的是脏数据（不同节点返回数据不一致的情况）等同于不可用，但是防止数据不一致，我们就需要保证"),v("strong",[t._v("一致性（Consistency）")]),t._v("，然而更高的一致性会导致接口效率变低，从而有可能打破了**可用性（Availability）**有限时间的范围，所以可以看出，"),v("strong",[t._v("在保证分区容错的前提下，一致性（Consistency）和可用性Availability）是矛盾的。")])])])]),t._v(" "),v("h3",{attrs:{id:"cap模型应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cap模型应用场景"}},[t._v("#")]),t._v(" CAP模型应用场景")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/034.distributed/0341/1.jpg",alt:"CAP"}})]),t._v(" "),v("h4",{attrs:{id:"ca模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ca模型"}},[t._v("#")]),t._v(" CA模型")]),t._v(" "),v("p",[t._v("保证了系统的一致性和可用性，却违背了分布式系统的分区容错性。实际上分区是不可避免的，严格上CA指的是允许分区后各子系统依然保持CA。")]),t._v(" "),v("p",[t._v("常见的技术组件：")]),t._v(" "),v("ul",[v("li",[t._v("集群数据库（传统的关系性数据库（"),v("strong",[t._v("Mysql,Oracle等")]),t._v("），一些分布式关系型数据库（"),v("strong",[t._v("Google Spanner")]),t._v("））。")])]),t._v(" "),v("h4",{attrs:{id:"cp模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cp模型"}},[t._v("#")]),t._v(" CP模型")]),t._v(" "),v("p",[t._v("保证了系统的一致性和分区容错性，但用户的体验较差，即当系统宕机时，需要等待所有结点的数据一致时，用户才可访问系统。")]),t._v(" "),v("p",[t._v("常见的技术组件：")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("Apache ZooKeeper")]),t._v("：用于分布式协调和一致性。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("HBase")]),t._v("（在一些配置中）：分布式列存数据库，通常被归类为CP系统。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("MongoDB")]),t._v(" 在一些特定情况下可以体现CP模型，即强一致性和分区容忍性。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Redis")]),t._v(" 在默认配置下更倾向于满足分区容错性（Partition Tolerance，P）和可用性（Availability，A），而在某些情况下，可能牺牲了强一致性（Consistency，C）。因此，Redis 更接近于 AP 模型，但也有一些特性可以使其在一些场景下体现 CP 特性（数据复制和持久性配置，分片和分区，丢失部分数据）。")])])]),t._v(" "),v("h4",{attrs:{id:"ap模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ap模型"}},[t._v("#")]),t._v(" AP模型")]),t._v(" "),v("p",[t._v("保证了系统的可用性和分区容错性，但是结点之间的数据会出现不一致的现象。")]),t._v(" "),v("p",[t._v("常见的技术组件：")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("Amazon DynamoDB")]),t._v("：分布式键值存储服务，强调高可用性和分区容忍性。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Couchbase")]),t._v("：分布式NoSQL数据库，强调可用性和分区容忍性。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Cassandra")]),t._v("： 分布式、高度可伸缩的NoSQL数据库，支持分区容忍性和可用性。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Redis")]),t._v("： 分布式内存缓存系统，强调高性能和可用性。可以配置为支持分区容忍性。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Apache Kafka：")]),t._v(" 分布式流处理平台，具有高可用性和分区容忍性，用于实现事件驱动架构。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Elasticsearch：")]),t._v(" 分布式搜索引擎，支持大规模数据索引和搜索，具有高可用性和分区容忍性。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Kubernetes：")]),t._v(" 开源容器编排系统，用于自动部署、扩展和管理容器化应用，具有高可用性和分区容忍性。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Apache Spark：")]),t._v(" 分布式计算框架，用于大规模数据处理和分析，支持高可用性和分区容忍性。")])])]),t._v(" "),v("h3",{attrs:{id:"cap实际应用中的算法和协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cap实际应用中的算法和协议"}},[t._v("#")]),t._v(" CAP实际应用中的算法和协议")]),t._v(" "),v("p",[t._v("在实际应用中，有一些协议和算法被设计用来处理CAP问题，其中一些主要的协议包括：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("特点")]),t._v(" "),v("th",[t._v("应用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("Two-Phase Commit，2PC")])]),t._v(" "),v("td",[t._v("两阶段提交协议是一种"),v("strong",[t._v("分布式事务协议")]),t._v("，用于确保分布式系统中执行的事务能够保持一致性。它涉及一个协调者（Coordinator）和多个参与者（Participants）。")]),t._v(" "),v("td",[t._v("简单性，一致性，阻塞问题。")]),t._v(" "),v("td",[t._v("2PC在一些分布式数据库系统和事务处理系统中得到了广泛应用。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Three-Phase Commit，3PC")])]),t._v(" "),v("td",[t._v("三阶段提交协议是一种"),v("strong",[t._v("分布式事务协议")]),t._v("，是对两阶段提交协议（2PC）的改进。与2PC相比，3PC引入了额外的PreCommit阶段，以解决2PC可能导致的长时间阻塞问题。3PC的核心目标是提高分布式事务的鲁棒性，减轻对协调者的单点故障敏感性。")]),t._v(" "),v("td",[t._v("引入PreCommit阶段，减轻单点故障敏感性，减轻单点故障敏感性。")]),t._v(" "),v("td",[t._v("三阶段提交协议在一些分布式系统和数据库中得到应用。它通常在对一致性要求较高的场景下使用，如金融系统、电信系统等")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Paxos")])]),t._v(" "),v("td",[t._v("Paxos是一种"),v("strong",[t._v("分布式一致性算法")]),t._v("（Paxos常被误称为“一致性算法”。但是“一致性（consistency）”和“共识（consensus）”并不是同一个概念。Paxos是一个共识（consensus）算法。"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Paxos%E7%AE%97%E6%B3%95#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paxos算法"),v("OutboundLink")],1),t._v("），用于解决分布式系统中的一致性问题。")]),t._v(" "),v("td",[t._v("Paxos强调"),v("strong",[t._v("一致性")]),t._v("，但在网络分区时可能牺牲可用性。")]),t._v(" "),v("td",[t._v("用于构建一致性分布式系统，例如分布式数据库。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Raft")])]),t._v(" "),v("td",[t._v("Raft是一种相对于Paxos更容易理解的"),v("strong",[t._v("一致性算法")]),t._v("，用于解决分布式系统中的一致性问题。")]),t._v(" "),v("td",[t._v("Raft强调"),v("strong",[t._v("一致性")]),t._v("，但在网络分区时可能牺牲可用性。")]),t._v(" "),v("td",[t._v("用于构建一致性分布式系统，类似于Paxos的应用场景。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ZooKeeper Atomic Broadcast (ZAB)")])]),t._v(" "),v("td",[t._v("ZooKeeper是一个分布式协调服务，其底层使用了"),v("strong",[t._v("ZAB协议")]),t._v("。")]),t._v(" "),v("td",[t._v("ZAB强调"),v("strong",[t._v("一致性")]),t._v("，但在网络分区时可能牺牲可用性。")]),t._v(" "),v("td",[t._v("用于分布式系统中的协调和一致性需求。")])])])]),t._v(" "),v("p",[t._v("Google 2009年 在"),v("a",{attrs:{href:"https://snarfed.org/transactions_across_datacenters_io.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Transaction Across DataCenter"),v("OutboundLink")],1),t._v(" 的分享中，对一致性协议在业内的实践做了一简单的总结，如下图所示，这是 CAP 理论在工业界应用的实践经验。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/034.distributed/0341/3.png",alt:"CAP 理论在工业界应用的实践经验"}})]),t._v(" "),v("p",[t._v("其中，第一行表头代表了分布式系统中通用的一致性方案：")]),t._v(" "),v("ul",[v("li",[t._v("包括冷备；")]),t._v(" "),v("li",[t._v("Master/Slave；")]),t._v(" "),v("li",[t._v("Master/Master；")]),t._v(" "),v("li",[t._v("两阶段提交；")]),t._v(" "),v("li",[t._v("基于 Paxos 算法的解决方案。")])]),t._v(" "),v("p",[t._v("第一列表头代表了分布式系统大家所关心的各项指标：")]),t._v(" "),v("ul",[v("li",[t._v("包括一致性；")]),t._v(" "),v("li",[t._v("事务支持程度；")]),t._v(" "),v("li",[t._v("数据延迟；")]),t._v(" "),v("li",[t._v("系统吞吐量；")]),t._v(" "),v("li",[t._v("数据丢失可能性；")]),t._v(" "),v("li",[t._v("故障自动恢复方式。")])]),t._v(" "),v("p",[t._v("参考链接")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/CAP%E5%AE%9A%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAP定理"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/fenbushi.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式理论"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/nLwHEmVGtl-2FDugMqYs3A",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式八股文（背诵版）"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/d84tWIjbcGKhwUptzkO2hQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("面渣逆袭：分布式十二问！万字图文详解！"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://blog.51cto.com/u_15301988/4991577#CAconsistency__availability_78",target:"_blank",rel:"noopener noreferrer"}},[t._v("架构师之路 — 分布式系统 — CAP 定理"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("​")])])}),[],!1,null,null,null);v.default=a.exports}}]);