riot.tag('about-page', '<div if="{ router.current.name.startsWith(\'about\') }"> <h1>{ router.current.title }</h1> <h3>{ router.current.subtitle }</h3> <h4>{ router.current.message }</h4> <p> { router.current.about.name } </p> <p> { router.current.info.data } </p> <button onclick="{ back }">History Back</button> <button onclick="{ showMore }">More...</button> <button onclick="{ showEvenMore }">Even More...</button> </div>', function(opts) {var _this = this;

this.mixin('rg.router');

this.router.add({
	name: 'about.more',
	subtitle: 'More about us',
	about: {
		name: 'Demo info'
	}
});

this.router.add({
	name: 'about.more.all',
	message: 'Everything about us',
	info: {
		data: 42
	}
});

this.back = function (stateName) {
	history.back();
};

this.showMore = function () {
	_this.router.go('about.more');
};

this.showEvenMore = function () {
	_this.router.go('about.more.all');
};
});
