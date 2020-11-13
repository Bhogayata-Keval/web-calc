var operator;
var op1;
var flag=0;
var flag1=0;
var opcount=0;
function write1(num)
{
	
	var a=num.value;
	var b=document.getElementById("field1");
	if(flag==0)
	{
		b.innerHTML+=a;
	}
	else
	{
		if(flag1==1)
		{
			b.innerHTML=a;
			flag1=0;
		}
		else
		{
			b.innerHTML+=a;
		}
	}	

}

function clearall()
{
	document.getElementById("field1").innerHTML="";
	flag=0;
	flag1=0;
	opcount=0;
}

function clear1()
{
	var a=document.getElementById("field1").innerHTML;
	document.getElementById("field1").innerHTML=a.slice(0,-1);
}

function save1(op)
{
	operator=op.value;
	op1=parseFloat(document.getElementById("field1").innerHTML);
	flag=1;
	flag1=1;
	opcount=1;
}

function evaluate1()
{
	var ans;
	var op2=parseFloat(document.getElementById("field1").innerHTML);
	if(operator=='+')
	{
		ans=op1+op2;
	}
	else if(operator=='-')
	{
		ans=op1-op2;
	}
	else if(operator=='*')
	{
		ans=op1*op2;
	}
	else if(operator=='/')
	{
		ans=op1/op2;
	}
	document.getElementById("field1").innerHTML=ans;
	opcount=0;
}