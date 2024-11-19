const getStorageJobIdItems = () => {
    const jobItems = localStorage.getItem('jobItems');
    if(jobItems){
        return JSON.parse(jobItems)
    }
    else {
        return []
    }
}
const saveJobIdToLocalStorage = (userId) =>{
    const jobsIds = getStorageJobIdItems();
    const exits = jobsIds.find(jobId => jobId === userId);
    if(!exits){
        jobsIds.push(userId)
        localStorage.setItem('jobItems', JSON.stringify(jobsIds));
        console.log(jobsIds)
    }
}

export  {saveJobIdToLocalStorage, getStorageJobIdItems}