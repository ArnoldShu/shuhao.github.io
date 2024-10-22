(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{357:function(_,v,e){"use strict";e.r(v);var l=e(4),i=Object(l.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"linux-的常用命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#linux-的常用命令"}},[_._v("#")]),_._v(" Linux 的常用命令")]),_._v(" "),v("p",[_._v("可依据某些查询工具查询具体命令得详细参数："),v("a",{attrs:{href:"https://www.lzltool.com/LinuxCommand",target:"_blank",rel:"noopener noreferrer"}},[_._v("LZL在线工具"),v("OutboundLink")],1)]),_._v(" "),v("p",[_._v("Linux 系统下有许多常用命令可以帮助用户执行各种任务，从文件管理到系统监控。以下是一些 Linux 中的常用命令，按照不同的功能分类进行了详细介绍。")]),_._v(" "),v("h3",{attrs:{id:"_1-文件和目录操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件和目录操作"}},[_._v("#")]),_._v(" 1. "),v("strong",[_._v("文件和目录操作")])]),_._v(" "),v("p",[_._v("这些命令用于处理文件和目录，包括查看、创建、删除、复制、移动等。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("ls")]),_._v("：列出目录内容\n"),v("ul",[v("li",[v("code",[_._v("ls -l")]),_._v("：详细信息列表。")]),_._v(" "),v("li",[v("code",[_._v("ls -a")]),_._v("：显示所有文件，包括隐藏文件。")])])]),_._v(" "),v("li",[v("code",[_._v("cd")]),_._v("：切换目录\n"),v("ul",[v("li",[v("code",[_._v("cd /path/to/directory")]),_._v("：切换到指定目录。")]),_._v(" "),v("li",[v("code",[_._v("cd ~")]),_._v("：切换到用户主目录。")]),_._v(" "),v("li",[v("code",[_._v("cd ..")]),_._v("：返回上一级目录。")])])]),_._v(" "),v("li",[v("code",[_._v("pwd")]),_._v("：显示当前所在路径\n"),v("ul",[v("li",[_._v("输出当前工作目录的完整路径。")])])]),_._v(" "),v("li",[v("code",[_._v("mkdir")]),_._v("：创建目录\n"),v("ul",[v("li",[v("code",[_._v("mkdir dirname")]),_._v("：创建一个名为 "),v("code",[_._v("dirname")]),_._v(" 的目录。")]),_._v(" "),v("li",[v("code",[_._v("mkdir -p /path/to/newdir")]),_._v("：创建多级目录。")])])]),_._v(" "),v("li",[v("code",[_._v("rmdir")]),_._v("：删除空目录\n"),v("ul",[v("li",[v("code",[_._v("rmdir dirname")]),_._v("：删除指定的空目录。")])])]),_._v(" "),v("li",[v("code",[_._v("rm")]),_._v("：删除文件或目录\n"),v("ul",[v("li",[v("code",[_._v("rm filename")]),_._v("：删除文件。")]),_._v(" "),v("li",[v("code",[_._v("rm -r dirname")]),_._v("：递归删除目录及其中的所有内容。")])])]),_._v(" "),v("li",[v("code",[_._v("cp")]),_._v("：复制文件或目录\n"),v("ul",[v("li",[v("code",[_._v("cp source destination")]),_._v("：复制文件。")]),_._v(" "),v("li",[v("code",[_._v("cp -r sourcedir targetdir")]),_._v("：递归复制整个目录。")])])]),_._v(" "),v("li",[v("code",[_._v("mv")]),_._v("：移动文件或重命名\n"),v("ul",[v("li",[v("code",[_._v("mv oldname newname")]),_._v("：重命名文件或目录。")]),_._v(" "),v("li",[v("code",[_._v("mv file /target/directory")]),_._v("：将文件移动到指定目录。")])])]),_._v(" "),v("li",[v("code",[_._v("touch")]),_._v("：创建空文件\n"),v("ul",[v("li",[v("code",[_._v("touch filename")]),_._v("：创建一个空文件或更新文件的时间戳。")])])]),_._v(" "),v("li",[v("code",[_._v("cat")]),_._v("：查看文件内容\n"),v("ul",[v("li",[v("code",[_._v("cat filename")]),_._v("：显示文件的内容。")])])]),_._v(" "),v("li",[v("code",[_._v("less")]),_._v(" / "),v("code",[_._v("more")]),_._v("：分页查看文件内容\n"),v("ul",[v("li",[v("code",[_._v("less filename")]),_._v("：逐页查看文件内容，按 "),v("code",[_._v("q")]),_._v(" 退出。")]),_._v(" "),v("li",[v("code",[_._v("more filename")]),_._v("：分页查看内容，按空格键翻页。")])])]),_._v(" "),v("li",[v("code",[_._v("head")]),_._v("：查看文件前几行\n"),v("ul",[v("li",[v("code",[_._v("head -n 10 filename")]),_._v("：查看文件的前 10 行。")])])]),_._v(" "),v("li",[v("code",[_._v("tail")]),_._v("：查看文件末尾部分\n"),v("ul",[v("li",[v("code",[_._v("tail -n 10 filename")]),_._v("：查看文件的最后 10 行。")]),_._v(" "),v("li",[v("code",[_._v("tail -f filename")]),_._v("：实时查看文件末尾的更新（通常用于日志文件）。")])])])]),_._v(" "),v("h3",{attrs:{id:"_2-权限管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-权限管理"}},[_._v("#")]),_._v(" 2. "),v("strong",[_._v("权限管理")])]),_._v(" "),v("p",[_._v("这些命令用于查看和修改文件的权限和拥有者。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("chmod")]),_._v("：修改文件权限\n"),v("ul",[v("li",[v("code",[_._v("chmod 755 filename")]),_._v("：为文件设置权限。")]),_._v(" "),v("li",[v("code",[_._v("chmod u+x filename")]),_._v("：给文件的用户添加执行权限。")])])]),_._v(" "),v("li",[v("code",[_._v("chown")]),_._v("：修改文件拥有者\n"),v("ul",[v("li",[v("code",[_._v("chown user:group filename")]),_._v("：更改文件的拥有者和组。")])])])]),_._v(" "),v("h3",{attrs:{id:"_3-系统信息和管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-系统信息和管理"}},[_._v("#")]),_._v(" 3. "),v("strong",[_._v("系统信息和管理")])]),_._v(" "),v("p",[_._v("用于查看系统信息、运行进程、资源使用等。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("df")]),_._v("：查看磁盘空间使用情况\n"),v("ul",[v("li",[v("code",[_._v("df -h")]),_._v("：以人类可读的格式显示磁盘使用情况。")])])]),_._v(" "),v("li",[v("code",[_._v("du")]),_._v("：查看目录或文件的大小\n"),v("ul",[v("li",[v("code",[_._v("du -sh /path/to/directory")]),_._v("：查看目录的总大小。")])])]),_._v(" "),v("li",[v("code",[_._v("top")]),_._v("：动态显示系统进程\n"),v("ul",[v("li",[_._v("显示当前运行的进程和系统资源使用情况，按 "),v("code",[_._v("q")]),_._v(" 退出。")])])]),_._v(" "),v("li",[v("code",[_._v("ps")]),_._v("：查看当前进程\n"),v("ul",[v("li",[v("code",[_._v("ps aux")]),_._v("：查看所有正在运行的进程。")])])]),_._v(" "),v("li",[v("code",[_._v("kill")]),_._v("：终止进程\n"),v("ul",[v("li",[v("code",[_._v("kill PID")]),_._v("：通过进程 ID 终止进程。")]),_._v(" "),v("li",[v("code",[_._v("kill -9 PID")]),_._v("：强制终止进程。")])])]),_._v(" "),v("li",[v("code",[_._v("free")]),_._v("：查看内存使用情况\n"),v("ul",[v("li",[v("code",[_._v("free -h")]),_._v("：以人类可读的格式显示内存使用情况。")])])])]),_._v(" "),v("h3",{attrs:{id:"_4-压缩和解压缩"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-压缩和解压缩"}},[_._v("#")]),_._v(" 4. "),v("strong",[_._v("压缩和解压缩")])]),_._v(" "),v("p",[_._v("Linux 提供了一些命令用于压缩和解压文件。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("tar")]),_._v("：打包和解包\n"),v("ul",[v("li",[v("code",[_._v("tar -cvf archive.tar /path/to/dir")]),_._v("：将目录打包为 tar 文件。")]),_._v(" "),v("li",[v("code",[_._v("tar -xvf archive.tar")]),_._v("：解包 tar 文件。")]),_._v(" "),v("li",[v("code",[_._v("tar -czvf archive.tar.gz /path/to/dir")]),_._v("：将目录压缩为 tar.gz 格式。")]),_._v(" "),v("li",[v("code",[_._v("tar -xzvf archive.tar.gz")]),_._v("：解压 tar.gz 文件。")])])]),_._v(" "),v("li",[v("code",[_._v("zip")]),_._v(" / "),v("code",[_._v("unzip")]),_._v("：压缩和解压 zip 文件\n"),v("ul",[v("li",[v("code",[_._v("zip archive.zip filename")]),_._v("：压缩文件为 zip 格式。")]),_._v(" "),v("li",[v("code",[_._v("unzip archive.zip")]),_._v("：解压 zip 文件。")])])])]),_._v(" "),v("h3",{attrs:{id:"_5-网络相关命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-网络相关命令"}},[_._v("#")]),_._v(" 5. "),v("strong",[_._v("网络相关命令")])]),_._v(" "),v("p",[_._v("用于网络测试和查看网络状态。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("ping")]),_._v("：测试网络连接\n"),v("ul",[v("li",[v("code",[_._v("ping google.com")]),_._v("：检查到 google.com 的连接情况。")])])]),_._v(" "),v("li",[v("code",[_._v("ifconfig")]),_._v(" / "),v("code",[_._v("ip")]),_._v("：查看或配置网络接口\n"),v("ul",[v("li",[v("code",[_._v("ifconfig")]),_._v("：显示网络接口的配置。")]),_._v(" "),v("li",[v("code",[_._v("ip a")]),_._v("：显示网络接口和 IP 地址。")])])]),_._v(" "),v("li",[v("code",[_._v("netstat")]),_._v("：显示网络连接和端口\n"),v("ul",[v("li",[v("code",[_._v("netstat -tuln")]),_._v("：显示所有监听的端口。")])])]),_._v(" "),v("li",[v("code",[_._v("curl")]),_._v(" / "),v("code",[_._v("wget")]),_._v("：下载文件或测试接口\n"),v("ul",[v("li",[v("code",[_._v("curl http://example.com")]),_._v("：获取 URL 内容。")]),_._v(" "),v("li",[v("code",[_._v("wget http://example.com/file.zip")]),_._v("：下载文件。")])])])]),_._v(" "),v("h3",{attrs:{id:"_6-用户管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-用户管理"}},[_._v("#")]),_._v(" 6. "),v("strong",[_._v("用户管理")])]),_._v(" "),v("p",[_._v("用于添加、删除和管理系统用户和组。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("useradd")]),_._v("：添加用户\n"),v("ul",[v("li",[v("code",[_._v("useradd username")]),_._v("：添加新用户。")]),_._v(" "),v("li",[v("code",[_._v("useradd -m username")]),_._v("：添加新用户并创建主目录。")])])]),_._v(" "),v("li",[v("code",[_._v("passwd")]),_._v("：设置用户密码\n"),v("ul",[v("li",[v("code",[_._v("passwd username")]),_._v("：为指定用户设置密码。")])])]),_._v(" "),v("li",[v("code",[_._v("userdel")]),_._v("：删除用户\n"),v("ul",[v("li",[v("code",[_._v("userdel username")]),_._v("：删除用户。")]),_._v(" "),v("li",[v("code",[_._v("userdel -r username")]),_._v("：删除用户及其主目录。")])])]),_._v(" "),v("li",[v("code",[_._v("groupadd")]),_._v("：添加用户组\n"),v("ul",[v("li",[v("code",[_._v("groupadd groupname")]),_._v("：添加新组。")])])])]),_._v(" "),v("h3",{attrs:{id:"_7-查找和搜索"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-查找和搜索"}},[_._v("#")]),_._v(" 7. "),v("strong",[_._v("查找和搜索")])]),_._v(" "),v("p",[_._v("用于查找文件或在文件中查找内容。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("find")]),_._v("：查找文件\n"),v("ul",[v("li",[v("code",[_._v("find /path -name filename")]),_._v("：在指定路径下查找文件。")]),_._v(" "),v("li",[v("code",[_._v("find /path -type f -size +10M")]),_._v("：查找大于 10MB 的文件。")])])]),_._v(" "),v("li",[v("code",[_._v("grep")]),_._v("：在文件中搜索文本\n"),v("ul",[v("li",[v("code",[_._v('grep "pattern" filename')]),_._v("：在文件中搜索包含特定模式的行。")]),_._v(" "),v("li",[v("code",[_._v('grep -r "pattern" /path')]),_._v("：递归地在目录下搜索特定模式。")])])])]),_._v(" "),v("h3",{attrs:{id:"_8-文件内容处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-文件内容处理"}},[_._v("#")]),_._v(" 8. "),v("strong",[_._v("文件内容处理")])]),_._v(" "),v("p",[_._v("用于查看、编辑或操作文件内容。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("echo")]),_._v("：输出字符串\n"),v("ul",[v("li",[v("code",[_._v('echo "Hello World"')]),_._v('：在终端中输出 "Hello World"。')])])]),_._v(" "),v("li",[v("code",[_._v(">")]),_._v(", "),v("code",[_._v(">>")]),_._v("：重定向输出\n"),v("ul",[v("li",[v("code",[_._v('echo "Hello" > file.txt')]),_._v('：将 "Hello" 写入文件（覆盖）。')]),_._v(" "),v("li",[v("code",[_._v('echo "Hello again" >> file.txt')]),_._v('：将 "Hello again" 追加到文件末尾。')])])]),_._v(" "),v("li",[v("code",[_._v("cat")]),_._v("：连接和查看文件内容\n"),v("ul",[v("li",[v("code",[_._v("cat file1 file2 > combined.txt")]),_._v("：将两个文件内容合并到新文件中。")])])]),_._v(" "),v("li",[v("code",[_._v("sort")]),_._v("：对文本文件的行排序\n"),v("ul",[v("li",[v("code",[_._v("sort filename")]),_._v("：对文件的内容排序。")])])]),_._v(" "),v("li",[v("code",[_._v("uniq")]),_._v("：去除重复行\n"),v("ul",[v("li",[v("code",[_._v("uniq filename")]),_._v("：显示文件中的唯一行（通常和 "),v("code",[_._v("sort")]),_._v(" 搭配使用）。")])])]),_._v(" "),v("li",[v("code",[_._v("wc")]),_._v("：统计文件内容\n"),v("ul",[v("li",[v("code",[_._v("wc -l filename")]),_._v("：统计文件中的行数。")]),_._v(" "),v("li",[v("code",[_._v("wc -w filename")]),_._v("：统计文件中的单词数。")])])])]),_._v(" "),v("h3",{attrs:{id:"_9-系统管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-系统管理"}},[_._v("#")]),_._v(" 9. "),v("strong",[_._v("系统管理")])]),_._v(" "),v("p",[_._v("用于查看系统状态和执行管理任务。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("shutdown")]),_._v("：关机或重启系统\n"),v("ul",[v("li",[v("code",[_._v("shutdown now")]),_._v("：立即关机。")]),_._v(" "),v("li",[v("code",[_._v("shutdown -r now")]),_._v("：立即重启。")])])]),_._v(" "),v("li",[v("code",[_._v("reboot")]),_._v("：重启系统\n"),v("ul",[v("li",[v("code",[_._v("reboot")]),_._v("：直接重启系统。")])])]),_._v(" "),v("li",[v("code",[_._v("history")]),_._v("：查看命令历史\n"),v("ul",[v("li",[v("code",[_._v("history")]),_._v("：显示已执行的命令历史列表。")])])])]),_._v(" "),v("p",[_._v("​")])])}),[],!1,null,null,null);v.default=i.exports}}]);