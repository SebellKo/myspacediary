var i;
var even = 0;
var odd = 0;
var sum = 0;

for (i = 0; i++; i <= 50)
{
	if ((i % 2) == 0)
  {
  	even += i;
  }
  else if ((i % 2) == 1)
  {
  	odd += i;
  }
  sum += i;
}
console.log(sum);
console.log(odd);
console.log(even);
