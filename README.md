<p align="center"><img src="https://count.getloli.com/get/@chat-room.wangtwothree" alt="chat-room"></p>

# chat-room

一个普通的聊天室

基于 https://github.com/journey-ad/chat-room 修改而来

- 新增 Mysql 数据库
- 数据存储方式修改为按频道分表
- 增加索引，提高查询效率

[Demo](https://chat.error.work/room/@demo)

![chat-room](https://cdn.error.work/imgur/gyoA8uB.png)

## Usage

### Install

#### Run on Repl.it

- Open the url [https://repl.it/@journeyad/chat-room](https://repl.it/@journeyad/chat-room)
- Just hit the **Fork** button
- And hit the **Run** button

#### Deploying on your own server

```shell
$ git clone https://github.com/TwoThreeWang/chat-room.git
$ cd chat-room
$ yarn install

$ yarn start
```

### Confignation

[`config.yml`](config.yml)

```yaml
app:
  port: 3000

db:
  type: mongodb # sqlite or mongodb or firebase
```

If you use mongodb, you need to specify the environment variable `DB_URL`

```shell
# eg:
export DB_URL=mongodb+srv://account:passwd@***.***.***.mongodb.net/db_count
```

repl.it can use `.env` file, [documentation](https://docs.repl.it/repls/secret-keys)

```
DB_URL="mongodb+srv://account:passwd@***.***.***.mongodb.net/db_count"
```

### How to use

The chat room URL looks like this:
```
https://chat.error.work/room/@:name?title=the title whatever
```

Just use your own name and title, eg:

[https://chat.error.work/room/@test?title=a simple title](https://chat.error.work/room/@test?title=a%20simple%20title)

And you can open in new tab or use iframe, [example](https://count.getloli.com/)

#### SVG Charts

By the feature of SVG `<foreignObject>`, we can make an SVG element contain a standard HTML page.

As we know SVG can be referenced as an image.

And then...

[![SVG Charts](https://chat.error.work/room/@wangtwothree/svg?width=600&height=280&limit=20&theme=light&fontSize=13&title=WangTwoThree@chat_room)](https://chat.error.work/room/@wangtwothree)

**Magical!** a **Real-time** chart that can be inserted into any document that supports images.

Just like this guy's [personal home page](https://github.com/TwoThreeWang)

This is all parameters, do it yourself:
```
https://chat.error.work/room/@test/svg?width=750&height=360&limit=20&theme=light&fontSize=13&title=TwoThreeWang@github.com: ~
```

## Credits

*   [repl.it](https://repl.it/)
*   [Node.js 與 Socket.io – 即時聊天室實作](https://single9.net/2017/12/node-js-%e8%88%87-socket-io-%e5%8d%b3%e6%99%82%e8%81%8a%e5%a4%a9%e5%ae%a4%e5%af%a6%e4%bd%9c/)
*   [SVG <foreignObject>简介与截图等应用](https://www.zhangxinxu.com/wordpress/2017/08/svg-foreignobject/)
*   [Icons8](https://icons8.com/icons/set/star)

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fjourney-ad%2Fchat-room.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fjourney-ad%2Fchat-room?ref=badge_large)
