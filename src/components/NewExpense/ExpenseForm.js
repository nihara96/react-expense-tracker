import React, {useState} from "react";
import './ExpenseForm.css'; 

const ExpenseForm = (props) => {

    // const [enteredTitle,setEnteredTitle] = useState(''); 
    // const [enteredAmount,setEnteredAmount] = useState('');  
    // const [enteredDate,setEnteredDate] = useState('');  

    const [userInput, setUserInput ] = useState({
        enteredTitle:'', 
        enteredAmount:'',
        enteredDate:'', 
    }); 

    const titleChangeHandler = (event)=>{
    //    setUserInput({
    //     ...userInput, 
    //     enteredTitle:event.target.value, 
    //    }); 
    //we have alternative way to do this as below
    setUserInput((prevState)=>{
        //then return new state as, (safer way)
        return {...prevState, enteredTitle:event.target.value};
    }); 

    }


    const amountChangeHandler = (event)=> {
        setUserInput((prevState)=>{
            //then return new state as, (safer way)
            return {...prevState, enteredAmount:event.target.value};
        }); 
    }


    const dateChangedHandler = (event)=>{
        setUserInput((prevState)=>{
            //then return new state as, (safer way)
            return {...prevState, enteredDate:event.target.value}; 
        }); 
    }


    const submitHandler = (event)=>{
        event.preventDefault();  // disable the default behaviour that reloads the page on submit

        const expenseData = {
            title: userInput.enteredTitle, 
            amount: +userInput.enteredAmount, 
            date: new Date(userInput.enteredDate),   
        }; 

        props.onSaveExpenseData(expenseData);  

        console.log(expenseData); 

        setUserInput({
            enteredTitle:'', 
            enteredAmount:'',
            enteredDate:'', 
        });

    }


    const onCancelClickHandler = ()=>{
        props.onCancelClickHandler(false);  
    }



    return ( 
        <>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label> 
                    <input value={userInput.enteredTitle} type='text' onChange={titleChangeHandler}/> 
                </div>
                <div className="new-expense__control">
                    <label>Amount</label> 
                    <input value={userInput.enteredAmount} onChange={amountChangeHandler} type='number' min='0.01' step='0.01'/> 
                </div>
                <div className="new-expense__control">
                    <label>Date</label> 
                    <input value={userInput.enteredDate} onChange={dateChangedHandler} type='date' min='2019-01-01' max='2022-12-31'/>   
                </div>
            </div>
            <div className="new-expense__actions">
            <button onClick={onCancelClickHandler} type="submit">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
        </>
     );
}
 
export default ExpenseForm;