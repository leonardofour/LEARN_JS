const getCommentsData= async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/comments')
        const resultObj = await result.json ()
        console.log (resultObj[1].email);
        console.log (resultObj[0]);
}

getCommentsData()