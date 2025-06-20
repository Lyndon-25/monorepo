import { validateEmail, validatePhone } from '../validate';

describe('validateEmail 函数', () => {
    it('验证有效的邮箱地址', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('user.name+tag@domain.co.uk')).toBe(true);
    });

    it('拒绝无效的邮箱地址', () => {
        expect(validateEmail('invalid-email')).toBe(false);
        expect(validateEmail('test@')).toBe(false);
        expect(validateEmail('test@domain')).toBe(false);
        expect(validateEmail('test@domain.')).toBe(false);
    });

    it('处理边界情况', () => {
        expect(validateEmail('')).toBe(false);
        expect(validateEmail('a@b.c')).toBe(true);
    });
});

describe('validatePhone 函数', () => {
    it('验证有效的中国手机号码', () => {
        expect(validatePhone('13800138000')).toBe(true);
        expect(validatePhone('15112345678')).toBe(true);
    });

    it('拒绝无效的手机号码', () => {
        expect(validatePhone('12345678901')).toBe(false); // 无效前缀
        expect(validatePhone('1380013800')).toBe(false);  // 位数不足
        expect(validatePhone('138001380000')).toBe(false); // 位数过多
        expect(validatePhone('abc')).toBe(false);
    });

    it('处理边界情况', () => {
        expect(validatePhone('')).toBe(false);
        expect(validatePhone('10000000000')).toBe(false); // 无效号码段
    });
});