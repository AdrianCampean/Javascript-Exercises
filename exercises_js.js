var br = "<br/>"
//1.Creati un cod Javascript pentru afiasa lungimea unei variabile de tip string.
var a = "exercitiu"
var b = a.length
document.write(b);
document.write(br);

function exercitiul1(a)
{
	var x = "exercitiu";
	var y = "Exercitiul 1: " + x.length;
	return y;
}
document.write(exercitiul1());
document.write(br);
document.write(br);


//2.Creati o functie simpla cu doi parametri, care sa contina cel putin o operatiune matematica.
var a = 2 + 3;
document.write(a);
document.write(br);


function exercitiul2(a,b)
{
	var x = a + b;
	var y = "Exercitiul 2: " + x 
	return y;
}
document.write(exercitiul2(2,3))
document.write(br);
document.write(br);

//3. Creati o functie care sa cuprinda cel putin doua operatiuni matematice.
var a = 3 + 4 - 2;
document.write(a);
document.write(br);

function exercitiul3(a,b,c)
{
	var x = a + b - c;
	var y = "Exercitiul 3: "+ x;
	return y;
}
document.write(exercitiul3(3,4,2));
document.write(br);
document.write(br);


//4. Avand un sir de 5 numere:- afisati elementele in ordine inversa - afisati elementele mai mari decat 4
//Varianta 1
var a = [1,2,3,4,5]
var b = a.reverse();
document.write(b);
document.write(br);

function exercitiul4(a)
{
	var x = [1,2,3,4,5];
	var y = "Exerctiul 4, cu functii: " + x.reverse();
	return y;
}
document.write(exercitiul4());
document.write(br);



//Varianta 2
var a = [1,2,3,4,5]
for (i=a.length-1;i>=0;i--)
	{document.write(a[i]+",")};
document.write(br);

var a = [1,2,3,4,5]
for (var i = 0; i<a.length; i++)
{if (a[i]>4) 
	{document.write(a[i]+" ");}
}
document.write(br);


//Varianta cu este , if etc.
var sir = [1,2,3,4,5]
function ver(a)
{
	var b = " ";
	for (var i=0; i<a.length; i++)
	{
		if (a[i]>4) {
			b= b + a[i]+" ";
		}
	}
	return b;
}
var rezultat = ver(sir);
document.write(rezultat);
document.write(br);
document.write(br);


//5.Creati un sir iar apoi:- sa se afiseze variabila cu indexul 1, - sa se afiseze lungimea variabilei care are indexul 2
//- apoi cu ajutorul unei functii sa se calculeze suma adunarii primelor doua variabile si a lungimii variabilei care are indexul 2.

var sir = [2,3,"patru",5,6];
document.write(sir[1]+"<br/>");
document.write(sir[2].length+"<br/>")
var suma = sir[0]+sir[1]+sir[2].length;
document.write(suma);
document.write(br);

function exercitiul5(a)
{
	var sir = [2,3,"patru",5,6];
	var suma = (sir[0] + sir[1] + sir[2].length);
	return suma;
}
document.write(exercitiul5());
document.write(br);
document.write(br);


//6. Creati un sir cu 6 elemente, care sa contina si elemente de tip string iar apoi:
//- sa se faca suma lungimii elementelor de tip string
//- apoi inmultirea elementelor de tip integer
//- apoi sa se faca impartirea produsului la suma
//- afisati toate rezultatele intr-o singura fraza

var sir = [2,"trei","patru",5,6,7];
var suma = sir[1].length+sir[1].length;
var produs = sir[0]*sir[3]*sir[4]*sir[5];
var rezultat = produs/suma;
document.write("suma este:"+suma+"produsul este:"+produs+"rezultatul este:"+rezultat );
document.write(br);

function exercitiul6(a)
{
	var sir = [2,"trei","patru",5,6,7];
	var suma = sir[1].length+sir[1].length;
	var produs = sir[0]*sir[3]*sir[4]*sir[5];
	var rezultat = produs/suma;
	var rezultatf = "Suma este: "+suma+", Produsul este: "+produs+", Rezultatul este: "+rezultat;
	return rezultatf;
}
document.write(exercitiul6());
document.write(br);
document.write(br);


//7.Creati un sir de numere. Afisati produsul elementelor din sir(presupunem ca nu stim cate elemente are sirul).
var a = [2,4,6,8];
var prod = 1;  
for(var i = 0; i<a.length;i++) // Cand citim de la stanga la dreapta , i=0 , i++
								// Cand citim de la dreapta la stanga , i=1 , i--
{prod=prod*a[i];}
document.write(prod);
document.write(br);

function exercitiul7(a)
{
	var a = [2,4,6,8];
	var prod = 1;
		for(var i = 0; i<a.length;i++)
			{prod=prod*a[i];}
	return prod;
}
document.write(exercitiul7());
document.write(br);
document.write(br);

//8.Creati un sir. Adaugati la final un element de tip string, apoi afisati sirul nou.
var a = [1,2,3]
var b = a.push("patru")
document.write(a);
document.write(br);

