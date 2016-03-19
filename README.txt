生成ssh key：
ssh-keygen -t rsa -C email

windows是在如下目录中：
c/Users/Administrator/.ssh/id_rsa

将其中的.pub文件内容复制一下，拷贝到git的ssh中

git config --global user.name "LemonYogurt"
git config --global user.email "2250810908@qq.com"

git status查看状态

创建新分支：
git branch branchName

切换到新分支：
git checkout branchName

以上两个命令可以合成一个命令：
git checkout -b branchName

查看远程分支：
git branch -a
查看本地分支
git branch

git push -u origin dev