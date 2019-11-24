import workerize from 'workerize'

const worker = workerize(`
    export function sortWith(value, options) {
        let { sort, order } = options

        let sortUsing = {
            name: {
                ascending: (value) => value.reverse().sort((a, b) => 
                    (a.name === null || b.name === null) 
                        ? null
                        : a.name.th.localeCompare(b.name.th, 'th')
                ),
                descending: (value) => value.reverse().sort((a, b) => 
                    (a.name === null || b.name === null) 
                        ? null
                        : b.name.th.localeCompare(a.name.th, 'th')
                )
            },
            price: {
                ascending: (value) => value.sort((a, b) => a.price - b.price),
                descending: (value) => value.sort((a, b) => b.price - a.price)
            },
            group: {
                ascending: (value) => value,
                descending: (value) => value.reverse()
            }
        }

        return sortUsing[sort][order](value)
    }
`)

export default worker