function exercitiul8(a)
{
	var x = [1,2,3];
	var y = x.push("patru");
	return x;
}
document.write(exercitiul8());
document.write(br);
document.write(br);

//9.Creati un sir. Adaugati la final un element de tip numar intreg, apoi afisati sirul nou.
var a = ["patru","trei","scaun"];
var b = a.push("2");
document.write(a);
document.write(br);


function exercitiul9(a)
{
	var x = ["patru","trei","scaun"];
	var y = x.push("2");
	return x;
}
document.write(exercitiul9());
document.write(br);
document.write(br);

//10.Creati doua siruri, concatenati-le, apoi afisati sirul nou.
var a = [5,6,7];
var b = ["magazin","frigider"];
var c = a + b;
document.write(c);
document.write(br);

function exercitiul10(a)
{
	var x = [5,6,7];
	var y = ["magazin","frigider"];
	var z = x + y;
	return z;
}
document.write(exercitiul10());
document.write(br);
document.write(br);

//11.Creati trei siruri, concatenati-le, apoi afisati sirul nou.
var sir1 = [1,3];
var sir2 = [2,5];
var sir3 = [4,6];
var rezultat = sir1 + "," + sir2 + "," + sir3;
document.write(rezultat);
document.write(br);


function exercitiul11(a)
{
	var sir1 = [1,3];
	var sir2 = [2,5];
	var sir3 = [4,6];
	var rezultat = sir1 + "," + sir2 + "," + sir3;
	return rezultat;
}
document.write(exercitiul11());
document.write(br);
document.write(br);

//12.Creati doua siruri de numere. Sirurile trebuie sa aiba aceeasi lungime.
//Presupunem ca nu stim lungimea sirurilor. Creati un al treilea sir in care
//primul element sa aiba valorea sumei primului element din primul sir si
//primului element din al doilea sir – idem pentru fiecare element. Afisati al treilea sir.
var sir1 = [1,2,3];
var sir2 = [6,7,8];
var sir3 = [];
for (i=0; i<sir1.length; i=i+1)
	{
	sir3.push(sir1[i]+sir2[i]);
	}
document.write(sir3);
document.write(br);

function exercitiul12(a)
{
	var sir1 = [1,2,3];
	var sir2 = [6,7,8];
	var sir3 = [];
	for (i=0; i<sir1.length; i=i+1)
	{
	sir3.push(sir1[i]+sir2[i]);
	}
	return sir3;
}
document.write(exercitiul12())
document.write(br);
document.write(br);




//13. Avand un sir de 6 numere. Afisati produsul numerelor de pe pozitiile impare, respectiv produsul numerelor de pe pozitiile pare.
var sir = [1,2,3,4,5,6];
var pi = 1; //pi=produs-impar
var pp = 1; //pp=produs-par
for (i=0; i<sir.length;i++)
	{if (i%2==0)
		{pp=pp+sir[i];}
	 else {pi=pi*sir[i];}
	}
document.write(br);
document.write(pi);
document.write(br);
document.write(pp);
document.write(br);

function exercitiul13(a)
{
	var sir = [1,2,3,4,5,6];
	var pi = 1;
	var pp = 1;
	for (i=0; i<sir.length;i++)
		{if (i%2==0)
			{pp=pp+sir[i];}
		 else {pi=pi*sir[i];}
		}
	var rezultat = "Produsul numerelor pare este:"+ pp + " Produsul numerelor impare este: " + pi
	return rezultat;
}
document.write(exercitiul13());
document.write(br);
document.write(br);

//14.Creati un cod Javascript cu care sa inversati elementele dintr-un sir dat, afisati rezultatul obtinut.
var a = [1,2,3,4,5]
for (i=a.length-1;i>=0;i--)
	{document.write(a[i]+",")};
document.write(br);

function exercitiul14(sir)
{	var rezultat = " ";
	for (i=sir.length-1;i>=0;i--)
		{rezultat=rezultat+a[i]+' ';}
	return rezultat;
}
document.write(exercitiul14(a));
document.write(br);
document.write(br);

//15.Creati un cod cu care sa aranjati in ordine alfabetica elementele dintr- un anumit sir, afisati sirul nou obtinut.
var sir = ["a","d","c","b"];
var b = sir.sort();
document.write(b);
document.write(br);

function exercitiul15(a)
{
	var sir = ["a","d","c","b"];
	var b = sir.sort();
	return b;
}
document.write(exercitiul15());
document.write(br);
document.write(br);

//16.Creati un cod pentru afisarea unui text pe ecran, nu in fereastra pop-up.
var a = ["Adrian"];
var b = ["scrie cod!"];
var c = a + "," + b;
document.write(c);
document.write(br);

function exercitiul16(a)
{
	var a = ["Adrian"];
	var b = ["scrie cod!"];
	var c = a + "," + b;
	return c;
}
document.write(exercitiul16());
document.write(br);
document.write(br);












