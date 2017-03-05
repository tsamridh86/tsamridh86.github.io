//improved javascript function that will display only the required block to the user
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


//extended Euclid Algorithm
function eEuclid ( a , b)
{
	if (b == 0)
	   return [1, 0, a];
	else
   {
    var temp = eEuclid(b, a % b);
    var x = temp[0];
    var y = temp[1];
    var d = temp[2];
    return [y, x-y*Math.floor(a/b), d];
   }
}

function extendedEuclid()
{
	var num1 = document.getElementById('extendedEuclidNum1').value;
	var num2 = document.getElementById('extendedEuclidNum2').value;
	var out = eEuclid(num1, num2);
	document.getElementById('extendedEuclidOutput').innerHTML = "GCD : "+ out[2] +"<br>" + out[2] + " = " + num1 + "*" + out[0] + " + " + num2 + " * " + out[1];
}

//square and multiply method
function squareAndMultiply()
{
	var a = document.getElementById("squareAndMultiplyA").value;
	var bi = document.getElementById("squareAndMultiplyB").value;
	var n = document.getElementById("squareAndMultiplyN").value;
	b = (parseInt(bi,10)).toString(2);
	var d = 1;
	for (var i = 0 ; i < b.length; i++)
	{
		d = (d*d)%n;
		if (b[i]==1)
		 d = (d * a)%n;
		 
	}
	document.getElementById('squareAndMultiplyOutput').innerHTML =  a + "<sup>" + bi + "</sup> mod " + n  + " = " + d;
}