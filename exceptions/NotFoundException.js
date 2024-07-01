class NotFoundException extends Error{
    constructor(model,property,value){
        super();
        this.message=`${model} with ${property}: ${value} doesnt exist in the datebase.`;
    }
}

module.exports=NotFoundException;