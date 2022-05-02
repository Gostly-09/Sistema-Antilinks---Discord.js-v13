client.on('messageCreate', async (message) => {
    
    if(!message.channel || !message.guild || message.author.bot) return;

    const db = require('megadb')
    let al = new db.crearDB('antilinks')

    let status = await al.obtener(message.guild.id)

    if(status === 'off') return;

    if(status === 'on'){
        
        if(message.content.includes('attachments')) return;
        if(message.content.toLowerCase().includes('https')){
            if(message.member.permissions.has("ADMINISTRATOR")) return;
            message.delete()
           message.channel.send(`Hey! ${message.author}, los links no estan permitidos!`)
    }
    }
})
