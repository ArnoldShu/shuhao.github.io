(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{353:function(v,_,e){"use strict";e.r(_);var n=e(4),s=Object(n.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"linux-的常用命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#linux-的常用命令"}},[v._v("#")]),v._v(" Linux 的常用命令")]),v._v(" "),_("p",[v._v("可依据某些查询工具查询具体命令得详细参数："),_("a",{attrs:{href:"https://www.lzltool.com/LinuxCommand",target:"_blank",rel:"noopener noreferrer"}},[v._v("LZL在线工具"),_("OutboundLink")],1)]),v._v(" "),_("p",[v._v("Linux 系统下有许多常用命令可以帮助用户执行各种任务，从文件管理到系统监控。以下是一些 Linux 中的常用命令，按照不同的功能分类进行了详细介绍。")]),v._v(" "),_("h3",{attrs:{id:"_1-文件和目录操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件和目录操作"}},[v._v("#")]),v._v(" 1. "),_("strong",[v._v("文件和目录操作")])]),v._v(" "),_("p",[v._v("这些命令用于处理文件和目录，包括查看、创建、删除、复制、移动等。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("ls")]),v._v("：列出目录内容\n"),_("ul",[_("li",[_("code",[v._v("ls -l")]),v._v("：详细信息列表。")]),v._v(" "),_("li",[_("code",[v._v("ls -a")]),v._v("：显示所有文件，包括隐藏文件。")])])]),v._v(" "),_("li",[_("code",[v._v("cd")]),v._v("：切换目录\n"),_("ul",[_("li",[_("code",[v._v("cd /path/to/directory")]),v._v("：切换到指定目录。")]),v._v(" "),_("li",[_("code",[v._v("cd ~")]),v._v("：切换到用户主目录。")]),v._v(" "),_("li",[_("code",[v._v("cd ..")]),v._v("：返回上一级目录。")])])]),v._v(" "),_("li",[_("code",[v._v("pwd")]),v._v("：显示当前所在路径\n"),_("ul",[_("li",[v._v("输出当前工作目录的完整路径。")])])]),v._v(" "),_("li",[_("code",[v._v("mkdir")]),v._v("：创建目录\n"),_("ul",[_("li",[_("code",[v._v("mkdir dirname")]),v._v("：创建一个名为 "),_("code",[v._v("dirname")]),v._v(" 的目录。")]),v._v(" "),_("li",[_("code",[v._v("mkdir -p /path/to/newdir")]),v._v("：创建多级目录。")])])]),v._v(" "),_("li",[_("code",[v._v("rmdir")]),v._v("：删除空目录\n"),_("ul",[_("li",[_("code",[v._v("rmdir dirname")]),v._v("：删除指定的空目录。")])])]),v._v(" "),_("li",[_("code",[v._v("rm")]),v._v("：删除文件或目录\n"),_("ul",[_("li",[_("code",[v._v("rm filename")]),v._v("：删除文件。")]),v._v(" "),_("li",[_("code",[v._v("rm -r dirname")]),v._v("：递归删除目录及其中的所有内容。")])])]),v._v(" "),_("li",[_("code",[v._v("cp")]),v._v("：复制文件或目录\n"),_("ul",[_("li",[_("code",[v._v("cp source destination")]),v._v("：复制文件。")]),v._v(" "),_("li",[_("code",[v._v("cp -r sourcedir targetdir")]),v._v("：递归复制整个目录。")])])]),v._v(" "),_("li",[_("code",[v._v("mv")]),v._v("：移动文件或重命名\n"),_("ul",[_("li",[_("code",[v._v("mv oldname newname")]),v._v("：重命名文件或目录。")]),v._v(" "),_("li",[_("code",[v._v("mv file /target/directory")]),v._v("：将文件移动到指定目录。")])])]),v._v(" "),_("li",[_("code",[v._v("touch")]),v._v("：创建空文件\n"),_("ul",[_("li",[_("code",[v._v("touch filename")]),v._v("：创建一个空文件或更新文件的时间戳。")])])]),v._v(" "),_("li",[_("code",[v._v("cat")]),v._v("：查看文件内容\n"),_("ul",[_("li",[_("code",[v._v("cat filename")]),v._v("：显示文件的内容。")])])]),v._v(" "),_("li",[_("code",[v._v("less")]),v._v(" / "),_("code",[v._v("more")]),v._v("：分页查看文件内容\n"),_("ul",[_("li",[_("code",[v._v("less filename")]),v._v("：逐页查看文件内容，按 "),_("code",[v._v("q")]),v._v(" 退出。")]),v._v(" "),_("li",[_("code",[v._v("more filename")]),v._v("：分页查看内容，按空格键翻页。")])])]),v._v(" "),_("li",[_("code",[v._v("head")]),v._v("：查看文件前几行\n"),_("ul",[_("li",[_("code",[v._v("head -n 10 filename")]),v._v("：查看文件的前 10 行。")])])]),v._v(" "),_("li",[_("code",[v._v("tail")]),v._v("：查看文件末尾部分\n"),_("ul",[_("li",[_("code",[v._v("tail -n 10 filename")]),v._v("：查看文件的最后 10 行。")]),v._v(" "),_("li",[_("code",[v._v("tail -f filename")]),v._v("：实时查看文件末尾的更新（通常用于日志文件）。")])])])]),v._v(" "),_("h3",{attrs:{id:"_2-权限管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-权限管理"}},[v._v("#")]),v._v(" 2. "),_("strong",[v._v("权限管理")])]),v._v(" "),_("p",[v._v("这些命令用于查看和修改文件的权限和拥有者。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("chmod")]),v._v("：修改文件权限\n"),_("ul",[_("li",[_("code",[v._v("chmod 755 filename")]),v._v("：为文件设置权限。")]),v._v(" "),_("li",[_("code",[v._v("chmod u+x filename")]),v._v("：给文件的用户添加执行权限。")])])]),v._v(" "),_("li",[_("code",[v._v("chown")]),v._v("：修改文件拥有者\n"),_("ul",[_("li",[_("code",[v._v("chown user:group filename")]),v._v("：更改文件的拥有者和组。")])])])]),v._v(" "),_("h3",{attrs:{id:"_3-系统信息和管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-系统信息和管理"}},[v._v("#")]),v._v(" 3. "),_("strong",[v._v("系统信息和管理")])]),v._v(" "),_("p",[v._v("用于查看系统信息、运行进程、资源使用等。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("df")]),v._v("：查看磁盘空间使用情况\n"),_("ul",[_("li",[_("code",[v._v("df -h")]),v._v("：以人类可读的格式显示磁盘使用情况。")])])]),v._v(" "),_("li",[_("code",[v._v("du")]),v._v("：查看目录或文件的大小\n"),_("ul",[_("li",[_("code",[v._v("du -sh /path/to/directory")]),v._v("：查看目录的总大小。")])])]),v._v(" "),_("li",[_("code",[v._v("top")]),v._v("：动态显示系统进程\n"),_("ul",[_("li",[v._v("显示当前运行的进程和系统资源使用情况，按 "),_("code",[v._v("q")]),v._v(" 退出。")])])]),v._v(" "),_("li",[_("code",[v._v("ps")]),v._v("：查看当前进程\n"),_("ul",[_("li",[_("code",[v._v("ps aux")]),v._v("：查看所有正在运行的进程。")])])]),v._v(" "),_("li",[_("code",[v._v("kill")]),v._v("：终止进程\n"),_("ul",[_("li",[_("code",[v._v("kill PID")]),v._v("：通过进程 ID 终止进程。")]),v._v(" "),_("li",[_("code",[v._v("kill -9 PID")]),v._v("：强制终止进程。")])])]),v._v(" "),_("li",[_("code",[v._v("free")]),v._v("：查看内存使用情况\n"),_("ul",[_("li",[_("code",[v._v("free -h")]),v._v("：以人类可读的格式显示内存使用情况。")])])])]),v._v(" "),_("h3",{attrs:{id:"_4-压缩和解压缩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-压缩和解压缩"}},[v._v("#")]),v._v(" 4. "),_("strong",[v._v("压缩和解压缩")])]),v._v(" "),_("p",[v._v("Linux 提供了一些命令用于压缩和解压文件。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("tar")]),v._v("：打包和解包\n"),_("ul",[_("li",[_("code",[v._v("tar -cvf archive.tar /path/to/dir")]),v._v("：将目录打包为 tar 文件。")]),v._v(" "),_("li",[_("code",[v._v("tar -xvf archive.tar")]),v._v("：解包 tar 文件。")]),v._v(" "),_("li",[_("code",[v._v("tar -czvf archive.tar.gz /path/to/dir")]),v._v("：将目录压缩为 tar.gz 格式。")]),v._v(" "),_("li",[_("code",[v._v("tar -xzvf archive.tar.gz")]),v._v("：解压 tar.gz 文件。")])])]),v._v(" "),_("li",[_("code",[v._v("zip")]),v._v(" / "),_("code",[v._v("unzip")]),v._v("：压缩和解压 zip 文件\n"),_("ul",[_("li",[_("code",[v._v("zip archive.zip filename")]),v._v("：压缩文件为 zip 格式。")]),v._v(" "),_("li",[_("code",[v._v("unzip archive.zip")]),v._v("：解压 zip 文件。")])])])]),v._v(" "),_("h3",{attrs:{id:"_5-网络相关命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-网络相关命令"}},[v._v("#")]),v._v(" 5. "),_("strong",[v._v("网络相关命令")])]),v._v(" "),_("p",[v._v("用于网络测试和查看网络状态。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("ping")]),v._v("：测试网络连接\n"),_("ul",[_("li",[_("code",[v._v("ping google.com")]),v._v("：检查到 google.com 的连接情况。")])])]),v._v(" "),_("li",[_("code",[v._v("ifconfig")]),v._v(" / "),_("code",[v._v("ip")]),v._v("：查看或配置网络接口\n"),_("ul",[_("li",[_("code",[v._v("ifconfig")]),v._v("：显示网络接口的配置。")]),v._v(" "),_("li",[_("code",[v._v("ip a")]),v._v("：显示网络接口和 IP 地址。")])])]),v._v(" "),_("li",[_("code",[v._v("netstat")]),v._v("：显示网络连接和端口\n"),_("ul",[_("li",[_("code",[v._v("netstat -tuln")]),v._v("：显示所有监听的端口。")])])]),v._v(" "),_("li",[_("code",[v._v("curl")]),v._v(" / "),_("code",[v._v("wget")]),v._v("：下载文件或测试接口\n"),_("ul",[_("li",[_("code",[v._v("curl http://example.com")]),v._v("：获取 URL 内容。")]),v._v(" "),_("li",[_("code",[v._v("wget http://example.com/file.zip")]),v._v("：下载文件。")])])])]),v._v(" "),_("h3",{attrs:{id:"_6-用户管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-用户管理"}},[v._v("#")]),v._v(" 6. "),_("strong",[v._v("用户管理")])]),v._v(" "),_("p",[v._v("用于添加、删除和管理系统用户和组。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("useradd")]),v._v("：添加用户\n"),_("ul",[_("li",[_("code",[v._v("useradd username")]),v._v("：添加新用户。")]),v._v(" "),_("li",[_("code",[v._v("useradd -m username")]),v._v("：添加新用户并创建主目录。")])])]),v._v(" "),_("li",[_("code",[v._v("passwd")]),v._v("：设置用户密码\n"),_("ul",[_("li",[_("code",[v._v("passwd username")]),v._v("：为指定用户设置密码。")])])]),v._v(" "),_("li",[_("code",[v._v("userdel")]),v._v("：删除用户\n"),_("ul",[_("li",[_("code",[v._v("userdel username")]),v._v("：删除用户。")]),v._v(" "),_("li",[_("code",[v._v("userdel -r username")]),v._v("：删除用户及其主目录。")])])]),v._v(" "),_("li",[_("code",[v._v("groupadd")]),v._v("：添加用户组\n"),_("ul",[_("li",[_("code",[v._v("groupadd groupname")]),v._v("：添加新组。")])])])]),v._v(" "),_("h3",{attrs:{id:"_7-查找和搜索"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-查找和搜索"}},[v._v("#")]),v._v(" 7. "),_("strong",[v._v("查找和搜索")])]),v._v(" "),_("p",[v._v("用于查找文件或在文件中查找内容。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("find")]),v._v("：查找文件\n"),_("ul",[_("li",[_("code",[v._v("find /path -name filename")]),v._v("：在指定路径下查找文件。")]),v._v(" "),_("li",[_("code",[v._v("find /path -type f -size +10M")]),v._v("：查找大于 10MB 的文件。")])])]),v._v(" "),_("li",[_("code",[v._v("grep")]),v._v("：在文件中搜索文本\n"),_("ul",[_("li",[_("code",[v._v('grep "pattern" filename')]),v._v("：在文件中搜索包含特定模式的行。")]),v._v(" "),_("li",[_("code",[v._v('grep -r "pattern" /path')]),v._v("：递归地在目录下搜索特定模式。")])])])]),v._v(" "),_("h3",{attrs:{id:"_8-文件内容处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-文件内容处理"}},[v._v("#")]),v._v(" 8. "),_("strong",[v._v("文件内容处理")])]),v._v(" "),_("p",[v._v("用于查看、编辑或操作文件内容。")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("echo")]),v._v("：输出字符串")]),v._v(" "),_("ul",[_("li",[_("code",[v._v('echo "Hello World"')]),v._v('：在终端中输出 "Hello World"。')])])]),v._v(" "),_("li",[_("p",[_("code",[v._v(">")]),v._v(", "),_("code",[v._v(">>")]),v._v("：重定向输出")]),v._v(" "),_("ul",[_("li",[_("code",[v._v('echo "Hello" > file.txt')]),v._v('：将 "Hello" 写入文件（覆盖）。')]),v._v(" "),_("li",[_("code",[v._v('echo "Hello again" >> file.txt')]),v._v('：将 "Hello again" 追加到文件末尾。')])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("cat")]),v._v("：连接和查看文件内容")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("cat file1 file2 > combined.txt")]),v._v("：将两个文件内容合并到新文件中。")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("sort")]),v._v("：对文本文件的行排序")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("sort filename")]),v._v("：对文件的内容排序。")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("uniq")]),v._v("：去除重复行")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("uniq filename")]),v._v("：显示文件中的唯一行（通常和 "),_("code",[v._v("sort")]),v._v(" 搭配使用）。")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("wc")]),v._v("：统计文件内容")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("wc -l filename")]),v._v("：统计文件中的行数。")]),v._v(" "),_("li",[_("code",[v._v("wc -w filename")]),v._v("：统计文件中的单词数。")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("vi")]),v._v("：文本编辑器")]),v._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[v._v("vi")]),v._v(" filename\n\tfilename 是要编辑的文件名，如果文件不存在，则会创建一个新的空文件。\n\n"),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("vi")]),v._v(" 的三种模式\n\t命令模式：默认进入的模式，可以执行各种编辑和导航命令。\n\t插入模式：用于输入文本，按 i 进入插入模式，按 Esc 退出。\n\t底行模式：用于保存、退出等操作，按 :进入底行模式。\n\n基本操作命令\n    进入插入模式\n        i：在当前光标位置前插入。\n        I：在行首插入。\n        a：在当前光标位置后插入。\n        A：在行尾插入。\n        o：在当前行的下一行插入新行。\n        O：在当前行的上一行插入新行。\n        \n    保存与退出\n        :w：保存文件。\n        :w filename：另存为指定文件。\n        :q：退出 vi。\n        :q"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("!")]),v._v("：强制退出，不保存更改。\n        :wq 或 ZZ：保存并退出。\n        :x：保存并退出，相当于 :wq。\n        \n    删除操作\n        x：删除光标所在的字符。\n        dd：删除当前行。\n        D：删除光标位置到行尾的内容。\n        d0：删除光标位置到行首的内容。\n        dG：删除光标位置到文件结尾的所有内容。\n        d^：删除光标位置到当前行的第一个非空白字符。\n        \n    复制和粘贴\n        yy：复制当前行。\n        nyy：复制从当前行开始的 n 行（如 5yy 复制 "),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("5")]),v._v(" 行）。\n        p：在光标位置的下一行粘贴内容。\n        P：在光标位置的上一行粘贴内容。\n        \n    撤销和恢复\n        u：撤销上一个操作。\n        U：撤销当前行的所有更改。\n        Ctrl + r：重做已撤销的操作。\n        \n    搜索\n        /pattern：向下搜索指定的 pattern。\n        ?pattern：向上搜索指定的 pattern。\n        n：重复上一次的搜索（方向相同）。\n        N：重复上一次的搜索（方向相反）。\n        \n    跳转\n        gg：跳转到文件开头。\n        G：跳转到文件末尾。\n        :n：跳转到第 n 行（例如，:10 跳转到第 "),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("10")]),v._v(" 行）。\n        H：跳转到屏幕顶部。\n        M：跳转到屏幕中间。\n        L：跳转到屏幕底部。\n        \n    替换\n        r：替换光标位置的字符。\n        R：进入替换模式，直到按 Esc 退出。\n        :s/old/new/：替换当前行第一个匹配的 old 为 new。\n        :s/old/new/g：替换当前行所有匹配的 old 为 new。\n        :%s/old/new/g：替换文件中所有的 old 为 new。\n        :%s/old/new/gc：替换文件中所有的 old 为 new，并提示确认。\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br"),_("span",{staticClass:"line-number"},[v._v("9")]),_("br"),_("span",{staticClass:"line-number"},[v._v("10")]),_("br"),_("span",{staticClass:"line-number"},[v._v("11")]),_("br"),_("span",{staticClass:"line-number"},[v._v("12")]),_("br"),_("span",{staticClass:"line-number"},[v._v("13")]),_("br"),_("span",{staticClass:"line-number"},[v._v("14")]),_("br"),_("span",{staticClass:"line-number"},[v._v("15")]),_("br"),_("span",{staticClass:"line-number"},[v._v("16")]),_("br"),_("span",{staticClass:"line-number"},[v._v("17")]),_("br"),_("span",{staticClass:"line-number"},[v._v("18")]),_("br"),_("span",{staticClass:"line-number"},[v._v("19")]),_("br"),_("span",{staticClass:"line-number"},[v._v("20")]),_("br"),_("span",{staticClass:"line-number"},[v._v("21")]),_("br"),_("span",{staticClass:"line-number"},[v._v("22")]),_("br"),_("span",{staticClass:"line-number"},[v._v("23")]),_("br"),_("span",{staticClass:"line-number"},[v._v("24")]),_("br"),_("span",{staticClass:"line-number"},[v._v("25")]),_("br"),_("span",{staticClass:"line-number"},[v._v("26")]),_("br"),_("span",{staticClass:"line-number"},[v._v("27")]),_("br"),_("span",{staticClass:"line-number"},[v._v("28")]),_("br"),_("span",{staticClass:"line-number"},[v._v("29")]),_("br"),_("span",{staticClass:"line-number"},[v._v("30")]),_("br"),_("span",{staticClass:"line-number"},[v._v("31")]),_("br"),_("span",{staticClass:"line-number"},[v._v("32")]),_("br"),_("span",{staticClass:"line-number"},[v._v("33")]),_("br"),_("span",{staticClass:"line-number"},[v._v("34")]),_("br"),_("span",{staticClass:"line-number"},[v._v("35")]),_("br"),_("span",{staticClass:"line-number"},[v._v("36")]),_("br"),_("span",{staticClass:"line-number"},[v._v("37")]),_("br"),_("span",{staticClass:"line-number"},[v._v("38")]),_("br"),_("span",{staticClass:"line-number"},[v._v("39")]),_("br"),_("span",{staticClass:"line-number"},[v._v("40")]),_("br"),_("span",{staticClass:"line-number"},[v._v("41")]),_("br"),_("span",{staticClass:"line-number"},[v._v("42")]),_("br"),_("span",{staticClass:"line-number"},[v._v("43")]),_("br"),_("span",{staticClass:"line-number"},[v._v("44")]),_("br"),_("span",{staticClass:"line-number"},[v._v("45")]),_("br"),_("span",{staticClass:"line-number"},[v._v("46")]),_("br"),_("span",{staticClass:"line-number"},[v._v("47")]),_("br"),_("span",{staticClass:"line-number"},[v._v("48")]),_("br"),_("span",{staticClass:"line-number"},[v._v("49")]),_("br"),_("span",{staticClass:"line-number"},[v._v("50")]),_("br"),_("span",{staticClass:"line-number"},[v._v("51")]),_("br"),_("span",{staticClass:"line-number"},[v._v("52")]),_("br"),_("span",{staticClass:"line-number"},[v._v("53")]),_("br"),_("span",{staticClass:"line-number"},[v._v("54")]),_("br"),_("span",{staticClass:"line-number"},[v._v("55")]),_("br"),_("span",{staticClass:"line-number"},[v._v("56")]),_("br"),_("span",{staticClass:"line-number"},[v._v("57")]),_("br"),_("span",{staticClass:"line-number"},[v._v("58")]),_("br"),_("span",{staticClass:"line-number"},[v._v("59")]),_("br"),_("span",{staticClass:"line-number"},[v._v("60")]),_("br"),_("span",{staticClass:"line-number"},[v._v("61")]),_("br"),_("span",{staticClass:"line-number"},[v._v("62")]),_("br"),_("span",{staticClass:"line-number"},[v._v("63")]),_("br"),_("span",{staticClass:"line-number"},[v._v("64")]),_("br"),_("span",{staticClass:"line-number"},[v._v("65")]),_("br")])])])]),v._v(" "),_("h3",{attrs:{id:"_9-系统管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-系统管理"}},[v._v("#")]),v._v(" 9. "),_("strong",[v._v("系统管理")])]),v._v(" "),_("p",[v._v("用于查看系统状态和执行管理任务。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("shutdown")]),v._v("：关机或重启系统\n"),_("ul",[_("li",[_("code",[v._v("shutdown now")]),v._v("：立即关机。")]),v._v(" "),_("li",[_("code",[v._v("shutdown -r now")]),v._v("：立即重启。")])])]),v._v(" "),_("li",[_("code",[v._v("reboot")]),v._v("：重启系统\n"),_("ul",[_("li",[_("code",[v._v("reboot")]),v._v("：直接重启系统。")])])]),v._v(" "),_("li",[_("code",[v._v("history")]),v._v("：查看命令历史\n"),_("ul",[_("li",[_("code",[v._v("history")]),v._v("：显示已执行的命令历史列表。")])])])]),v._v(" "),_("p",[v._v("​")])])}),[],!1,null,null,null);_.default=s.exports}}]);