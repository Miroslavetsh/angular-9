import {Component, Input, OnInit} from '@angular/core'
import { Card } from '../app.component'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    title = 'Card Component'
    text:string = 'My sample text'
    textColor:string

    @Input() card: Card

    // number = 42
    // arr = [1, 1, 3, 5, 8, 13]
    // obj = {
    //     name: 'Myroslav',
    //     info: {
    //         age: 18,
    //         job: 'Frontend',
    //     }
    // }

    // imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    // disabled = false

    ngOnInit() {
        // setTimeout(() => {
        //     this.imgUrl = 'data:image/png;base64,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'
        //     this.disabled = !this.disabled
        // }, 3000)
    }

    changeTitle() {
        this.title = 'Successfully Changed'
    }

    inputHandler(value) {
        this.title = value
    }

    // changeHandler() {
    //     console.log(this.title);
    // }

    // getInfo() {
    //     return 'This is my info'
    // }
}