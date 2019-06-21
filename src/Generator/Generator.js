function randInt(min, max){
    let rand = min-0.5+ Math.random()*(max-min +1)
    rand = Math.round(rand)
    return rand
}
function Generatop(width, height, bombs){
    if(!isNaN(width)&&!isNaN(height)&&!isNaN(bombs)){
        let map= []
        for(let i = 0;i<height;i++){
            map[i] = []
            for(let j=0;j<width;j++){
                map[i][j] = 0
            }
        }     
        for(let i = 0;i<=bombs;i++){
            let x = randInt(0,width-1)
            let y = randInt(0,height-1)
            map[y][x] !== "b"?map[y][x] = "b":map[randInt(0,width-1)][randInt(0,height-1)]="b"
        }
        for(let i = 0;i<height;i++){
            for(let j=0;j<width;j++){
                try{
                    if(map[i+1][j] === 'b' & map[i][j] !== 'b'){
                        map[i][j]++
                    }
                }catch(TypeError){}try
                {
                    if(map[i-1][j] === 'b' & map[i][j] !== 'b'){
                        map[i][j]++
                    }
                }catch(TypeError){}
                try{
                    if(map[i][j+1] === 'b' & map[i][j] !== 'b'){
                        map[i][j]++
                    }
                }catch(TypeError){
                    
                }try{
                    if(map[i][j-1] === 'b' & map[i][j] !== 'b'){
                        map[i][j]++
                    }
                }catch(TypeError){
                    
                }try{
                    if(map[i+1][j+1] === 'b' & map[i][j] !== 'b'){
                        map[i][j]++
                    }
                }catch(TypeError){
                    
                }try{
                    if(map[i-1][j-1] === 'b' & map[i][j] !== 'b'){
                        map[i][j]++
                    }
                }catch(TypeError){
                    
                }try{
                    if(map[i+1][j-1] === 'b' & map[i][j] !== 'b'){
                        map[i][j]++
                    }
                }catch(TypeError){
                    
                }try{
                    if(map[i-1][j+1] === 'b' & map[i][j] !== 'b'){
                        map[i][j]++
                    }
                }catch(TypeError){
                    
                }
            }
        }
        return map
    }else{
        alert("Поля высота ширина и бомбы болжны быть числами")
        let map = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]
        return map
    }
}
export default Generatop