export const addUserToLocalStorage = (user)=>{
    localStorage.setItem('user',JSON.stringify(user));
}

export const removeUserFromLocalStorage = ()=>{
    localStorage.removeItem('user');
}

export const getUserFromLocalStorage = ()=>{
    return JSON.parse(localStorage.getItem('user') ? localStorage.getItem('user') : null);
}