//Utility functions for filling out forms
//---------------------------------------------------------------------
//code for time objects in 12 hour format
//you can supply hour, minute, and second offsets if you would like
function Time(date, dHours, dMinutes, dSeconds) {
	dHours = typeof dHours !== 'undefined' ? dHours : 0;
	dMinutes = typeof dMinutes !== 'undefined' ? dMinutes : 0;
	dSeconds = typeof dSeconds !== 'undefined' ? dSeconds : 0;

	this.hours = 0;
	this.minutes = 0;
	this.seconds = 0;
	this.ampm = "am";
	
	//apply offsets
	date.setHours(date.getHours() + dHours);
	date.setMinutes(date.getMinutes() + dMinutes);
	date.setSeconds(date.getSeconds() + dSeconds);
	
	//get time in 12 hour format
	this.minutes = date.getMinutes();
	this.seconds = date.getSeconds();
	var tempHour = date.getHours();
	
	if(tempHour == 0)
		this.hours = 12;
	else if(tempHour > 0 && tempHour <= 12)
		this.hours = tempHour;
	else {
		this.hours = tempHour % 12;
		this.ampm = "pm";
	}
}

Time.prototype.toString = function()
{
	return (this.hours + ":" + this.minutes + ":" + this.seconds + " " + this.ampm);
}


//functions needed for random drop down selections
function isElementValid(locator) {
	var element = $(locator);
	if(element.length > 0)
		return true;
	else
		return false;
}

function selectRandomOption(selectLocator) {
	if(isElementValid(selectLocator)) {
		var minOption = getFirstValidOption(selectLocator);
		var maxOption = getSelectOptionsCount(selectLocator);
		if(maxOption > 0) {
			selectOptionByIndex(selectLocator, getRandomInt(minOption, maxOption));
		}
	}
}

function selectOptionByIndex(selectLocator, index) {
	$(selectLocator).prop("selectedIndex", index);
	$(selectLocator).blur();
	$(selectLocator).change();
}

function getFirstValidOption(selectLocator) {
	var selectedOption = 0;
	var selectElement = $(selectLocator);
	var selectOptions = selectElement.children();
	
	if($(selectOptions[0]).val() === "")
		selectedOption = 1;
		
	return selectedOption
}

function getSelectOptionsCount(selectLocator) {
	return $(selectLocator).children().length;
}

//get random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

//sets the text of the element at the locator with the text supplied
function setText(locator, text) {
	$(locator).val(text);
	$(locator).blur();
	$(locator).change();
}