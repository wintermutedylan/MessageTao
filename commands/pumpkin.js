const { userMention, memberNicknameMention, channelMention, roleMention  } = require("@discordjs/builders");
module.exports = {
    name: 'pumpkin',
    aliases: [],
    permissions: [],
    description: "embeds",
    async execute(client, message,cmd,args,Discord){

        

        
        const DM = await message.member.send('Please submit a image of your pumpkin/pumpkin design');
        
        const filter = m => m.author.id === message.author.id;
        
        
        const collector = DM.channel.createMessageCollector({ filter, max: 1, time: 20000});
        
        
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
                if (s.attachments.first().attachment != 'image/jpeg' && s.attachments.first().attachment != 'image/png'){
                    DM.channel.send("please run the command again and send an image.");
                }
                
                
                const newEmbed = new Discord.MessageEmbed()
                .setColor(color)
                .setTitle(`${message.author.username}'s Pumpkin Design`)
                .setImage(s.attachments.first().attachment)
                    
                message.channel.send({ embeds: [newEmbed] });
                
                    

                   
                    
            }
            
            
            

            
            
        });
        
    

        
        
        
        
        

        
    }

    
}