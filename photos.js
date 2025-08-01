const getCommentsData= async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/photos')
        const resultObj = await result.json ()
        console.log (resultObj[1].url);
        console.log (resultObj[0]);
}

getCommentsData()