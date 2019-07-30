var config = require('../../config/config.json')

class omdbService {

     makeConcurrentRequests (keyword){
        const p = new Promise((resolve, reject) => {
    
            let results = []
            let count = 0
            setTimeout(async() => {
            results[0] = await makeRequest(config.omdb_api_url + '&s=' + keyword + '&page1')
            count++
            console.log('Result 1:', results[0])
            })
            setTimeout(async() => {
            results[1] = await makeRequest(config.omdb_api_url +  '&s=' +keyword + '&page2')
            count++
            console.log('Result 2:', results[1])
            })
        
            console.log('This should execute fist...')
    
            const intervalCount = 0
            const int = setInterval(() => {
            if (count === 2) {
                console.log(`getAllDepthsAsync finished after ${intervalCount * 100} ms`)
                resolve(allDepths)
                clearInterval(int)
            }
            intervalCount++
            if (intervalCount > 20) {
                reject(`getAllDepthsAsync timed out after 2000 ms...`)
                clearInterval(int)
            }
            }, 100)
        })
    }
}

module.exports = omdbService;
