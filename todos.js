const getCommentsData= async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos')
        const resultObj = await result.json ()
        console.log (resultObj[1].title);
        console.log (resultObj[0]);
}

getCommentsData()