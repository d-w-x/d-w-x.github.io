# Homebrew 源使用帮助

## 地址

<https://mirrors.nju.edu.cn/brew.git/>

## 说明

Homebrew 源代码仓库

## 使用说明

替换NJU镜像：

    cd "$(brew --repo)"
    git remote set-url origin https://mirrors.nju.edu.cn/brew.git

重置为官方地址：

    cd "$(brew --repo)"
    git remote set-url origin https://github.com/Homebrew/brew.git

## 相关镜像

-   `homebrew-bottles` 
-   `homebrew-core.git` 
-   `homebrew-cask.git` 

## 相关链接

官方主页

  <http://brew.sh/>

brew 文档

  <http://docs.brew.sh/>
