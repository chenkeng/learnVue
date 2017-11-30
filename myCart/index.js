var app=new Vue({
    el:"#app",
    data:{
        list:[
            {
                id:1,
                name:"iphone8",
                price:"9888",
                count:2
            },
            {
                id:1,
                name:"ipad pro",
                price:"4688",
                count:3
            },
            {
                id:1,
                name:"mac pro",
                price:"10888",
                count:1
            }
        ]
    },
    computed:{
        totalPrice:function(){
            var total=0;
            for (var i = 0; i < this.list.length; i++) {
            var item= this.list[i]
            total+=item.price*item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods:{
        handleReduce:function(index){
            if(this.list[index].count===1) return;
            this.list[index].count--;
        },
        handleAdd:function(index){
            this.list[index].count++;
        },
        handleRemove:function(index){
            this.list.splice(index,1);
        }
    }
})
