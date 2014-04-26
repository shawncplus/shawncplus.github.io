document.addEventListener('markdownrender', function ()
{
	var focusPoints = document.querySelectorAll('ol > li');
	var focusIndex = 0;
	focusPoints[focusIndex].classList.add('selected');
	document.onkeydown = function (e)
	{
		if (e.keyCode !== 74 && e.keyCode !== 75 && e.keyCode !== 71)
		{
			return;
		}

		if (e.keyCode === 71)
		{
			window.scrollTo(0, 0);
			focusPoints[focusIndex].classList.remove('selected');
			focusIndex = 0;
			focusPoints[focusIndex].classList.add('selected');
			return;
		}

		var direction = e.keyCode === 74 ? 1 : -1;

		if (focusPoints[focusIndex + direction])
		{
			focusPoints[focusIndex].classList.remove('selected');
			focusIndex += direction;
			var focusPoint = focusPoints[focusIndex];
			focusPoint.classList.add('selected');

			var top = focusPoint.offsetTop - ( window.innerHeight / 2 ) + (focusPoint.offsetHeight / 2);
			window.scrollTo(0, Math.min(top, focusPoint.offsetTop));
		}
	};

	var subtitle = document.createElement('div');
	subtitle.innerHTML = document.querySelector('subtitle').innerHTML;
	subtitle.classList.add('subtitle');

	document.querySelector('div.container').appendChild(subtitle);
});
