const getCommentsData= async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
        const resultObj = await result.json ()
        console.log (resultObj[1].username);
        console.log (resultObj[0]);
}

getCommentsData()