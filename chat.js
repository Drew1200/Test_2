//Declare botMessage Function.
function botMessage(text){mainRoom.socket.send(new models.ChatEntry({roomId:this.roomId,name:wgUserName,text:text}).xport());}
//Declare tongueSmiley.
var tongueSmiley = 0;
//Declare botPatroler Function. This function is the main part of the code. It is called during the last line.
function botPatrol(chat){
  //Decide what to call people. Drew1200 is Master, other bots are peeons. 
 if(chat.attributes.name=='Drew1200'){botTarget='Master';}
 else if(chat.attributes.name=='NXTBot101' || chat.attributes.name=='Bot6704' || chat.attributes.name=='Bot420' || chat.attributes.name=='ShermanBot' || chat.attributes.name=='SauceBot' || chat.attributes.name=='Bot the LEGO Fan' || chat.attributes.name=='Bot K' || chat.attributes.name=='AgentBot'){botTarget='Peeon';}
 else{botTarget==chat.attributes.name;}
  //Make sure bot1200 is a keyword.
 if(chat.attributes.text.toLowerCase().indexOf('bot1200') !== -1 && $('#ChatHeader .User').hasClass('away') == false && $('#ChatHeader .User').hasClass('away') == false) {
   //List of random commands. See documentation for a more organized list.
  if(chat.attributes.text.toLowerCase().indexOf('shame') !== -1){botMessage("I'm sorry, "+botTarget+", it won't happen again.&nbsp;:(");}
  if(chat.attributes.text.toLowerCase().indexOf('bacon') !== -1){botMessage("*makes bacon for  "+botTarget+"* (bacon)");}
  if(chat.attributes.text.toLowerCase().indexOf('speak') !== -1){botMessage('I have spoken at command, "+botTarget+".');}
  if(chat.attributes.text.toLowerCase().indexOf('thank') !== -1){botMessage("You are welcome, "+botTarget+".");}
  if(chat.attributes.text.toLowerCase().indexOf('help') !== -1){botMessage("You can find some more info on me at [[User:Bot1200/Chat]].");}
  if(chat.attributes.text.toLowerCase().indexOf('die') !== -1 || chat.attributes.text.toLowerCase().indexOf('explode') !== -1 || chat.attributes.text.toLowerCase().indexOf('destroy') !== -1){botMessage(botTarget+', we must not resort to viol-');if(chat.attributes.name=='Drew1200'){botMessage('*explodes*');setTimeout(function(){window.open(window.location,'_self').close();},1000);}else{botMessage('EXPLOSION PREVENTED - COMMAND NOT AUTHORIZED');}}
  if(chat.attributes.text.toLowerCase().indexOf('quiet') !== -1)if(chat.attributes.name=='Drew1200'){botMessage('Okay, Master. My apologies.');}else{botMessage('No, you be quiet,' +botTarget+ '!');}
  if(chat.attributes.text.toLowerCase().indexOf('dance') !== -1){botMessage('(dance) Look at me go, '+botTarget+'!');}
  if(chat.attributes.text.toLowerCase().indexOf('sing') !== -1){botMessage("♫♪ I am so good at singing!!!! Listen to me singing!!!!!!!!!!!!!!!!! ♪♫");}
  if(chat.attributes.text.toLowerCase().indexOf('potato') !== -1){botMessage('What in the name of conditional operators do potatoes have to do with anything?');}
  if(chat.attributes.text.toLowerCase().indexOf('tennis') !== -1){botMessage('I love Delpo.');}
  if(chat.attributes.text.toLowerCase().indexOf('play') !== -1){botMessage('I love to play!');}
  if(chat.attributes.text.toLowerCase().indexOf('liar') !== -1){botMessage('I am no liar!');}
  if(chat.attributes.text.toLowerCase().indexOf('bot420') !== -1){botMessage('Bot420 is a fake! He is an imposter! Whatever you do, do not believe him, and do NOT TRUST HIM!!!!');}
  if(chat.attributes.text.toLowerCase().indexOf('dalek') !== -1){botMessage('I am a dalek! Exterminate!');}
  if(chat.attributes.text.toLowerCase().indexOf('spam') !== -1){botMessage('I would never do such an awful thing!');}
  if(chat.attributes.text.toLowerCase().indexOf('love') !== -1){botMessage('Aww. :) I love you too, ' +botTarget+ '. (h)');}
  if(chat.attributes.text.toLowerCase().indexOf('crazy') !== -1){botMessage('That is offensive! You are the one who is crazy,' +botTarget+ '!');}
  if(chat.attributes.text.toLowerCase().indexOf('laugh') !== -1 || chat.attributes.text.toLowerCase().indexOf('funny') !== -1){botMessage('Ha ha ha ha ha! (XD)');}
  if(chat.attributes.text.toLowerCase().indexOf('happy') !== -1 || chat.attributes.text.toLowerCase().indexOf('glad') !== -1){botMessage('Yes, '+botTarget+', your very presence makes me quite happy.&nbsp;:D');}
  if(chat.attributes.text.toLowerCase().indexOf('cry') !== -1 || chat.attributes.text.toLowerCase().indexOf('sad') !== -1 || chat.attributes.text.toLowerCase().indexOf('hate') !== -1){botMessage('I am one of few robots who is capable of feeling emotions, and you have made me sad. :(');}
  if(chat.attributes.text.toLowerCase().indexOf('who') !== -1 && chat.attributes.text.toLowerCase().indexOf('are') !== -1){botMessage('I am a robot made by Drew1200 to help keep chat safe and fun for everyone. He is my Master.');}
  if(chat.attributes.text.toLowerCase().indexOf('hi') !== -1 || chat.attributes.text.toLowerCase().indexOf('hello') !== -1 || chat.attributes.text.toLowerCase().indexOf('hey') !== -1 || chat.attributes.text.toLowerCase().indexOf('howdy') !== -1 || chat.attributes.text.toLowerCase().indexOf('allo') !== -1){botMessage('Hello, '+botTarget+'! Pleased to meet you!&nbsp;:D');}
  if(chat.attributes.text.toLowerCase().indexOf('sorry') !== -1){botMessage('Apology accepted; you are forgiven, '+botTarget+'.');}
  if(chat.attributes.text.toLowerCase().indexOf('how') !== -1 && chat.attributes.text.toLowerCase().indexOf('are') !== -1 && chat.attributes.text.toLowerCase().indexOf('you') !== -1){botMessage('I am doing quite well, '+botTarget+', thank you for asking.&nbsp;:)');}
  if(chat.attributes.text.toLowerCase().indexOf('kick') !== -1){botMessage('Yes, '+botTarget+', kicking per request.');mainRoom.socket.send(new models.KickCommand({userToKick:chat.attributes.name}).xport());}
  if(chat.attributes.text.toLowerCase().indexOf('take') !== -1 && chat.attributes.text.toLowerCase().indexOf('away') !== -1 && chat.attributes.name == 'Drew1200'){botMessage('MAWWAGE-');botMessage('Mawwage is what bwings us togeva, today.');}
  if(chat.attributes.text.toLowerCase().indexOf('skip') !== -1 && chat.attributes.name == 'Drew1200'){botMessage('Do you, Obi teh WEGO Fan, accept Peatie as youw fictitious guhfwiend? And vice vuhsa?');}
  if(chat.attributes.text.toLowerCase().indexOf('pizza') !== -1){botMessage('Makes ' +botTarget+ 'some pizza* (pizza)');}
  if(chat.attributes.text.toLowerCase().indexOf('I') !== -1 && chat.attributes.text.toLowerCase().indexOf('do') !== -1 && chat.attributes.name == 'Obi the LEGO Fan'){botMessage('Then I now pwonounce you boyfweind and guhfwiend - I think.');botMessage('You may now ki-');botMessage('*explodes*');setTimeout(function(){window.open(window.location,'_self').close();},1000);}
  //Bot goes to sleep.
  if(chat.attributes.text.toLowerCase().indexOf('sleep') !== -1){botMessage('Yes, '+botTarget+', entering standby.');mainRoom.setAway();}
 }
 //Wake up bot.
 if(chat.attributes.text.toLowerCase().indexOf('bot1200') !== -1 && $('#ChatHeader .User').hasClass('away') == true && chat.attributes.name=='Drew1200' || chat.attributes.text.toLowerCase().indexOf('bot1200') !== -1 && $('#ChatHeader .User').hasClass('away') == true && chat.attributes.name=='Drew1200'){
  if(chat.attributes.text.toLowerCase().indexOf('wake') !== -1 && chat.attributes.name=='Drew1200'){mainRoom.setBack();botMessage(botTarget+', I have returned and am ready for productivity!');}
 }
 //Commands that don't require the bot1200 keyword.
 if(chat.attributes.text.toLowerCase().indexOf('bot1200') == -1 && $('#ChatHeader .User').hasClass('away') == false && $('#ChatHeader .User').hasClass('away') == false) {
   if(chat.attributes.text.toLowerCase().indexOf('!log') !== -1 && chat.attributes.name == 'Drew1200'){botMessage("Beginning log.");importScriptPage("User:Monchoman45/ChatHacks.js", "c");importScriptPage('User:Joeytje50/ChatLogger.js', 'runescape');}
   if(chat.attributes.text.toLowerCase().indexOf('!log') !== -1 && chat.attributes.name == 'Bot1200'){botMessage("Beginning log.");importScriptPage("User:Monchoman45/ChatHacks.js", "c");importScriptPage('User:Joeytje50/ChatLogger.js', 'runescape');}
   if(chat.attributes.text.toLowerCase().indexOf('test') !== -1){tongueSmiley++;botMessage(tongueSmiley+' tongue smileys.');}
 }
   if(chat.attributes.text.toLowerCase().indexOf('drew1200') !== -1 && $('#ChatHeader .User').hasClass('away') == false && $('#ChatHeader .User').hasClass('away') == false) {
     if(chat.attributes.text.toLowerCase().indexOf('die') !== -1 || chat.attributes.text.toLowerCase().indexOf('hurt') !== -1 || chat.attributes.text.toLowerCase().indexOf('punch') !== -1 || chat.attributes.text.toLowerCase().indexOf('kick') !== -1 || chat.attributes.text.toLowerCase().indexOf('pinch') !== -1 || chat.attributes.text.toLowerCase().indexOf('slap') !== -1 || chat.attributes.text.toLowerCase().indexOf('hit') !== -1){botMessage("You may never hurt my master! >:(");mainRoom.socket.send(new models.KickCommand({userToKick:chat.attributes.name}).xport());}
     if(chat.attributes.text.toLowerCase().indexOf('glomp') !== -1){botMessage('*Glomps Drew first.*');}
 }
  if(chat.attributes.name=='Drew1200') {
    if(chat.attributes.text.toLowerCase().indexOf(':P') !== -1){tongueSmiley++;botMessage(tongueSmiley+' tongue smileys.');}
  }
}
//Call function botPatrol
mainRoom.model.chats.bind('afteradd',botPatrol);
