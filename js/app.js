var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://flicker.com/photos/big',
		nicknames: [{nick:'Tab Tab'}, {nick:'Tabert'}, {nick: 'Taberto'}, {nick: 'Tabloid'}]

	},
	{
		name: 'Salem',
		clickCount: 0,
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		imgAttribution: 'https://flicker.com/photos/big',
		nicknames: [{nick:'Sal'}, {nick:'Salemput'}, {nick: 'Sammy'}, {nick: 'Mr.Kitty Cat'}]
	},
	{
		name: 'Keeta',
		clickCount: 0,
		imgSrc: 'img/keeta.jpg',
		imgAttribution: 'https://flicker.com/photos/big',
		nicknames: [{nick:'Keetation'}, {nick:'La bebe'}, {nick: 'Chiquiada'}]
	},
	{
		name: 'Twix',
		clickCount: 0,
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		imgAttribution: 'https://flicker.com/photos/big',
		nicknames: [{nick:'Twixy'}, {nick:'Twiddles'}, {nick: 'Twix Twin'}, {nick: 'Mr.Twixel'}]
	},
	{
		name: 'Cato',
		clickCount: 0,
		imgSrc: 'img/cato.jpg',
		imgAttribution: 'https://flicker.com/photos/big',
		nicknames: [{nick:'Catotion'}, {nick:'Cato Kitty'}, {nick: 'baby'}, {nick: 'Mr.Black'}]
	},
	{
		name: 'Gordi',
		clickCount: 0,
		imgSrc: 'img/9648464288_2516b35537_z.jpg',
		imgAttribution: 'https://flicker.com/photos/big',
		nicknames: [{nick:'Gordi-do'}, {nick:'Gordo'}, {nick: 'Mr.goo-goo'}, {nick: 'Gordi-dum'}]
	}
	];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);

	this.levels = ko.computed(function() {
		var levels;
		var clicks = this.clickCount();
		if (clicks < 10) {
			levels = 'Newborn';
		}
		else if (clicks < 50) {
			levels = 'Infant';
		}
		else if (clicks < 100) {
			levels = 'Child';
		}
		else if (clicks < 200) {
			levels = 'Teen';
		}
		else if (clicks < 500) {
			levels = 'Adult';
		}
		else {
			levels = 'Ninja';
		}
		return levels;
	}, this);
}


var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable( this.catList()[0]);

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};
}

ko.applyBindings(new ViewModel());