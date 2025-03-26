import MyWebpackPlugin from '../src/index';

describe('MyWebpackPlugin', () => {
    let plugin;

    beforeEach(() => {
        plugin = new MyWebpackPlugin();
    });

    it('should be defined', () => {
        expect(plugin).toBeDefined();
    });

    it('should have an apply method', () => {
        expect(typeof plugin.apply).toBe('function');
    });
});