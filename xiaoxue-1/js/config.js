/**
 * 程序配置
 */
require.config({
    baseUrl: 'js/',
    paths: {
        'jquery': 'vendors/jquery/jquery.min',
        'utils': 'modules/common/utils'
    },
    shim: {
        artDialog:{
            deps: [ 'jquery'],
            exports: 'dialog'
        }
    }
});
