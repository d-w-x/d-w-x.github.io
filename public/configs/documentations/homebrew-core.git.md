# Homebrew Core 源使用帮助

## 地址

<https://mirrors.nju.edu.cn/homebrew-core.git/>

## 说明

Homebrew 核心软件仓库

## 使用说明

替换 NJU 镜像：

    cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
    git remote set-url origin https://mirrors.nju.edu.cn/homebrew-core.git

重置为官方地址：

    cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
    git remote set-url origin https://github.com/Homebrew/homebrew-core

## 相关镜像

-   `brew.git` 
-   `homebrew-bottles` 

## 相关链接

官方主页

:   <http://brew.sh/>

brew 文档

:   <http://docs.brew.sh/>
