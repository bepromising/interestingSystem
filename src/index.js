'use strict';
import '@/style/index.less';
let a = [{ a: 1 }];
console.log(a);
a.filter(vo => {
	return vo.a === 2;
});
