// Colors:
var bodyStyles = window.getComputedStyle(document.body);

const colorDark =  bodyStyles.getPropertyValue("--dark");
const colorMid =   bodyStyles.getPropertyValue("--mid");
const colorLight = bodyStyles.getPropertyValue("--light");
const colorAccent =   bodyStyles.getPropertyValue("--accent");
const cookiesPopupColors = {
        "popup": {
            "background":colorDark,
            "text":colorLight,
            "border":"transparent"
        },
        "button":
            {"background":colorLight,
            "text":colorMid
        }
    };