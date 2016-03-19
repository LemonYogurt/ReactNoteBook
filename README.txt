生成ssh key：
ssh-keygen -t rsa -C email

windows是在如下目录中：
c/Users/Administrator/.ssh/id_rsa

将其中的.pub文件内容复制一下，拷贝到git的ssh中

git config --global user.name "LemonYogurt"
git config --global user.email "2250810908@qq.com"