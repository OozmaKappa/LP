import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    template: '<div><app-left-right [content]="content"></app-left-right></div>'
})
export class AboutComponent {
    content = [{
        title: 'ABOUT ME',
        imageUrl: 'assets/about1.jpg',
        // description: `“When people look at my pictures I want them to feel the way they do when
        // they want to read a line of a poem twice.”
        // Robert Frank`,
        description: `Hallo,<br><br>
schön, dass DU hier bist!<br>
Ich bin Katrin und die Fotografie ist meine große Leidenschaft! Sie ist für mich eine Hommage an das Leben, die Liebe, das Lachen...<br>
Gefühlvoll und mit Liebe zum Detail, erzähle ich mit meinen Bildern visuelle Geschichten von der Liebe zweier Menschen, von freudiger
Erwartung auf neues Leben, vom Zauber der ersten Tage, von strahlenden Kinderaugen, vom bunten Miteinander einer Familie...
So bleiben diese besonderen Momente für immer lebendig.
Lass dich von meinen Bildern inspirieren, vielleicht wird die nächste Geschichte deine ganz persönliche!<br><br>
Schreib mir gerne eine E-Mail, ich freue mich auf dich!<br><br>
Katrin`,
        navigate: 1
    }, {
        title: 'MORE ABOUT ME',
        imageUrl: 'assets/about2.jpg',
        description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum`
    }]
    constructor() {
    }
};
