class MyWebpackPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('MyWebpackPlugin', (compilation, callback) => {
            console.log('MyWebpackPlugin is working!');
            callback();
        });
    }
}

module.exports = MyWebpackPlugin;