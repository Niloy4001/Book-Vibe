const getStoredReadList = () => {
    const storedItem = localStorage.getItem('read-list')
    if (storedItem) {
        return JSON.parse(storedItem)
    }
    else {
        return [];
    }
}

const addReadListToLS = (id) => {
    const storedItem = getStoredReadList();
    storedItem.push(id)
    localStorage.setItem('read-list', JSON.stringify(storedItem))
}

const getStoredWhishList = () =>{
    const whishStoredStr = localStorage.getItem('whish-list')
    if (whishStoredStr) {
        return JSON.parse(whishStoredStr)
    }else{
        return []
    }
}

const addWhishListToLS = (id)=>{
    const storedWhistList = getStoredWhishList()
    storedWhistList.push(id)
    localStorage.setItem('whish-list',JSON.stringify(storedWhistList))
}

export  { addReadListToLS, getStoredReadList, addWhishListToLS, getStoredWhishList };
