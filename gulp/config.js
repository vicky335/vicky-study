module.exports = function() {
    var paths = '.';
    var config = {
        paths: paths,
        css: paths + '/css',
        getCssfile: function() {
            return this.css + '/**/*.css';
        },
        sass: paths + '/sass',
        getSassfile: function() {
            return this.sass + '/**/*.{sass,scss}';
        },
        images: paths + '/images',
        getImagesfile: function() {
            return this.images + '/**/*.*';
        },
        svg: paths + '/images/sprites',
        getSvgfile: function() {
            return this.svg + '/**/*.svg';
        },
        getIconSvgfile: function() {
            return this.svg + '/icon/**/*.svg';
        },
        png: paths + '/images/sprites',
        getPngfile: function() {
            return this.png + '/**/*.png';
        },
        getIconPngfile: function() {
            return this.png + '/icon/**/*.png';
        },
        js: paths + '/js',
        getJsfile: function() {
            return this.js + '/**/*.js';
        },
        html: '../app/views',
        getHtmlfile: function() {
            return this.html + '/**/*.*';
        }
    };
    return config;
};