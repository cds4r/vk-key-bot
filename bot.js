const VK = require('vk-node-sdk')
const fs = require('fs')
const Group = new VK.Group('7bd279cc318843b09dbaef0e7207bc7a193986cb5b9c9f7ed186c80ea6e705af90e5c1572cd38014a0730')

Group.onMessage((message, user_id) => {
  message.setTyping()
  switch(message.body) {
    case 'Бот, дай ключ!':
		  fs.readFile('keys.txt', 'utf8', function(err, data) {
		    if (err) throw err;
		    if (!data) {
		      return message.addText('К сожалению, ключи закончились.\nЗаходите позже :)').send();
		    }
		  });
	    const getLastLine = require('./fileTools.js').getLastLine
		const fileName = 'keys.txt'
		const minLineLength = 1
		getLastLine(fileName, 1)
		    .then((lastLine)=> {
		        message.addText(lastLine).send()
		        users[user_id] = {used: 1}
				var fs = require('fs');
				var filename = 'keys.txt';
				fs.readFile(filename, function(err, data) {
				    if(err) throw err;
				    theFile = data.toString().split("\n");
				    theFile.splice(-1,1);
				    fs.writeFile(filename, theFile.join("\n"), function(err) {
				    if(err) {
				        return console.log(err);
				    }
				    });
				});
		    })
		    .catch((err)=> {
		        console.error(err)
		    })
  }
})