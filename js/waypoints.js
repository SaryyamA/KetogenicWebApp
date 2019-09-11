// var $Char = $('.char');
// var waypoint = $Char.waypoint({
//   console.log("down")
// }, {
// })


var waypoint1 = new Waypoint
({
    element: document.getElementById('section-1'),
    handler: function(direction) 
    {
        if (direction == 'down')
        {  
            $('.char img').removeAttr('src').fadeOut();
            $('.char img').attr('src', './images/Outfit-Character/3B.png').fadeIn();
            console.log("down1")
        } 
        else if (direction == 'up')
        {     
            $('.char img').removeAttr('src').fadeOut();
            $('.char img').attr('src', './images/Outfit-Character/4B.png').fadeIn();
            console.log("up1")
        }
    },
})

var waypoint2 = new Waypoint
({
element: document.getElementById('section-2'),
handler: function(direction) 
{
    if (direction == 'down')
    {  
        $('.char img').removeAttr('src').fadeOut();
        $('.char img').attr('src', './images/Outfit-Character/2B.png').fadeIn();
        console.log("down2")
    } 
    else if (direction == 'up')
    {     
        $('.char img').removeAttr('src').fadeOut();
        $('.char img').attr('src', './images/Outfit-Character/3B.png').fadeIn();
        console.log("up2")
    }
},
})

