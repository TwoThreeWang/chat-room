'use strict'
const config = require('config-yml')
const mysql = require('mysql')
var pool = mysql.createPool({
  host: config.mysql.host,
  user: config.mysql.username,
  password: config.mysql.password,
  database: config.mysql.database,
  port: config.mysql.port,
  connectionLimit: 50,
  acquireTimeout: 60 * 60 * 1000,
});

function query(sql, sqlParams, resolve, reject) {
  pool.getConnection(function (err, conn) {
    if (err) {
      reject(err);
    } else {
      conn.query(sql, sqlParams, (err, row) => {
        if (err) console.log(err)
        resolve(row)
      });
      conn.release();
    }
    // pool.releaseConnection(conn);
  });
};

function create_room(roomId) {
  return new Promise((resolve, reject) => {
    const sql = 'CREATE TABLE IF NOT EXISTS tb_msg_' + roomId + ' (' +
      'id        INTEGER        PRIMARY KEY auto_increment' +
      '                         NOT NULL' +
      '                         UNIQUE,' +
      'name      VARCHAR (32)   NOT NULL,' +
      'room      VARCHAR (32)   NOT NULL,' +
      'uid       VARCHAR (7)    NOT NULL,' +
      'sid       VARCHAR (7)    NOT NULL,' +
      'time      INT (10)       NOT NULL,' +
      'namecolor VARCHAR (7)    NOT NULL,' +
      'msgcolor  VARCHAR (7)    NOT NULL,' +
      'msg       VARCHAR (1000) NOT NULL,' +
      'KEY `idx_time` (`time`) USING BTREE' +
      ');';
    query(sql, resolve, reject);
  })
}

function getRecord(roomId, limit = 100) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * from tb_msg_' + roomId + ' force index(idx_time) ORDER BY `time` DESC LIMIT ' + limit;
    query(sql, {}, resolve, reject);
  })
}

function setRecord(msgItem) {
  const { name, room, uid, sid, ts: time, namecolor, msgcolor, msg } = msgItem
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO tb_msg_' + room + ' set ?'
    const sqlParams = {
      name: name,
      room: room,
      uid: uid,
      sid: sid,
      time: time,
      namecolor: namecolor,
      msgcolor: msgcolor,
      msg: msg
    }
    query(sql, sqlParams, resolve, reject)
  })
}

module.exports = {
  create_room,
  getRecord,
  setRecord
}