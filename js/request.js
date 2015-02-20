'use strict';

var Promise = require('bluebird');
var http = require('http');
var url = require('url');

module.exports = function request(opts) {

  return new Promise(function (resolve, reject) {
    var _ = url.parse(opts.url);

    var o = {
      host: _.host,
      port: _.port || 80,
      protocol: _.protocol,
      method: opts.method,
      path: _.path,
      headers: opts.headers,
      auth: opts.auth || null,
      withCredentials: opts.withCredentials || false
    };

    if (opts.method === 'GET' && opts.query) {
      var i = 0;
      var p = '', k;
      for (k in opts.query) {
        if (opts.query.hasOwnProperty(k)) {
          p += (i === 0 ? '?' : '&') + k + '=' + opts.query[k];
        }
        i++;
      }
      if (p) o.path += p;
    }

    var req = http.request(o, function (res) {
      var headers = res.headers;
      var data = headers['content-type'] === 'application/json' ? {} : [];
      var args = {data: data, status: res.statusCode, headers: headers};

      res.on('data', function (chunk) {
        if (headers['content-type'] === 'application/json') {
          data = JSON.pare(chunk.toString());
        } else {
          data[data.length] = chunk.toString();
        }
      });
      res.on('end', function () {
        args.data = data;
        resolve(args);
      });
    });

    req.on('error', function (err) {
      reject(err);
    });

    if (opts.payload) {
      req.write(opts.payload);
    }
    req.end();
  });
};

