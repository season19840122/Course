export default [
    {
        url: '/api-dev/users',
        method: 'get',
        response: req => {
            return {
                code: 0,
                data: [
                    { name: 'Tom' },
                    { name: 'Jerry' }
                ]
            }
        }
    }
]