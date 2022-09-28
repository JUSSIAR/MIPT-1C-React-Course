import dataset from '../assets/data.json'

const DURATION = 1000;

export async function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve(dataset), DURATION)
    })
}