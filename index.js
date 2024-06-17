

function addList(amount,category,description){
    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(`${amount}-${category}-${description}`));
    li.appendChild(btndelete());
    li.appendChild(btnedit());
    document.querySelector('.list-group').appendChild(li);
}

function checkCategory(){
    if(event.target.parentElement.innerText.includes("Fuel")){
        return 'Fuel';
    };

    if(event.target.parentElement.innerText.includes("Movie")){
        return 'Movie';
    };

    if(event.target.parentElement.innerText.includes("Rent")){
        return "Rent";
    };
    
    if(event.target.parentElement.innerText.includes("Groceries")){
        return "Groceries";
    };
    
    if(event.target.parentElement.innerText.includes("Light Bill")){
        return "Light Bill";
    };
    
    if(event.target.parentElement.innerText.includes("Other")){
        return 'Other';
    };        

    return false;
}

function btndelete(){
    let deleteBtn = document.createElement('button');
    deleteBtn.name = 'delete';
    deleteBtn.className ='btn-delete';
    deleteBtn.textContent = 'Delete Expense';

    deleteBtn.addEventListener('click',function eventDelete(event){
        event.preventDefault();

        if(checkCategory()){
            localStorage.removeItem(checkCategory());
            event.target.parentElement.remove();
        };
    });
        return deleteBtn;
}


function btnedit(){

    let editBtn = document.createElement('button');
    editBtn.name = 'edit';
    editBtn.className ='btn-edit';
    editBtn.textContent = 'Edit Expense';

    editBtn.addEventListener('click', function eventEdit(event){
        
    if(event.target.parentElement.innerText.includes(checkCategory())){
        document.querySelector('.expense').amount.value = JSON.parse(localStorage.getItem(checkCategory())).amount;
        document.querySelector('.expense').category.value = JSON.parse(localStorage.getItem(checkCategory())).category;
        document.querySelector('.expense').description.value = JSON.parse(localStorage.getItem(checkCategory())).description;
        localStorage.removeItem(checkCategory());
        event.target.parentElement.remove();
    };
})
    return editBtn;
}   



function addExpense(event){
    event.preventDefault();
    let amount = event.target.amount.value;
    let category = event.target.category.value;
    let description = event.target.description.value;

    let localObject ={
        'amount':amount,
        "category":category,
        "description":description
    };
    
    addList(amount,category,description);
    localStorage.setItem(category,JSON.stringify(localObject));
}


document.addEventListener('DOMContentLoaded',function reloading(event){

    event.preventDefault();
    
    if(localStorage.getItem("Fuel")){
        addList(JSON.parse(localStorage.getItem("Fuel")).amount,JSON.parse(localStorage.getItem("Fuel")).category,JSON.parse(localStorage.getItem("Fuel")).description);
    };

    if(localStorage.getItem("Movie")){
        addList(JSON.parse(localStorage.getItem("Movie")).amount,JSON.parse(localStorage.getItem("Movie")).category,JSON.parse(localStorage.getItem("Movie")).description);
    };
    
    if(localStorage.getItem("Rent")){
        addList(JSON.parse(localStorage.getItem("Rent")).amount,JSON.parse(localStorage.getItem("Rent")).category,JSON.parse(localStorage.getItem("Rent")).description);
    };

    if(localStorage.getItem("Groceries")){
        addList(JSON.parse(localStorage.getItem("Groceries")).amount,JSON.parse(localStorage.getItem("Groceries")).category,JSON.parse(localStorage.getItem("Groceries")).description);
    };
    
    if(localStorage.getItem("Light Bill")){
        addList(JSON.parse(localStorage.getItem("Light Bill")).amount,JSON.parse(localStorage.getItem("Light Bill")).category,JSON.parse(localStorage.getItem("Light Bill")).description);
    };

    if(localStorage.getItem("Other")){
        addList(JSON.parse(localStorage.getItem("Other")).amount,JSON.parse(localStorage.getItem("Other")).category,JSON.parse(localStorage.getItem("Other")).description);
    };

})