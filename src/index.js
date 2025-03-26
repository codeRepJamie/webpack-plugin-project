class MyWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('MyWebpackPlugin', (compilation, callback) => {
      console.log('MyWebpackPlugin is working!');
      // Ensure the callback is called even if no files are emitted
      if (typeof callback === 'function') {
        callback();
      }
    });
  }
}

export default MyWebpackPlugin;