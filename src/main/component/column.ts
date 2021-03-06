import {
    bindable,
    customElement,
    containerless
} from 'aurelia-framework';
import {dom} from "aire/core/dom";

@containerless
@customElement('aire-column')
export class AireColumn {

    /**
     * The width of the column -- only the first will be applied
     */
    public static width : string[] = [
        'shrink',
        'expand'
    ]; //TODO allow width setting with .uk-width-*

    /**
     * The appearance of the column text -- multiple can be applied
     */
    public static modifiers : string[] = [
        'link',
        'middle'
    ];

    /**
     * The treatment of the column text -- multiple can be applied
     */
    public static textModifiers : string[] = [
        'truncate',
        'nowrap',
    ];

    /** Header text */
    @bindable
    text : string;

    header : HTMLTableHeaderCellElement;

    constructor(private el : Element) {

    }

    bind() {
        let el = this.el,
            header = this.header;

        dom.extractModifiers(AireColumn.width, 'uk-table', el, header, true);
        dom.extractModifiers(AireColumn.modifiers, 'uk-table', el, header);
        dom.extractModifiers(AireColumn.textModifiers, 'uk-text', el, header);
    }

}