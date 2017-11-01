/**
 * @description 解析URL地址
 * @method __ParseURL
 * @param {string} url 完整的URL地址
 * @return {object} 自定义的对象
 * @example
 *  用法示例：var myURL = parseURL('http://abc.com:8080/dir/index.html?id=255&m=hello#top');
 * myURL.file='index.html'
 * myURL.hash= 'top'
 * myURL.host= 'abc.com'
 * myURL.query= '?id=255&m=hello'
 * myURL.params= Object = { id: 255, m: hello }
 * myURL.path= '/dir/index.html'
 * myURL.segments= Array = ['dir', 'index.html']
 * myURL.port= '8080'
 * yURL.protocol= 'http'
 * myURL.source= 'http://abc.com:8080/dir/index.html?id=255&m=hello#top'
 */
const parseURL = (url) => {
    const ae = document.createElement('a');
    ae.href = url;
    return {
      source: url,
      protocol: ae.protocol.replace(':', ''),
      host: ae.hostname,
      port: ae.port,
      query: ae.search,
      params: (() => {
        const ret = {};
        const seg = ae.search.replace(/^\?/, '').split('&');
        const len = seg.length;
        let ii = 0;
        let ss;
        for (; ii < len; ii++) {
          if (!seg[ii]) {
            continue;
          }
          ss = seg[ii].split('=');
          ret[ss[0]] = ss[1];
        }
        return ret;
      })(),
      file: (ae.pathname.match(/\/([^\/?#]+)$/i) || [''])[1],
      hash: ae.hash.replace('#', ''),
      path: ae.pathname.replace(/^([^\/])/, '/$1'),
      relative: (ae.href.match(/tps?:\/\/[^\/]+(.+)/) || [''])[1],
      segments: ae.pathname.replace(/^\//, '').split('/')
    };
  }

  const Utils = {
    parseURL
  }
  export default Utils;