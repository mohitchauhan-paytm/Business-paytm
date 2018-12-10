
import React, { Component } from 'react';
export default class LazyImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            error: false
        };
        this.init();
    }

    componentDidMount() {
        const img = new Image();
        img.onload = () => {
            this.setState({
                loaded: true
            });
        };
        img.onerror = () => {
            this.setState({
                error: true
            });
        };

        img.src = this.src;
    }
    init(){
        this.deviceType = this.deviceDetector();
        const {dataMobileSrc, dataTabletSrc, dataDesktopSrc} = this.props;
        this.src = this.getImageByViewPort(dataMobileSrc, dataTabletSrc, dataDesktopSrc);

    }
    deviceDetector() {
        // var ua = window.navigator.userAgent.toLowerCase();
        // var detect = (function (s) {
        //     if (s === undefined) s = ua;
        //     else ua = s.toLowerCase();
        //     if (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(ua))
        //         return 'tablet';
        //     else
        //         if (/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(ua))
        //             return 'phone';
        //         else return 'desktop';
        // });
        // return {
        //     device: detect(),
        //     detect: detect,
        //     isMobile: ((detect() != 'desktop') ? true : false),
        //     userAgent: ua
        // };
        return {
            device: 'desktop',
           
        };
    }
    getImageByViewPort = (dataMobileSrc, dataTabletSrc, dataDesktopSrc) => {
        console.log("this.device",this.deviceType.device);
        switch (this.deviceType.device) {
            case "desktop":
                return dataDesktopSrc || "";
                break;
            case "tablet":
                return dataTabletSrc || dataDesktopSrc || "";
                break;
            case "mobile":
                return dataMobileSrc || dataDesktopSrc || "" ;
                break;
            default:
                return dataDesktopSrc|| "";
        }
    }
    render() {
        const { className, style, unloadedSrc, alt, dataMobileSrc, dataTabletSrc, dataDesktopSrc } = this.props;
        if(!dataMobileSrc && !dataTabletSrc && !dataDesktopSrc){
            return null;
        }
        if (this.state.error) {
            return <img
                className={className}
                style={style}
                src={unloadedSrc || ""}
                alt={alt} />
        } else if (!this.state.loaded) {
            return <img
                className={className}
                style={style}
                src={unloadedSrc || ""}
                alt={alt} />
        }
        return <img
            className={className}
            style={style}
            src={this.src || ""}
            alt={alt} />
    }
}


