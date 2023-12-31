const { userMention, memberNicknameMention, channelMention, roleMention  } = require("@discordjs/builders");
module.exports = {
    name: 'heart',
    aliases: [],
    permissions: [],
    description: "embeds",
    async execute(client, message,cmd,args,Discord){

        
        
        
        
        if (message.channel.id === "852360137528049684" || message.channel.id === "1055380066315546704"){
        const newEmbed = new Discord.MessageEmbed();
        

        
        const DM = await message.member.send('Who would you like this heartfelt letter to be sent from? [e.g: Hu tao, Rosaria, <name of irl/discord sender>]');
        
        const filter = m => m.author.id === message.author.id;
        
        
        const collector = DM.channel.createMessageCollector({ filter, max: 1, time: 20000});
        
        
        var s;
        let contents;
        let to;
        
        
        
          
        collector.on('collect', m => {
            s = m.content;
            
        });
        
        collector.on('end', collected => {
        
            if (collected.size === 0) {
                    DM.channel.send(`You did not respond in time. Please run the command again to restart. Sorry`)
                return
            }
            else {
                if(s.length > 2000){
                    
                    dm.channel.send("The message you sent was too long.  It must be under 2000 characters. Please run the command again");
                    return;
                }
                    
                    to = s;
                    if (to.toLowerCase() == 'hutao' || to.toLowerCase() == 'hu tao' || to.toLowerCase() == 'rosaria'){
                        messageContents(to, DM, message, newEmbed, client);
                        return;
                       
                        
                    } else {
                        customMessageContents(to, DM, message, newEmbed,client);
                        return;
                    }
                    

                   
                    
            }
            
            
            

            
            
        });
    } else {
        message.reply(`Please only use that command in the following channels: ${channelMention("852360137528049684")}, ${channelMention("1055380066315546704")}`)
    }
        
    

        
        
        
        
        

        
    }

    
}

async function messageContents(to, dm, id, embed, c){
    var colorArray = ['#4d2020', '#5f2424', '#722828', '#862c2c', '#992f30', '#ad3333'];
    var color = colorArray[Math.floor(Math.random()*colorArray.length)];
    const filter = m => m.author.id === id.author.id;
    const collector2 = dm.channel.createMessageCollector({ filter, max: 1, time: 120000});
    let f;
        if (to.toLowerCase() == 'hutao' || to.toLowerCase() == 'hu tao'){
            dm.channel.send('What would you like Hu Tao to send to her Grandpa?');
                collector2.on('collect', m2 => {
                    f = m2.content;
                });
                collector2.on('end', collected => {
                    if (collected.size === 0) {
                        dm.channel.send(`You did not respond in time. Please run the command again to restart. Sorry`)
                    return
                }
                else {
                    if(f.length > 2000){
                        
                        dm.channel.send("The message you sent was too long.  It must be under 2000 characters. Please run the command again");
                        return;
                    }
                    
                    
                    
                    
                    buildEmbed(id, 'Hu Tao', 'Grandpa', embed, color, f, dm, c);
                    
                    
            }

                });
        } else if (to.toLowerCase() == 'rosaria'){
            dm.channel.send('What would you like Rosaria to send to her Family?');
                collector2.on('collect', m2 => {
                    f = m2.content;
                });
                collector2.on('end', collected => {
                    if (collected.size === 0) {
                        dm.channel.send(`You did not respond in time. Please run the command again to restart. Sorry`)
                    return
                }
                else {
                    if(f.length > 2000){
                        
                        dm.channel.send("The message you sent was too long.  It must be under 2000 characters. Please run the command again");
                        return;
                    }
                    
                    
                    
                    
                    buildEmbed(id, 'Rosaria', 'My Family', embed, color, f, dm, c);
                    
                    
            }

                });
        }
        
    
}
async function validation(id,embed, dm, c){
    const filter = m => m.author.id === id.author.id && (m.content.toLowerCase() === 'yes' || m.content.toLowerCase() === 'no');
    const collector2 = dm.channel.createMessageCollector({ filter, max: 1, time: 60000});
    let f;
    dm.channel.send(`Is the following embed correct? [Yes/No]  Keep in mind the color is random.`);
    dm.channel.send({ embeds: [embed] });
    collector2.on('collect', m2 => {
        f = m2.content;
        
    });
    collector2.on('end', collected => {
        if (collected.size === 0) {
            dm.channel.send(`You did not respond in time. Please run the command again to restart. Sorry`)
        return
    }
    if (f.toLowerCase() == 'yes'){
        dm.channel.send("The embed will now be sent to the correct channels");
        c.channels.cache.get("1163869077148807231").send({ embeds: [embed] }); //HTC heartfelt message channel
        c.channels.cache.get("1164748966353707100").send({ embeds: [embed] }); //Rosaria mains channel
    } else if (f.toLowerCase() == 'no'){
        dm.channel.send("Your message won't be sent.  you will need to run the command again to restart");

    }

    });

}

