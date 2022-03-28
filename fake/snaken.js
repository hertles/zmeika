class Clone{
    constructor(name){
        this.name=name
        this.x=0
        this.y=0
        this.directory='right'
        this.interval=Math.floor(400+Math.random()*400)
        this.cloneBody=[]
    }
    Spawn(){
        let born=new Audio
        born.src='sound/born.mp3'
        born.autoplay=true
        for (let i = 0; i < 5; i++) {
            this.cloneBody[i]=(document.querySelector('.x'+this.x+'.y'+this.y))
            this.cloneBody[i].classList.add('clone')
        }
        let CloneMoveINT=setInterval(() => {
            this.#Move(this.directory)
        }, this.interval);
        setTimeout(() => {
            this.directory='up'
        }, this.interval);
        setTimeout(() => {
            this.directory='right'
        }, this.interval*2);
        setTimeout(() => {
            this.directory='up'
        }, this.interval*3);
        setTimeout(() => {
            clearInterval(CloneMoveINT)
        }, this.interval*4);
    }
    #Move(dir){
        switch (dir) {
            case 'up':
                this.y--
                break;
            case 'down':
                this.y++
                break;
            case 'left':
                this.x--
                break;
            case 'right':
                this.x++
                break;
        }
        try {
            if (this.cloneBody[1]!=this.cloneBody[0]){
                this.cloneBody[0].classList.remove('clone')
            }
            for (let i = 0; i < this.cloneBody.length - 1; i++) {
                this.cloneBody[i] = this.cloneBody[i + 1]
            }
            this.cloneBody[this.cloneBody.length - 1] = document.querySelector('.x'+this.x+'.y'+this.y)
            this.cloneBody[this.cloneBody.length - 1].classList.add('clone');
        } catch (error) {
            this.cloneBody[0].classList.remove('clone')
        }
    }
    
}
var clone = []
function SpawnClone(){
    let newClone=new Clone
    clone.push(newClone)
    newClone.x=Math.floor(1+Math.random()*63)
    newClone.y=Math.floor(3+Math.random()*33)
    newClone.Spawn()
}
function CtrlV(e) {
    let key=`${e.code}`
    if (key=='KeyV'){
        SpawnClone()
    }
}
document.addEventListener('keydown',CtrlV)