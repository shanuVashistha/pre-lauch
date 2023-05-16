export class CustomList {

    constructor ({ data, api, config }) {
        this.api = api;
        this.data = data;
        this.div = document.createElement('div');
    }

    static get toolbox () {
        return {
            title: 'CustomList',
            icon: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5007 7.98735C13.0007 10.4874 11.1157 12.8414 8.47071 13.3674C7.1807 13.6243 5.84252 13.4676 4.64672 12.9197C3.45091 12.3719 2.45843 11.4607 1.81061 10.3159C1.16278 9.17119 0.892631 7.85124 1.03862 6.54403C1.18461 5.23681 1.7393 4.00898 2.62371 3.03535C4.43771 1.03735 7.50071 0.48735 10.0007 1.48735" stroke="#44B480" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.00049 6.98633L7.50049 9.48633L13.5005 2.98633" stroke="#44B480" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>`
        };
    }

    render () {
        if (this.data && Array.isArray(this.data.items)) {
            this.data.items.forEach(item => {
                this.div.appendChild(this.createListItem(item));
            });
        } else {
            this.div.appendChild(this.createListItem(''));
        }

        this.div.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                const newListItem = this.createListItem('');
                this.div.appendChild(newListItem);
                const p = newListItem.querySelector('p');
                if (p) {
                    p.focus();
                }
            }
        });

        return this.div;
    }

    createListItem (content) {
        const listItem = document.createElement('div');
        listItem.className = "w-full flex items-center gap-[12px]";

        const img = document.createElement('img');
        img.src = "/images/check.svg";
        img.alt = "Check";
        img.className = "w-[13px] h-[13px]";

        const p = document.createElement('p');
        p.contentEditable = "true";
        p.innerHTML = content;
        p.className = "w-full font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570]";

        listItem.appendChild(img);
        listItem.appendChild(p);

        return listItem;
    }

    save (blockContent) {
        const pElements = blockContent.querySelectorAll('p');
        return {
            items: Array.from(pElements).map(p => p.innerHTML),
        };
    }
}
