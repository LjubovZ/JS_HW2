


var arr = [];


for ( var i = 0; i < 5; i++ )
  arr[i] = prompt("Введите имя" , " ");
 console.log(arr);

 var userName = prompt('Введите имя пользователя', '');
 console.log('имя пользователя = ', userName);

 
 
arr = (userName == arr[0]) ? arr[0]+', '+'вы успешно вошли':

	(userName == arr[1]) ? arr[1]+', '+'вы успешно вошли':
	(userName == arr[2]) ? arr[2]+', '+'вы успешно вошли':
	(userName == arr[3]) ? arr[3]+', '+'вы успешно вошли':
	(userName == arr[4]) ? arr[4]+', '+'вы успешно вошли':

	'ошибка';
	

alert(arr);


