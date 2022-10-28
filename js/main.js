menu.onclick=function(){var a=document.getElementById("menu-responsive");"navbar-nav"===a.className?a.className+=" responsive":a.className="navbar-nav"};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibWVudSIsIm9uY2xpY2siLCJ4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUFBLEtBQUtDLFFBQVUsV0FDYixJQUFJQyxFQUFJQyxTQUFTQyxlQUFlLG1CQUVaLGVBQWhCRixFQUFFRyxVQUNKSCxFQUFFRyxXQUFhLGNBRWZILEVBQUVHLFVBQVkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1lbnUub25jbGljayA9IGZ1bmN0aW9uIG1lbnVSZXNwb25zaXZlKCkge1xyXG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtcmVzcG9uc2l2ZScpXHJcblxyXG4gIGlmICh4LmNsYXNzTmFtZSA9PT0gXCJuYXZiYXItbmF2XCIpIHtcclxuICAgIHguY2xhc3NOYW1lICs9IFwiIHJlc3BvbnNpdmVcIlxyXG4gIH0gZWxzZSB7XHJcbiAgICB4LmNsYXNzTmFtZSA9ICduYXZiYXItbmF2J1xyXG4gIH1cclxufVxyXG5cclxuIl19

const scrollTo = () => {
document.body.addEventListener('click', (e) => {
    if (e.target.closest('a[href^="#"]')) {
        e.preventDefault();
        const target = e.target.closest('a[href^="#"]').getAttribute('href');
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
};

scrollTo();