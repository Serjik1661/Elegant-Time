class Clock {
    constructor({template}){
        this.template = template;
        this.timeElement = document.getElementById('time');
        this.dateElement = document.getElementById('date');
    }

    render(){
        const date = new Date();

        const hours = date.getHours().toString().padStart(2, '0');
        const mins = date.getMinutes().toString().padStart(2, '0');
        const secs = date.getSeconds().toString().padStart(2, '0');

        const timeOutput = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        this.timeElement.textContent = timeOutput;

        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        this.dateElement.textContent = date.toLocaleDateString('ru-RU', options);
    }

    stop(){
        clearInterval(this.timer);
    }

    start(){
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

const clock = new Clock ({ template: 'h:m:s'});
clock.start();
