class Features{
    constructor(query,queryString){
        this.query=query;
        this.queryString=queryString;

    }

    search(){
        const keyword = this.queryString.keyword ?{
            name:{
                $regex:this.queryString.keyword,
                $options:'i'
            }
        }:{}


        console.log(keyword)

        this.query=this.query.find({...keyword});
        return this;
    }

    pagination(itemsPerPage){
        const currentPage=Number(this.queryString.page)||1;
        const skip=itemsPerPage*(currentPage-1)
        this.query=this.query.limit(itemsPerPage).skip(skip)
        return this;
    }


}

export default Features;

