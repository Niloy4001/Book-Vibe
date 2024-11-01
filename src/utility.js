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

export  { addReadListToLS, getStoredReadList };
