const levelClassNames = {
    1: 'max-w-[1242px] p-[12px] font-semibold xl:text-[35px] md:text-[30px] sm:text-[22px] text-[16px] sm:leading-[52px] leading-[24px] tracking-[1.42px] text-center text-[#313131]',
    2: 'max-w-[1242px] p-[12px] font-semibold xl:text-[30px] md:text-[25px] sm:text-[20px] text-[16px] sm:leading-[44px] leading-[24px] tracking-[1.42px] text-center text-[#313131]',
    3: 'max-w-[1242px] p-[12px] font-semibold xl:text-[24px] md:text-[22px] sm:text-[19px] text-[16px] sm:leading-[38px] leading-[24px] tracking-[1.42px] text-center text-[#313131]',
    4: 'max-w-[1242px] p-[12px] font-semibold xl:text-[23px] md:text-[20px] sm:text-[18px] text-[15px] sm:leading-[35px] leading-[24px] tracking-[1.42px] text-center text-[#313131]',
    5: 'max-w-[1242px] p-[12px] font-semibold xl:text-[21px] md:text-[19px] sm:text-[17px] text-[15px] sm:leading-[32px] leading-[24px] tracking-[1.42px] text-center text-[#313131]',
    6: 'max-w-[1242px] p-[12px] font-semibold xl:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] sm:leading-[22px] leading-[24px] tracking-[1.42px] text-center text-[#313131]',
};

export class CustomHeader {
    constructor ({ data, api, config }) {
        this.api = api;
        this.data = {
            text: data.text || '',
            level: data.level || config.defaultLevel,
        };

        this.CSS = {
            baseClass: this.api.styles.block,
            input: this.api.styles.input,
            settingsButton: this.api.styles.settingsButton,
            settingsButtonActive: this.api.styles.settingsButtonActive,
        };

        this.settings = [
            {
                level: 1,
                default: this.data.level === 1,
            },
            {
                level: 2,
                default: this.data.level === 2,
            },
            {
                level: 3,
                default: this.data.level === 3,
            },
            {
                level: 4,
                default: this.data.level === 4,
            },
            {
                level: 5,
                default: this.data.level === 5,
            },
            {
                level: 6,
                default: this.data.level === 6,
            }
        ];

        this.wrapper = undefined;
    }

    static get toolbox () {
        return {
            title: 'CustomHeader'
        };
    }

    render () {
        this.wrapper = document.createElement('div');
        const input = document.createElement('input');

        const level = this.data.level;
        const levelClassName = levelClassNames[level] || '';

        input.classList.add(this.CSS.input);
        if (levelClassName)
            input.classList.add(...levelClassName.split(' ')); // Add custom class
        input.contentEditable = true;
        input.dataset.placeholder = 'Enter a heading';
        input.innerHTML = this.data.text || '';

        this.wrapper.appendChild(input);

        return this.wrapper;
    }

    save (blockContent) {
        const levelClassName = levelClassNames[this.data.level] || '';
        const input = blockContent.querySelector(`input.${levelClassName.replace(/\s/g, '.')}`);
        this.data.text = input.innerHTML;
        this.data.level = this.data.level;

        return this.data;
    }

    _toggleTune (tune) {
        const oldTuneValue = this.data.level;
        const newTuneValue = oldTuneValue === tune ? undefined : tune;
        this.data.level = newTuneValue;

        const oldLevelClassName = levelClassNames[oldTuneValue] || '';
        const newLevelClassName = levelClassNames[newTuneValue] || '';

        const input = this.wrapper.querySelector(`input.${oldLevelClassName.replace(/\s/g, '.')}`);
        input.classList.remove(...oldLevelClassName.split(' '));

        if (newLevelClassName) {
            input.classList.add(...newLevelClassName.split(' '));
        }

        this.settings.forEach(tune => {
            const tuneButton = this.wrapper.querySelector(`.cdx-settings-button[data-tune=${tune.level}]`);
            tuneButton.classList.toggle(this.CSS.settingsButtonActive, tune.level === newTuneValue);
        });
    }

}

