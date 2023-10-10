(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{337:function(t,e,a){"use strict";a.r(e);var r=a(4),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"aoneflow模式组成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aoneflow模式组成"}},[t._v("#")]),t._v(" AoneFlow模式组成")]),t._v(" "),e("p",[t._v("一个主干分支+N个特性分支+N个发布分支\n"),e("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/032.git/0322/img.jpg",alt:"简单流程"}})]),t._v(" "),e("h2",{attrs:{id:"使用流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用流程"}},[t._v("#")]),t._v(" 使用流程")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("开始工作前，从master创建feature分支\n从代表最新已发布版本的master分支上创建一个通常以feature-前缀命名的特性分支，然后在这个分支上提交代码修改。也就是说，每个工作项（可以是一个人完成，或是多个人协作完成）对应一个feature特性分支，所有的修改都不允许直接提交到master分支。\n"),e("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/032.git/0322/img1.png",alt:"简单流程"}})])]),t._v(" "),e("li",[e("p",[t._v("通过合并feature分支，形成release分支。\n从master分支上拉出一条新分支，将所有本次要集成或发布的feature分支依次合并过去，从而得到release分支。release分支通常以release/前缀命名。\n"),e("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/032.git/0322/img2.png",alt:"简单流程"}})])]),t._v(" "),e("li",[e("p",[t._v("发布到线上正式环境后，合并相应的release分支到master分支，在master分支上添加tag，同时删除该release分支关联的feature分支。\n为了避免在代码仓库里堆积大量历史上的feature分支，还应该清理掉已经上线部分feature分支。如果要回溯历史版本，只需在master分支上找到相应的版本的tag即可。\n"),e("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/ArnoldShu/cdn/03.technology/032.git/0322/img3.png",alt:"简单流程"}})])])]),t._v(" "),e("h2",{attrs:{id:"git上的分支命名规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git上的分支命名规范"}},[t._v("#")]),t._v(" Git上的分支命名规范")]),t._v(" "),e("ul",[e("li",[t._v("master: 主分支，永远是可用的、稳定的、可直接发布的版本，不能直接在master分支上开发;")]),t._v(" "),e("li",[t._v("feature: 功能开发分支，在master上创建分支，功能测试正常后合并到release分支。命名规则：feature/开发功能模块命名，eg：feature/login;")]),t._v(" "),e("li",[t._v("release：集成或分布分支，在master上创建，由需要集成或者发布的各个feature分支合并而成，发布确定稳定之后合并到master分支，命名规则：release/作用意图，eg：release/test，release-prod;")]),t._v(" "),e("li",[t._v("hotfix: 紧急bug修改分支，项目上线之后可以会遇到一些环境问题需要紧急修复，在master分支上创建，流程跟release分支相似，修复完成后合并到master分支。命名规则：hotfix/版本号/顺序号，eg：hotfix/v1.0.0/001，若已存在，则命名为hotfix/v1.0.0/002，其中，版本号为对应线上版本号。若有历史版本Bug需要修复，在主干分支找到版本标签位置，然后从那个位置创建 hotfix 分支。")])]),t._v(" "),e("h2",{attrs:{id:"tag命名规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tag命名规范"}},[t._v("#")]),t._v(" Tag命名规范")]),t._v(" "),e("p",[t._v("命名规则：V主版本号.次版本号.修订号，eg：V1.0.0\n版本号递增规则如下：")]),t._v(" "),e("ul",[e("li",[t._v("主版本号：全盘重构时增加；重大功能或方向改变时增加；大范围不兼容之前的接口时增加；")]),t._v(" "),e("li",[t._v("次版本号：增加新的业务功能时增加；")]),t._v(" "),e("li",[t._v("修订号：增加新的接口时增加；在接口不变的情况下，增加接口的非必填属性时增加；增强和扩展接口功能时增加。")])]),t._v(" "),e("h2",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),e("ul",[e("li",[t._v("一个分支尽量开发一个功能模块，不要多个功能模块在一个分支上开发。")]),t._v(" "),e("li",[t._v("开发过程中，如果组员A开发的功能依赖组员B正在开发的功能，可以待组员B开发好相关功能之后，组员A直接pull组员B的分支下来开发，不需要先将组员B的分支 merge 到feature分支。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);