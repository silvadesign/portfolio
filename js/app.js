$(document).ready(function() {

	const repos = 'https://api.github.com/users/c0dealien/repos';

	var req = $.ajax(repos);

	req.then((response, status, xhrObj) => {
		for(var i = 0; i < response.length; i++) {
			content = `<div class="repository"><p class="language">${response[i].language}</p><h2 class="title">${response[i].name}</h2><p class="desc">${response[i].description}</p><span class="stars"><i class="fas fa-star"></i>${response[i].stargazers_count}</span><a href="${response[i].html_url}" class="btn-link" target="_blank">Acessar <i class="fas fa-external-link-alt fa-sm"></i></a></div>`;

			repositories = $('.repositories').html();
			$('.repositories').html(repositories+content);
		}
	}, (xhrObj, text, err) => {
		console.warn(err);
	});

	/* random menu separator size */
	$('#personal-info .menu li').each(function(item) {
		$(this).find('div').css('width', (Math.random() * 50) + 30);
	});

	/* change active menu link */
	$('#personal-info .menu li').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
	});

	$('.repositories').on('click', '.repository', function() {
		$(this).removeClass('repo-unfocus').addClass('repo-active').siblings().removeClass('repo-active').addClass('repo-unfocus');
	});

	/* open section onclick */
	$('#personal-info .menu li').on('click', function() {
		section = $(this).find('a').attr('href');
		$('html, body').animate({ scrollTop: $(section).offset().top}, 'slow');

		$(section).addClass('section-active').siblings().removeClass('section-active');
	});

});