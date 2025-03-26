import webpack from 'webpack';
import MemoryFs from 'memory-fs';
import MyWebpackPlugin from '../src/index';

describe('MyWebpackPlugin Integration Tests', () => {
  it('should call the emit hook and log a message', (done) => {
    const mockCompiler = webpack({
      mode: 'development',
      entry: './src/index.js',
      output: {
        path: '/dist',
        filename: 'bundle.js',
      },
      plugins: [new MyWebpackPlugin()],
    });

    const memoryFs = new MemoryFs();
    mockCompiler.outputFileSystem = memoryFs;

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

    mockCompiler.run((err, stats) => {
      expect(err).toBeNull();
      expect(stats.hasErrors()).toBe(false);
      expect(consoleSpy).toHaveBeenCalledWith('MyWebpackPlugin is working!');
      consoleSpy.mockRestore();
      done();
    });
  });
});
// Add more tests to validate the plugin's functionality