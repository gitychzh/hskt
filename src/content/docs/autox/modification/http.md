---
title: http
---


# HTTP

## 设置 http 代理[身份认证]

```js
// 设置代理: (身份认证看情况)
http.get(url, { proxyHost: "192.168.1.10", proxyPort: 7890, userName: "ozobi", password: 1014521824 });
```

## 设置 http 超时时间、尝试次数

```js
http.get(url, { maxTry: 3, timeout: 5000 });
// 一共尝试 3 次(默认3), 每次 5s (默认10s)超时
```