async function buildEmbed(id, from, to, embed, color, contents, dm, c){
    if(contents.length > 2000){
        
        dm.channel.send("The message you sent was too long.  It must be under 2000 characters. Please run the command again");
        return;
    }
     
    embed.setColor(color)
    embed.setAuthor(id.author.username)
    embed.setThumbnail(id.author.avatarURL())
    embed.setTitle(`          ✾   A Heartfelt Message   ✾          `)
    embed.setDescription(`✎ ⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢

                            ╭ ﹒**From:** ${from}
                            ╰ ﹒**To:** ${to}
                            
                            > ${contents}`)

    validation(id, embed, dm, c);

}

async function customMessageContents(to, dm, id, embed, c){
    var colorArray = ['#4d2020', '#5f2424', '#722828', '#862c2c', '#992f30', '#ad3333'];
    var color = colorArray[Math.floor(Math.random()*colorArray.length)];
    const filter = m => m.author.id === id.author.id;
    const collector2 = dm.channel.createMessageCollector({ filter, max: 1, time: 60000});
    let f;
        
            dm.channel.send(`${to}, who are you sending this heartfelt message to? [e.g: Mother, Father, <name of irl/discord receiver>]`);
                collector2.on('collect', m2 => {
                    f = m2.content;
                    
                });
                collector2.on('end', collected => {
                    if (collected.size === 0) {
                        dm.channel.send(`You did not respond in time. Please run the command again to restart. Sorry`)
                    return
                }
                else {
                    if(f.length > 2000){
                        
                        dm.channel.send("The message you sent was too long.  It must be under 2000 characters. Please run the command again");
                        return;
                    }
                    customFrom(f, dm, id, embed, color, to, c);
                    
                    
                    
                    
                    
            }

                });
        
        
    
}

async function customFrom(to, dm, id, embed, color, from, c){
    const filter = m => m.author.id === id.author.id;
    const collector2 = dm.channel.createMessageCollector({ filter, max: 1, time: 120000});
    let f;
    let m = `What would ${from} like to send to ${to}? `;

    if(m.length > 2000){
        
        dm.channel.send("The message you sent was too long.  It must be under 2000 characters. Please run the command again");
        return;
    }
        
            dm.channel.send(m);
                collector2.on('collect', m2 => {
                    f = m2.content;
                    
                });
                collector2.on('end', collected => {
                    if (collected.size === 0) {
                        dm.channel.send(`You did not respond in time. Please run the command again to restart. Sorry`)
                    return
                }
                else {
                    if(f.length > 2000){
                        
                        dm.channel.send("The message you sent was too long.  It must be under 2000 characters. Please run the command again");
                        return;
                    }
                    buildEmbed(id, from, to, embed, color, f, dm, c);
                    
                    
                    
                    
                    
            }

                });
        
        
    
}
