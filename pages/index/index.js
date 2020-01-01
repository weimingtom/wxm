window.onload = function() { new Vue({
	el: '#vue_det',
	data: {
		site: "菜鸟教程",
		url: utils.ApiRootUrl,
		alexa: "10000",
		info: null,
	},
	methods: {
		details: function() {
			return  this.site + " - 学的不仅是技术，更是梦想！";
		},
	},
	mounted: function() {
		var this_ = this;
		axios.get(utils.TestUrl)
	    	.then(function(response) {
	    		this_.info = response.data;
	    		
	    		
	    		utils.setStorageSync('info', this_.info);  
	    		var info = utils.getStorageSync('info');
	    		console.log(info);
	    	})
	    	.catch (function (error) {
	    		console.log(error);
	    	});
	},
});};
