import * as utils from '../index';

describe('utils 导出模块', () => {
    it('正确导出 sum 函数', () => {
        expect(typeof utils.sum).toBe('function');
        expect(utils.sum(1, 2)).toBe(3);
    });

    it('正确导出 validateEmail 函数', () => {
        expect(typeof utils.validateEmail).toBe('function');
        expect(utils.validateEmail('test@example.com')).toBe(true);
    });

    it('正确导出 validatePhone 函数', () => {
        expect(typeof utils.validatePhone).toBe('function');
        expect(utils.validatePhone('13800138000')).toBe(true);
    });
});