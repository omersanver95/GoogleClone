const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('keydown', function(event){
    if(event.code === "Enter"){
        search()
    }
})

function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&sxsrf=ALiCzsYVv55B_1_9tveMoIlFl440va73vA%3A1661697969859&source=hp&ei=sX8LY6LmMOOBxc8Pgtar2AE&iflsig=AJiK0e8AAAAAYwuNwS5oTG7C3N7iJETF2i2BBBa5GjP2&ved=0ahUKEwjigtup4-n5AhXjQPEDHQLrChsQ4dUDCAc&uact=5&oq=" + input +"&gs_lcp=Cgdnd3Mtd2l6EAMyCgguELEDENQCEEMyCAguEIAEELEDMgsIABCABBCxAxCDATIKCAAQsQMQgwEQQzIKCC4QxwEQ0QMQQzILCAAQgAQQsQMQgwEyCAguEIAEELEDMggIABCABBCxAzIOCC4QgAQQsQMQxwEQrwEyCAgAELEDEIMBOgcIIxDqAhAnOgQIIxAnOg4ILhCABBCxAxCDARDUAjoFCAAQgAQ6BggjECcQEzoECAAQQzoHCC4Q1AIQQzoOCC4QgAQQsQMQxwEQ0QM6CwguEIAEELEDEIMBOhEILhCABBCxAxCDARDHARDRA1DXAlihB2DiCGgBcAB4AIABvAGIAfQGkgEDMC41mAEAoAEBsAEKuAED&sclient=gws-wiz";
}