
function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

export function stickyHeader() {

        console.log('im sticky')
        const header = document.getElementById('siteHeader');
        const main = document.querySelector('main');
        
        let headerDimensions = header.offsetHeight - header.offsetHeight;
        let lastScrollTop = 0;

        function adjustMainContentLocation() {
            main.style.paddingTop = header.offsetHeight.toString() + 'px';
        }


        // run on page load
        adjustMainContentLocation();

       

        function stickyDisplayHandler() {
            var currentPos = window.pageYOffset || document.documentElement.scrollTop;

            headerDimensions = header.offsetHeight;

            // handle header sticky
            if (currentPos === 0) {
                if (main.classList.contains('locked')) {
                    header.classList.add('sticky-show');
                    header.style.top = '0px';
                    header.classList.remove('sticky-top');
                }
            }
            // set current position to lastScrollTop
            lastScrollTop = currentPos;
        }

        window.addEventListener('resize', () =>
            window.requestAnimationFrame(() => {
                stickyDisplayHandler();
               
                adjustMainContentLocation();

            })
        );

        window.addEventListener('scroll', () =>
            window.requestAnimationFrame(() => {
                stickyDisplayHandler();
            })
        );
   
}