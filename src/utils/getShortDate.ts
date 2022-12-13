export const getShortDate = (date: Date) => {
    const str = date.toDateString()
    const now = new Date().toDateString()
    return str === now ? 'Today' : str.split(' ').slice(1, 3).join(' ')
}

