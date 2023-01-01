 class HashTable {
    constructor(size = 7){
        this.dataMap = new Array(size)
    }
// hash fuction 
    _hash(key){
        let hash = 0
        for (let index = 0; index < key.length; index++) {
            hash = (hash + key.charCodeAt(index) * 23) % this.dataMap.length;  
        }
        return hash
    }

    set(key,value){
        let index = this._hash(key)
        if (!this.dataMap[index]) {
            this.dataMap[index] = [] 
        }
       this.dataMap[index].push([key,value]);
       return this
    }

    get(key){
        let index = this._hash(key)
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1]
                }
            } 
        }
        return undefined
    }

    key(){
        let allKeys = []
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; i++) {
                    allKeys.push(this.dataMap[i][j][0]) 
                }
            }  
        }
        return allKeys
    }

}  


 let myHashTable = new HashTable()
 myHashTable.set("lumber",70)
 myHashTable.set("washers",50)
 myHashTable.set("bolts",1400)

 console.log(myHashTable);


  