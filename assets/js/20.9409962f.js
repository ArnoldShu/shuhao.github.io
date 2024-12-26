(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{343:function(t,v,r){"use strict";r.r(v);var _=r(4),a=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"程序设计中spi和api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#程序设计中spi和api"}},[t._v("#")]),t._v(" 程序设计中SPI和API")]),t._v(" "),v("p",[t._v("在程序设计中，SPI（Service Provider Interface）和 API（Application Programming Interface）是两种不同的接口设计模式。我们用一种通俗易懂的示意图来说明：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/01.backend/011.Java/01121/1.webp",alt:"API和SPI示意"}})]),t._v(" "),v("h3",{attrs:{id:"定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" "),v("strong",[t._v("定义")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("API (Application Programming Interface)")]),t._v(": 是应用程序接口，用于定义系统或者库暴露给外部调用者的功能。API 是应用程序与开发者之间的桥梁，它提供了一组方法或功能，允许开发者使用这些功能来构建或扩展应用程序。（"),v("strong",[t._v("通俗的说")]),t._v("：API 就像是你家的遥控器。你用遥控器上的按钮来控制电视、空调等设备。你不需要知道里面的电路是怎么工作的，只要按下按钮，就能达到你想要的效果。）")]),t._v(" "),v("li",[v("strong",[t._v("SPI (Service Provider Interface)")]),t._v(": 是服务提供者接口，通常用于定义一个可插拔的扩展机制，允许不同的第三方开发者通过实现接口提供自定义实现。SPI 定义了一组标准的接口或者抽象类，由不同的服务提供者实现，用于在运行时动态加载和调用。（"),v("strong",[t._v("通俗的说")]),t._v("：SPI 更像是你家电器的插座。你可以通过插座连接不同品牌的电器，比如你可以换个新的品牌的空调或者电视插上去，电源适配、功能能用，但具体是哪种设备提供的服务由你自己决定。）")])]),t._v(" "),v("h3",{attrs:{id:"设计目的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计目的"}},[t._v("#")]),t._v(" 设计目的")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("API")]),t._v(": 目的是提供给应用开发者使用，简化应用程序的开发。API 是应用程序向外界暴露的接口，通过这些接口，外部可以调用应用程序中的功能。（"),v("strong",[t._v("通俗的说")]),t._v("：你编程时，用 API 就像按遥控器上的按钮，直接调用已经写好的功能，比如获取数据、处理请求等。）")]),t._v(" "),v("li",[v("strong",[t._v("SPI")]),t._v(": 目的是为扩展或者替换现有的功能，通常用于框架或者库设计，允许外部服务提供者来提供具体的实现。例如，框架设计者会定义一组接口，让外部开发者通过实现这些接口来提供定制化的服务。（"),v("strong",[t._v("通俗的说")]),t._v("：SPI 允许你通过“插口”（接口）让外面的开发者（比如空调制造商）来提供自己的“电器”（功能），你可以换不同的设备而不改插座本身。比如像支付系统，可能你可以支持多种支付方式（支付宝、微信支付等），只要插座（SPI）接口相同，设备（具体实现）可以自由更换。")])]),t._v(" "),v("h3",{attrs:{id:"使用方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("API")]),t._v(": 使用者只需要调用已经定义好的 API，就可以使用其提供的功能。调用者关心的是这些功能的使用方式，而不需要关心 API 的实现细节。（"),v("strong",[t._v("通俗的说")]),t._v("：你用现成的遥控器，只要按下去就能控制设备，不用关心它是怎么实现的。）")]),t._v(" "),v("li",[v("strong",[t._v("SPI")]),t._v(": SPI 的使用者是服务的提供者，他们通过实现 SPI 定义的接口来提供服务的具体实现，系统或者框架则通过 SPI 机制动态加载这些实现。调用方通常通过 SPI 框架来加载服务提供者的实现，而不关心具体实现的来源。（"),v("strong",[t._v("通俗的说")]),t._v("：你提供一个插座，别人可以自己做电器来插进去使用。）")])]),t._v(" "),v("h3",{attrs:{id:"应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("API")]),t._v(": 常用于开发者与库、框架或操作系统交互的场景。例如，Java 中的 "),v("code",[t._v("java.util.List")]),t._v(" 接口是 API，开发者可以直接使用 "),v("code",[t._v("ArrayList")]),t._v(" 或 "),v("code",[t._v("LinkedList")]),t._v(" 来操作数据。")]),t._v(" "),v("li",[v("strong",[t._v("SPI")]),t._v(": 常用于框架设计中，当框架需要允许外部开发者根据自己的需求扩展框架的某些功能时，SPI 被广泛使用）。例如：\n"),v("ul",[v("li",[v("strong",[t._v("JDBC（Java Database Connectivity）")]),t._v(": JDBC 定义了一套 SPI，数据库厂商（如 MySQL、PostgreSQL 等）需要提供具体的驱动实现，应用程序通过 SPI 加载具体的驱动来连接数据库。")]),t._v(" "),v("li",[v("strong",[t._v("Java Cryptography Architecture (JCA)")]),t._v(": JCA 定义了一组加密相关的 SPI，不同的加密库厂商提供具体实现，开发者可以通过 JCA 使用不同的加密算法而无需关心背后的实现细节。")])])])]),t._v(" "),v("h3",{attrs:{id:"加载方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加载方式"}},[t._v("#")]),t._v(" 加载方式")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("API")]),t._v(": 由开发者直接在代码中显式调用，在编译时就确定了要使用的 API。")]),t._v(" "),v("li",[v("strong",[t._v("SPI")]),t._v(": 通过服务发现机制在运行时动态加载实现。Java 中通常使用 "),v("code",[t._v("META-INF/services")]),t._v(" 目录下的配置文件来指定 SPI 实现类。具体实现可参考："),v("a",{attrs:{href:"https://www.cnblogs.com/crazymakercircle/p/17781162.html#autoid-h2-1-0-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("网易面试：什么是SPI，SPI和API有什么区别？"),v("OutboundLink")],1)])]),t._v(" "),v("h3",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("p",[t._v("简单来说，API 是用来“调用”的，而 SPI 是用来“扩展”的。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("API")]),t._v(" "),v("ul",[v("li",[t._v("你在使用百度地图 API，直接调用接口，就能获取地图上的路线和位置数据，百度已经帮你写好了这些功能。")]),t._v(" "),v("li",[t._v("开发者使用 Android SDK 中提供的 API 来开发移动应用。")])])]),t._v(" "),v("li",[v("strong",[t._v("SPI")]),t._v(" "),v("ul",[v("li",[t._v("假如你开发一个外卖平台，需要不同的配送服务（比如顺丰、达达等），你提供了一个统一的接口（插座），让这些配送公司各自实现自己的服务逻辑（电器），然后系统根据需要去选择哪一个配送服务。")]),t._v(" "),v("li",[t._v("框架开发者设计一个支付系统的框架，定义了支付接口（SPI），第三方支付公司（如支付宝、微信支付等）通过实现这个接口提供自己的支付服务，框架通过 SPI 机制加载这些实现。")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);