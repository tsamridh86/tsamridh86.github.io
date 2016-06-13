function displayProject()
{
	document.getElementById('project-holder').style.display = 'block';
	document.getElementById('bio').style.display = 'none';
	document.getElementById('nav-pro').className = 'active';
	document.getElementById('nav-bio').className = '';
	document.body.style.backgroundColor = 'purple';
	
}

function displayBio()
{
	document.getElementById('project-holder').style.display = 'none';
	document.getElementById('bio').style.display = 'block';
	document.getElementById('nav-pro').className = '';
	document.getElementById('nav-bio').className = 'active';
	document.body.style.backgroundColor = 'orange';

	
}