const { userMention, memberNicknameMention, channelMention, roleMention  } = require("@discordjs/builders");
module.exports = {
    name: 'pumpkin',
    aliases: [],
    permissions: [],
    description: "embeds",
    async execute(client, message,cmd,args,Discord){

        

        if (message.channel.id === "852360137528049684" || message.channel.id === "1055380066315546704"){
        const DM = await message.member.send('Please submit a image of your pumpkin/pumpkin design. [File type can be JPEG, PNG, JPG]');
        
        const filter = m => m.author.id === message.author.id;
        
        
        const collector = DM.channel.createMessageCollector({ filter, max: 1, time: 60000});
        
        
        var s;
        let contents;
        let to;
        
        
        
          
        collector.on('collect', m => {
            s = m;
            
            
        });
        
        collector.on('end', collected => {
        
            if (collected.size === 0) {
                    DM.channel.send(`You did not respond in time. Please run the command again to restart. Sorry`)
                return
            }
            else {
                var colorArray = ['#4d2020', '#5f2424', '#722828', '#862c2c', '#992f30', '#ad3333'];
                var color = colorArray[Math.floor(Math.random()*colorArray.length)];
                
                if (s.attachments.first().contentType != 'image/jpeg' && s.attachments.first().contentType != 'image/png' && s.attachments.first().contentType != 'image/jpg' && s.attachments.first().contentType != 'image/webp'){
                    DM.channel.send("please run the command again and send an image.");
                    return;
                }
                
                
                const newEmbed = new Discord.MessageEmbed()
                .setColor(color)
                .setTitle(`${message.author.username}'s Pumpkin Design`)
                .setImage(s.attachments.first().attachment)
                
                    
                DM.channel.send(`Thank you for your submission. Please check the following channel to see yours and others submissions. ${channelMention("1163870435553841212")}`);
                client.channels.cache.get("1163870435553841212").send({ embeds: [newEmbed] }); //HTC pumpkin channel 
                client.channels.cache.get("1164749338883412038").send({ embeds: [newEmbed] }); //Rosaria mains pumpkin channel
                    

                   
                    
            }
            
            
            

            
            
        });
    } else {
        message.reply(`Please only roll in the following channels: ${channelMention("852360137528049684")}, ${channelMention("1055380066315546704")}`)
    }
        
    

        
        
        
        
        

        
    }

    
}