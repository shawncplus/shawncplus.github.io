Element.prototype.documentOffsetTop = function ()
{
	return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
};

var focusPoints = document.querySelectorAll('ol > li');
var focusIndex = 0;
focusPoints[focusIndex].classList.add('selected');
document.onkeydown = function (e)
{
	if (e.keyCode !== 74 && e.keyCode !== 75)
	{
		return;
	}

	var direction = e.keyCode === 74 ? 1 : -1;

	if (focusPoints[focusIndex + direction])
	{
		focusPoints[focusIndex].classList.remove('selected');
		focusIndex += direction;
		focusPoints[focusIndex].classList.add('selected');

		var top = focusPoints[focusIndex].documentOffsetTop() - ( window.innerHeight / 2 );
		window.scrollTo( 0, top );
	}
};

var subtitle = document.createElement('div');
subtitle.innerHTML = document.querySelector('subtitle').innerHTML;
subtitle.classList.add('subtitle');

document.querySelector('div.container').appendChild(subtitle);
