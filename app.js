let pronoun = ["the","our"];
let adj = ["great", "big", "acid", "hungry"];
let noun = ["jogger","racoon", "minimal", "micaela"];
let domains = ["com","net","org","us", "es", "cl"];
const createDomains = () => {
    for (p in pronoun) {
        for (a in adj) {
            for (n in noun) {
                for (d in domains){
                    let str= `${pronoun[p]}${adj[a]}${noun[n]}`
                    if(str.includes(domains[d])){
                        let newStr = str.replace(domains[d], "");
                        finalStr = `${newStr}.${domains[d]}`
                        console.log(finalStr)
                    } else {
                        console.log(`${str}.${domains[d]}`)
                    }
                }
            }
        }
    }
}
createDomains();