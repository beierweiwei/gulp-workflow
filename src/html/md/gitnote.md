# git笔记
## 术语
* HEAD: 指针指向当前分支
* master 主干分支
##命令行
### 基本操作
* 从当前版本恢复文件
  `$git checkout --filename`;
* 从当前版本库删除文件
  `$git remove filename`;
### 分支操作
* `$git checkout -b <name>` checkout后面加上参数`-b`,表示创建并切换
  相当于：
    `$ git branch dev`
    `$ git checkout dev`
* `$git branch` 查看所有分支，当前分支前会有`*`号
* `$git checkout <name>` 切换分支
* `$git branch <name>` 创建分支
* `$git merge <name>` 当前分支与某分支合并
* `$git branch -d <name>` 删除分支 
