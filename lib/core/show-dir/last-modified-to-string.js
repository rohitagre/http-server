'use strict';

module.exports = function lastModifiedToString(stat) {
  const t = new Date(stat.mtime);
  return (('0' + (t.getDate())).slice(-2) + '-' +
          ('0' + t.getMonth()).slice(-2) + '-' +
          t.getFullYear().toString().substr(2,2) + ' ' +
          ('0' + t.getHours()).slice(-2) + ':' +
          ('0' + t.getMinutes()).slice(-2));
};
