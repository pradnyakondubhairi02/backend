const yargs=require('yargs');


yargs.command({
    command:'Add',
    describe:'adding here ',
    builder:{
        title:{
            describe:'note title',
            demandOption=true,
            type:'string'
        },
        body:{
            describe:'body',
            demandOption=true,
            type:'string'
        }
    },
    handler:function(){
        console.log('adding handler')
    }
})

console.log(yargs.argv);