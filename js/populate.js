var div = document.getElementsByClassName('posts')[0],
p = div.getElementsByTagName('p'),
data = {
"items": [
     {
       "author": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisi imperdiet, posuere mi quis, dignissim lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisi imperdiet, posuere mi quis, dignissim lectus. Nulla vitae nisi imperdiet, posuere mi quis, dignissim lectus"
     },
     {
       "author": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisi imperdiet, posuere mi quis, dignissim lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisi imperdiet, posuere mi quis, dignissim lectus. Nulla vitae nisi imperdiet, posuere mi quis, dignissim lectus"
     },
     {
       "author": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisi imperdiet, posuere mi quis, dignissim lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisi imperdiet, posuere mi quis, dignissim lectus. Nulla vitae nisi imperdiet, posuere mi quis, dignissim lectus"
     },
     {
       "author": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisi imperdiet, posuere mi quis, dignissim lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisi imperdiet, posuere mi quis, dignissim lectus. Nulla vitae nisi imperdiet, posuere mi quis, dignissim lectus"
     }
  ]
};

data.items.forEach(function(v, i) {
p[i].innerHTML =  v.author;
});
