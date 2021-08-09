# Rust Toolchain 反向代理使用帮助

## 说明

Rust Toolchain 反向代理

## 使用说明

请配合 [rustup](http://www.rustup.rs/) 来使用。

rustup 安装方法可参考官方的
[文档](https://github.com/rust-lang-nursery/rustup.rs#other-installation-methods)

使用 rustup 前，先设置环境变量 `RUSTUP_DIST_SERVER` （用于更新
toolchain）：

    export RUSTUP_DIST_SERVER=https://mirrors.nju.edu.cn/rust-static

以及 `RUSTUP_UPDATE_ROOT` （用于更新 rustup）：

    export RUSTUP_UPDATE_ROOT=https://mirrors.nju.edu.cn/rust-static/rustup

::: attention
::: title
Attention
:::

截止到该页面编写的时候（2017-01-05）， cargo 的软件包依然托管在 AWS 上，
因此无法对下载地址做替换， 下载速度可能较慢。但该软件包只有大概 10 MB
左右，影响不会很大。
:::
