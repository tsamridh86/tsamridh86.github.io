function displayCategory(num)
{
	var allCategory = 	document.getElementsByClassName('category')
	var nvItems = 		document.getElementsByClassName('navBarItems')
	var size = allCategory.length
	for(i = 0 ; i < size ; i++)
	{
		if(i == num)
		{
			allCategory[i].style.display = "block"
			nvItems[i].className = "active navBarItems"
		}
		else
		{
			allCategory[i].style.display = "none"
			nvItems[i].className = "navBarItems"
		}
	}
}