(function () {
	var ApiRootUrl = 'http://127.0.0.1:8080/';
	var TestUrl = ApiRootUrl + 'wxappJsonS?act=test';
	
	function test() {
		console.log('hello');
	}
	
	//https://www.cnblogs.com/lwj820876312/p/9096072.html
	function getStorageSync(key) {
		return JSON.parse(localStorage.getItem(key));
	}
	
	function setStorageSync(key, data) {
		localStorage.setItem(key, JSON.stringify(data));
	}
	
	function removeStorageSync(key) {
		localStorage.removeItem(key);
	}
	
	window.utils = {
		ApiRootUrl: ApiRootUrl,
		TestUrl: TestUrl,
		test: test,
		getStorageSync: getStorageSync,
		setStorageSync: setStorageSync,
		removeStorageSync: removeStorageSync,
	};
})();
