var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://flicker.com/photos/big');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
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

ko.applyBindings(new ViewModel());