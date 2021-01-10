import {h, render} from 'preact'

import HelloWorld from './HelloWorld'

export default class Timeline {
    constructor() {
        render(<HelloWorld name='World' />, document.body)

        const foo = new Promise((resolve) => {
            const foo = {a:1, b:2, c:3}
            setTimeout(() => resolve({...foo, a: 99}))
        })

        foo.then(fooDone => console.log(fooDone));
    }
}

