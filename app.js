(()=>{
    let scrollElement = document.querySelector('.plans-container--slider');
    scrollElement.scrollLeft = (scrollElement.scrollWidth - scrollElement.clientWidth ) / 2;
})();