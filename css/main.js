import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#fff",
        "fontFamily": "'Open Sans', sans-serif",
        "lineHeight": 21,
        "fontSize": 13,
        "color": "#6a737b"
    },
    "ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "figure": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "a": {
        "color": "#A3A3A3",
        "WebkitTransition": "all .3s ease-in 0s",
        "MozTransition": "all .3s ease-in 0s",
        "MsTransition": "all .3s ease-in 0s",
        "OTransition": "all .3s ease-in 0s",
        "transition": "all .3s ease-in 0s",
        "textDecoration": "none",
        "outline": 0
    },
    "iframe": {
        "border": 0
    },
    "a:focus": {
        "textDecoration": "none",
        "outline": 0,
        "color": "#FBDB0C"
    },
    "a:hover": {
        "textDecoration": "none",
        "outline": 0,
        "color": "#FBDB0C"
    },
    "h1": {
        "fontWeight": "normal",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h2": {
        "fontWeight": "normal",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h3": {
        "fontWeight": "normal",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h4": {
        "fontWeight": "normal",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h5": {
        "fontWeight": "normal",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h6": {
        "fontWeight": "normal",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "clear:before": {
        "content": " ",
        "display": "table"
    },
    "clear:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "clear": {
        "Zoom": 1
    },
    "spancolor": {
        "color": "#FBDB0C"
    },
    "body > section": {
        "paddingTop": 70,
        "paddingRight": 0,
        "paddingBottom": 70,
        "paddingLeft": 0
    },
    "footer": {
        "paddingTop": 70,
        "paddingRight": 0,
        "paddingBottom": 70,
        "paddingLeft": 0,
        "backgroundColor": "#494949",
        "borderTop": "5px solid #7A7A7A",
        "color": "#fff"
    },
    "sec-title": {},
    "sec-title h2": {
        "color": "#6a737b",
        "fontSize": 28,
        "fontWeight": "800",
        "textTransform": "uppercase"
    },
    "sec-sub-title": {
        "marginTop": 35,
        "marginRight": 0,
        "marginBottom": 45,
        "marginLeft": 0
    },
    "sec-sub-title p": {
        "fontWeight": "600",
        "lineHeight": 24,
        "fontSize": 18,
        "color": "#5b646e"
    },
    "devider": {
        "marginTop": 30
    },
    "devider i": {
        "color": "#cccccc"
    },
    "devider:before": {
        "content": "______________________",
        "color": "#e6e8ea",
        "position": "relative",
        "bottom": 6,
        "right": 10
    },
    "devider:after": {
        "content": "______________________",
        "color": "#e6e8ea",
        "position": "relative",
        "bottom": 6,
        "left": 10
    },
    "mb50": {
        "marginBottom": 50
    },
    "preloader": {
        "backgroundColor": "#fff",
        "height": "100%",
        "position": "fixed",
        "width": "100%",
        "zIndex": 1100
    },
    "preloader > img": {
        "left": "47%",
        "position": "absolute",
        "top": "48%"
    },
    "navigation": {
        "backgroundColor": "rgba(16, 22, 54, 0.2)",
        "border": "0 none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "WebkitTransition": "background-color 800ms linear",
        "MozTransition": "background-color 800ms linear",
        "MsTransition": "background-color 800ms linear",
        "OTransition": "background-color 800ms linear",
        "transition": "background-color 800ms linear"
    },
    "navbar-toggle i": {
        "color": "#4C4C4C"
    },
    "navbar-brand": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "navbar-nav li a": {
        "borderTop": "1px solid transparent"
    },
    "navbar-nav li acurrent": {
        "backgroundColor": "transparent",
        "borderTop": "1px solid #A3A3A3",
        "color": "#4C4C4C"
    },
    "navbar-nav li a:focus": {
        "backgroundColor": "transparent",
        "borderTop": "1px solid #A3A3A3",
        "color": "#4C4C4C"
    },
    "navbar-nav li a:hover": {
        "backgroundColor": "transparent",
        "borderTop": "1px solid #A3A3A3",
        "color": "#4C4C4C"
    },
    "slider": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "slider carousel-inner item": {
        "backgroundSize": "cover"
    },
    "carousel-caption": {
        "top": "50%"
    },
    "carousel-caption h2": {
        "fontSize": 62,
        "fontWeight": "300"
    },
    "carousel-caption h2 span": {
        "fontWeight": "800"
    },
    "carousel-caption h3": {
        "fontSize": 48,
        "fontWeight": "300",
        "marginTop": 6,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "carousel-caption p": {
        "color": "#fff",
        "fontSize": 18,
        "fontWeight": "300"
    },
    "carousel-caption p:before": {
        "color": "#FBDB0C",
        "content": "___",
        "position": "relative",
        "top": -8,
        "right": 20
    },
    "carousel-caption p:after": {
        "color": "#FBDB0C",
        "content": "___",
        "position": "relative",
        "top": -8,
        "left": 20
    },
    "social-links": {
        "marginTop": "5%"
    },
    "social-links li": {
        "display": "inline-block"
    },
    "social-links li a": {
        "color": "rgba(255, 255, 255, 0.3)",
        "display": "block",
        "marginTop": 0,
        "marginRight": 6,
        "marginBottom": 0,
        "marginLeft": 6
    },
    "social-links li a:hover": {
        "color": "#fff"
    },
    "carousel-indicators": {
        "bottom": 10,
        "left": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "right": 30,
        "top": "49%",
        "width": 0
    },
    "carousel-indicators li": {
        "border": "1px solid rgba(255, 255, 255, 0.3)",
        "height": 8,
        "width": 8
    },
    "carousel-indicators active": {
        "height": 8,
        "width": 8
    },
    "features": {
        "backgroundColor": "#f4f7f9"
    },
    "owl-controls": {
        "bottom": -45,
        "marginTop": 10,
        "position": "relative",
        "textAlign": "center"
    },
    "owl-controls owl-page": {
        "display": "inline-block"
    },
    "owl-controls owl-page span": {
        "border": "1px solid #C7CED3",
        "borderRadius": 20,
        "display": "block",
        "height": 8,
        "marginTop": 5,
        "marginRight": 4,
        "marginBottom": 5,
        "marginLeft": 4,
        "width": 8
    },
    "owl-controls owl-pageactive span": {
        "background": "#062033",
        "border": 0
    },
    "service-icon": {
        "border": "1px solid #262626",
        "borderRadius": "50%",
        "color": "#262626",
        "float": "left",
        "paddingTop": 10,
        "paddingRight": 13,
        "paddingBottom": 10,
        "paddingLeft": 13
    },
    "service-desc": {
        "marginLeft": 70,
        "position": "relative",
        "top": 5
    },
    "service-desc h3": {
        "color": "#062033",
        "fontSize": 20,
        "fontWeight": "600",
        "marginBottom": 25
    },
    "work-filter": {
        "marginBottom": 35
    },
    "work-filter ul li": {
        "display": "inline-block"
    },
    "work-filter ul li a": {
        "color": "#062033",
        "display": "block",
        "fontSize": 14,
        "fontWeight": "700",
        "paddingTop": 5,
        "paddingRight": 17,
        "paddingBottom": 5,
        "paddingLeft": 17,
        "borderRadius": 6,
        "textTransform": "capitalize"
    },
    "work-filter ul li a:hover": {
        "backgroundColor": "#A3A3A3",
        "borderRadius": 6,
        "color": "#fff",
        "paddingTop": 5,
        "paddingRight": 17,
        "paddingBottom": 5,
        "paddingLeft": 17
    },
    "work-filter ul li aactive": {
        "backgroundColor": "#A3A3A3",
        "borderRadius": 6,
        "color": "#fff",
        "paddingTop": 5,
        "paddingRight": 17,
        "paddingBottom": 5,
        "paddingLeft": 17
    },
    "mix": {
        "display": "none"
    },
    "work-item": {
        "float": "left",
        "width": "25%",
        "position": "relative"
    },
    "work-item > img": {
        "display": "block",
        "height": "auto",
        "maxWidth": "100%"
    },
    "overlay": {
        "backgroundColor": "rgb(251,219,12)",
        "textAlign": "center",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "color": "#A3A3A3",
        "opacity": 0,
        "filter": "alpha(opacity=0)",
        "WebkitTransition": "all 450ms ease-out 0s",
        "MozTransition": "all 450ms ease-out 0s",
        "OTransition": "all 450ms ease-out 0s",
        "transition": "all 450ms ease-out 0s",
        "WebkitTransform": "rotateY(180deg) scale(0.5,0.5)",
        "MozTransform": "rotateY(180deg) scale(0.5,0.5)",
        "MsTransform": "rotateY(180deg) scale(0.5,0.5)",
        "OTransform": "rotateY(180deg) scale(0.5,0.5)",
        "transform": "rotateY(180deg) scale(0.5,0.5)"
    },
    "work-item:hover overlay": {
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "WebkitTransform": "rotateY(0deg) scale(1,1)",
        "MozTransform": "rotateY(0deg) scale(1,1)",
        "MsTransform": "rotateY(0deg) scale(1,1)",
        "OTransform": "rotateY(0deg) scale(1,1)",
        "transform": "rotateY(0deg) scale(1,1)"
    },
    "work-item overlay a": {
        "border": "1px solid #fff",
        "borderRadius": "50%",
        "display": "inline-block",
        "marginTop": "20%",
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10
    },
    "work-item overlay a:hover": {
        "color": "#fff"
    },
    "work-item overlay h4": {
        "fontSize": 18,
        "fontWeight": "700",
        "lineHeight": 24,
        "marginTop": 25,
        "marginRight": 0,
        "marginBottom": 8,
        "marginLeft": 0
    },
    "work-item overlay p": {
        "fontSize": 14,
        "lineHeight": 24
    },
    "member-thumb": {
        "width": 273,
        "position": "relative"
    },
    "member-thumb overlay h5": {
        "fontSize": 16,
        "fontWeight": "700",
        "lineHeight": 24,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "member-thumb overlay": {
        "fontSize": 16,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "lineHeight": 24
    },
    "team-member h4": {
        "color": "#062033",
        "fontSize": 18,
        "fontWeight": "600",
        "lineHeight": 24,
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 8,
        "marginLeft": 0
    },
    "member-thumb:hover overlay": {
        "cursor": "pointer",
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "WebkitTransform": "rotateY(0deg) scale(1,1)",
        "MozTransform": "rotateY(0deg) scale(1,1)",
        "MsTransform": "rotateY(0deg) scale(1,1)",
        "OTransform": "rotateY(0deg) scale(1,1)",
        "transform": "rotateY(0deg) scale(1,1)"
    },
    "team-member:hover h4": {
        "color": "#A3A3A3"
    },
    "team-member social-links": {
        "marginTop": "24%"
    },
    "team-member social-links li a": {
        "backgroundColor": "#515151",
        "color": "#fff",
        "height": 42,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 42
    },
    "facts": {
        "backgroundImage": "url(\"../img/parallax/city.jpg\")",
        "backgroundColor": "rgba(6,32,51,.8)",
        "backgroundAttachment": "fixed !important",
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "facts devider:before": {
        "color": "#737C85"
    },
    "facts devider:after": {
        "color": "#737C85"
    },
    "facts devider i": {
        "color": "#fff"
    },
    "parallax-overlay": {
        "backgroundColor": "rgba(6,32,51,.8)",
        "paddingTop": 70,
        "paddingRight": 0,
        "paddingBottom": 70,
        "paddingLeft": 0
    },
    "counters-item": {
        "color": "#fff"
    },
    "counters-item i": {
        "border": "1px solid #737C85",
        "borderRadius": "50%",
        "color": "#fff",
        "display": "inline-block",
        "height": 120,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 35,
        "marginLeft": 0,
        "paddingTop": 40,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 120
    },
    "counters-item strong": {
        "display": "block",
        "fontSize": 60,
        "fontWeight": "600",
        "lineHeight": 60
    },
    "counters-item p": {
        "fontSize": 18,
        "lineHeight": 24,
        "marginTop": 15,
        "textTransform": "uppercase"
    },
    "contact": {
        "paddingBottom": 0
    },
    "contact-address h3": {
        "color": "#062033",
        "fontSize": 22,
        "lineHeight": 32,
        "marginBottom": 25
    },
    "contact-address p": {
        "lineHeight": 24
    },
    "contact-form": {},
    "contact-form h3": {
        "color": "#062033",
        "fontSize": 24,
        "fontWeight": "700",
        "lineHeight": 32,
        "marginBottom": 25
    },
    "contact-form input-group": {
        "width": "100%"
    },
    "contact-form form-control": {
        "borderColor": "-moz-use-text-color -moz-use-text-color #cccccc",
        "borderRadius": 0,
        "borderStyle": "none none solid",
        "borderWidth": "0 0 1px",
        "boxShadow": "none",
        "marginBottom": 10
    },
    "contact-form input-field": {
        "width": "48%",
        "float": "left",
        "marginRight": "4%"
    },
    "contact-form input-field:last-child": {
        "marginRight": 0
    },
    "contact-form form-controlerror": {
        "borderBottomColor": "#c0392b"
    },
    "labelerror": {
        "color": "#c0392b",
        "fontWeight": "normal",
        "textTransform": "capitalize"
    },
    "contact-form form-submit": {
        "background": "url(\"../img/envelop.png\") no-repeat scroll 0 15px transparent",
        "border": "0 none",
        "color": "#000",
        "fontSize": 16,
        "lineHeight": 24,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "textAlign": "right",
        "width": 150
    },
    "footer-social": {
        "marginTop": 17
    },
    "footer-social li a": {
        "color": "#7A7A7A",
        "display": "block",
        "marginBottom": 10
    },
    "map_canvas": {
        "height": 215,
        "width": "100%"
    },
    "footer a:hover": {
        "color": "#FBDB0C"
    },
    "footer h6": {
        "fontSize": 14,
        "fontWeight": "700",
        "lineHeight": 24,
        "marginBottom": 30
    },
    "about-us p": {
        "lineHeight": 24
    },
    "footer-single subscribe": {
        "marginBottom": 15,
        "position": "relative"
    },
    "subscribe subscribe": {
        "backgroundColor": "transparent",
        "border": "2px solid #fff",
        "borderRadius": 2,
        "height": 40,
        "textIndent": 10,
        "width": "100%"
    },
    "subscribe subs": {
        "backgroundColor": "transparent",
        "border": "0 none",
        "fontSize": 24,
        "position": "absolute",
        "right": 0,
        "top": 6
    },
    "footer-single": {
        "lineHeight": 24
    },
    "footer-single ul": {},
    "footer-single li": {
        "lineHeight": 32
    },
    "footer-single p i": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 10
    },
    "credit a": {
        "color": "#7A7A7A"
    },
    "credit a:hover": {
        "color": "#fff"
    },
    "copyright": {
        "color": "#fff",
        "marginTop": 100
    },
    "back-top": {
        "bottom": 20,
        "position": "fixed",
        "right": 25,
        "zIndex": 9
    }
});