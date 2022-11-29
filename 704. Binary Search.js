
 search = (n, v) =>{
     l = 0
     u = n.length - 1
    while(l <= u){
         m = l + Math.floor((u - l)/2)
        if(v === n[m]){
            return m
        }
        if(v < n[m]){
            u = m - 1
        } else {
            l = m + 1 
        }
    }
    return -1
}

//one line: 

search = (n, v) =>{l = 0;u = n.length - 1;while(l <= u){ m = l + Math.floor((u - l)/2); if(v === n[m]){ return m;}if(v < n[m]){ u = m - 1;} else {l = m + 1 ;}}return -1}
     
     
    
        
