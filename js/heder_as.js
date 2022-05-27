let header = `<header class="max-width">
<div class="_icon-logo logo__main"></div>
<div class="raight">
    <div class="_icon-search"></div>
    <input type="text" placeholder="Найти..."></input>
    <div class="_icon-like"></div>
    <div class="_icon-cart_head">
        <div class="boot">
            <div class="_icon-cart_wheel"></div>
            <div class="_icon-cart_wheel"></div>
        </div>
    </div>
    <div class="_icon-user"></div>
</div>
</header>

<aside class="max-width pc-element__890 flex">
<ul>
    <li class="active">Домой</li>
    <li>Магазин</li>
    <li>Коллекции</li>
    <li>Коллаборации</li>
    <li>о нас</li>
</ul>
</aside>`
let newDoc = new DOMParser().parseFromString(header, "text/html").body.children
let all__prodaction = document.querySelector('.all__prodaction')
all__prodaction.prepend(newDoc[0])
all__prodaction.append(newDoc[0])