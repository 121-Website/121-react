import { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function useLocoScroll(start) {


    useEffect(() => {

        if (!start) return;
        const scrollEl = document.querySelector('#main-container');
        const locoScroll = new locomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 3,
            class: 'is-reveal'
        });

        setTimeout(() => { locoScroll.update(); }, 5000);

    }, [start]);





}