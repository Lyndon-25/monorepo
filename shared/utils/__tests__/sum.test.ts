import { sum } from '../'

describe('sum 函数', () => {
    it('正确计算两个正数的和', () => {
        expect(sum(2, 3)).toBe(5);
    });

    it('正确处理正负数的加法', () => {
        expect(sum(5, -3)).toBe(2);
    });

    it('正确处理浮点数的加法', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it('边界值测试: 最大安全整数', () => {
        const maxSafe = Number.MAX_SAFE_INTEGER;
        expect(sum(maxSafe, 1)).toBe(maxSafe + 1);
    });
});