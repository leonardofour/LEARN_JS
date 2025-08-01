const getAlbumsData= async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/albums')
        const resultObj = await result.json ()
        console.log (resultObj[1].title);
        console.log (resultObj[0])
}

getAlbumsData()