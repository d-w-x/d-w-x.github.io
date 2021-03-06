## Gitlab Runner 镜像使用帮助

**注意: gitlab-runner 镜像支持 x86-64 和 ARM64(aarch64) 架构**

### Debian/Ubuntu 用户

首先信任 GitLab 的 GPG 公钥:

```
curl https://packages.gitlab.com/gpg.key 2> /dev/null | sudo apt-key add - &>/dev/null
```

根据你的 Debian/Ubuntu 版本，文本框中内容写进 `/etc/apt/sources.list.d/gitlab-runner.list`

|  版本 | {{os_name}} | {{release_name}} | 
| :----: | :----: | :----: |
| Debian 8   | debian |  jessie         | 
| Debian 9   | debian |  stretch        | 
| Debian 10  | debian |  buster         | 
| Ubuntu 14.04 LTS | ubuntu | trusty |
| Ubuntu 16.04 LTS | ubuntu | xenial |
| Ubuntu 18.04 LTS | ubuntu | bionic |

```
deb http://mirror.nju.edu.cn/gitlab-runner/{{os_name}} {{release_name}} main
```

安装 gitlab-runner:

```
sudo apt-get update
sudo apt-get install gitlab-runner
```

### CentOS/RHEL

新建 `/etc/yum.repos.d/gitlab-runner.repo`，内容为

```
[gitlab-runner]
name=gitlab-runner
baseurl=https://mirror.nju.edu.cn/gitlab-runner/yum/el$releasever-$basearch/
repo_gpgcheck=0
gpgcheck=0
enabled=1
gpgkey=https://packages.gitlab.com/gpg.key
```

再执行

```
sudo yum makecache
sudo yum install gitlab-runner
```
