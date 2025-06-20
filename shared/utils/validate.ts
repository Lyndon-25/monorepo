/**
 * 验证手机号码格式（中国）
 * @param phone 待验证的手机号码
 * @returns 是否有效的手机号码
 */
export const validatePhone = (phone: string): boolean => {
    const re = /^1[3-9]\d{9}$/;
    return re.test(phone);
};

/**
 * 验证邮箱格式
 * @param email 待验证的邮箱字符串
 * @returns 是否有效的邮箱
 */
export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};