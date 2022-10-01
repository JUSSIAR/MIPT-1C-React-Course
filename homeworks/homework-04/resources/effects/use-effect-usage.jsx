// Здесь приведен пример использования useEffect
// для реализации запроса после маунтинга по аналогии с componentDidMount

import React, {useState, useEffect} from 'react'

import getData from '{путь в вашем проекте}'

export function MyComponent() {
    const [data, setData] = useState(null)

    useEffect(() => {
        getData().then(fetchedData => setData(fetchedData))
    }, [])

    return data
        ? <div> {data} </div>
        : <div> NO DATA </div>
}
