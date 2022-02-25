import {question} from "readline-sync";
import { Account } from "./Account";
import { CurrentAccount } from "./CurrentAccount";
import { SavingsAccount } from "./SavingsAccount";

export var Accountdetails=new Account();
var EmailIDG:string= "";
var back:boolean=false;

WelcomNote();

export function WelcomNote()
{
    console.log("...........Dear Customer, Welcome to Our Bank!.............");
    console.log("Below are the services providing at our desk!");
    MainMenuOptions();
}


export function MainMenuOptions()
{
    console.log("View Balnace -B  Transaction     - T");
    console.log("New Account  -N  Account Details - D");
    console.log("Exit - x")
    startApp();
    
}


export function startApp()
{
    var mainMenu:string= question("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();

    if(mainMenu=='N')
    {
        console.log("New Account Creation");
        NewAccount();
    }
    else if(mainMenu=='D')
    {
        console.log("Account details!");
        DisplayDetails();
    }
    else if(mainMenu=='B')
    {
        console.log("View Balance");
        ShowBalance();
    }
    else if(mainMenu=='T')
    {
        console.log("Transaction");
        Transaction();
    }
    else if(mainMenu=='X')
    {
        
    }
    else{
        console.log("Invalid Input. Please try again!");
        MainMenuOptions();
    }
}

export function BackOptons()
{
    console.log("Retry - R  Back - B");
    var selected:string=question("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
    if(selected=="R")
    {
        back=false
    }
    else if(selected=="B"){
        back= true
    }
    else{
        console.log("Invalid Input. Try again!");
        BackOptons()
    }
}

export function accountTypeOptions()
{
    console.log("Savings Account - S  Current Account - C");
}
export function transactionTypeOptions()
{
    console.log("Deposit - D  Withdraw - W");
}
export function NewAccount()
{
    accountTypeOptions();
    var accountTypeSelected:string= question("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
    if(accountTypeSelected=="S")
    {
      var newsavingsAccount = new SavingsAccount();
      newsavingsAccount.name= question('Enter Your Name:');
      newsavingsAccount.age = Number(question("Enter your Age:"));
      if(newsavingsAccount.age>68)
      {
          console.log("As your age is greater than 68, You are not eligible to create account.");
          MainMenuOptions();
      }
      else
      {
        newsavingsAccount.location=question('Enter Your Location: ');
        newsavingsAccount.state=question('Enter Your state: ');
        newsavingsAccount.country=question('Enter Your Country: ');        
        GetEmailID(); 
        newsavingsAccount.emailID=EmailIDG;        
        console.log('Savings Account Created Succesfully with Account Number :'+newsavingsAccount.accountNumber);
        Accountdetails=newsavingsAccount;
        //console.log(Accountdetails);

        MainMenuOptions();
      }
            
    }
    else if(accountTypeSelected=="C")
    {
        var newcurrentccount = new CurrentAccount();
        newcurrentccount.name= question('Enter Your Name:');
        newcurrentccount.age = Number(question("Enter your Age:"));
      if(newcurrentccount.age>68)
      {
          console.log("As your age is greater than 68, You are not eligible to create account.");
          MainMenuOptions();
      }
      else
      {
        newcurrentccount.location=question('Enter Your Location: ');
        newcurrentccount.state=question('Enter Your state: ');
        newcurrentccount.country=question('Enter Your Country: ');
        GetEmailID(); 
        newcurrentccount.emailID=EmailIDG;        
        console.log('Current Account Created Succesfully with Account Number :'+newcurrentccount.accountNumber);
        Accountdetails=newcurrentccount;
        //console.log(Accountdetails);

        MainMenuOptions();
      }

    }
    else{
        console.log("Invalid input. Try again!")
        NewAccount();
    }
}

export function GetEmailID():void
{
   var email:string = question('Enter Your EmailID: ');
   if(!validateEmail(email))
   {
       console.log("Invalid Email!");
       GetEmailID();
   } 
   else{
    EmailIDG=email;
   }  
   
}
export function validateEmail(Email:string):boolean
{
    if(Email.search('[^ @]*@[^ @]*')==0)
    {
        return true;
    }
    else{
        return false;
    }
    
}

export function DisplayDetails():void
{
    if(Accountdetails.accountNumber=="")
    {
        console.log("No data found! Please an create Account.");
        MainMenuOptions();
    }
    else{
        var accno:string = question("Please enter the Account Number:");
        if(accno==Accountdetails.accountNumber)
        {
            //console.log(Accountdetails);
            console.log("Account Number:",Accountdetails.accountNumber);
            console.log("Account Type:",Accountdetails.accountType);
            console.log("Customer Name:",Accountdetails.name);
            console.log("mAddress:",Accountdetails.location+","+Accountdetails.state+","+Accountdetails.country);
            console.log("EmailID:",Accountdetails.emailID);
            console.log("Total Balance:",Accountdetails.balance);

            MainMenuOptions();
        }
        else{
            console.log("In correct Account Number !");
            BackOptons();
            var retry:boolean = !back;
            if(retry)
            DisplayDetails();
            else
            MainMenuOptions();
        }
    }

}
export function ShowBalance()
{
    if(Accountdetails.accountNumber=="")
    {
        console.log("No data found! Please create an Account.");
        MainMenuOptions();
    }
    else{
        var tmpname:string = question("Please enter the Account Holder Name:");
        if(tmpname==Accountdetails.name)
        {
            console.log("Account Balance: "+Accountdetails.balance);
            MainMenuOptions();
        }
        else{
            console.log("In correct Account Holder Name !");
            BackOptons();
            var retry:boolean = !back;
            if(retry)
            ShowBalance();
            else
            MainMenuOptions();
        }
    }
}
export function Transaction()
{
    if(Accountdetails.accountNumber=="")
    {
        console.log("No data found! Please create an Account.");
        MainMenuOptions();
    }
    else{
        transactionTypeOptions();
        var selected:string =question("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
        if(selected=="D")
        {
            Deposit();
        }
        else if(selected=="W"){
            Withdraw();
        }
        else{
            console.log("Invalid Input!");
            Transaction();
        }
    
    }
}

export function Deposit()
{    
    var accno:string = question("Please enter the Account Number:");
    if(accno==Accountdetails.accountNumber)
    {
        console.log("Account Balance: "+ Accountdetails.balance);
        var amountdepositing:number = Number(question("Please Enter the Amount to be deposited: "));
        Accountdetails.balance+=amountdepositing;
        console.log("Deposit of "+amountdepositing+" is Successfull!")
        console.log("Available Balance: "+ Accountdetails.balance); 
        MainMenuOptions();              
    }
    else{
        console.log("In correct Account Number !");
        BackOptons();
        var retry:boolean = !back;
        if(retry)
        Deposit();
        else
        MainMenuOptions();
    }
}
export function Withdraw()
{
    var accno:string = question("Please enter the Account Number:");
    if(accno==Accountdetails.accountNumber)
    {
        console.log("Account Balance: "+ Accountdetails.balance);        
        if(Accountdetails.balance>Accountdetails.minimumBalance)
        {
            console.log("Withdrawble Balance: "+ (Accountdetails.balance-Accountdetails.minimumBalance));
            WithdrawAmount();                                     
        }
        else{
            console.log("Not Eligible to withdraw as balance is less than Minimum balance");
            MainMenuOptions();
        }             
    }
    else{
        console.log("In correct Account Number !");
        BackOptons();
        var retry:boolean = !back;
        if(retry)
        Withdraw();
        else
        MainMenuOptions();
    }
}

export function WithdrawAmount():void
{
   var amountwithdrawing:number = Number(question("Please Enter the Amount to be withdraw: "));
   if(!validateWithdrawAmount(amountwithdrawing))
   {
        console.log("Insufficient Amount! please enter the amount less than withdrawable amount ");       
        BackOptons();
        var retry:boolean = !back;
        if(retry)
        WithdrawAmount();
        else
        MainMenuOptions();      
   } 
   else{
        Accountdetails.balance-=amountwithdrawing;
        console.log("Withdrawal of "+amountwithdrawing+" is Successfull!")
        console.log("Available Balance: "+ Accountdetails.balance);  
        MainMenuOptions();
   }  
}
export function validateWithdrawAmount(amountwithdrawing:number):boolean
{
    if(Accountdetails.balance-amountwithdrawing>=Accountdetails.minimumBalance)
    {
        return true;
    }
    else{
        return false;
    }
    
}