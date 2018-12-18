/*
 * LineChart 折线图
 * @author: Micheal Wayne
 * @build time: 2018.08.16
 */

import { cloneObjDeep } from './utils/base'
import { retinaScale, setContext } from './utils/drawer'
import Draw from './charts/line.draw'

export default class LineChart {
    constructor (options = {}) {
        let {
            id
        } = options
        if (!id) throw new Error('Error!no container id in options.(FundChart)');
        this.$el = document.getElementById(id);
    
        this.opts = options;
    }


    /**
     * 适配手机
     */
    _retinaScale () {
        let canvas = this.canvas,
            ctx = this.ctx;

        retinaScale(canvas, ctx);
    }

    /**
     * 更新内容
     */
    update (options) {
        if (!options) return false;
        this.opts = cloneObjDeep(this.opts, options);

        this.drawer.draw(true);
    }

    /**
     * init
     */
    init () {
        setContext(this);
        this._retinaScale();

        this.drawer = new Draw(this);
        this.drawer.init();
    }
}