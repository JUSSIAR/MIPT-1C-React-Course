import mockedData from '../data/mocked-data.json'

export function mockedDataProvider(id, data) {
    const { title, text } = mockedData

    return {
        title: `${title} ${id}`,
        text: `${text} ${data}`,
    }
}