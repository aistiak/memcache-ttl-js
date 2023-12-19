
const store = new Map() ;

const Cache = {
   set : (key,value,ttl=0) => { // ttl in seconds
    store.set(key,value)
    if(ttl){
      setTimeout(()=>{
        store.delete(key)
      },ttl)
    }
  },
  get : (key) => {
    return store.get(key)
  }
}


module.exports = Cache 

